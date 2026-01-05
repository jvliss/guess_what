from numba import jit, prange
from numba.extending import get_cython_function_address
import scipy.stats as stats
import numpy as np
import ctypes
import bayesflow as bf

addr_levy= get_cython_function_address("levy_noise", "levy_noise")
functype = ctypes.CFUNCTYPE(ctypes.c_double, ctypes.c_double, ctypes.c_double)
levy_noise = functype(addr_levy)

def levy_prior(fix_alpha, fix_st0, fix_szr, fix_sv, batch_size):
    #Nondecision time 
    #Lerche et al. (2020): M=1628, SD=1207, min=0, max=5794
    #Lerche & Voss (2017): M=2855, SD=2622
    mean_t0 = 3
    std_t0 = 2.5
    clip_a_t0 = .72
    clip_b_t0 = 15.0
    a_t0, b_t0 = (clip_a_t0 - mean_t0) / std_t0, (clip_b_t0 - mean_t0) / std_t0
    t0 = stats.truncnorm.rvs(loc=mean_t0, scale=std_t0, a=a_t0, b=b_t0, size=batch_size)

    #Intertrial variability of nondecision time
    st0 = np.random.uniform(0.0, clip_a_t0*2, size=batch_size)

    #Drift rates
    #Lerche et al. (2020): M=0.70, SD=0.22, min=0.15, max=1.30
    v0 = np.random.uniform(-2.0, 0.5, size=batch_size)
    v1 = np.random.uniform(-0.5, 2.0, size=batch_size) 

    #Threshold seperation
    #Lerche et al. (2020): M=4.00, SD=1.53, min=1.21, max=10.00
    a = np.random.uniform(0.2, 8.0, size=batch_size) 

    #Relative starting point
    mean_zr = 0.5
    std_zr = 0.25
    clip_a_zr = 0.2
    clip_b_zr = 0.8
    a_zr, b_zr = (clip_a_zr - mean_zr) / std_zr, (clip_b_zr - mean_zr) / std_zr
    zr = stats.truncnorm.rvs(loc=mean_zr, scale=std_zr, a=a_zr, b=b_zr, size=batch_size)

    #Stability parameter
    if fix_alpha:
        alpha = np.repeat(2.0, repeats=batch_size)
    else:
        alpha = np.random.uniform(1.0, 2.0, size=batch_size)
        
    #Intertrial variability of relative starting point
    #Voss et al. (2019): M=0.39, SD=0.19
    if fix_szr:
        szr = np.repeat(0.0, repeats=batch_size)
    else:
        clip_high_szr = 0.5
        szr = np.random.uniform(0.0, clip_a_zr*2, size=batch_size)

    #Intertrial variability of drift rate
    #Voss et al. (2019): M=0.55, SD=0.39 (v: M=0.91; SD=0.26)
    if fix_sv:
        sv = np.repeat(0.0, repeats=batch_size)
    else:
        sv = np.random.uniform(0.0, 1.0, size=batch_size)

    p_samples = np.c_[t0, st0, zr, v0, v1, a, alpha, szr, sv]
    
    return p_samples.astype(np.float32)

@jit(nopython=True)
def generate_condition_matrix(num_obs, num_conditions=2):
    obs_per_condition = int(np.ceil(num_obs / num_conditions))
    condition = np.arange(num_conditions)
    condition = np.repeat(condition, obs_per_condition)
    return condition[:num_obs]

@jit(nopython=True)
def diffusion_trial(v, a, ndt, sndt, zr, alpha,
                   szr, sv, deadline):
    n_steps = 0.0
    dt = 0.001
    max_steps = 10000
    
    ndt = ndt - 0.5*sndt + sndt * np.random.uniform(0, 1) 
    zr = zr - 0.5*szr + szr * np.random.uniform(0, 1) 
    v = v + sv * np.random.normal()
    x = a * zr
    
    while (x > 0 and x < a and n_steps < max_steps):
        x += v*dt + levy_noise(alpha, dt)
        n_steps += 1.0

    rt = n_steps * dt
    rt = rt + ndt if x > 0. else -rt - ndt

    if deadline:     
        if abs(rt) > 0.500:
                rt = 0
    return rt
    
@jit(nopython=True)
def ddm_simulator(theta, n_obs, deadline):
    design_matrix = generate_condition_matrix(n_obs, 2)
    v = theta[3:5]
    out = np.zeros(n_obs)
    
    for n in range(n_obs):
        out[n] = diffusion_trial(v[design_matrix[n]], a=theta[5], ndt=theta[0],sndt=theta[1], zr=theta[2], alpha=theta[6], szr=theta[7], sv=theta[8], deadline=deadline)

    rts = np.expand_dims(out, 1)
    condition_labels = design_matrix.reshape(-1, 1)
    rts_with_labels = np.hstack((rts, condition_labels))

    return rts_with_labels

def batch_simulator(prior_samples, deadline=False, n_obs=None): 
    if not n_obs: 
        n_obs = random_num_obs()
    n_sim = prior_samples.shape[0]
    sim_data = np.empty((n_sim, n_obs, 2), dtype=np.float32)

    for i in range(n_sim):
        sim_data[i] = ddm_simulator(prior_samples[i], n_obs, deadline)
    
    return sim_data

def random_num_obs(min_obs=300, max_obs=352):
    return np.random.randint(low=min_obs, high=max_obs + 1)
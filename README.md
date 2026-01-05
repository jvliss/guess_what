[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Python 3.10](https://img.shields.io/badge/Python-3.10-blue.svg)](https://www.python.org/)
[![BayesFlow](https://img.shields.io/badge/BayesFlow-1.1.4-blue)](https://bayesflow.org/)

---

## Project Overview

This repository contains materials, data, scripts, and analysis pipelines associated with the manuscript  
“**Guess What! Assessing the Psychological Meaning of the Stability Parameter in the Lévy-Flight Model**.”

This project examines whether the stability parameter (α) in the Lévy-flight model (Voss et al., 2019) reflects **guessing**. Across two experiments (*N*<sub>total</sub> = 388), we provide converging experimental and correlational evidence for this interpretation, positioning α as both a theoretically meaningful construct and a methodological tool for improving data quality in cognitive research.

---

## Repository Structure

```
├── 1_experiment_scripts/    # PsychoPy/PsychoJS experiments and SoSci Survey files
│   ├── psychopy/           # Study 1 & 2 experiment definitions (.psyexp, .js)
│   └── sosci/              # Questionnaire exports and codebooks (.xml, .pdf)
│
├── 2_simulators/           # BayesFlow model comparison and parameter estimation
│   ├── *.ipynb             # Main analysis notebooks
│   ├── checkpoint_*/       # Trained neural network checkpoints
│   └── mvct/               # Data, estimates, figures, and validation files
│
└── 3_R/                    # Statistical analyses (frequentist & Bayesian)
    ├── gw_analyses.Rmd
    └── gw_analyses.html
```

---

## Data and Outputs

### Behavioral Data
Located in `2_simulators/mvct/behav_demo_data/`:
- Raw data in `raw/` including `mvct_raw_data_variables_explained.xlsx` (variable codebook)
- Preprocessed data in `prepared1/` and `prepared2/`

### Key Outputs

- **Estimates**: `2_simulators/mvct/estimates_*/`
- **Figures**: `2_simulators/mvct/figures/` 
- **Statistical Results**: `3_R/gw_analyses.html`

---

## Getting Started

### Requirements

- Python 3.10
- Key dependencies: `numpy`, `scipy`, `pandas`, `matplotlib`, `seaborn`, `tensorflow`, `bayesflow`, etc.
- See `dependencies.txt` for full details.
> **Note**: To run the notebooks that simulate or fit the Lévy-flight model, ensure that the Cython module `levy_noise` is properly compiled (instructions in `my_setup.py`).

### Running the Analysis

1. **Model Comparison**: Open `2_simulators/mod_comp_mvct.ipynb`
2. **Parameter Estimation**: Open `2_simulators/param_estim_mvct.ipynb`
3. **Statistical Analysis**: View `3_R/gw_analyses.html` or run the `.Rmd` file in R

---

## Citation

If you use (parts of) this repository, please consider citing the associated manuscript (once published) and/or relevant papers, e.g.,

- Peirce, J., Gray, J. R., Simpson, S., MacAskill, M., Höchenberger, R., Sogo, H., Kastman, E., & Lindeløv, J. K. (2019). PsychoPy2: Experiments in behavior made easy. *Behavior Research Methods*, *51*(1), 195–203. https://doi.org/10.3758/s13428-018-01193-y
- Radev, S. T., Mertens, U. K., Voss, A., Ardizzone, L., & Kothe, U. (2022). BayesFlow: Learning complex stochastic models with invertible neural networks. *IEEE Transactions on Neural Networks and Learning Systems*, *33*(4), 1452–1466. https://doi.org/10.1109/TNNLS.2020.3042395
- Radev, S. T., Schmitt, M., Schumacher, L., Elsemüller, L., Pratz, V., Schälte, Y., Köthe, U., & Bürkner, P.-C. (2023). *BayesFlow: Amortized Bayesian workflows with neural networks*. arXiv. https://doi.org/10.48550/arXiv.2306.16015

---

## Support

This research was supported by the Baden-Württemberg Stiftung through the “Eliteprogramm für Postdoktorandinnen und Postdoktoranden” (Elite Program for Postdoctoral Researchers) as well as by a grant from the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) to Veronika Lerche (Grant Nr. LE 4379/4-1).

---
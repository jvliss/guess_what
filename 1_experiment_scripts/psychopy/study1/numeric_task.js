/********************* 
 * Numeric_Task *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'numeric_task';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
var groups = ["control", "guess"]
var group = "control";
console.log("group:", group)

var safari = false;
var opera = false;
var browser_name;
var browser_version;


function isFullscreen(){
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);
        return isInFullScreen
}


var browser_name;
var browser_version;
function isBrowserUpToDate() {
  var userAgent = navigator.userAgent;

  // Check if the browser is Chrome
  if (/Chrome\/(\d+)/.test(userAgent)) {
    // Get the version number of Chrome
    var version = parseInt(RegExp.$1);
    browser_name = "Chrome";
    // Check if the version of Chrome is at least 109
    if (version >= 109) {
      return true;
    }
  }
  // Check if the browser is Firefox
  else if (/Firefox\/(\d+)/.test(userAgent)) {
    // Get the version number of Firefox
    var version = parseInt(RegExp.$1);
    browser_name = "Firefox";
    // Check if the version of Firefox is at least 102
    if (version >= 102) {
      return true;
    }
  }
  // Check if the browser is Safari
  else if (/^Mozilla\/5.0 \(.+?\) AppleWebKit\/(\d+)\./.test(userAgent)) {
    safari = true;
    // Get the version number of Safari
    var version = parseInt(RegExp.$1);
    browser_name = "Safari";
    // Check if the version of Safari is at least 16
    if (version >= 16) {
      return true;
    }
  }
  // Check if the browser is Edge
  else if (/Edg\/(\d+)/.test(userAgent)) {
    // Get the version number of Edge
    var version = parseInt(RegExp.$1);
    browser_name = "Edge";
    // Check if the version of Edge is at least 110
    if (version >= 110) {
      return true;
    }
  }

  // The browser is not up to date
  browser_version = version;
  return false;
}
var browser_check 
var userAgent


var text_out = ""
var text_out_time = 0
var block_i = -1;
var trial_i = 0;
var ITI_length = 0.3;
var feedback_length = 1.2; 
var colour_false = [0.7255, -0.8431, -0.5294]
var colour_correct = [-1.0000, 0.0039, -1.0000]
var block_nr = "1st"
var smaller = "<\u00A0500";
var larger = ">\u00A0500";

var guess_instruction = "Please take an EDUCATED GUESS. This means that you should choose the answer that seems most probable at first glance, even without complete certainty of its correctness."
var control_instruction = "Please only select an answer once you feel FULLY CONFIDENT about your choice."
var guess_instruction_1 = "take an EDUCATED GUESS. This means that you should choose the answer that seems most probable at first glance, even without complete certainty of its correctness."
var control_instruction_1 = "only select an answer once you feel FULLY CONFIDENT about your choice."
var instruction = ""
var instruction_1 = ""

var interim_prequ = ""
var interim_header_postqu = "Your Task"
var interim_postqu = "Feel free to take a break now.\n\nPlease continue to stay in fullscreen mode, meaning do NOT exit even during the break."
var interim_footer_postqu = "Please press the spacebar to continue."

var block_stim1 = [];
var block_stim2 = [];
var block_stim3 = [];
var block_stim4 = [];
var block_stim5 = [];
var block_stim6 = [];
var block_stim7 = [];
var block_stim8 = [];
var block_stim9 = [];
var block_stim10 = [];
var block_stim11 = [];
var block_stim12 = [];
var block_stim13 = [];
var block_stim14 = [];
var block_stim15 = [];
var block_stim16 = [];

var stim1 = ''
var stim2 = ''
var stim3 = ''
var stim4 = ''
var stim5 = ''
var stim6 = ''
var stim7 = ''
var stim8 = ''
var stim9 = ''
var stim10 = ''
var stim11 = ''
var stim12 = ''
var stim13 = ''
var stim14 = ''
var stim15 = ''
var stim16 = ''

var stimuli_x_pos1 = ''
var stimuli_y_pos1 = ''
var stimuli_x_pos2 = ''
var stimuli_y_pos2 = ''
var feedback_text = "False!"
var feedback_colour = colour_false
var text_end = 'Thank you for your time.'
var text_end_time = 0
var t_place_fingers = 99999;
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(browser_outRoutineBegin());
flowScheduler.add(browser_outRoutineEachFrame());
flowScheduler.add(browser_outRoutineEnd());
flowScheduler.add(instruction_task_1RoutineBegin());
flowScheduler.add(instruction_task_1RoutineEachFrame());
flowScheduler.add(instruction_task_1RoutineEnd());
flowScheduler.add(instruction_task_2RoutineBegin());
flowScheduler.add(instruction_task_2RoutineEachFrame());
flowScheduler.add(instruction_task_2RoutineEnd());
flowScheduler.add(instruction_practiceRoutineBegin());
flowScheduler.add(instruction_practiceRoutineEachFrame());
flowScheduler.add(instruction_practiceRoutineEnd());
flowScheduler.add(prepRoutineBegin());
flowScheduler.add(prepRoutineEachFrame());
flowScheduler.add(prepRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_trialsLoopBegin(practice_trialsLoopScheduler));
flowScheduler.add(practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopEnd);





flowScheduler.add(premature_endRoutineBegin());
flowScheduler.add(premature_endRoutineEachFrame());
flowScheduler.add(premature_endRoutineEnd());
flowScheduler.add(prepRoutineBegin());
flowScheduler.add(prepRoutineEachFrame());
flowScheduler.add(prepRoutineEnd());
flowScheduler.add(instruction_guessRoutineBegin());
flowScheduler.add(instruction_guessRoutineEachFrame());
flowScheduler.add(instruction_guessRoutineEnd());
flowScheduler.add(instructuon_burn1RoutineBegin());
flowScheduler.add(instructuon_burn1RoutineEachFrame());
flowScheduler.add(instructuon_burn1RoutineEnd());
flowScheduler.add(instruction_burn2RoutineBegin());
flowScheduler.add(instruction_burn2RoutineEachFrame());
flowScheduler.add(instruction_burn2RoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const burn_in_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(burn_in_trialsLoopBegin(burn_in_trialsLoopScheduler));
flowScheduler.add(burn_in_trialsLoopScheduler);
flowScheduler.add(burn_in_trialsLoopEnd);





flowScheduler.add(premature_endRoutineBegin());
flowScheduler.add(premature_endRoutineEachFrame());
flowScheduler.add(premature_endRoutineEnd());
flowScheduler.add(instructions_test1RoutineBegin());
flowScheduler.add(instructions_test1RoutineEachFrame());
flowScheduler.add(instructions_test1RoutineEnd());
flowScheduler.add(instructions_test2RoutineBegin());
flowScheduler.add(instructions_test2RoutineEachFrame());
flowScheduler.add(instructions_test2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);












flowScheduler.add(interim_prequRoutineBegin());
flowScheduler.add(interim_prequRoutineEachFrame());
flowScheduler.add(interim_prequRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);


flowScheduler.add(postquRoutineBegin());
flowScheduler.add(postquRoutineEachFrame());
flowScheduler.add(postquRoutineEnd());
flowScheduler.add(save_datesRoutineBegin());
flowScheduler.add(save_datesRoutineEachFrame());
flowScheduler.add(save_datesRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var setupClock;
var group;
var browser_check;
var userAgent;
var opera;
var stim;
var browser_outClock;
var out;
var continue_info_out;
var continue_border_out;
var instruction_task_1Clock;
var header_border1;
var header_text1;
var info1;
var continue_info1;
var continue_border1;
var key_resp1;
var instruction_task_2Clock;
var header_border1_2;
var header_text1_2;
var info1_2;
var continue_info1_2;
var continue_border1_2;
var key_resp1_2;
var instruction_practiceClock;
var header_border1231;
var header_text1231;
var info1231;
var continue_info1231;
var continue_border1231;
var key_resp1231;
var prepClock;
var countdownClock;
var a_border1;
var l_border1;
var label_a1;
var label_l1;
var a_key1;
var l_key1;
var count5;
var count4;
var count3;
var count2;
var count1;
var fixaion_crossClock;
var a_border_cross;
var l_border_cross;
var label_a_cross;
var label_l_cross;
var a_key_cross;
var l_key_cross;
var fixation_cross_text;
var rt_trialClock;
var a_border_rt;
var l_border_rt;
var label_a_rt;
var label_l_rt;
var a_key_rt;
var l_key_rt;
var stim_1;
var stim_2;
var stim_3;
var stim_4;
var stim_5;
var stim_6;
var stim_7;
var stim_8;
var stim_9;
var stim_10;
var stim_11;
var stim_12;
var stim_13;
var stim_14;
var stim_15;
var stim_16;
var key_resp;
var feedbackClock;
var a_border_fb;
var l_border_fb;
var label_a_fb;
var label_l_fb;
var a_key_fb;
var l_key_fb;
var text_fb;
var ITIClock;
var a_border_rt_2;
var l_border_rt_2;
var label_a_rt_2;
var label_l_rt_2;
var a_key_rt_2;
var l_key_rt_2;
var premature_endClock;
var header_border_end;
var header_text_end;
var end_2;
var continue_info_end;
var continue_border_end;
var instruction_guessClock;
var header_border121;
var header_text121;
var info121;
var continue_info121;
var continue_border121;
var key_resp121;
var instructuon_burn1Clock;
var header_border123123;
var header_text123123;
var info123123;
var continue_info123123;
var continue_border123123;
var key_resp123123;
var instruction_burn2Clock;
var header_border2;
var header_text2;
var info2;
var continue_info2;
var continue_border2;
var key_resp2;
var instructions_test1Clock;
var header_border3;
var header_text3;
var info3;
var continue_info3;
var continue_border3;
var key_resp3;
var instructions_test2Clock;
var header_border4;
var header_text4;
var continue_info4;
var continue_border4;
var key_resp4;
var info4;
var interim_postquClock;
var header_border_postqu;
var header_text_postqu;
var text_postqu;
var continue_postqu;
var continue_border_postqu;
var key_resp_postqu;
var place_fingersClock;
var header_border12;
var header_text12;
var info12;
var continue_info12;
var continue_border12;
var key_resp12;
var interim_prequClock;
var header_border_prequ;
var header_text_prequ;
var text_prequ;
var continue_prequ;
var continue_border_prequ;
var key_resp_prequ;
var qu_i;
var qu_text;
var interim_quClock;
var header_border_qu;
var header_text_qu;
var text_qu;
var continue_qu;
var continue_border_qu;
var key_resp_qu;
var slider;
var postquClock;
var header_border_postqu_2;
var header_text_postqu_2;
var text_postqu_2;
var continue_postqu_2;
var continue_border_postqu_2;
var key_resp_postqu_2;
var save_datesClock;
var da;
var date_start;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  // Run 'Begin Experiment' code from code_6
  //const sel_group = Math.floor(Math.random() * 2);
  //group = groups[sel_group]
  if (((expInfo["participant"] % 2) == 0)) {
      group = groups[0]; //contol
  } else {
      group = groups[0]; //guess
  }
  console.log("group:", group)
  
  browser_check = isBrowserUpToDate();
  userAgent = navigator.userAgent;
  opera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
  
  var screensize = [psychoJS.window.size[0], psychoJS.window.size[1]]
  console.log("screensize", screensize)
  psychoJS.experiment.addData("screensize", screensize);
  
  stim =
      [
    {
      "trial_type": ["practice", "practice", "practice", "practice", "practice", "practice", "practice", "practice"],
      "mean": [550, 550, 450, 550, 450, 450, 550, 450],
      "stim1": [628, 858, 691, 275, 334, 213, 735, 650],
      "stim2": [633, 347, 560, 627, 264, 282, 104, 494],
      "stim3": [318, 882, 346, 542, 532, 265, 539, 203],
      "stim4": [818, 546, 664, 805, 842, 255, 602, 658],
      "stim5": [715, 456, 107, 810, 350, 522, 358, 608],
      "stim6": [515, 105, 425, 897, 600, 823, 790, 181],
      "stim7": [204, 774, 537, 724, 816, 582, 882, 343],
      "stim8": [772, 813, 240, 113, 196, 781, 422, 823],
      "stim9": [141, 108, 330, 784, 204, 219, 402, 194],
      "stim10": [368, 819, 184, 562, 355, 234, 462, 276],
      "stim11": [580, 306, 653, 302, 882, 459, 846, 628],
      "stim12": [756, 695, 615, 716, 339, 339, 232, 708],
      "stim13": [656, 613, 461, 276, 199, 620, 492, 365],
      "stim14": [538, 287, 884, 699, 382, 860, 737, 134],
      "stim15": [458, 324, 385, 319, 245, 642, 554, 581],
      "stim16": [700, 867, 118, 349, 660, 104, 643, 354],
      "x_pos1": [-0.332, -0.184, -0.184, -0.111, 0.7, -0.553, 0.111, -0.184],
      "x_pos2": [-0.258, 0.258, 0.626, -0.553, 0.184, -0.332, -0.626, -0.553],
      "x_pos3": [0.184, 0.258, 0.553, -0.332, 0.553, -0.626, -0.184, 0.7],
      "x_pos4": [-0.037, -0.111, -0.479, -0.111, 0.184, 0.184, -0.111, 0.626],
      "x_pos5": [-0.332, -0.626, 0.7, -0.626, -0.037, 0.037, 0.184, 0.405],
      "x_pos6": [0.7, 0.037, 0.626, -0.553, 0.332, -0.184, -0.037, -0.111],
      "x_pos7": [-0.258, -0.405, -0.626, 0.332, 0.626, -0.258, -0.111, 0.111],
      "x_pos8": [0.332, -0.037, 0.037, 0.7, -0.258, -0.037, -0.479, 0.258],
      "x_pos9": [-0.7, -0.405, 0.553, 0.7, 0.037, -0.7, -0.332, 0.553],
      "x_pos10": [-0.553, 0.479, 0.405, -0.626, 0.258, 0.332, -0.332, -0.7],
      "x_pos11": [0.332, 0.7, -0.332, 0.037, 0.553, 0.626, 0.626, 0.405],
      "x_pos12": [-0.258, 0.626, 0.111, 0.626, -0.626, 0.479, -0.037, 0.037],
      "x_pos13": [0.332, 0.626, -0.553, -0.037, 0.332, 0.111, -0.111, 0.626],
      "x_pos14": [0.037, -0.626, 0.479, -0.7, 0.111, -0.332, -0.111, 0.405],
      "x_pos15": [-0.111, -0.258, -0.037, 0.184, 0.405, -0.111, -0.332, -0.479],
      "x_pos16": [0.626, -0.111, -0.332, 0.037, -0.111, -0.553, -0.184, -0.184],
      "y_pos1": [0.285, -0.21, 0.23, 0.065, -0.265, 0.175, 0.12, 0.285],
      "y_pos2": [0.34, -0.1, 0.175, 0.065, 0.23, 0.23, 0.34, 0.285],
      "y_pos3": [0.01, 0.12, 0.395, 0.285, -0.045, 0.395, -0.1, 0.395],
      "y_pos4": [-0.045, 0.065, 0.285, -0.155, 0.395, -0.1, 0.23, 0.175],
      "y_pos5": [-0.21, -0.045, 0.45, 0.45, 0.175, 0.395, -0.265, -0.265],
      "y_pos6": [0.12, 0.34, 0.065, -0.21, 0.395, -0.265, -0.045, 0.065],
      "y_pos7": [0.285, -0.21, 0.175, 0.395, 0.34, 0.34, -0.1, -0.045],
      "y_pos8": [-0.265, 0.12, -0.21, 0.175, 0.01, 0.285, 0.395, -0.045],
      "y_pos9": [0.285, 0.395, 0.285, 0.285, 0.34, 0.34, -0.1, 0.12],
      "y_pos10": [0.065, -0.21, -0.1, -0.155, -0.1, -0.1, 0.12, -0.045],
      "y_pos11": [0.23, 0.175, -0.155, 0.45, 0.23, -0.155, 0.34, -0.21],
      "y_pos12": [-0.265, -0.1, 0.12, 0.12, -0.21, -0.1, -0.265, -0.155],
      "y_pos13": [-0.045, 0.12, -0.265, 0.23, -0.1, -0.155, 0.34, -0.155],
      "y_pos14": [0.45, -0.265, 0.45, 0.395, 0.395, -0.045, 0.065, 0.45],
      "y_pos15": [0.34, -0.155, 0.23, 0.12, 0.285, -0.155, 0.45, 0.175],
      "y_pos16": [0.01, 0.01, 0.065, 0.065, 0.285, 0.01, -0.045, 0.12],
      "block": [0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      "trial_type": ["burn_in", "burn_in", "burn_in", "burn_in", "burn_in", "burn_in", "burn_in", "burn_in"],
      "mean": [550, 550, 450, 450, 550, 450, 550, 450],
      "stim1": [573, 182, 730, 695, 855, 661, 833, 193],
      "stim2": [378, 868, 349, 809, 799, 608, 403, 208],
      "stim3": [204, 811, 637, 272, 569, 876, 201, 408],
      "stim4": [601, 645, 206, 841, 432, 209, 714, 377],
      "stim5": [720, 123, 157, 665, 424, 110, 611, 205],
      "stim6": [890, 679, 407, 250, 336, 409, 839, 708],
      "stim7": [294, 505, 302, 176, 664, 315, 363, 680],
      "stim8": [439, 354, 803, 277, 360, 687, 722, 131],
      "stim9": [699, 604, 326, 300, 566, 519, 781, 265],
      "stim10": [896, 492, 716, 192, 275, 759, 244, 524],
      "stim11": [849, 616, 834, 588, 174, 186, 538, 875],
      "stim12": [201, 518, 364, 217, 438, 309, 450, 405],
      "stim13": [858, 731, 867, 392, 639, 393, 574, 770],
      "stim14": [172, 747, 159, 308, 833, 597, 402, 357],
      "stim15": [498, 809, 114, 834, 831, 216, 867, 893],
      "stim16": [528, 116, 229, 384, 605, 346, 258, 201],
      "x_pos1": [-0.7, 0.626, -0.479, -0.184, 0.626, 0.405, 0.184, 0.258],
      "x_pos2": [0.184, -0.7, 0.405, -0.479, -0.7, -0.184, 0.405, 0.405],
      "x_pos3": [0.037, -0.332, -0.111, -0.111, -0.037, 0.479, 0.184, -0.037],
      "x_pos4": [-0.037, 0.258, -0.626, 0.037, -0.626, 0.111, 0.332, -0.479],
      "x_pos5": [0.184, 0.553, 0.479, -0.405, 0.332, -0.7, 0.553, 0.626],
      "x_pos6": [0.037, -0.037, -0.479, -0.553, -0.184, 0.405, -0.405, -0.7],
      "x_pos7": [0.184, -0.479, 0.332, -0.258, -0.405, 0.111, -0.184, 0.7],
      "x_pos8": [0.405, -0.626, -0.332, 0.111, 0.479, 0.553, -0.111, -0.479],
      "x_pos9": [0.184, 0.332, -0.111, 0.111, 0.7, -0.553, -0.553, -0.184],
      "x_pos10": [0.405, -0.626, 0.184, 0.184, 0.7, 0.332, -0.184, 0.184],
      "x_pos11": [0.258, 0.184, -0.405, -0.184, 0.405, 0.626, 0.553, -0.405],
      "x_pos12": [-0.553, -0.553, 0.626, -0.184, -0.037, -0.626, -0.184, 0.332],
      "x_pos13": [-0.332, -0.332, 0.332, 0.037, 0.405, -0.184, -0.037, -0.626],
      "x_pos14": [0.258, 0.479, 0.184, -0.037, -0.626, -0.037, 0.332, 0.111],
      "x_pos15": [0.037, -0.037, 0.405, -0.111, 0.7, 0.111, -0.7, -0.258],
      "x_pos16": [0.626, -0.332, 0.111, 0.332, -0.626, -0.553, -0.479, 0.626],
      "y_pos1": [0.34, 0.285, 0.45, 0.01, 0.23, 0.065, 0.175, 0.285],
      "y_pos2": [-0.265, 0.175, -0.155, -0.1, 0.285, 0.45, -0.1, 0.285],
      "y_pos3": [0.34, 0.285, 0.285, 0.175, 0.285, -0.265, 0.285, -0.1],
      "y_pos4": [0.01, 0.34, 0.45, -0.1, 0.12, 0.23, -0.265, 0.23],
      "y_pos5": [0.01, 0.34, 0.01, 0.23, 0.175, 0.285, -0.155, 0.23],
      "y_pos6": [-0.045, -0.1, -0.1, 0.175, -0.1, 0.285, 0.45, 0.395],
      "y_pos7": [0.23, -0.1, 0.45, 0.45, 0.34, -0.265, -0.1, 0.175],
      "y_pos8": [-0.265, 0.395, 0.23, 0.45, -0.21, 0.34, -0.045, -0.1],
      "y_pos9": [0.285, -0.21, -0.21, 0.175, 0.175, 0.065, 0.12, 0.395],
      "y_pos10": [0.065, 0.12, 0.01, -0.155, 0.285, -0.1, 0.01, 0.065],
      "y_pos11": [0.45, 0.065, -0.21, -0.21, -0.21, -0.045, 0.285, 0.395],
      "y_pos12": [-0.265, 0.34, -0.155, 0.175, 0.01, 0.12, -0.265, -0.1],
      "y_pos13": [0.45, 0.065, -0.21, 0.01, 0.45, 0.285, 0.45, 0.45],
      "y_pos14": [-0.045, 0.01, -0.155, 0.45, -0.045, 0.395, 0.285, 0.01],
      "y_pos15": [0.065, 0.01, 0.01, 0.395, 0.01, 0.395, 0.45, 0.01],
      "y_pos16": [-0.045, -0.155, 0.01, 0.01, -0.1, -0.045, -0.045, -0.045],
      "block": [1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      "trial_type": ["warmup", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention"],
      "mean": [550, 450, 450, 450, 550, 550, 550, 550, 450, 550, 550, 450, 450, 550, 450, 550, 450, 550, 550, 800, 450, 450, 450, 450, 450, 450, 550, 450, 550, 550, 550, 550, 450, 550, 450, 550, 450, 550, 550, 200, 550, 450, 550, 450, 550, 550, 450, 550, 450, 550, 200, 550, 550, 450, 450, 450, 450, 550, 550, 550, 550, 450, 450, 450, 550, 550, 550, 450, 450, 450, 550, 550, 450, 450, 450, 800, 550, 450, 450, 450, 550, 550, 550, 450, 550, 550, 450, 550, 450, 450, 450, 550, 450, 200],
      "stim1": [703, 748, 260, 742, 728, 586, 664, 436, 355, 383, 197, 231, 398, 595, 880, 758, 359, 321, 331, 741, 751, 848, 282, 444, 876, 490, 567, 271, 584, 888, 589, 657, 874, 831, 462, 118, 615, 729, 792, 284, 270, 868, 503, 681, 699, 143, 595, 404, 143, 621, 263, 214, 561, 328, 241, 717, 458, 674, 475, 583, 737, 196, 441, 220, 679, 775, 285, 702, 267, 885, 800, 582, 428, 264, 459, 873, 873, 890, 447, 695, 238, 701, 644, 829, 175, 213, 521, 179, 621, 197, 497, 701, 828, 162],
      "stim2": [699, 347, 321, 506, 355, 364, 679, 388, 248, 782, 841, 724, 816, 664, 295, 528, 670, 162, 496, 766, 739, 869, 827, 575, 478, 422, 767, 535, 618, 769, 631, 636, 299, 779, 456, 805, 460, 657, 205, 183, 897, 315, 146, 298, 728, 691, 674, 821, 879, 523, 107, 323, 458, 323, 862, 507, 305, 870, 250, 149, 798, 149, 753, 108, 771, 459, 100, 898, 745, 492, 109, 646, 224, 126, 414, 719, 850, 888, 293, 419, 172, 485, 300, 814, 860, 573, 424, 256, 496, 316, 884, 528, 351, 108],
      "stim3": [104, 201, 709, 363, 103, 273, 492, 834, 416, 520, 618, 844, 219, 114, 265, 490, 195, 283, 795, 869, 294, 488, 361, 451, 606, 211, 734, 326, 508, 282, 402, 304, 213, 649, 627, 835, 838, 731, 353, 218, 843, 249, 693, 784, 563, 677, 349, 721, 308, 897, 213, 467, 349, 724, 131, 234, 804, 407, 407, 827, 861, 141, 155, 163, 530, 357, 718, 389, 510, 398, 274, 772, 193, 112, 297, 724, 372, 235, 834, 674, 786, 668, 844, 634, 213, 887, 563, 813, 549, 215, 183, 768, 285, 206],
      "stim4": [585, 568, 541, 721, 802, 225, 851, 520, 259, 153, 723, 398, 890, 634, 891, 559, 782, 506, 880, 826, 298, 361, 810, 587, 667, 362, 234, 207, 749, 786, 174, 669, 799, 420, 776, 700, 471, 781, 805, 272, 768, 299, 394, 256, 659, 477, 351, 123, 658, 289, 109, 513, 539, 115, 471, 219, 289, 500, 755, 671, 878, 607, 659, 870, 219, 273, 710, 594, 377, 329, 124, 671, 532, 277, 332, 880, 155, 373, 178, 216, 215, 245, 789, 269, 503, 897, 510, 506, 114, 569, 523, 352, 707, 287],
      "stim5": [422, 195, 294, 696, 578, 692, 337, 811, 255, 837, 434, 438, 784, 871, 615, 357, 202, 153, 131, 806, 671, 429, 223, 308, 308, 604, 749, 284, 300, 806, 694, 760, 284, 484, 140, 520, 479, 145, 822, 184, 812, 830, 620, 254, 719, 573, 346, 449, 627, 267, 281, 436, 593, 476, 331, 136, 573, 768, 884, 877, 605, 444, 567, 506, 568, 551, 899, 243, 178, 132, 721, 572, 330, 393, 311, 780, 554, 354, 561, 127, 829, 629, 142, 343, 127, 584, 413, 785, 352, 270, 486, 342, 216, 129],
      "stim6": [154, 676, 817, 319, 650, 813, 143, 140, 455, 641, 378, 691, 729, 389, 151, 341, 248, 772, 806, 753, 130, 369, 641, 222, 403, 861, 683, 433, 306, 735, 746, 754, 386, 856, 254, 333, 427, 162, 158, 202, 597, 718, 783, 427, 815, 528, 616, 211, 557, 520, 247, 331, 332, 647, 115, 177, 530, 140, 186, 413, 116, 378, 223, 888, 752, 496, 816, 454, 238, 858, 846, 125, 453, 891, 184, 781, 782, 519, 591, 500, 654, 715, 454, 272, 877, 606, 277, 558, 649, 372, 793, 787, 537, 252],
      "stim7": [117, 166, 141, 216, 794, 822, 548, 645, 391, 691, 191, 172, 675, 608, 248, 280, 303, 555, 478, 781, 813, 358, 153, 217, 554, 837, 771, 513, 764, 582, 804, 241, 708, 113, 196, 401, 536, 343, 804, 187, 670, 106, 699, 873, 854, 311, 879, 453, 421, 637, 111, 762, 702, 863, 840, 334, 135, 879, 284, 335, 585, 401, 793, 337, 497, 804, 682, 145, 555, 417, 140, 465, 384, 347, 528, 734, 788, 436, 476, 512, 684, 656, 895, 214, 747, 536, 281, 535, 491, 329, 117, 478, 844, 220],
      "stim8": [887, 419, 587, 191, 632, 320, 577, 562, 597, 665, 765, 442, 221, 121, 419, 575, 627, 563, 793, 856, 147, 267, 244, 790, 274, 189, 430, 495, 335, 116, 467, 166, 637, 246, 868, 545, 262, 773, 351, 127, 571, 819, 246, 830, 158, 153, 866, 815, 854, 766, 224, 867, 275, 382, 354, 305, 823, 644, 502, 867, 452, 361, 560, 660, 510, 179, 170, 271, 113, 273, 595, 109, 849, 136, 745, 762, 746, 649, 242, 585, 653, 767, 859, 857, 788, 446, 490, 630, 129, 731, 431, 565, 381, 247],
      "stim9": [714, 128, 886, 422, 513, 862, 786, 554, 467, 632, 574, 572, 308, 533, 847, 621, 617, 698, 225, 716, 844, 307, 508, 824, 377, 744, 521, 876, 646, 521, 267, 532, 164, 578, 513, 875, 216, 838, 307, 230, 149, 341, 772, 185, 348, 811, 267, 728, 196, 163, 191, 485, 101, 375, 735, 128, 387, 175, 710, 630, 786, 437, 303, 326, 253, 528, 481, 201, 869, 625, 725, 180, 885, 237, 341, 757, 119, 252, 446, 270, 587, 171, 676, 408, 548, 245, 363, 263, 313, 831, 139, 622, 314, 165],
      "stim10": [862, 439, 131, 483, 823, 478, 378, 525, 514, 490, 168, 124, 206, 521, 238, 334, 724, 720, 545, 738, 857, 348, 419, 541, 216, 752, 340, 896, 229, 387, 854, 707, 510, 273, 562, 374, 406, 544, 119, 161, 383, 282, 610, 119, 362, 746, 541, 494, 117, 879, 225, 804, 786, 594, 722, 795, 585, 675, 178, 386, 363, 663, 310, 490, 307, 389, 848, 120, 286, 148, 741, 843, 167, 285, 612, 870, 590, 453, 791, 600, 698, 495, 163, 661, 380, 216, 890, 650, 227, 813, 118, 171, 438, 170],
      "stim11": [408, 754, 269, 435, 168, 467, 641, 724, 596, 160, 897, 329, 109, 854, 296, 602, 353, 832, 687, 729, 106, 290, 298, 312, 163, 333, 632, 721, 119, 757, 846, 107, 638, 501, 149, 871, 277, 688, 872, 138, 524, 882, 509, 508, 704, 649, 193, 760, 111, 877, 216, 604, 792, 175, 398, 685, 177, 595, 837, 759, 160, 887, 318, 237, 107, 665, 508, 446, 184, 527, 485, 370, 189, 606, 462, 758, 441, 443, 781, 160, 539, 359, 624, 267, 237, 844, 242, 629, 882, 224, 695, 888, 534, 280],
      "stim12": [643, 477, 173, 452, 362, 529, 881, 496, 315, 306, 772, 368, 743, 790, 105, 855, 197, 887, 256, 841, 348, 593, 752, 319, 267, 218, 768, 364, 877, 726, 388, 709, 238, 706, 232, 536, 813, 859, 226, 193, 750, 357, 705, 267, 239, 675, 433, 634, 491, 881, 187, 724, 557, 609, 181, 329, 412, 367, 852, 810, 542, 281, 446, 526, 868, 547, 443, 400, 651, 565, 411, 779, 119, 507, 820, 876, 758, 714, 814, 321, 471, 768, 447, 332, 742, 250, 249, 787, 689, 680, 165, 634, 281, 154],
      "stim13": [800, 554, 374, 222, 846, 191, 275, 509, 791, 809, 827, 541, 100, 821, 872, 318, 368, 814, 595, 833, 400, 533, 444, 258, 514, 356, 188, 199, 763, 151, 797, 786, 208, 313, 353, 123, 121, 210, 761, 233, 408, 314, 463, 208, 517, 295, 262, 126, 332, 327, 294, 626, 730, 291, 378, 493, 403, 191, 573, 150, 254, 272, 181, 899, 738, 418, 765, 470, 452, 264, 776, 415, 613, 895, 796, 857, 677, 217, 123, 413, 836, 567, 439, 163, 442, 695, 302, 106, 825, 630, 479, 795, 501, 119],
      "stim14": [836, 711, 741, 283, 148, 724, 746, 762, 508, 671, 238, 523, 202, 334, 702, 765, 731, 654, 695, 853, 234, 291, 588, 333, 193, 340, 259, 434, 664, 184, 560, 491, 167, 847, 126, 834, 445, 744, 653, 199, 840, 277, 646, 395, 657, 640, 260, 696, 211, 389, 234, 694, 797, 265, 489, 694, 625, 597, 855, 654, 436, 751, 278, 186, 774, 860, 591, 857, 892, 526, 723, 895, 821, 754, 361, 875, 341, 136, 236, 446, 516, 151, 192, 480, 701, 822, 164, 670, 318, 513, 576, 120, 338, 218],
      "stim15": [742, 418, 465, 446, 780, 876, 141, 225, 611, 740, 876, 287, 173, 587, 112, 790, 447, 739, 224, 899, 252, 174, 287, 143, 788, 303, 620, 193, 583, 439, 280, 409, 393, 380, 774, 695, 600, 116, 834, 282, 202, 247, 518, 770, 148, 742, 320, 649, 644, 261, 168, 555, 505, 638, 136, 783, 205, 754, 656, 402, 621, 352, 846, 627, 433, 711, 218, 550, 630, 394, 771, 648, 305, 661, 397, 733, 404, 473, 146, 898, 296, 854, 622, 154, 605, 700, 701, 590, 309, 206, 381, 328, 400, 210],
      "stim16": [124, 399, 491, 703, 518, 578, 661, 669, 422, 320, 301, 516, 627, 364, 264, 627, 377, 141, 863, 793, 316, 675, 363, 876, 516, 178, 537, 453, 755, 671, 301, 872, 682, 824, 712, 235, 234, 480, 738, 107, 116, 296, 493, 345, 630, 689, 248, 716, 651, 503, 130, 395, 723, 395, 816, 664, 489, 564, 396, 287, 606, 880, 367, 157, 794, 788, 566, 460, 253, 367, 559, 728, 708, 709, 141, 821, 350, 168, 241, 364, 626, 569, 710, 503, 855, 286, 810, 843, 236, 304, 733, 721, 245, 273],
      "x_pos1": [-0.479, -0.553, -0.332, -0.184, 0.7, 0.405, 0.111, -0.184, -0.111, 0.037, -0.626, -0.037, 0.184, -0.332, 0.332, 0.037, 0.479, -0.7, 0.332, -0.405, 0.258, 0.111, -0.111, -0.037, 0.184, 0.626, -0.7, 0.553, 0.405, 0.184, -0.037, 0.553, -0.626, 0.037, 0.184, 0.405, 0.479, -0.479, 0.405, 0.553, -0.111, 0.479, 0.184, -0.7, 0.479, 0.332, -0.626, 0.258, 0.037, 0.258, -0.111, -0.7, -0.553, 0.037, 0.184, -0.332, 0.626, -0.7, -0.479, -0.479, -0.626, -0.332, -0.479, -0.626, -0.626, 0.626, -0.7, 0.111, -0.258, -0.405, 0.405, -0.332, 0.184, -0.553, -0.7, 0.258, 0.037, 0.111, 0.626, 0.332, 0.7, 0.7, -0.184, 0.626, -0.332, -0.258, -0.479, -0.479, 0.479, -0.7, -0.626, -0.626, 0.405, -0.479],
      "x_pos2": [0.405, 0.553, -0.7, -0.553, -0.037, 0.332, -0.7, -0.553, 0.405, 0.479, -0.037, -0.553, -0.7, 0.626, -0.258, -0.553, 0.626, -0.258, 0.553, -0.7, -0.184, -0.7, -0.332, 0.626, 0.184, 0.184, -0.479, 0.479, 0.258, -0.258, -0.332, -0.258, -0.037, 0.258, 0.111, -0.553, 0.184, -0.7, 0.7, 0.479, -0.332, 0.111, 0.332, 0.111, -0.037, 0.184, -0.405, 0.037, -0.553, 0.111, 0.553, 0.111, 0.479, -0.332, -0.553, 0.184, -0.626, 0.405, 0.111, -0.405, 0.184, -0.332, -0.7, 0.553, 0.405, 0.184, 0.626, 0.479, 0.111, -0.184, -0.405, -0.7, 0.332, -0.111, -0.258, -0.553, 0.037, -0.332, -0.479, 0.405, -0.332, -0.111, -0.184, 0.332, -0.553, 0.184, 0.184, -0.405, 0.479, 0.258, 0.405, -0.7, 0.037, 0.553],
      "x_pos3": [-0.7, -0.258, -0.553, -0.626, -0.111, 0.037, -0.184, -0.7, 0.332, 0.7, -0.111, 0.626, -0.111, 0.405, -0.626, -0.332, 0.7, -0.037, -0.037, 0.037, 0.553, -0.111, 0.111, -0.111, -0.479, -0.111, -0.258, -0.553, -0.626, -0.332, 0.7, 0.184, -0.626, -0.553, 0.626, -0.479, -0.479, -0.553, 0.7, -0.111, -0.479, 0.405, 0.626, 0.7, 0.037, -0.7, 0.111, 0.037, -0.405, 0.111, 0.626, 0.405, 0.332, -0.184, -0.111, 0.332, 0.626, -0.626, -0.332, 0.037, -0.332, 0.479, -0.258, 0.111, 0.7, 0.332, -0.7, -0.479, 0.553, 0.626, 0.7, 0.037, -0.184, -0.258, 0.332, 0.479, 0.037, 0.111, -0.332, -0.405, -0.037, 0.184, -0.332, 0.405, 0.111, 0.111, 0.332, 0.626, 0.479, 0.111, -0.7, 0.111, -0.184, -0.553],
      "x_pos4": [0.184, 0.626, 0.037, -0.184, 0.553, -0.258, -0.184, 0.037, 0.258, -0.111, 0.405, 0.184, -0.037, -0.7, -0.405, 0.111, -0.7, 0.479, -0.7, -0.405, 0.258, 0.184, -0.184, 0.479, 0.626, 0.332, 0.332, 0.7, -0.037, -0.626, 0.405, -0.111, 0.111, 0.626, -0.553, -0.626, -0.184, 0.037, 0.626, -0.479, -0.7, -0.405, -0.037, -0.258, -0.332, -0.037, 0.405, -0.111, -0.111, 0.405, 0.553, -0.7, -0.479, 0.479, -0.553, -0.111, 0.258, -0.111, 0.479, 0.626, 0.332, 0.479, 0.7, -0.405, 0.626, -0.332, -0.258, -0.479, -0.479, 0.332, 0.479, 0.111, 0.405, 0.332, -0.626, 0.258, 0.626, 0.7, -0.479, -0.258, 0.7, 0.111, 0.184, -0.184, -0.479, -0.626, 0.037, -0.479, 0.037, 0.111, -0.405, -0.626, -0.258, 0.332],
      "x_pos5": [0.111, -0.7, 0.405, 0.258, 0.553, 0.626, -0.184, 0.7, -0.332, 0.111, -0.037, 0.184, -0.258, 0.553, -0.111, 0.553, -0.7, 0.184, -0.405, -0.332, 0.479, -0.626, -0.7, -0.479, 0.479, 0.7, -0.479, -0.111, 0.553, -0.184, 0.626, -0.111, -0.7, 0.553, -0.553, -0.7, -0.479, 0.405, -0.626, 0.553, -0.258, -0.111, 0.332, -0.553, 0.184, -0.037, 0.7, -0.258, 0.258, -0.7, -0.7, -0.553, -0.553, -0.405, -0.258, 0.037, -0.405, -0.332, -0.626, -0.332, 0.626, -0.258, -0.037, -0.258, 0.037, 0.479, 0.184, -0.332, 0.479, 0.111, 0.626, -0.111, -0.332, 0.479, 0.037, -0.332, 0.553, -0.184, 0.626, -0.626, -0.479, 0.479, -0.037, 0.553, -0.7, 0.7, -0.111, -0.553, -0.7, 0.479, -0.405, 0.258, -0.405, -0.111],
      "x_pos6": [-0.553, 0.184, -0.111, -0.553, -0.479, -0.553, -0.479, -0.037, 0.479, 0.479, 0.111, -0.7, -0.479, -0.479, 0.479, -0.626, 0.111, 0.258, 0.626, 0.258, -0.7, 0.111, -0.626, 0.626, -0.626, 0.258, 0.626, -0.258, -0.479, -0.037, -0.111, -0.7, -0.553, -0.258, -0.479, -0.479, 0.626, -0.332, -0.111, -0.626, 0.258, 0.479, 0.184, -0.037, -0.258, 0.626, 0.479, -0.479, -0.332, 0.037, -0.7, -0.7, 0.553, -0.405, -0.258, 0.037, -0.258, -0.405, 0.553, 0.405, 0.7, 0.184, -0.037, 0.405, 0.553, -0.037, -0.037, -0.258, -0.7, 0.405, -0.037, -0.037, 0.332, -0.332, -0.258, 0.7, -0.037, 0.553, -0.479, 0.626, 0.7, 0.553, 0.479, -0.479, -0.111, -0.184, -0.037, 0.479, 0.553, -0.037, -0.479, -0.553, 0.405, -0.037],
      "x_pos7": [-0.7, 0.258, 0.184, 0.553, 0.111, -0.405, 0.111, 0.037, -0.258, 0.037, 0.332, -0.111, -0.7, -0.184, 0.626, 0.553, -0.405, 0.479, 0.258, -0.626, 0.626, 0.332, -0.111, 0.553, -0.405, 0.184, -0.037, -0.405, 0.111, 0.258, -0.111, -0.184, -0.7, 0.332, 0.111, -0.184, 0.037, 0.332, 0.184, -0.7, -0.479, -0.626, 0.258, 0.037, -0.111, 0.037, -0.626, 0.626, 0.626, 0.111, 0.258, -0.037, 0.184, 0.553, 0.037, -0.479, 0.553, 0.258, 0.479, 0.184, 0.184, 0.7, 0.111, -0.258, -0.037, -0.111, -0.7, -0.037, -0.479, 0.479, 0.479, -0.332, 0.626, 0.405, -0.7, -0.184, -0.7, -0.258, -0.7, 0.7, -0.7, 0.405, 0.037, -0.258, 0.332, 0.184, -0.626, -0.111, 0.405, -0.258, 0.626, 0.258, -0.184, 0.184],
      "x_pos8": [-0.626, 0.184, 0.7, 0.258, -0.184, -0.332, 0.184, 0.553, -0.553, 0.258, 0.7, 0.037, 0.037, -0.626, 0.405, -0.479, -0.258, -0.111, 0.184, 0.111, -0.037, -0.332, 0.184, -0.626, -0.405, 0.037, 0.405, -0.111, 0.553, 0.7, 0.111, -0.553, -0.626, -0.7, -0.405, 0.184, -0.479, 0.111, -0.184, -0.111, 0.111, -0.479, -0.7, 0.553, -0.553, 0.626, -0.184, 0.111, 0.553, -0.037, -0.258, -0.626, 0.258, -0.405, 0.479, 0.258, -0.111, -0.332, 0.184, 0.258, 0.111, -0.258, 0.7, -0.405, 0.626, -0.626, 0.111, -0.111, -0.405, 0.037, -0.7, 0.258, -0.184, 0.405, -0.332, -0.626, -0.258, -0.111, -0.332, 0.037, 0.037, -0.184, -0.553, -0.553, 0.553, 0.184, 0.553, -0.7, -0.626, 0.258, -0.405, -0.332, -0.184, 0.184],
      "x_pos9": [0.626, 0.626, -0.405, 0.405, -0.111, 0.405, -0.626, 0.626, 0.479, 0.332, -0.405, -0.258, 0.405, 0.332, -0.626, -0.553, -0.184, -0.037, -0.479, -0.405, 0.405, -0.626, -0.332, -0.037, 0.7, -0.258, 0.184, 0.553, -0.7, 0.7, 0.479, 0.037, 0.037, 0.626, 0.553, 0.626, 0.037, 0.7, 0.037, -0.7, -0.626, 0.184, 0.405, -0.553, 0.037, 0.037, -0.184, 0.111, -0.479, 0.258, -0.332, -0.111, -0.626, -0.111, 0.626, 0.405, -0.7, -0.405, 0.626, 0.7, 0.7, -0.479, -0.479, -0.479, -0.553, 0.111, 0.111, -0.258, -0.7, -0.7, -0.111, -0.7, 0.111, 0.111, 0.111, 0.7, -0.037, -0.184, 0.258, 0.405, 0.111, 0.553, -0.405, -0.7, 0.626, -0.332, 0.332, -0.405, -0.553, -0.111, 0.037, 0.405, -0.405, -0.626],
      "x_pos10": [0.626, 0.037, 0.405, 0.184, -0.184, 0.405, 0.258, -0.405, 0.7, 0.037, 0.037, -0.405, 0.626, 0.184, 0.258, -0.7, 0.111, 0.7, 0.332, 0.626, 0.626, -0.258, -0.7, -0.332, -0.626, -0.626, -0.7, -0.626, 0.184, -0.405, 0.037, -0.037, -0.184, 0.479, -0.037, -0.332, -0.553, 0.332, 0.479, 0.7, 0.184, -0.7, 0.111, 0.111, -0.626, 0.7, 0.184, 0.258, -0.626, 0.111, -0.332, 0.184, 0.479, -0.405, 0.479, -0.7, 0.111, -0.332, -0.626, 0.405, 0.7, 0.037, 0.037, 0.479, 0.7, -0.037, -0.405, -0.037, -0.111, 0.405, -0.626, -0.626, 0.553, -0.405, 0.626, 0.184, 0.7, 0.258, -0.626, 0.626, -0.111, -0.626, -0.553, 0.111, -0.7, -0.626, -0.405, -0.7, -0.037, -0.332, 0.184, 0.553, 0.037, 0.7],
      "x_pos11": [0.111, 0.184, 0.553, -0.479, -0.7, -0.405, -0.479, -0.111, -0.7, -0.258, 0.332, 0.479, -0.479, 0.184, -0.479, 0.332, -0.037, 0.7, -0.111, -0.332, 0.479, -0.553, -0.037, 0.553, 0.553, 0.037, -0.553, 0.479, 0.7, 0.332, -0.037, 0.479, 0.111, 0.184, -0.7, 0.405, -0.111, 0.184, 0.332, -0.184, -0.626, 0.111, 0.184, -0.332, 0.479, 0.184, 0.479, -0.184, -0.479, -0.479, -0.037, -0.111, 0.037, 0.7, 0.037, -0.7, -0.184, 0.037, 0.111, 0.111, 0.037, 0.332, 0.7, -0.037, -0.332, 0.626, 0.037, -0.037, -0.405, 0.553, -0.332, -0.184, -0.037, -0.479, 0.626, 0.626, -0.7, 0.184, -0.626, 0.553, -0.626, -0.258, 0.405, 0.258, 0.332, 0.258, 0.553, 0.184, 0.405, -0.258, -0.332, 0.258, -0.405, 0.553],
      "x_pos12": [-0.184, 0.626, -0.184, -0.553, -0.111, 0.258, -0.479, -0.405, -0.111, 0.332, 0.553, -0.332, -0.626, 0.258, -0.626, -0.111, -0.626, -0.479, -0.626, 0.405, -0.037, 0.626, 0.111, -0.626, 0.479, 0.037, -0.332, -0.405, -0.332, -0.479, -0.7, -0.626, -0.184, -0.111, -0.626, -0.258, 0.184, -0.184, -0.553, -0.111, 0.553, -0.184, 0.7, 0.479, -0.332, 0.479, -0.405, -0.626, 0.553, 0.405, 0.111, -0.111, 0.037, 0.479, -0.184, 0.7, -0.553, -0.184, -0.479, 0.553, 0.7, 0.553, -0.258, -0.479, 0.258, -0.479, -0.405, -0.111, 0.258, 0.553, 0.479, -0.626, 0.184, -0.405, 0.553, 0.553, 0.553, 0.479, 0.184, 0.111, 0.405, -0.405, 0.479, 0.111, -0.184, -0.111, 0.037, 0.184, -0.553, 0.7, 0.7, 0.258, -0.184, -0.258],
      "x_pos13": [0.258, -0.553, 0.258, 0.405, -0.258, -0.111, 0.626, 0.037, -0.184, 0.7, -0.7, 0.111, 0.184, 0.7, -0.479, -0.111, -0.111, -0.7, -0.258, 0.332, 0.332, 0.258, -0.553, 0.184, 0.111, 0.258, 0.7, 0.553, 0.184, -0.553, -0.7, 0.479, 0.479, -0.184, -0.479, 0.258, 0.553, -0.626, 0.184, -0.553, 0.626, -0.405, 0.037, 0.479, 0.479, -0.7, 0.332, 0.479, -0.479, -0.111, -0.184, 0.184, 0.037, -0.7, 0.553, -0.184, -0.258, 0.405, 0.332, -0.037, -0.037, 0.479, -0.7, -0.7, -0.332, -0.405, 0.111, 0.479, 0.405, 0.405, 0.332, -0.405, 0.258, 0.258, 0.184, 0.553, -0.332, -0.037, 0.553, -0.111, 0.258, 0.111, 0.553, 0.111, -0.332, -0.7, 0.479, -0.258, -0.258, 0.7, 0.7, -0.479, 0.7, 0.7],
      "x_pos14": [-0.258, 0.332, -0.553, 0.479, 0.037, -0.405, -0.184, 0.258, -0.258, -0.111, -0.184, 0.111, 0.479, 0.479, -0.479, 0.479, -0.184, 0.553, -0.626, -0.111, -0.184, -0.037, -0.553, 0.626, -0.7, -0.405, -0.184, -0.037, 0.7, -0.405, -0.7, -0.479, -0.626, -0.7, 0.111, -0.111, -0.258, 0.332, -0.7, -0.258, 0.479, 0.405, -0.332, 0.258, 0.258, -0.405, 0.184, -0.405, -0.479, 0.7, -0.626, 0.7, -0.111, 0.037, -0.626, -0.111, 0.479, 0.037, 0.7, -0.111, -0.332, 0.553, 0.626, -0.626, 0.7, 0.332, -0.553, -0.405, -0.7, -0.184, -0.479, 0.405, -0.626, 0.7, -0.258, -0.626, -0.258, -0.258, 0.553, 0.553, 0.405, -0.626, 0.626, -0.184, 0.626, 0.111, 0.258, 0.553, -0.258, -0.405, 0.553, -0.405, -0.037, 0.037],
      "x_pos15": [0.111, 0.111, 0.332, 0.258, 0.553, -0.037, 0.405, -0.479, 0.553, 0.626, 0.479, 0.332, 0.111, -0.626, 0.258, -0.405, -0.626, 0.037, 0.626, 0.626, -0.111, 0.184, 0.111, -0.553, 0.332, -0.332, 0.037, -0.7, -0.405, -0.479, -0.7, 0.332, -0.7, 0.111, 0.479, 0.553, 0.479, -0.258, -0.332, 0.111, 0.184, -0.332, -0.479, -0.258, 0.405, 0.405, 0.037, -0.626, -0.479, -0.111, 0.332, 0.479, 0.184, 0.479, 0.479, 0.7, 0.553, -0.626, 0.553, 0.111, 0.626, 0.332, 0.479, -0.626, 0.332, 0.184, 0.184, 0.332, 0.553, 0.553, 0.553, 0.332, -0.184, -0.111, -0.037, -0.111, 0.479, 0.332, 0.258, 0.111, 0.7, -0.405, -0.553, -0.7, 0.553, -0.258, 0.111, -0.553, 0.037, -0.553, 0.111, 0.332, 0.332, -0.405],
      "x_pos16": [0.479, -0.479, 0.405, 0.184, 0.479, 0.626, -0.037, -0.332, 0.626, 0.184, 0.626, -0.7, 0.258, 0.626, -0.553, 0.626, 0.479, 0.258, 0.7, -0.332, 0.258, -0.184, -0.258, 0.184, 0.405, 0.037, -0.7, -0.037, -0.332, 0.479, 0.553, 0.184, 0.111, 0.553, -0.479, 0.332, -0.479, 0.111, -0.626, 0.258, 0.405, 0.553, -0.111, -0.7, 0.405, -0.184, 0.479, 0.332, -0.405, 0.332, 0.332, 0.111, -0.553, 0.258, -0.037, -0.626, 0.626, 0.111, -0.332, 0.626, -0.111, 0.479, -0.332, 0.7, -0.037, 0.258, -0.332, 0.258, -0.258, -0.332, 0.626, -0.258, 0.405, -0.553, 0.405, -0.7, 0.332, 0.553, -0.184, -0.479, -0.037, 0.111, -0.258, -0.405, 0.111, -0.258, 0.405, 0.111, -0.405, -0.037, -0.037, -0.111, 0.626, 0.626],
      "y_pos1": [-0.155, 0.45, 0.285, 0.175, 0.23, -0.155, 0.175, 0.175, 0.34, 0.065, 0.34, 0.065, 0.45, -0.1, -0.045, -0.21, 0.065, 0.23, 0.395, 0.01, 0.175, 0.01, -0.21, -0.155, 0.285, 0.12, 0.285, -0.045, 0.175, 0.175, 0.065, 0.285, 0.34, 0.23, -0.21, -0.21, -0.265, -0.265, -0.045, 0.12, 0.01, 0.175, 0.01, 0.175, 0.285, 0.01, 0.45, 0.175, 0.01, -0.045, 0.175, 0.065, 0.23, -0.1, -0.045, -0.21, -0.045, -0.21, 0.01, -0.21, -0.045, 0.45, 0.285, 0.01, 0.285, -0.1, 0.34, -0.045, 0.285, -0.155, 0.065, -0.21, 0.395, -0.21, 0.01, 0.395, 0.395, -0.265, 0.23, 0.01, 0.01, 0.395, -0.1, 0.45, 0.45, 0.23, 0.45, -0.21, -0.21, 0.065, 0.45, -0.155, 0.45, 0.12],
      "y_pos2": [0.285, -0.155, 0.065, 0.175, -0.045, -0.265, 0.23, 0.34, 0.175, -0.21, 0.065, -0.21, -0.1, 0.01, 0.45, 0.065, 0.175, 0.395, -0.265, 0.23, 0.175, 0.175, 0.23, -0.265, 0.395, -0.1, 0.23, -0.1, 0.065, -0.045, -0.1, -0.265, 0.23, -0.1, 0.065, -0.265, 0.34, -0.1, 0.175, 0.45, -0.045, -0.045, -0.155, 0.34, -0.045, 0.34, 0.395, 0.175, 0.01, -0.21, 0.34, 0.45, 0.01, 0.285, 0.12, -0.265, 0.285, 0.065, -0.265, -0.1, 0.45, 0.12, 0.395, 0.395, 0.34, -0.045, 0.395, 0.395, -0.155, 0.285, 0.175, -0.155, 0.395, -0.1, 0.065, -0.155, 0.175, -0.21, 0.23, -0.045, -0.1, -0.045, -0.155, 0.12, -0.045, -0.155, -0.1, 0.395, 0.12, 0.12, -0.155, 0.065, -0.155, 0.01],
      "y_pos3": [-0.1, 0.065, 0.45, 0.065, 0.065, 0.23, -0.21, -0.21, -0.1, 0.23, 0.395, 0.175, 0.395, 0.285, 0.395, 0.175, -0.21, 0.23, -0.265, -0.1, 0.45, 0.34, 0.285, 0.34, 0.45, 0.065, 0.285, 0.45, -0.21, -0.1, -0.045, 0.285, 0.45, 0.23, -0.1, -0.1, 0.45, -0.155, 0.45, -0.1, 0.065, -0.1, 0.12, -0.155, 0.065, -0.21, 0.065, 0.34, 0.23, 0.01, 0.45, -0.21, -0.1, 0.23, -0.155, 0.01, -0.155, -0.1, 0.23, -0.265, -0.1, 0.01, 0.34, 0.23, 0.175, 0.23, -0.21, 0.12, 0.12, 0.45, 0.01, 0.285, 0.175, 0.175, -0.21, 0.01, -0.265, 0.01, 0.285, 0.12, 0.285, -0.155, 0.23, 0.01, -0.1, 0.45, 0.01, -0.21, 0.285, -0.045, -0.1, -0.155, 0.395, -0.045],
      "y_pos4": [0.285, 0.12, 0.395, 0.34, 0.395, -0.1, 0.23, 0.34, 0.065, 0.285, 0.45, -0.21, -0.045, 0.01, -0.21, 0.285, 0.23, 0.45, 0.395, -0.045, 0.34, -0.045, 0.12, 0.45, -0.155, 0.285, -0.155, 0.23, -0.155, 0.01, 0.285, -0.265, -0.265, 0.175, -0.265, 0.285, 0.175, -0.045, 0.065, 0.065, -0.045, -0.1, 0.34, 0.175, 0.45, 0.01, 0.395, 0.285, -0.045, -0.21, 0.45, 0.34, 0.45, 0.175, -0.265, -0.265, 0.065, 0.45, 0.285, 0.34, -0.045, 0.34, 0.23, 0.12, -0.045, -0.155, 0.23, -0.045, -0.045, -0.21, 0.23, 0.12, -0.265, -0.045, 0.45, 0.01, 0.34, 0.065, -0.155, 0.12, 0.175, -0.265, 0.23, -0.1, 0.45, -0.21, 0.01, -0.265, -0.265, -0.1, -0.1, 0.395, 0.065, 0.285],
      "y_pos5": [0.01, -0.155, 0.34, 0.23, 0.285, 0.065, 0.45, -0.045, 0.12, 0.285, 0.285, 0.23, -0.1, 0.45, -0.045, 0.285, 0.01, -0.265, -0.265, -0.155, -0.045, 0.01, 0.175, 0.065, 0.285, -0.265, 0.285, 0.175, 0.285, -0.1, 0.285, 0.285, 0.34, -0.265, 0.395, 0.01, 0.34, -0.045, 0.12, 0.285, 0.34, 0.34, 0.175, 0.175, 0.23, -0.155, -0.265, -0.21, -0.21, 0.285, -0.045, 0.175, -0.21, 0.285, 0.01, 0.23, 0.175, 0.23, 0.01, 0.23, 0.01, 0.12, -0.045, -0.045, 0.175, 0.175, 0.01, -0.045, 0.065, 0.285, 0.12, -0.155, -0.1, 0.34, -0.265, 0.175, -0.21, -0.045, -0.21, 0.175, 0.34, 0.34, 0.065, -0.265, 0.285, 0.45, 0.34, 0.175, 0.45, 0.395, 0.01, -0.265, 0.175, 0.395],
      "y_pos6": [0.12, 0.065, 0.175, 0.285, -0.265, 0.34, -0.045, 0.34, 0.285, 0.065, 0.395, -0.1, -0.045, -0.045, 0.45, -0.155, -0.045, -0.265, 0.12, -0.21, 0.23, 0.395, 0.175, 0.12, 0.12, -0.045, -0.21, -0.045, 0.01, 0.12, 0.395, 0.175, -0.265, 0.34, -0.1, -0.265, -0.045, 0.395, -0.155, 0.45, 0.285, 0.285, 0.175, 0.065, -0.21, -0.1, 0.12, 0.01, 0.175, 0.395, 0.285, 0.175, 0.285, 0.01, 0.395, 0.175, -0.1, 0.34, 0.23, 0.34, -0.155, 0.395, -0.21, -0.045, -0.21, 0.23, 0.175, 0.395, 0.175, 0.45, 0.12, 0.175, 0.12, -0.045, 0.34, 0.065, 0.23, 0.175, 0.285, -0.1, -0.045, -0.1, -0.155, 0.395, -0.1, 0.01, -0.265, 0.01, 0.45, -0.21, 0.01, -0.21, -0.265, -0.21],
      "y_pos7": [-0.21, 0.34, 0.175, 0.34, 0.01, 0.34, 0.395, 0.065, -0.21, -0.265, -0.265, 0.23, -0.155, 0.395, 0.12, -0.265, -0.21, 0.23, 0.34, -0.1, 0.175, -0.265, -0.045, 0.34, -0.155, 0.285, -0.045, 0.175, -0.155, 0.395, -0.155, -0.1, 0.175, 0.285, 0.23, 0.12, 0.12, 0.395, 0.065, 0.175, -0.265, -0.21, 0.285, 0.12, 0.175, 0.01, 0.065, 0.175, -0.1, 0.12, -0.265, 0.23, 0.175, 0.23, 0.175, -0.21, 0.01, 0.45, -0.155, 0.395, -0.155, -0.21, -0.045, -0.1, -0.045, 0.23, -0.045, 0.12, -0.1, -0.1, 0.175, -0.1, -0.1, 0.175, 0.12, -0.045, -0.1, 0.285, 0.45, 0.45, -0.21, 0.175, -0.155, -0.21, 0.01, 0.12, 0.175, -0.045, 0.34, -0.155, 0.01, -0.1, 0.175, -0.21],
      "y_pos8": [-0.045, 0.34, -0.155, 0.45, 0.45, 0.285, 0.01, -0.1, 0.065, 0.285, -0.045, 0.395, 0.45, -0.1, 0.065, 0.395, 0.175, 0.23, -0.045, -0.1, -0.1, 0.395, 0.175, -0.21, -0.1, 0.395, -0.265, 0.285, 0.065, -0.21, 0.34, 0.12, 0.01, -0.1, 0.175, 0.395, 0.065, -0.155, -0.1, -0.265, 0.065, 0.065, -0.265, 0.45, 0.23, 0.23, 0.23, -0.21, 0.065, 0.45, 0.34, -0.21, 0.065, 0.12, 0.12, 0.45, 0.285, 0.395, 0.285, 0.45, 0.285, -0.045, 0.395, 0.01, 0.45, 0.285, 0.01, 0.45, -0.21, 0.01, -0.265, 0.12, 0.34, 0.01, 0.285, 0.23, -0.21, -0.155, -0.155, 0.01, -0.265, 0.395, 0.01, -0.1, -0.265, -0.265, 0.45, -0.1, 0.34, 0.395, 0.23, -0.155, 0.45, 0.395],
      "y_pos9": [-0.265, 0.175, -0.1, 0.12, -0.21, 0.12, 0.34, 0.23, 0.065, 0.01, 0.45, -0.1, 0.01, 0.45, 0.34, 0.175, 0.12, -0.1, 0.45, 0.285, 0.285, -0.21, -0.265, 0.175, 0.395, -0.155, 0.175, 0.12, 0.12, 0.45, 0.45, 0.175, 0.45, -0.155, 0.23, -0.21, 0.065, 0.45, 0.12, -0.1, 0.45, 0.175, 0.395, -0.21, 0.395, 0.34, 0.175, 0.23, -0.155, 0.12, 0.285, 0.23, -0.1, -0.155, 0.01, -0.045, 0.285, 0.23, 0.01, -0.21, 0.12, 0.23, 0.34, 0.23, 0.175, 0.45, 0.12, -0.1, -0.265, -0.155, 0.45, 0.12, -0.155, 0.45, -0.045, -0.21, 0.34, 0.395, -0.265, -0.265, 0.285, 0.45, -0.1, 0.45, -0.155, -0.045, -0.265, 0.065, 0.01, 0.395, -0.155, 0.395, -0.155, -0.155],
      "y_pos10": [0.065, -0.045, -0.155, -0.155, 0.23, -0.21, 0.395, 0.285, 0.065, -0.21, -0.155, -0.265, 0.01, 0.45, -0.155, 0.395, 0.285, 0.23, 0.285, -0.045, 0.34, 0.12, -0.045, 0.395, -0.21, -0.265, -0.265, 0.45, 0.45, -0.045, 0.23, 0.285, 0.175, 0.12, 0.45, 0.175, 0.23, -0.1, 0.34, -0.155, 0.34, -0.155, -0.265, -0.21, 0.23, -0.155, 0.34, 0.01, 0.45, 0.23, 0.34, 0.285, 0.12, 0.23, -0.155, 0.01, 0.175, 0.285, -0.21, -0.1, -0.045, -0.155, -0.155, 0.395, 0.12, 0.395, -0.1, 0.01, -0.265, -0.155, 0.175, -0.21, -0.21, -0.21, 0.285, 0.12, 0.01, -0.1, 0.23, 0.065, 0.01, 0.395, 0.12, 0.175, 0.01, 0.23, 0.395, 0.45, 0.065, 0.065, 0.395, 0.395, -0.045, 0.395],
      "y_pos11": [-0.265, -0.265, 0.45, 0.12, 0.23, -0.155, 0.175, 0.395, 0.395, -0.21, 0.23, 0.34, -0.155, 0.285, -0.1, -0.045, -0.155, -0.155, -0.1, 0.12, 0.12, 0.01, 0.01, 0.45, -0.21, 0.45, 0.12, -0.045, 0.12, 0.12, 0.285, -0.045, -0.155, 0.285, -0.045, 0.175, 0.065, -0.045, 0.45, -0.045, 0.34, -0.155, 0.12, 0.01, 0.395, -0.045, -0.265, -0.21, -0.21, 0.23, -0.155, 0.065, 0.12, 0.23, -0.265, -0.265, 0.395, 0.065, -0.045, 0.065, -0.265, 0.45, 0.01, 0.01, -0.265, 0.285, 0.01, 0.065, -0.155, 0.065, 0.23, 0.065, -0.155, -0.155, 0.175, -0.045, -0.21, 0.175, 0.175, -0.045, -0.265, 0.395, 0.065, -0.155, -0.155, -0.265, 0.285, 0.23, -0.1, -0.265, 0.12, 0.34, 0.285, 0.12],
      "y_pos12": [0.175, 0.23, 0.34, 0.395, -0.265, 0.065, 0.285, 0.12, -0.045, 0.34, -0.1, 0.285, 0.065, 0.34, -0.1, -0.045, -0.265, 0.12, 0.23, 0.45, -0.155, 0.285, 0.065, 0.395, 0.12, 0.285, -0.1, 0.45, -0.265, -0.1, 0.065, 0.45, 0.34, 0.12, -0.1, 0.285, 0.175, 0.23, -0.045, 0.34, -0.045, -0.265, 0.45, 0.175, -0.21, 0.45, -0.21, 0.065, 0.175, 0.01, 0.23, -0.265, 0.175, 0.12, -0.1, -0.155, -0.045, -0.155, 0.45, 0.34, 0.395, 0.01, 0.285, -0.1, -0.265, 0.34, 0.395, -0.21, 0.45, -0.045, 0.395, 0.065, 0.01, 0.45, -0.1, 0.34, -0.155, 0.45, 0.395, -0.21, 0.175, 0.23, 0.285, -0.045, 0.285, -0.155, 0.175, 0.395, 0.34, 0.45, 0.01, 0.12, 0.065, 0.285],
      "y_pos13": [0.01, -0.21, 0.175, 0.45, -0.045, 0.45, 0.45, 0.175, 0.01, 0.175, 0.12, 0.285, -0.045, 0.395, 0.175, -0.265, -0.21, 0.175, 0.395, 0.01, 0.45, 0.395, 0.285, 0.34, 0.065, -0.21, 0.01, 0.01, 0.34, 0.23, 0.45, -0.1, 0.34, 0.45, -0.21, 0.34, -0.265, -0.1, 0.23, -0.265, 0.45, 0.065, 0.34, -0.155, 0.065, 0.12, 0.34, 0.45, -0.1, 0.285, 0.395, -0.265, 0.065, 0.395, 0.285, 0.45, 0.065, 0.34, -0.21, -0.21, -0.1, 0.395, -0.155, 0.45, -0.1, -0.045, 0.34, 0.065, -0.265, 0.12, 0.34, 0.23, -0.155, -0.155, -0.155, -0.1, 0.01, 0.065, -0.265, 0.12, 0.45, 0.175, -0.045, -0.21, 0.395, 0.285, 0.23, 0.12, 0.285, 0.23, 0.175, 0.12, 0.23, -0.045],
      "y_pos14": [0.395, -0.21, -0.1, -0.1, 0.34, -0.21, 0.34, 0.12, -0.265, -0.045, 0.23, -0.1, 0.01, 0.34, -0.265, -0.1, 0.065, 0.395, 0.065, 0.01, 0.01, 0.01, -0.21, 0.175, -0.045, 0.285, -0.1, 0.175, -0.045, 0.395, 0.01, -0.155, -0.045, 0.175, -0.1, 0.395, -0.1, 0.45, 0.12, -0.045, 0.34, 0.23, 0.065, 0.395, -0.045, 0.01, 0.395, 0.175, -0.045, 0.34, 0.01, -0.155, -0.155, 0.12, 0.175, 0.01, 0.395, 0.175, 0.285, -0.265, 0.45, -0.21, -0.265, 0.175, 0.065, -0.155, 0.23, 0.065, -0.045, -0.1, -0.045, -0.21, -0.265, 0.45, 0.285, -0.21, 0.395, 0.065, -0.21, 0.01, -0.1, -0.265, -0.045, 0.45, 0.285, -0.265, 0.23, 0.285, 0.45, 0.34, 0.34, 0.34, 0.23, 0.175],
      "y_pos15": [0.395, -0.155, 0.01, 0.395, -0.265, 0.12, 0.395, 0.34, 0.34, -0.155, 0.12, 0.01, 0.065, 0.23, 0.065, -0.155, -0.045, 0.175, -0.1, 0.065, 0.395, 0.285, 0.23, -0.155, 0.12, -0.045, -0.1, 0.34, -0.045, 0.12, -0.1, 0.45, -0.045, 0.395, 0.395, -0.045, -0.1, 0.285, -0.1, 0.45, -0.155, 0.12, -0.1, 0.45, 0.45, 0.23, 0.065, 0.34, 0.23, -0.21, 0.34, 0.065, 0.34, 0.065, 0.34, 0.45, -0.21, 0.12, -0.265, 0.01, 0.23, -0.045, 0.065, 0.395, -0.155, 0.12, 0.45, 0.01, 0.23, -0.1, 0.01, 0.12, 0.065, -0.265, 0.285, 0.23, -0.045, -0.1, 0.01, 0.175, 0.12, 0.175, 0.23, -0.265, 0.065, 0.285, 0.395, 0.395, 0.12, 0.175, -0.045, -0.045, 0.34, 0.285],
      "y_pos16": [-0.045, 0.45, 0.395, -0.1, 0.23, -0.155, -0.1, 0.01, -0.265, 0.45, -0.21, 0.34, 0.12, -0.1, -0.155, 0.45, 0.45, 0.23, 0.065, 0.45, 0.285, 0.395, 0.065, -0.265, 0.01, 0.065, -0.1, 0.34, -0.045, 0.285, 0.34, -0.045, -0.045, -0.1, 0.065, 0.395, 0.175, 0.12, -0.155, 0.065, 0.23, 0.12, -0.045, 0.34, 0.23, -0.155, -0.21, 0.34, 0.065, 0.34, 0.395, -0.21, 0.395, 0.285, 0.01, 0.23, 0.23, 0.23, -0.21, 0.065, 0.23, -0.155, 0.01, 0.45, -0.265, 0.34, 0.175, 0.34, -0.265, 0.01, 0.285, 0.01, 0.34, 0.23, -0.21, -0.1, 0.45, 0.12, -0.1, -0.045, 0.45, -0.1, -0.155, -0.155, 0.01, -0.045, 0.395, -0.155, 0.065, 0.175, 0.065, 0.12, 0.285, 0.065],
      "block": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    },
    {
      "trial_type": ["warmup", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test"],
      "mean": [450, 550, 450, 550, 550, 450, 550, 450, 800, 550, 550, 450, 450, 450, 450, 450, 550, 550, 550, 550, 550, 550, 550, 450, 200, 450, 550, 450, 550, 450, 450, 550, 450, 550, 450, 550, 450, 550, 450, 550, 450, 550, 450, 450, 550, 550, 550, 550, 550, 550, 450, 800, 450, 450, 450, 550, 450, 450, 550, 450, 450, 450, 550, 450, 450, 450, 550, 450, 550, 550, 450, 550, 550, 550, 450, 550, 550, 450, 200, 550, 550, 550, 550, 550, 450, 450, 450, 450, 450, 450, 800, 450, 450, 550],
      "stim1": [767, 409, 760, 643, 219, 107, 288, 320, 751, 591, 595, 517, 466, 585, 889, 348, 327, 692, 229, 760, 650, 888, 230, 644, 116, 111, 344, 353, 155, 522, 642, 847, 628, 180, 238, 562, 317, 601, 489, 577, 899, 519, 530, 117, 518, 320, 214, 616, 753, 540, 340, 773, 332, 808, 568, 429, 316, 231, 637, 127, 567, 467, 734, 643, 404, 800, 586, 292, 225, 508, 101, 433, 293, 459, 860, 656, 507, 546, 268, 815, 861, 598, 820, 802, 581, 352, 617, 170, 478, 368, 868, 242, 379, 693],
      "stim2": [264, 425, 126, 486, 843, 820, 544, 531, 877, 347, 257, 238, 353, 318, 595, 278, 266, 734, 175, 308, 839, 779, 385, 674, 179, 637, 541, 285, 797, 795, 349, 742, 714, 870, 154, 412, 405, 554, 793, 750, 219, 818, 304, 737, 829, 693, 813, 554, 593, 658, 632, 820, 462, 177, 885, 586, 295, 348, 614, 518, 634, 430, 363, 779, 362, 435, 567, 535, 115, 143, 311, 700, 553, 406, 600, 820, 816, 245, 118, 615, 486, 743, 365, 858, 887, 860, 394, 420, 386, 249, 785, 281, 548, 644],
      "stim3": [116, 757, 512, 684, 163, 781, 669, 355, 743, 693, 384, 671, 339, 196, 635, 711, 282, 451, 128, 518, 779, 366, 713, 376, 271, 821, 772, 350, 868, 273, 733, 842, 578, 178, 608, 898, 419, 823, 118, 754, 480, 839, 850, 467, 426, 627, 843, 715, 364, 211, 794, 841, 623, 264, 832, 303, 166, 782, 701, 419, 188, 794, 600, 443, 430, 340, 137, 754, 281, 150, 239, 160, 811, 837, 671, 770, 117, 297, 168, 639, 659, 549, 757, 515, 393, 635, 330, 139, 541, 275, 846, 736, 270, 820],
      "stim4": [483, 700, 497, 702, 809, 178, 738, 117, 895, 574, 521, 524, 686, 329, 687, 349, 841, 189, 251, 400, 561, 733, 558, 842, 297, 359, 535, 171, 796, 465, 595, 308, 776, 494, 227, 829, 132, 549, 174, 516, 528, 255, 625, 426, 882, 483, 872, 358, 268, 176, 271, 709, 586, 360, 191, 654, 530, 541, 562, 489, 626, 243, 411, 434, 667, 815, 146, 456, 463, 645, 202, 650, 609, 895, 339, 128, 687, 590, 221, 422, 818, 632, 156, 627, 138, 141, 447, 163, 843, 741, 837, 404, 784, 130],
      "stim5": [524, 585, 550, 448, 310, 134, 265, 325, 789, 724, 887, 130, 833, 849, 253, 334, 152, 343, 872, 511, 549, 531, 858, 573, 206, 771, 566, 338, 724, 481, 183, 146, 545, 643, 176, 210, 819, 559, 152, 119, 163, 511, 455, 658, 640, 797, 505, 614, 810, 347, 178, 890, 575, 492, 262, 664, 506, 279, 237, 163, 796, 373, 619, 148, 438, 216, 885, 348, 344, 610, 577, 181, 645, 771, 661, 277, 851, 283, 192, 495, 580, 698, 522, 570, 781, 628, 190, 312, 380, 728, 822, 596, 231, 645],
      "stim6": [300, 453, 553, 802, 839, 452, 723, 855, 765, 875, 589, 519, 462, 649, 550, 244, 652, 845, 452, 103, 471, 242, 108, 890, 290, 346, 736, 172, 608, 303, 475, 212, 457, 749, 873, 429, 417, 825, 588, 617, 353, 861, 675, 157, 311, 308, 360, 751, 864, 355, 206, 759, 386, 877, 267, 609, 406, 330, 575, 879, 230, 817, 220, 223, 266, 733, 540, 458, 718, 353, 437, 406, 855, 685, 216, 682, 738, 352, 283, 468, 547, 210, 493, 634, 347, 360, 210, 443, 455, 665, 713, 771, 718, 321],
      "stim7": [352, 642, 124, 658, 173, 629, 442, 636, 762, 137, 506, 852, 279, 387, 452, 313, 844, 736, 353, 804, 569, 468, 535, 123, 237, 399, 137, 796, 102, 464, 763, 140, 682, 333, 162, 785, 398, 152, 693, 626, 368, 688, 124, 428, 822, 775, 658, 101, 267, 518, 652, 768, 374, 873, 849, 794, 885, 870, 404, 645, 459, 330, 197, 210, 877, 571, 545, 232, 692, 222, 156, 826, 182, 706, 335, 857, 841, 527, 207, 869, 336, 483, 781, 685, 655, 199, 716, 522, 383, 170, 732, 774, 427, 717],
      "stim8": [598, 695, 753, 212, 869, 534, 837, 348, 803, 329, 416, 305, 185, 375, 812, 206, 111, 831, 647, 694, 507, 175, 475, 218, 283, 292, 879, 474, 124, 528, 771, 345, 498, 524, 617, 871, 722, 249, 694, 517, 476, 542, 180, 215, 771, 803, 157, 591, 618, 533, 254, 758, 488, 557, 609, 245, 391, 276, 763, 625, 516, 484, 506, 720, 858, 451, 710, 594, 691, 762, 246, 402, 197, 516, 839, 358, 564, 259, 258, 672, 847, 405, 695, 324, 243, 213, 369, 333, 693, 621, 756, 488, 523, 844],
      "stim9": [865, 715, 322, 678, 731, 668, 703, 314, 880, 393, 773, 377, 114, 614, 368, 291, 747, 612, 348, 604, 575, 884, 768, 498, 198, 717, 432, 376, 813, 258, 129, 790, 631, 709, 699, 286, 468, 102, 308, 638, 546, 421, 383, 142, 645, 733, 882, 390, 561, 742, 287, 764, 335, 290, 344, 719, 297, 153, 605, 101, 125, 420, 687, 228, 873, 239, 742, 597, 579, 717, 635, 771, 820, 644, 205, 578, 649, 284, 129, 646, 416, 742, 552, 616, 154, 337, 705, 867, 261, 681, 764, 365, 489, 106],
      "stim10": [334, 792, 538, 775, 806, 351, 767, 265, 716, 849, 824, 824, 878, 123, 156, 183, 653, 669, 648, 458, 864, 311, 752, 120, 134, 576, 177, 525, 549, 366, 318, 379, 304, 788, 621, 215, 524, 165, 332, 547, 324, 112, 766, 587, 429, 569, 630, 480, 104, 880, 532, 851, 315, 308, 183, 831, 281, 249, 164, 437, 311, 117, 635, 354, 466, 172, 799, 423, 762, 316, 866, 886, 106, 362, 361, 448, 223, 781, 185, 645, 819, 656, 722, 297, 400, 671, 711, 389, 169, 213, 867, 191, 372, 452],
      "stim11": [686, 162, 491, 316, 328, 480, 450, 280, 728, 199, 207, 275, 694, 249, 166, 346, 843, 793, 802, 508, 119, 627, 651, 288, 185, 499, 874, 194, 738, 497, 617, 793, 232, 850, 566, 191, 698, 606, 582, 692, 192, 864, 167, 440, 508, 567, 628, 397, 563, 503, 575, 701, 208, 527, 798, 751, 695, 438, 253, 869, 898, 488, 681, 826, 155, 298, 328, 358, 103, 854, 895, 363, 377, 517, 340, 852, 197, 749, 187, 302, 117, 675, 486, 432, 174, 176, 858, 247, 213, 253, 789, 315, 118, 120],
      "stim12": [344, 119, 300, 704, 697, 699, 480, 516, 888, 594, 792, 203, 266, 693, 193, 789, 689, 649, 814, 703, 580, 605, 550, 152, 172, 118, 587, 401, 703, 225, 305, 293, 174, 637, 833, 591, 485, 777, 421, 284, 224, 159, 689, 129, 407, 657, 143, 484, 264, 875, 605, 863, 423, 626, 604, 351, 855, 723, 841, 478, 822, 196, 537, 466, 178, 349, 676, 454, 871, 863, 375, 549, 537, 128, 173, 374, 340, 892, 131, 234, 112, 810, 455, 193, 511, 547, 180, 152, 491, 689, 791, 475, 562, 827],
      "stim13": [218, 752, 541, 519, 199, 245, 448, 828, 800, 819, 570, 452, 512, 685, 326, 364, 828, 539, 822, 678, 440, 720, 620, 113, 126, 282, 234, 780, 536, 745, 350, 823, 155, 435, 242, 869, 124, 524, 298, 632, 658, 824, 320, 809, 379, 211, 674, 790, 506, 482, 470, 879, 825, 244, 114, 659, 186, 144, 475, 389, 210, 500, 505, 672, 114, 332, 106, 396, 893, 734, 763, 696, 509, 375, 539, 848, 727, 125, 241, 207, 880, 643, 609, 107, 222, 491, 223, 693, 284, 248, 720, 199, 828, 597],
      "stim14": [123, 618, 480, 149, 555, 282, 591, 506, 718, 799, 748, 363, 391, 575, 409, 799, 352, 267, 639, 482, 348, 704, 637, 255, 187, 617, 533, 840, 109, 281, 385, 706, 209, 596, 331, 587, 126, 879, 884, 535, 847, 330, 345, 491, 548, 624, 304, 530, 761, 526, 215, 876, 866, 390, 238, 792, 627, 113, 751, 320, 164, 381, 408, 492, 180, 553, 785, 377, 553, 408, 442, 581, 759, 252, 378, 287, 182, 366, 196, 130, 169, 133, 216, 696, 335, 589, 121, 589, 762, 372, 751, 347, 124, 888],
      "stim15": [765, 718, 253, 725, 859, 427, 744, 816, 875, 209, 232, 471, 295, 247, 172, 844, 335, 112, 766, 571, 315, 593, 496, 750, 171, 520, 735, 506, 423, 612, 409, 857, 227, 228, 485, 651, 772, 836, 166, 227, 249, 664, 314, 864, 563, 369, 858, 688, 610, 605, 841, 756, 236, 250, 231, 307, 274, 833, 538, 628, 317, 277, 899, 113, 517, 666, 378, 162, 803, 732, 539, 552, 818, 845, 438, 563, 644, 137, 136, 812, 814, 235, 411, 551, 830, 288, 899, 872, 566, 342, 873, 188, 422, 367],
      "stim16": [461, 258, 400, 299, 400, 413, 111, 188, 810, 668, 499, 479, 447, 326, 537, 801, 878, 338, 854, 698, 634, 174, 464, 684, 148, 135, 718, 639, 755, 385, 176, 577, 390, 586, 368, 414, 374, 599, 508, 769, 674, 393, 473, 533, 122, 264, 259, 741, 894, 849, 348, 792, 166, 157, 225, 106, 490, 890, 680, 113, 337, 883, 798, 449, 415, 230, 870, 764, 707, 783, 416, 644, 729, 402, 245, 302, 717, 767, 280, 829, 339, 588, 760, 893, 549, 713, 230, 889, 295, 585, 886, 828, 405, 629],
      "x_pos1": [0.7, 0.553, -0.479, -0.626, 0.332, 0.479, -0.626, -0.258, -0.184, 0.037, 0.626, -0.405, -0.037, -0.332, -0.479, 0.184, 0.111, 0.7, 0.258, -0.479, -0.626, -0.037, 0.184, -0.553, -0.258, -0.184, 0.553, 0.111, 0.553, 0.553, -0.479, -0.626, -0.184, 0.7, -0.626, 0.7, -0.626, 0.479, 0.332, -0.258, -0.332, 0.332, -0.405, 0.479, 0.7, 0.332, 0.037, -0.553, -0.405, -0.626, 0.037, -0.479, -0.7, 0.258, -0.553, -0.037, -0.7, -0.405, -0.332, 0.184, -0.332, -0.037, -0.479, -0.553, 0.553, -0.258, -0.184, -0.258, -0.479, 0.184, 0.037, -0.7, -0.553, 0.111, 0.7, -0.332, 0.7, 0.184, -0.479, -0.184, -0.258, -0.111, -0.184, -0.479, 0.7, 0.332, -0.626, 0.405, 0.184, -0.626, -0.626, -0.111, 0.037, -0.258],
      "x_pos2": [-0.405, -0.7, -0.258, 0.258, 0.479, -0.258, -0.405, 0.479, -0.553, -0.332, 0.184, -0.626, 0.626, 0.258, -0.332, -0.258, 0.553, 0.626, -0.184, 0.626, -0.332, -0.184, 0.7, -0.479, 0.405, -0.332, 0.405, 0.111, 0.7, -0.184, -0.405, -0.479, 0.258, 0.258, -0.405, -0.405, -0.626, 0.037, 0.111, 0.479, 0.184, 0.184, 0.258, -0.626, 0.037, 0.553, -0.258, -0.258, -0.553, -0.111, -0.626, 0.111, -0.037, 0.111, 0.7, 0.332, 0.479, 0.626, 0.184, -0.258, 0.405, 0.7, 0.184, -0.332, 0.7, -0.479, 0.405, 0.037, -0.258, -0.7, 0.7, 0.479, 0.405, 0.332, 0.332, -0.553, -0.479, 0.479, -0.7, -0.7, -0.479, 0.7, 0.626, 0.332, -0.626, -0.332, 0.332, 0.258, 0.037, 0.7, -0.332, -0.553, -0.479, 0.479],
      "x_pos3": [0.184, -0.037, 0.405, -0.7, -0.7, 0.111, 0.111, 0.332, 0.332, 0.184, -0.7, -0.037, 0.479, 0.626, -0.258, 0.184, 0.258, -0.332, -0.184, 0.037, 0.332, -0.405, -0.553, 0.037, 0.037, -0.258, 0.7, 0.7, 0.553, -0.405, -0.184, 0.626, 0.626, -0.405, 0.184, 0.405, 0.111, 0.111, -0.7, -0.7, 0.258, -0.7, 0.626, 0.037, 0.258, 0.626, 0.258, -0.626, 0.111, 0.405, -0.553, -0.626, 0.111, -0.405, 0.258, 0.479, -0.111, 0.626, -0.405, 0.332, -0.7, 0.553, 0.184, 0.7, 0.258, 0.332, -0.405, 0.626, -0.037, 0.332, -0.553, 0.037, -0.405, 0.037, 0.7, -0.332, 0.037, -0.037, -0.037, 0.7, -0.626, 0.405, -0.479, 0.332, -0.111, 0.7, 0.405, 0.258, -0.479, 0.479, 0.479, 0.479, -0.111, 0.037],
      "x_pos4": [-0.553, -0.258, 0.626, 0.184, -0.553, -0.405, 0.184, -0.332, -0.479, -0.111, 0.332, 0.7, 0.184, 0.258, 0.037, -0.258, -0.626, -0.553, 0.111, -0.626, -0.405, 0.626, 0.405, 0.405, -0.626, -0.479, 0.111, -0.7, -0.258, 0.7, 0.037, -0.258, 0.626, -0.7, 0.037, 0.332, 0.553, 0.7, -0.037, -0.258, 0.258, -0.037, -0.479, -0.332, -0.626, -0.7, 0.553, 0.184, -0.553, -0.184, -0.258, -0.037, 0.7, 0.405, 0.037, -0.405, 0.626, -0.037, -0.626, -0.553, 0.7, -0.479, 0.184, -0.184, 0.184, -0.184, 0.111, -0.479, 0.258, -0.258, -0.258, 0.332, 0.111, 0.553, -0.479, 0.332, -0.479, -0.037, 0.258, -0.7, -0.037, 0.111, -0.479, 0.258, 0.626, -0.7, -0.332, -0.258, -0.479, -0.479, 0.479, -0.258, 0.184, 0.553],
      "x_pos5": [0.332, -0.479, 0.258, 0.553, 0.111, 0.111, -0.332, 0.479, -0.184, 0.7, 0.111, 0.184, 0.332, 0.037, 0.553, 0.553, -0.405, -0.626, 0.111, -0.037, -0.405, 0.405, -0.479, 0.7, 0.332, 0.479, 0.7, 0.111, 0.405, -0.037, 0.553, -0.258, -0.111, 0.037, -0.332, -0.626, 0.258, -0.258, -0.258, -0.184, 0.405, -0.037, 0.7, -0.184, -0.258, 0.111, 0.037, 0.553, -0.626, -0.553, 0.479, 0.7, -0.332, -0.7, 0.553, -0.037, 0.111, -0.184, 0.332, 0.405, 0.7, 0.479, -0.037, -0.479, 0.184, 0.111, 0.553, 0.037, -0.332, -0.258, -0.332, 0.7, -0.184, -0.332, -0.626, 0.332, 0.405, -0.258, -0.037, -0.037, 0.258, -0.7, 0.332, 0.258, 0.332, 0.258, 0.553, -0.479, 0.184, 0.7, -0.184, 0.7, -0.7, 0.479],
      "x_pos6": [-0.037, -0.405, -0.037, 0.111, -0.111, 0.258, -0.7, 0.258, -0.7, 0.479, 0.037, -0.258, 0.405, -0.7, -0.184, 0.037, -0.479, 0.037, -0.037, 0.332, -0.037, -0.7, 0.7, 0.7, 0.626, 0.184, -0.037, -0.037, 0.184, -0.626, 0.332, -0.7, -0.7, 0.7, -0.479, 0.184, 0.479, -0.7, 0.405, -0.258, -0.258, -0.111, 0.111, -0.553, -0.332, -0.184, -0.111, 0.7, 0.184, -0.332, 0.553, -0.111, 0.553, 0.7, 0.111, -0.111, 0.553, 0.479, -0.405, 0.479, -0.111, 0.7, -0.037, -0.332, -0.553, 0.258, 0.184, 0.184, -0.111, -0.405, -0.332, -0.405, -0.479, -0.258, 0.479, 0.258, 0.037, 0.111, 0.479, -0.553, 0.332, 0.405, -0.405, 0.332, -0.184, 0.037, 0.258, 0.405, 0.479, 0.037, -0.037, 0.037, 0.553, -0.479],
      "x_pos7": [-0.479, 0.111, 0.479, -0.479, 0.626, 0.405, -0.7, 0.626, -0.405, 0.7, -0.332, 0.7, -0.258, 0.553, -0.553, 0.479, -0.037, 0.332, 0.553, 0.258, -0.553, 0.184, -0.184, -0.258, 0.184, 0.258, -0.258, 0.332, -0.332, -0.258, -0.258, 0.332, 0.626, 0.7, -0.332, -0.405, 0.111, 0.037, 0.626, 0.405, 0.258, -0.258, -0.111, 0.553, 0.553, -0.258, -0.332, -0.553, 0.037, -0.626, 0.553, 0.332, -0.479, -0.405, -0.258, 0.626, -0.7, -0.626, 0.111, 0.405, -0.184, -0.184, -0.553, 0.7, 0.332, 0.111, 0.258, -0.332, 0.7, 0.184, 0.626, -0.111, 0.479, 0.258, 0.037, 0.037, 0.037, -0.626, 0.405, 0.479, 0.184, 0.626, -0.553, -0.405, -0.626, 0.332, 0.479, 0.037, -0.184, -0.553, -0.626, -0.037, 0.111, 0.037],
      "x_pos8": [0.405, -0.7, 0.184, -0.037, 0.037, -0.258, 0.037, 0.037, 0.332, -0.184, -0.626, 0.258, -0.405, 0.553, -0.258, -0.258, -0.037, 0.111, -0.258, 0.405, -0.258, 0.553, 0.626, 0.553, 0.111, -0.332, 0.037, -0.626, -0.479, -0.626, -0.111, -0.479, -0.258, 0.332, 0.184, -0.479, -0.479, 0.037, 0.7, -0.626, 0.037, -0.479, -0.258, 0.553, 0.479, 0.258, -0.7, 0.405, 0.7, -0.037, -0.7, 0.405, 0.7, -0.479, -0.479, -0.479, 0.332, 0.184, 0.626, 0.258, -0.7, 0.479, -0.332, 0.626, -0.479, -0.553, 0.626, -0.037, 0.332, 0.7, -0.7, 0.037, -0.7, -0.258, -0.184, -0.332, 0.111, -0.405, 0.111, -0.626, 0.037, 0.332, 0.7, 0.332, -0.332, 0.479, 0.258, -0.553, -0.111, 0.626, -0.037, -0.7, -0.184, -0.405],
      "x_pos9": [-0.332, -0.111, -0.405, -0.553, -0.405, -0.037, 0.258, -0.332, -0.332, 0.037, 0.553, -0.626, 0.626, -0.184, -0.258, -0.405, -0.037, 0.553, 0.553, -0.258, -0.553, 0.111, 0.037, -0.258, -0.405, 0.553, -0.111, 0.405, -0.7, 0.037, -0.184, 0.7, 0.405, -0.037, -0.111, 0.626, -0.405, 0.037, -0.111, 0.7, -0.405, -0.553, 0.479, 0.405, 0.037, -0.332, -0.405, -0.626, 0.037, -0.7, -0.184, 0.037, -0.7, -0.037, -0.258, -0.553, -0.037, -0.184, -0.037, -0.111, -0.111, 0.037, -0.7, 0.332, 0.7, -0.111, 0.258, 0.626, -0.037, -0.184, -0.479, -0.7, 0.111, 0.332, -0.111, 0.479, 0.479, 0.184, -0.184, 0.7, -0.553, 0.7, -0.184, -0.7, 0.111, -0.332, 0.405, 0.479, 0.405, -0.111, -0.258, 0.479, -0.332, -0.037],
      "x_pos10": [-0.332, -0.111, 0.7, -0.184, -0.111, 0.111, -0.479, 0.626, -0.479, -0.111, 0.332, -0.553, -0.184, -0.332, 0.111, 0.7, 0.479, 0.626, -0.332, 0.184, 0.332, -0.7, 0.7, 0.037, -0.332, -0.332, 0.258, -0.553, 0.7, -0.553, 0.258, -0.7, -0.332, 0.553, -0.258, -0.553, 0.332, 0.405, -0.7, 0.258, 0.553, 0.405, 0.037, 0.405, 0.111, 0.553, 0.332, 0.184, 0.037, 0.7, -0.553, 0.405, -0.184, -0.626, -0.111, 0.553, -0.258, -0.184, -0.479, 0.405, -0.332, 0.479, 0.111, 0.332, 0.405, -0.184, -0.7, 0.111, 0.405, -0.626, 0.553, 0.479, -0.111, 0.111, 0.479, -0.184, 0.626, -0.405, 0.553, -0.258, 0.626, -0.626, 0.332, 0.626, 0.037, -0.332, 0.626, 0.111, -0.037, 0.037, 0.553, 0.7, -0.037, 0.553],
      "x_pos11": [-0.553, -0.479, -0.626, 0.258, 0.626, 0.479, 0.332, -0.626, 0.332, -0.405, 0.037, 0.553, -0.258, -0.037, 0.332, 0.626, 0.037, 0.332, -0.111, 0.037, -0.184, 0.258, 0.332, -0.184, -0.258, 0.184, -0.037, -0.184, -0.258, 0.553, -0.332, 0.111, -0.405, 0.553, 0.553, 0.479, 0.7, -0.626, -0.7, 0.553, 0.111, -0.111, 0.7, -0.332, -0.184, 0.037, -0.626, -0.405, -0.184, -0.184, 0.258, 0.553, 0.553, 0.553, 0.553, 0.258, -0.626, -0.405, 0.111, 0.479, 0.258, -0.626, 0.405, -0.258, 0.7, 0.037, -0.7, 0.405, 0.184, 0.7, 0.553, -0.184, 0.332, -0.7, -0.258, -0.332, -0.184, 0.332, 0.037, -0.553, -0.626, 0.553, 0.7, -0.184, -0.405, -0.332, -0.626, 0.111, -0.626, -0.037, -0.184, -0.7, -0.258, 0.405],
      "x_pos12": [-0.7, 0.7, 0.553, -0.479, 0.258, -0.479, 0.626, 0.553, 0.479, 0.037, 0.258, -0.111, 0.626, -0.479, 0.184, -0.332, 0.479, 0.626, 0.332, 0.479, -0.258, -0.479, -0.184, 0.7, 0.479, -0.405, 0.7, 0.479, 0.258, -0.258, -0.405, -0.405, 0.7, -0.626, 0.479, 0.258, -0.332, 0.405, 0.479, 0.332, -0.405, -0.479, -0.405, -0.479, 0.258, 0.405, -0.332, -0.184, -0.626, 0.258, -0.184, 0.258, 0.258, -0.479, -0.479, -0.258, 0.037, 0.037, -0.479, 0.258, -0.405, -0.553, -0.037, -0.332, -0.479, -0.626, 0.111, -0.626, 0.626, -0.037, -0.479, -0.037, -0.258, 0.258, 0.405, -0.332, 0.553, -0.7, 0.553, 0.037, -0.553, -0.626, -0.332, -0.037, 0.184, -0.553, -0.184, 0.111, -0.553, -0.258, 0.7, -0.626, -0.258, -0.479],
      "x_pos13": [0.258, 0.258, 0.332, 0.037, 0.184, 0.479, 0.332, 0.258, -0.184, -0.7, -0.553, 0.037, -0.626, -0.258, 0.184, -0.626, 0.405, 0.184, -0.405, -0.111, -0.7, 0.405, 0.037, -0.626, 0.405, 0.405, -0.111, -0.332, 0.184, 0.332, 0.479, 0.184, 0.479, -0.111, -0.405, 0.037, -0.258, 0.479, -0.258, -0.7, 0.111, -0.7, 0.626, 0.332, 0.405, 0.037, 0.7, -0.332, -0.037, 0.405, 0.258, 0.258, -0.184, -0.184, 0.405, -0.258, 0.405, 0.479, -0.332, 0.037, 0.184, 0.111, -0.7, 0.332, 0.7, 0.405, -0.111, -0.332, -0.037, 0.553, -0.553, -0.553, 0.405, -0.258, 0.553, -0.7, -0.626, -0.111, 0.405, 0.405, 0.626, -0.405, -0.332, -0.553, 0.111, 0.479, -0.037, 0.626, -0.332, -0.184, 0.479, -0.037, 0.111, 0.405],
      "x_pos14": [-0.037, 0.479, -0.479, -0.626, 0.258, 0.479, -0.111, 0.037, 0.626, 0.553, -0.111, -0.111, 0.111, 0.479, 0.111, -0.037, 0.184, -0.111, -0.479, -0.626, 0.7, 0.184, 0.184, 0.037, 0.626, -0.184, -0.258, -0.184, -0.184, -0.184, 0.479, 0.184, -0.258, -0.405, 0.037, -0.111, 0.553, 0.479, -0.553, 0.037, -0.037, -0.258, 0.626, -0.405, -0.7, 0.7, 0.258, 0.479, -0.258, -0.405, 0.405, 0.111, 0.184, 0.037, -0.405, 0.258, -0.479, -0.479, -0.405, -0.184, -0.405, 0.111, 0.111, -0.184, -0.037, -0.7, 0.405, 0.479, 0.037, -0.184, 0.332, 0.037, -0.037, -0.037, 0.626, -0.037, 0.258, -0.626, 0.553, -0.332, -0.405, 0.553, -0.405, 0.258, 0.7, -0.258, -0.405, 0.7, 0.405, -0.7, -0.7, 0.037, 0.332, -0.553],
      "x_pos15": [0.479, -0.037, 0.037, 0.553, -0.7, 0.184, -0.184, -0.626, 0.405, -0.258, -0.553, 0.184, 0.332, -0.479, -0.258, -0.626, 0.184, -0.553, 0.7, 0.479, 0.037, 0.626, -0.332, 0.184, 0.258, 0.626, 0.7, -0.405, -0.7, -0.111, -0.184, -0.553, 0.553, -0.7, 0.7, 0.553, 0.405, 0.184, 0.626, 0.111, -0.553, 0.111, -0.626, -0.479, -0.479, 0.7, 0.7, -0.332, -0.7, -0.553, -0.184, 0.626, 0.553, -0.332, -0.7, 0.7, -0.7, 0.553, -0.037, 0.405, -0.184, 0.626, 0.7, -0.553, -0.332, -0.258, -0.405, 0.405, 0.405, 0.626, 0.258, 0.7, 0.037, -0.037, -0.7, 0.037, -0.184, -0.553, -0.405, 0.184, -0.7, 0.7, -0.553, 0.111, 0.258, -0.332, -0.479, -0.258, 0.111, 0.111, 0.258, -0.258, -0.037, 0.332],
      "x_pos16": [-0.258, 0.184, 0.553, 0.037, -0.479, 0.405, 0.332, -0.7, -0.626, -0.626, -0.184, -0.037, -0.111, 0.626, 0.332, 0.479, 0.332, 0.037, -0.553, -0.405, 0.184, -0.332, -0.111, 0.7, -0.037, 0.184, -0.7, -0.037, 0.111, 0.553, 0.037, 0.111, -0.479, 0.479, -0.479, -0.479, -0.111, 0.553, -0.184, 0.332, 0.332, -0.184, -0.037, -0.037, -0.111, -0.258, -0.405, -0.111, 0.037, -0.111, 0.405, 0.332, 0.111, 0.553, -0.553, -0.037, 0.184, -0.553, -0.258, 0.184, 0.405, 0.553, 0.037, 0.184, 0.184, -0.258, 0.553, 0.111, 0.037, 0.332, -0.405, -0.479, 0.405, 0.479, 0.479, 0.479, 0.184, -0.184, -0.7, -0.479, -0.479, 0.258, -0.258, 0.553, -0.037, 0.7, 0.553, -0.111, 0.332, 0.7, 0.111, -0.479, -0.479, 0.332],
      "y_pos1": [0.065, 0.175, -0.155, 0.285, 0.45, 0.12, -0.045, 0.23, 0.12, -0.155, 0.45, -0.265, 0.23, -0.1, 0.12, 0.175, -0.045, -0.155, -0.045, 0.45, 0.01, 0.45, -0.265, -0.045, -0.045, -0.265, -0.045, 0.34, 0.065, -0.155, 0.23, -0.21, 0.285, -0.045, 0.23, -0.1, 0.23, 0.175, -0.1, 0.065, 0.23, 0.45, -0.1, -0.1, -0.045, 0.01, -0.265, 0.175, 0.175, -0.265, -0.21, 0.34, 0.395, 0.01, -0.045, 0.395, 0.01, -0.1, -0.1, -0.1, 0.12, -0.1, -0.265, -0.045, -0.045, 0.285, 0.065, 0.12, -0.045, 0.12, -0.21, 0.065, 0.395, -0.265, 0.12, 0.12, 0.12, -0.265, -0.045, -0.155, 0.12, 0.175, -0.265, 0.175, -0.045, -0.155, 0.34, 0.12, 0.175, -0.045, -0.155, 0.01, -0.155, -0.155],
      "y_pos2": [-0.045, 0.065, -0.1, 0.395, 0.395, 0.175, -0.265, -0.045, -0.21, 0.01, 0.175, 0.45, 0.34, -0.045, 0.12, 0.01, -0.21, 0.12, 0.23, 0.285, -0.21, -0.1, -0.21, 0.12, 0.45, 0.175, -0.1, 0.175, 0.395, -0.155, 0.45, 0.12, 0.01, 0.175, 0.285, 0.01, 0.12, 0.065, -0.1, -0.1, -0.265, -0.155, 0.175, 0.395, -0.1, -0.045, 0.01, -0.265, 0.175, 0.45, 0.23, 0.175, -0.1, 0.12, -0.045, 0.175, -0.21, 0.34, -0.045, 0.395, -0.155, 0.45, -0.155, 0.395, 0.12, 0.01, -0.045, 0.01, 0.175, 0.285, 0.01, 0.45, 0.01, -0.045, 0.01, -0.045, 0.12, 0.12, 0.01, 0.34, 0.175, 0.175, 0.23, -0.265, -0.21, -0.1, 0.065, 0.45, 0.34, 0.45, 0.395, -0.155, 0.12, 0.34],
      "y_pos3": [0.01, 0.34, -0.155, -0.21, -0.155, 0.395, 0.395, -0.265, 0.12, -0.1, 0.395, 0.175, -0.045, -0.265, 0.175, -0.045, 0.065, 0.065, 0.45, 0.175, -0.1, -0.1, 0.12, 0.12, 0.175, -0.045, -0.21, 0.175, 0.45, 0.065, 0.12, -0.21, -0.21, -0.155, 0.23, 0.395, 0.23, -0.045, 0.34, -0.155, 0.175, 0.01, 0.34, -0.265, -0.045, 0.065, -0.21, 0.34, -0.265, -0.155, -0.045, -0.1, 0.175, 0.175, 0.12, -0.1, 0.45, 0.065, 0.395, -0.155, -0.045, -0.21, -0.21, 0.12, 0.175, 0.45, -0.045, -0.045, 0.12, -0.265, -0.265, -0.21, 0.23, 0.065, -0.265, 0.45, -0.045, -0.155, 0.45, 0.175, 0.34, -0.045, 0.01, -0.155, 0.175, 0.395, -0.21, 0.395, 0.34, -0.045, 0.395, 0.175, -0.265, 0.12],
      "y_pos4": [0.12, -0.265, 0.01, 0.01, -0.045, 0.065, -0.155, 0.065, -0.1, -0.045, -0.155, -0.1, -0.155, 0.065, 0.285, 0.395, 0.34, 0.23, -0.265, -0.155, 0.395, 0.175, -0.045, -0.265, 0.175, 0.34, 0.45, 0.23, 0.12, -0.045, 0.065, 0.12, 0.45, -0.21, 0.395, -0.155, 0.395, 0.12, -0.1, -0.265, 0.285, 0.065, -0.265, -0.1, 0.34, -0.21, -0.045, 0.175, -0.045, 0.395, -0.045, 0.175, 0.23, -0.21, 0.45, -0.045, -0.265, 0.01, 0.065, -0.21, 0.34, 0.01, 0.01, 0.45, 0.34, -0.21, 0.395, 0.12, 0.45, 0.12, 0.45, 0.175, -0.21, -0.045, -0.21, 0.395, -0.045, 0.395, 0.065, -0.045, 0.23, 0.12, 0.395, 0.12, 0.01, 0.34, -0.045, 0.34, 0.45, -0.265, -0.155, 0.34, 0.45, -0.045],
      "y_pos5": [0.285, 0.12, 0.34, 0.12, 0.01, 0.175, -0.045, 0.285, 0.285, 0.23, 0.45, 0.175, 0.45, 0.285, 0.285, 0.23, 0.395, 0.395, -0.155, -0.045, -0.21, -0.265, 0.065, 0.01, -0.045, -0.1, 0.23, 0.12, 0.065, 0.12, 0.23, -0.045, 0.34, 0.34, -0.155, 0.34, -0.155, -0.265, 0.175, -0.21, 0.175, 0.01, -0.045, -0.265, -0.21, 0.45, 0.12, 0.12, 0.285, -0.155, 0.175, 0.34, 0.175, -0.265, -0.155, 0.23, 0.065, -0.045, 0.285, -0.21, -0.045, -0.265, -0.21, 0.175, -0.265, -0.045, 0.065, -0.21, 0.175, 0.395, 0.12, -0.265, 0.34, -0.1, 0.285, 0.01, 0.01, -0.21, 0.34, 0.23, 0.01, 0.395, -0.265, -0.1, -0.045, 0.45, -0.155, -0.155, 0.12, 0.395, -0.21, 0.01, 0.065, 0.23],
      "y_pos6": [-0.1, 0.45, -0.1, 0.45, 0.175, 0.01, 0.065, -0.265, 0.395, 0.175, 0.175, 0.175, 0.12, 0.285, -0.265, 0.285, -0.045, 0.45, -0.1, 0.285, -0.1, 0.12, 0.01, -0.265, 0.01, -0.155, 0.175, 0.34, -0.155, 0.175, -0.1, 0.23, 0.23, 0.45, 0.065, -0.155, -0.045, -0.21, 0.01, 0.34, 0.12, 0.12, 0.12, -0.21, 0.34, -0.265, 0.45, -0.155, 0.395, 0.065, 0.065, 0.065, 0.45, 0.01, -0.21, 0.45, -0.045, 0.23, 0.065, 0.34, -0.045, 0.175, 0.23, 0.285, -0.045, 0.175, 0.45, -0.045, -0.1, -0.21, -0.1, -0.045, 0.175, 0.175, 0.175, -0.21, 0.285, 0.395, 0.175, 0.285, 0.45, 0.285, 0.45, 0.285, 0.285, 0.12, 0.45, -0.045, -0.21, 0.45, 0.34, 0.065, 0.23, -0.21],
      "y_pos7": [0.34, 0.12, 0.12, 0.175, 0.45, 0.01, 0.23, 0.23, -0.045, -0.21, 0.065, -0.21, 0.285, -0.155, -0.045, 0.395, -0.155, 0.065, -0.045, -0.265, 0.12, 0.065, 0.395, 0.395, -0.21, 0.01, 0.12, -0.155, 0.065, -0.1, 0.12, 0.12, 0.23, -0.265, 0.395, -0.1, 0.34, 0.395, 0.175, -0.1, 0.01, 0.34, 0.34, -0.155, -0.21, 0.34, 0.285, 0.12, 0.285, -0.045, -0.155, -0.045, 0.01, -0.045, -0.155, 0.34, 0.395, 0.23, 0.12, 0.395, 0.065, -0.155, 0.34, 0.065, 0.065, 0.01, -0.045, 0.01, -0.21, 0.34, 0.12, -0.045, 0.065, -0.155, -0.155, -0.265, 0.175, -0.1, 0.175, 0.23, 0.395, 0.285, -0.045, 0.23, 0.23, 0.34, -0.265, 0.45, -0.045, 0.065, 0.45, -0.045, 0.01, -0.265],
      "y_pos8": [-0.265, 0.01, -0.045, 0.065, -0.045, -0.1, -0.155, 0.34, 0.23, 0.34, 0.45, -0.155, -0.1, 0.12, -0.21, -0.265, -0.21, 0.12, 0.23, 0.34, 0.45, 0.23, -0.1, -0.265, 0.34, 0.395, -0.265, -0.265, -0.21, 0.395, 0.065, -0.265, -0.155, -0.1, 0.175, 0.01, -0.265, -0.265, -0.045, -0.045, 0.285, -0.21, -0.265, -0.045, 0.23, 0.01, 0.065, -0.155, 0.12, -0.1, 0.45, 0.01, -0.1, -0.045, -0.155, 0.23, -0.265, -0.045, 0.175, -0.265, 0.395, -0.1, 0.175, -0.045, 0.285, 0.065, 0.065, -0.155, 0.395, -0.265, 0.34, -0.155, 0.01, 0.01, 0.12, 0.01, -0.045, -0.155, 0.12, -0.21, -0.21, 0.45, 0.01, -0.1, 0.285, 0.23, -0.045, 0.175, 0.175, 0.34, 0.01, 0.065, 0.065, 0.34],
      "y_pos9": [-0.045, 0.01, 0.065, -0.1, 0.175, -0.1, -0.1, 0.175, -0.265, 0.23, 0.23, -0.1, 0.45, -0.1, -0.155, 0.175, -0.045, -0.045, 0.45, -0.1, -0.1, -0.155, 0.01, 0.285, 0.12, 0.34, 0.395, 0.175, -0.045, 0.12, -0.265, -0.1, 0.34, 0.065, 0.065, 0.285, 0.23, -0.045, 0.175, -0.21, -0.1, 0.12, 0.065, 0.395, 0.34, 0.45, 0.175, -0.1, 0.23, -0.265, 0.23, -0.155, 0.175, -0.155, 0.285, -0.265, 0.45, 0.01, -0.265, 0.285, -0.1, 0.23, -0.265, 0.175, -0.045, 0.395, -0.155, 0.12, -0.265, -0.155, 0.45, -0.045, 0.285, 0.23, 0.45, 0.23, 0.34, -0.21, -0.265, 0.12, -0.1, -0.045, 0.285, 0.01, 0.01, 0.12, 0.34, 0.175, 0.34, 0.175, -0.1, -0.155, 0.45, -0.1],
      "y_pos10": [0.23, 0.175, 0.065, -0.265, 0.23, -0.045, 0.065, 0.01, -0.045, -0.155, -0.045, 0.175, -0.21, 0.45, -0.045, -0.155, 0.01, -0.21, 0.065, -0.21, -0.21, 0.34, 0.23, 0.34, -0.21, 0.23, -0.045, 0.23, 0.45, 0.175, 0.12, -0.265, -0.21, 0.065, 0.175, -0.155, -0.045, -0.155, 0.285, 0.45, -0.265, 0.065, -0.21, -0.21, -0.21, -0.265, 0.395, 0.45, 0.065, 0.395, 0.12, 0.23, -0.1, 0.45, 0.23, 0.45, -0.1, 0.23, -0.155, 0.23, -0.265, -0.21, -0.265, 0.45, 0.065, -0.045, 0.285, -0.21, -0.1, -0.1, -0.21, -0.21, -0.155, -0.045, -0.265, 0.01, -0.1, 0.285, 0.395, 0.395, 0.45, -0.155, 0.285, 0.34, 0.12, 0.395, 0.395, -0.265, -0.265, 0.12, 0.23, -0.265, -0.155, 0.175],
      "y_pos11": [0.34, 0.34, -0.155, 0.175, 0.395, 0.23, -0.1, -0.265, 0.175, 0.12, 0.23, 0.45, 0.395, 0.01, 0.175, 0.065, 0.23, 0.01, 0.23, -0.265, 0.23, 0.395, 0.12, 0.01, -0.1, 0.065, 0.285, 0.45, -0.1, 0.175, 0.01, -0.045, 0.12, -0.265, 0.45, 0.01, 0.175, 0.285, -0.045, 0.34, -0.045, -0.265, 0.285, -0.155, -0.265, 0.175, -0.265, 0.395, 0.23, 0.285, -0.21, 0.34, 0.395, 0.395, 0.34, 0.175, 0.23, 0.34, 0.175, -0.045, -0.155, 0.34, 0.01, 0.395, -0.21, 0.285, 0.45, -0.21, 0.23, -0.045, -0.155, -0.045, -0.21, 0.065, 0.395, 0.285, 0.065, 0.23, -0.045, -0.1, 0.12, -0.045, 0.23, 0.175, 0.065, -0.265, 0.065, 0.395, 0.175, 0.285, -0.155, -0.155, 0.01, 0.34],
      "y_pos12": [-0.265, -0.21, 0.395, -0.1, -0.265, 0.175, 0.12, -0.265, -0.155, 0.34, 0.01, 0.065, 0.23, -0.045, -0.045, 0.175, -0.21, 0.01, 0.285, -0.1, 0.34, 0.01, 0.12, -0.1, -0.155, -0.265, 0.34, -0.045, -0.155, 0.34, 0.175, 0.45, 0.45, 0.45, 0.23, -0.21, 0.34, 0.01, 0.12, 0.175, 0.45, 0.34, -0.045, 0.45, -0.21, 0.395, -0.155, 0.065, -0.045, -0.265, 0.065, -0.155, -0.045, 0.395, -0.265, -0.1, -0.21, -0.155, 0.285, -0.1, 0.01, 0.23, 0.45, 0.23, 0.065, -0.21, -0.21, -0.21, -0.21, -0.21, -0.21, 0.01, 0.01, -0.265, 0.175, 0.34, 0.065, -0.155, 0.065, 0.175, 0.065, 0.395, 0.34, 0.395, -0.265, 0.175, 0.285, 0.065, 0.34, 0.34, -0.045, -0.045, 0.12, 0.395],
      "y_pos13": [-0.045, 0.175, -0.045, -0.155, 0.45, -0.21, 0.45, 0.45, -0.045, -0.045, 0.34, -0.155, -0.045, -0.265, -0.21, 0.34, 0.285, 0.395, -0.21, 0.175, -0.045, 0.01, 0.175, 0.01, -0.21, -0.155, -0.265, 0.065, 0.34, -0.1, 0.01, 0.01, 0.175, -0.155, -0.265, -0.265, -0.1, -0.265, 0.23, 0.065, 0.34, 0.395, 0.12, 0.45, 0.01, 0.285, 0.23, 0.45, -0.21, 0.175, 0.065, 0.175, 0.23, 0.065, 0.285, 0.175, 0.01, 0.45, 0.34, 0.12, -0.265, 0.23, 0.01, -0.1, 0.45, 0.12, 0.12, -0.045, -0.1, 0.45, 0.395, 0.12, -0.155, -0.21, 0.01, 0.175, -0.155, 0.175, 0.23, -0.21, 0.23, 0.285, 0.395, 0.175, 0.45, 0.285, 0.175, 0.23, -0.21, 0.45, 0.175, 0.45, -0.265, 0.175],
      "y_pos14": [0.23, 0.175, 0.12, -0.265, 0.01, -0.045, -0.1, 0.395, -0.21, 0.395, 0.12, 0.12, 0.45, -0.155, 0.285, -0.045, 0.065, -0.1, -0.1, -0.1, 0.23, 0.23, -0.21, 0.23, 0.395, -0.155, -0.155, 0.175, 0.34, -0.1, 0.34, -0.155, 0.01, 0.285, 0.45, 0.34, 0.175, -0.045, 0.175, -0.21, 0.12, 0.23, 0.175, 0.34, 0.45, -0.21, -0.045, 0.45, -0.21, 0.12, -0.265, 0.01, 0.065, 0.12, -0.1, 0.395, 0.34, 0.23, 0.45, 0.12, 0.34, -0.21, -0.1, 0.23, 0.065, 0.12, 0.34, 0.45, -0.21, 0.285, -0.265, 0.065, -0.1, -0.155, 0.23, -0.21, 0.34, -0.045, 0.12, -0.155, 0.395, -0.155, -0.045, 0.23, 0.395, 0.34, -0.1, -0.155, 0.23, 0.285, 0.23, 0.12, 0.395, -0.155],
      "y_pos15": [0.065, 0.065, 0.175, -0.265, 0.45, -0.045, 0.34, 0.45, 0.065, 0.175, 0.12, 0.395, 0.12, 0.395, 0.12, 0.285, 0.45, -0.21, 0.285, 0.34, 0.395, 0.12, 0.175, 0.01, 0.285, 0.01, 0.45, 0.395, 0.01, -0.21, -0.1, -0.1, -0.045, 0.34, -0.1, -0.045, 0.12, 0.175, 0.12, -0.1, 0.285, 0.395, 0.23, -0.265, 0.175, 0.175, -0.155, 0.23, -0.265, 0.395, 0.285, 0.34, -0.21, -0.155, 0.065, 0.395, 0.45, 0.01, 0.45, 0.065, -0.045, 0.395, -0.155, -0.21, 0.175, -0.265, 0.285, 0.285, 0.45, -0.1, -0.1, 0.34, 0.395, 0.45, -0.155, 0.01, 0.285, 0.395, -0.155, 0.01, 0.34, -0.265, -0.21, 0.285, 0.175, 0.065, 0.065, 0.395, -0.1, 0.395, -0.21, 0.01, -0.1, -0.265],
      "y_pos16": [0.34, -0.155, 0.01, -0.21, 0.395, 0.175, 0.395, -0.1, 0.34, 0.285, -0.265, 0.01, 0.065, -0.045, 0.01, 0.175, 0.34, -0.155, 0.395, -0.1, -0.1, -0.045, 0.23, -0.21, 0.175, -0.1, 0.285, -0.045, -0.1, 0.23, 0.12, 0.23, -0.21, 0.45, -0.21, -0.155, 0.23, -0.1, 0.285, 0.12, 0.175, -0.045, 0.065, 0.45, -0.155, -0.045, -0.045, -0.155, -0.265, -0.265, -0.155, 0.34, -0.155, 0.12, 0.12, 0.065, 0.45, -0.045, 0.395, -0.155, 0.45, 0.395, 0.12, -0.21, -0.21, 0.01, 0.395, 0.01, 0.45, 0.45, 0.34, 0.23, -0.1, 0.175, 0.12, 0.065, -0.045, -0.155, 0.175, -0.155, -0.265, -0.1, 0.23, -0.265, 0.12, -0.21, 0.065, 0.12, 0.395, 0.01, -0.155, -0.265, 0.34, -0.155],
      "block": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
      "trial_type": ["warmup", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test"],
      "mean": [450, 450, 550, 200, 450, 550, 450, 550, 450, 550, 550, 550, 450, 550, 550, 450, 550, 450, 450, 450, 450, 550, 550, 450, 450, 450, 450, 450, 200, 450, 550, 450, 550, 550, 450, 550, 450, 550, 550, 450, 200, 450, 450, 550, 550, 550, 550, 550, 450, 550, 450, 550, 550, 550, 450, 550, 550, 450, 550, 450, 550, 550, 450, 550, 450, 450, 550, 550, 450, 450, 550, 800, 450, 550, 550, 450, 450, 450, 450, 550, 550, 450, 550, 550, 450, 450, 450, 450, 800, 550, 550, 550, 450, 450],
      "stim1": [598, 489, 553, 231, 817, 797, 262, 307, 573, 881, 870, 541, 758, 144, 476, 278, 566, 675, 590, 885, 354, 839, 507, 446, 472, 148, 891, 313, 165, 891, 668, 418, 871, 220, 520, 438, 235, 755, 152, 455, 200, 277, 649, 799, 275, 449, 402, 219, 822, 835, 388, 663, 828, 844, 139, 766, 349, 667, 210, 437, 782, 681, 293, 517, 686, 105, 755, 353, 415, 191, 651, 817, 533, 280, 347, 480, 343, 148, 237, 572, 757, 367, 840, 228, 500, 289, 227, 235, 843, 544, 454, 316, 430, 523],
      "stim2": [633, 677, 261, 226, 241, 158, 504, 548, 295, 801, 894, 626, 754, 584, 602, 760, 749, 551, 104, 272, 614, 447, 145, 202, 604, 538, 596, 184, 103, 264, 615, 742, 774, 349, 736, 292, 250, 488, 815, 899, 232, 644, 108, 257, 622, 345, 741, 878, 490, 605, 642, 540, 352, 195, 644, 806, 284, 337, 213, 281, 853, 678, 411, 451, 278, 447, 155, 583, 204, 340, 745, 800, 825, 719, 464, 146, 116, 402, 270, 686, 891, 592, 564, 660, 186, 204, 702, 886, 738, 327, 527, 642, 223, 132],
      "stim3": [814, 336, 105, 135, 702, 269, 126, 840, 164, 835, 660, 337, 144, 283, 846, 234, 844, 828, 519, 561, 692, 878, 711, 221, 172, 317, 832, 626, 205, 231, 162, 371, 282, 289, 294, 801, 464, 836, 524, 540, 172, 854, 703, 885, 898, 319, 527, 783, 332, 863, 186, 562, 830, 688, 634, 516, 152, 175, 616, 814, 612, 283, 214, 640, 246, 431, 850, 465, 235, 106, 673, 745, 578, 730, 425, 570, 723, 427, 878, 861, 441, 163, 791, 842, 747, 837, 649, 520, 701, 651, 505, 518, 449, 809],
      "stim4": [360, 251, 657, 271, 448, 713, 885, 625, 308, 580, 786, 230, 765, 411, 615, 482, 803, 552, 592, 394, 415, 413, 852, 850, 458, 375, 780, 549, 274, 326, 421, 331, 346, 594, 134, 158, 867, 657, 664, 120, 115, 215, 247, 165, 516, 510, 724, 724, 197, 792, 287, 733, 506, 615, 261, 792, 751, 815, 820, 187, 231, 646, 324, 721, 323, 581, 574, 604, 504, 786, 245, 756, 513, 834, 679, 336, 287, 704, 623, 174, 824, 304, 288, 797, 708, 615, 183, 241, 726, 438, 100, 489, 334, 179],
      "stim5": [178, 250, 601, 137, 138, 487, 630, 319, 839, 645, 714, 571, 221, 673, 360, 339, 251, 517, 105, 175, 761, 719, 120, 731, 715, 428, 592, 139, 207, 486, 352, 310, 721, 839, 107, 161, 741, 607, 308, 150, 258, 129, 192, 784, 250, 813, 804, 634, 202, 592, 415, 711, 697, 646, 823, 109, 371, 224, 578, 435, 439, 457, 887, 342, 636, 533, 458, 208, 258, 713, 734, 875, 433, 631, 136, 512, 565, 771, 547, 168, 849, 404, 477, 263, 893, 480, 501, 684, 891, 815, 859, 128, 131, 865],
      "stim6": [154, 266, 164, 216, 822, 829, 476, 276, 525, 582, 706, 589, 896, 812, 666, 430, 861, 282, 407, 845, 114, 300, 370, 538, 306, 362, 301, 681, 186, 586, 544, 605, 246, 885, 219, 792, 490, 730, 458, 893, 288, 378, 400, 537, 672, 728, 591, 116, 527, 504, 266, 229, 839, 148, 259, 731, 697, 868, 222, 845, 670, 637, 388, 749, 364, 825, 605, 582, 751, 774, 130, 806, 872, 723, 530, 688, 373, 284, 446, 648, 351, 106, 401, 816, 471, 320, 499, 112, 748, 670, 841, 779, 441, 200],
      "stim7": [487, 413, 832, 160, 441, 758, 868, 855, 462, 568, 211, 702, 155, 727, 207, 526, 353, 225, 421, 884, 419, 687, 870, 119, 804, 737, 233, 551, 138, 447, 715, 838, 785, 690, 863, 833, 161, 761, 561, 329, 206, 772, 582, 723, 537, 201, 720, 801, 479, 392, 220, 129, 786, 667, 180, 220, 481, 223, 665, 178, 379, 809, 434, 336, 273, 284, 679, 897, 155, 400, 280, 720, 591, 615, 228, 220, 248, 459, 370, 762, 848, 222, 828, 579, 220, 168, 413, 670, 765, 614, 762, 608, 775, 133],
      "stim8": [400, 590, 870, 269, 301, 429, 606, 726, 319, 431, 465, 100, 615, 236, 669, 178, 148, 410, 264, 306, 374, 312, 824, 635, 197, 116, 608, 422, 115, 581, 508, 316, 729, 760, 469, 837, 109, 447, 792, 284, 108, 228, 504, 657, 404, 708, 500, 200, 800, 120, 773, 422, 100, 773, 232, 208, 589, 685, 864, 210, 378, 596, 668, 468, 471, 606, 608, 715, 283, 817, 736, 841, 346, 124, 683, 897, 288, 331, 177, 607, 535, 440, 158, 669, 163, 142, 886, 388, 774, 523, 718, 446, 165, 121],
      "stim9": [191, 583, 837, 112, 321, 538, 152, 182, 824, 482, 621, 721, 172, 691, 858, 819, 678, 238, 299, 213, 247, 549, 492, 297, 726, 501, 306, 684, 130, 305, 777, 362, 775, 518, 246, 842, 414, 116, 729, 697, 228, 180, 661, 492, 144, 590, 401, 366, 132, 788, 140, 369, 272, 462, 137, 107, 151, 278, 532, 793, 440, 291, 448, 834, 208, 228, 118, 229, 560, 756, 789, 887, 170, 789, 897, 248, 706, 777, 738, 576, 272, 292, 546, 335, 386, 640, 552, 318, 828, 587, 357, 767, 626, 574],
      "stim10": [372, 722, 250, 150, 686, 166, 140, 117, 631, 729, 575, 842, 226, 512, 247, 610, 407, 119, 304, 540, 281, 514, 643, 250, 127, 858, 281, 243, 276, 349, 174, 483, 770, 230, 784, 757, 754, 787, 484, 208, 163, 878, 101, 835, 644, 503, 120, 678, 742, 852, 707, 254, 240, 683, 593, 296, 843, 540, 855, 208, 675, 894, 139, 743, 882, 657, 248, 656, 824, 256, 408, 786, 447, 610, 801, 214, 664, 471, 598, 811, 860, 779, 138, 587, 353, 839, 145, 695, 827, 284, 158, 409, 316, 312],
      "stim11": [459, 270, 858, 229, 359, 579, 278, 692, 337, 373, 577, 813, 861, 655, 652, 871, 200, 661, 780, 514, 645, 451, 517, 472, 505, 891, 380, 435, 294, 101, 885, 608, 296, 826, 530, 796, 652, 132, 681, 214, 268, 227, 676, 437, 420, 172, 182, 684, 727, 512, 744, 632, 612, 875, 879, 727, 225, 209, 606, 150, 770, 653, 435, 683, 218, 119, 447, 527, 745, 263, 765, 876, 182, 633, 201, 870, 385, 645, 283, 110, 120, 130, 370, 339, 895, 804, 359, 299, 858, 710, 325, 817, 185, 310],
      "stim12": [667, 164, 690, 130, 142, 819, 204, 296, 540, 462, 534, 690, 254, 860, 155, 221, 270, 373, 216, 441, 650, 867, 481, 865, 758, 672, 116, 334, 141, 233, 744, 817, 166, 733, 300, 505, 402, 315, 547, 599, 209, 214, 893, 459, 371, 701, 243, 638, 347, 402, 864, 420, 526, 463, 779, 610, 736, 402, 379, 301, 258, 177, 828, 529, 558, 323, 887, 848, 375, 175, 310, 832, 387, 127, 827, 453, 130, 185, 118, 529, 205, 139, 762, 878, 103, 134, 487, 416, 737, 647, 750, 804, 169, 410],
      "stim13": [570, 416, 697, 286, 102, 769, 865, 825, 633, 269, 320, 204, 385, 868, 836, 737, 216, 245, 675, 455, 224, 260, 566, 321, 411, 155, 398, 424, 282, 576, 546, 161, 165, 393, 406, 334, 695, 841, 562, 391, 219, 883, 219, 665, 608, 584, 833, 643, 182, 232, 402, 880, 102, 340, 851, 815, 701, 504, 780, 776, 598, 687, 587, 215, 587, 735, 775, 564, 253, 422, 661, 703, 695, 824, 747, 392, 820, 612, 766, 844, 348, 899, 718, 128, 174, 400, 101, 193, 850, 141, 620, 301, 826, 887],
      "stim14": [131, 457, 135, 288, 548, 358, 305, 864, 193, 554, 257, 680, 184, 177, 370, 252, 886, 247, 897, 209, 750, 318, 518, 328, 209, 446, 100, 374, 279, 609, 716, 151, 643, 311, 550, 725, 460, 168, 855, 423, 160, 392, 495, 648, 719, 664, 471, 172, 338, 381, 218, 896, 888, 262, 237, 812, 808, 379, 289, 366, 579, 200, 166, 599, 295, 261, 356, 258, 301, 232, 614, 722, 117, 435, 354, 448, 282, 438, 113, 373, 705, 891, 582, 398, 505, 394, 494, 774, 836, 118, 638, 832, 368, 802],
      "stim15": [856, 468, 882, 209, 496, 407, 275, 658, 280, 127, 449, 534, 194, 371, 420, 157, 843, 861, 842, 220, 100, 529, 387, 274, 474, 356, 554, 508, 191, 896, 327, 350, 641, 591, 793, 126, 226, 304, 554, 143, 199, 671, 308, 282, 887, 721, 866, 721, 455, 797, 527, 703, 577, 863, 157, 561, 823, 301, 852, 390, 815, 783, 381, 830, 298, 880, 877, 524, 868, 627, 324, 811, 328, 211, 814, 489, 600, 146, 564, 709, 630, 846, 746, 857, 712, 309, 672, 439, 786, 863, 473, 176, 876, 239],
      "stim16": [330, 848, 408, 151, 636, 724, 624, 670, 277, 481, 161, 620, 616, 796, 821, 306, 725, 416, 185, 286, 560, 717, 797, 651, 262, 300, 232, 733, 214, 319, 646, 337, 590, 572, 249, 403, 280, 856, 114, 855, 175, 258, 462, 175, 833, 792, 675, 543, 428, 133, 421, 657, 645, 276, 395, 724, 839, 593, 319, 829, 321, 328, 597, 143, 877, 185, 408, 787, 469, 342, 735, 823, 183, 515, 667, 237, 670, 400, 472, 370, 164, 626, 591, 424, 184, 625, 330, 330, 892, 868, 713, 768, 886, 704],
      "x_pos1": [0.258, 0.111, -0.037, -0.405, -0.479, 0.184, 0.626, 0.332, 0.7, -0.626, -0.626, 0.626, -0.111, 0.332, -0.405, 0.332, -0.111, 0.332, -0.332, -0.258, -0.184, 0.332, -0.553, -0.553, -0.332, -0.7, 0.479, 0.553, -0.479, 0.626, 0.184, 0.7, 0.111, -0.405, 0.332, -0.479, -0.405, 0.626, 0.332, 0.111, 0.626, -0.184, 0.037, -0.7, -0.7, -0.111, -0.332, 0.258, -0.7, 0.7, 0.332, -0.7, 0.405, -0.037, -0.184, 0.553, -0.405, -0.405, -0.184, 0.258, 0.626, -0.037, -0.111, -0.405, -0.553, 0.405, 0.553, -0.553, 0.184, 0.037, -0.553, -0.553, 0.332, -0.184, 0.479, 0.553, -0.626, -0.111, -0.7, 0.7, -0.553, 0.332, -0.626, -0.479, 0.258, 0.111, 0.7, -0.7, -0.7, -0.626, 0.405, 0.184, 0.184, -0.626],
      "x_pos2": [0.626, -0.258, 0.479, -0.405, 0.037, -0.405, 0.111, 0.553, 0.037, 0.332, 0.405, -0.7, -0.184, 0.184, 0.258, -0.111, 0.258, 0.553, 0.111, 0.184, -0.626, -0.626, -0.184, -0.184, -0.626, 0.332, -0.184, 0.184, 0.037, -0.258, 0.626, -0.553, -0.553, 0.479, 0.626, -0.405, 0.184, -0.479, -0.258, 0.332, 0.553, -0.626, -0.111, -0.479, 0.258, 0.626, 0.479, 0.553, -0.553, -0.626, 0.479, 0.111, 0.7, 0.332, -0.553, 0.479, -0.258, 0.258, -0.479, 0.184, 0.553, 0.553, 0.258, -0.111, 0.7, 0.405, 0.405, -0.111, 0.037, 0.479, -0.258, -0.479, -0.479, -0.479, -0.479, 0.111, 0.258, -0.626, 0.184, 0.184, -0.405, 0.332, -0.405, -0.405, -0.037, 0.626, -0.479, 0.479, -0.258, 0.258, 0.258, -0.037, -0.405, 0.111],
      "x_pos3": [0.332, 0.405, -0.7, -0.184, 0.184, -0.111, 0.479, 0.037, -0.037, 0.405, 0.037, 0.184, 0.111, 0.184, -0.7, 0.405, -0.037, 0.037, 0.405, 0.258, -0.7, 0.479, 0.184, -0.405, -0.037, -0.479, -0.7, -0.111, 0.7, -0.332, -0.479, -0.332, -0.332, 0.626, -0.332, 0.553, 0.405, -0.553, 0.479, -0.184, -0.7, 0.037, 0.258, 0.258, 0.479, -0.7, -0.037, -0.037, 0.258, 0.626, -0.037, 0.037, 0.479, -0.184, 0.7, -0.405, 0.111, 0.332, 0.479, 0.184, -0.184, 0.258, 0.258, 0.184, -0.626, 0.405, 0.405, -0.7, -0.553, -0.479, 0.037, 0.258, -0.553, 0.7, 0.332, -0.405, -0.479, -0.553, -0.111, -0.626, 0.553, -0.184, -0.184, 0.553, -0.258, 0.553, -0.405, -0.553, 0.111, 0.7, 0.258, 0.258, 0.7, -0.111],
      "x_pos4": [0.7, -0.7, 0.332, -0.479, 0.258, 0.553, -0.553, 0.553, 0.626, -0.553, 0.184, 0.037, 0.7, -0.405, -0.7, 0.184, 0.184, 0.553, 0.111, 0.037, -0.037, 0.111, 0.332, 0.037, 0.111, 0.111, 0.479, 0.258, -0.184, 0.037, 0.7, 0.479, 0.184, 0.332, 0.479, 0.258, 0.037, 0.332, 0.184, -0.332, -0.184, 0.405, 0.405, 0.037, 0.037, 0.405, 0.258, 0.553, 0.405, 0.479, -0.037, 0.037, -0.111, 0.626, 0.111, 0.332, -0.111, 0.626, 0.332, 0.037, -0.332, -0.7, 0.405, 0.405, 0.184, -0.479, 0.553, -0.332, 0.332, -0.332, -0.184, 0.553, -0.037, -0.258, -0.553, -0.111, -0.553, -0.405, 0.405, -0.479, 0.7, 0.479, 0.553, -0.037, -0.332, -0.037, -0.037, 0.553, 0.258, 0.332, -0.626, 0.553, -0.405, -0.479],
      "x_pos5": [0.626, 0.258, -0.111, 0.553, -0.7, -0.111, 0.7, -0.111, -0.184, -0.037, 0.111, -0.553, -0.258, 0.184, -0.7, 0.184, 0.405, 0.626, -0.037, -0.7, -0.479, 0.479, -0.626, 0.037, 0.553, 0.553, -0.626, -0.258, -0.111, 0.258, 0.479, 0.111, 0.479, -0.7, -0.037, -0.111, 0.626, -0.553, 0.553, -0.037, -0.553, -0.553, -0.258, -0.626, 0.037, 0.405, 0.626, -0.332, -0.626, -0.332, -0.258, 0.111, 0.111, 0.479, -0.626, -0.626, -0.184, -0.258, 0.626, 0.258, 0.626, 0.184, 0.479, 0.111, -0.405, 0.479, -0.405, -0.553, -0.626, 0.111, 0.037, -0.332, -0.332, 0.184, -0.405, 0.553, -0.405, 0.479, -0.553, -0.479, -0.184, -0.258, 0.405, 0.7, 0.184, 0.405, 0.332, 0.7, 0.037, -0.405, -0.7, -0.111, -0.258, -0.479],
      "x_pos6": [0.111, 0.184, -0.553, 0.037, -0.405, 0.037, 0.258, 0.553, 0.405, 0.553, 0.553, 0.553, 0.258, -0.332, 0.037, -0.037, 0.479, 0.405, -0.332, 0.184, -0.405, 0.7, 0.479, -0.479, 0.184, 0.553, -0.7, -0.332, 0.184, -0.626, -0.258, -0.258, -0.479, 0.405, 0.184, 0.258, 0.184, -0.405, 0.553, -0.258, 0.405, 0.405, 0.258, 0.405, 0.7, -0.184, -0.037, -0.479, 0.111, -0.553, 0.037, -0.037, 0.184, 0.184, -0.553, 0.184, -0.405, -0.258, -0.111, -0.184, 0.479, 0.479, 0.037, 0.037, 0.111, 0.332, 0.7, 0.111, 0.7, -0.037, 0.7, 0.184, 0.332, -0.184, 0.626, -0.037, -0.111, 0.037, -0.258, -0.626, -0.184, 0.626, 0.111, -0.405, 0.479, 0.479, 0.258, -0.258, -0.553, 0.332, 0.332, -0.111, 0.258, -0.553],
      "x_pos7": [-0.553, 0.258, -0.037, 0.479, -0.258, 0.479, 0.258, -0.332, -0.332, -0.332, 0.111, -0.184, 0.553, -0.553, 0.184, -0.7, -0.553, -0.626, 0.332, -0.184, -0.184, -0.626, -0.258, 0.258, 0.037, -0.111, -0.332, 0.405, 0.405, 0.111, -0.405, -0.258, -0.479, 0.111, 0.626, -0.111, 0.332, -0.184, 0.184, -0.405, -0.553, -0.479, -0.332, -0.405, -0.626, 0.479, 0.405, 0.332, -0.405, 0.479, -0.405, 0.258, -0.405, -0.479, -0.332, 0.111, 0.626, 0.332, 0.111, 0.553, -0.184, 0.626, -0.553, 0.111, 0.037, 0.037, -0.405, 0.184, 0.553, -0.111, 0.405, -0.184, -0.7, 0.626, -0.405, 0.626, 0.479, -0.553, -0.626, -0.037, -0.258, -0.553, -0.7, -0.626, -0.405, -0.258, -0.7, 0.479, 0.258, 0.553, -0.405, 0.479, 0.258, -0.184],
      "x_pos8": [-0.184, 0.479, 0.037, -0.111, 0.626, -0.479, -0.405, 0.258, 0.405, -0.553, 0.405, -0.7, -0.405, 0.111, 0.7, -0.258, 0.7, -0.405, -0.626, 0.258, -0.332, 0.184, 0.037, -0.626, 0.332, -0.332, -0.479, -0.258, 0.405, -0.037, 0.479, 0.184, 0.479, 0.405, 0.626, 0.626, -0.111, 0.7, 0.258, -0.111, 0.7, 0.111, 0.111, -0.7, 0.332, -0.111, 0.7, 0.111, 0.7, -0.553, 0.626, -0.626, -0.332, 0.7, -0.626, -0.7, 0.037, -0.626, 0.553, -0.111, -0.7, -0.332, -0.553, -0.479, -0.332, -0.258, 0.111, -0.037, -0.479, -0.037, 0.553, -0.553, 0.7, 0.479, -0.258, 0.479, 0.405, 0.111, -0.479, 0.111, 0.553, -0.553, 0.332, 0.037, 0.405, 0.7, 0.258, 0.037, -0.405, 0.111, -0.626, 0.553, -0.258, 0.479],
      "x_pos9": [-0.258, -0.111, 0.111, -0.037, 0.037, -0.626, 0.332, -0.111, 0.7, 0.258, 0.258, -0.553, -0.184, 0.626, -0.553, 0.258, 0.479, -0.553, -0.184, 0.405, -0.626, 0.037, 0.7, 0.258, 0.332, 0.037, 0.7, -0.332, 0.332, 0.037, 0.037, 0.037, -0.626, -0.111, 0.037, 0.258, 0.7, 0.258, -0.626, 0.479, 0.258, -0.405, -0.037, -0.626, -0.553, -0.111, -0.184, -0.553, 0.626, 0.7, -0.258, -0.111, 0.479, 0.184, 0.258, 0.111, 0.332, 0.258, 0.184, 0.553, 0.332, -0.7, -0.7, -0.7, 0.037, 0.553, 0.626, -0.7, 0.258, 0.111, -0.258, 0.553, -0.626, -0.405, 0.553, 0.111, 0.332, 0.405, -0.405, -0.258, 0.626, -0.626, -0.479, 0.626, 0.111, 0.553, 0.553, 0.479, -0.258, -0.479, -0.037, -0.332, 0.184, 0.405],
      "x_pos10": [-0.626, -0.037, -0.7, 0.405, 0.037, 0.553, -0.184, 0.111, -0.405, 0.184, 0.626, -0.111, 0.7, -0.626, 0.037, -0.7, 0.405, -0.7, 0.7, -0.332, -0.258, 0.7, -0.626, 0.258, -0.332, -0.553, -0.405, -0.184, 0.553, -0.332, 0.258, 0.553, -0.553, -0.479, -0.037, -0.111, -0.258, -0.626, 0.405, 0.553, -0.626, 0.7, -0.332, 0.184, -0.037, 0.553, 0.405, -0.626, 0.7, 0.037, -0.405, -0.332, 0.626, -0.626, 0.479, -0.553, -0.258, -0.553, -0.7, -0.405, 0.332, 0.332, -0.553, 0.111, -0.037, -0.332, 0.258, 0.405, 0.553, -0.405, 0.037, -0.626, -0.553, 0.258, -0.405, 0.258, 0.111, 0.111, 0.111, -0.7, -0.258, -0.184, -0.258, -0.626, 0.111, 0.626, -0.553, -0.553, -0.7, -0.184, -0.258, 0.037, -0.258, 0.479],
      "x_pos11": [-0.037, 0.111, 0.184, -0.7, 0.479, 0.258, 0.332, 0.553, -0.184, -0.405, 0.405, 0.479, -0.626, -0.332, 0.258, -0.111, -0.405, 0.405, 0.626, 0.111, 0.626, 0.405, -0.332, 0.626, -0.7, 0.626, -0.7, 0.184, -0.332, -0.184, -0.553, -0.7, -0.184, -0.479, -0.037, 0.626, 0.479, -0.332, -0.626, 0.553, -0.479, -0.405, 0.626, -0.405, -0.405, -0.405, 0.626, -0.332, -0.258, 0.479, 0.332, 0.111, -0.184, -0.037, 0.184, 0.626, -0.184, 0.7, 0.332, 0.7, -0.553, -0.111, -0.258, 0.479, 0.479, -0.553, -0.111, 0.7, 0.258, -0.7, 0.7, 0.037, -0.405, 0.258, -0.037, 0.184, 0.111, 0.626, 0.184, 0.405, 0.332, 0.405, -0.553, -0.037, 0.553, -0.037, -0.7, 0.258, 0.405, 0.626, -0.405, 0.7, -0.479, 0.184],
      "x_pos12": [-0.111, -0.7, -0.184, 0.184, -0.037, -0.553, 0.184, 0.111, 0.258, 0.7, -0.553, 0.111, -0.332, -0.332, -0.037, -0.626, -0.7, 0.184, 0.184, -0.405, -0.184, 0.258, 0.258, 0.479, 0.037, -0.626, 0.037, -0.479, -0.405, 0.7, 0.626, 0.405, 0.332, 0.332, -0.626, -0.111, 0.111, -0.626, 0.626, -0.553, 0.7, 0.553, 0.405, -0.626, -0.7, 0.258, 0.405, 0.332, 0.037, 0.405, -0.405, 0.037, 0.405, 0.332, -0.111, -0.7, 0.405, -0.553, -0.037, -0.258, 0.111, 0.405, 0.626, -0.037, -0.111, 0.037, 0.626, 0.037, -0.258, -0.111, 0.184, -0.332, -0.258, 0.479, 0.332, -0.111, -0.184, 0.7, 0.332, 0.405, -0.111, 0.7, 0.7, -0.258, 0.7, -0.626, 0.332, 0.332, -0.332, -0.553, -0.405, 0.479, 0.553, 0.479],
      "x_pos13": [-0.7, 0.626, 0.258, -0.258, -0.258, 0.111, -0.332, 0.7, -0.184, 0.111, -0.111, -0.479, 0.626, 0.184, -0.405, 0.626, 0.111, -0.258, -0.037, -0.553, 0.332, 0.405, -0.111, -0.332, -0.258, 0.111, 0.626, -0.7, -0.258, -0.7, -0.7, -0.111, 0.111, 0.405, 0.405, 0.7, 0.479, -0.626, 0.184, 0.111, -0.553, 0.479, 0.405, -0.626, 0.405, -0.7, -0.332, 0.553, 0.405, -0.405, 0.7, -0.405, 0.332, -0.111, 0.184, 0.626, 0.111, 0.184, -0.037, -0.7, 0.111, 0.258, -0.553, -0.553, 0.626, 0.184, 0.037, 0.111, -0.479, -0.7, -0.479, -0.037, 0.332, 0.7, 0.111, 0.111, -0.7, -0.626, 0.626, -0.258, 0.184, 0.184, 0.258, -0.111, -0.184, -0.405, -0.332, -0.332, -0.405, -0.258, -0.626, -0.479, -0.405, 0.626],
      "x_pos14": [-0.111, 0.553, 0.111, -0.479, 0.405, -0.111, 0.111, -0.553, -0.7, -0.332, 0.553, 0.553, 0.037, -0.7, -0.111, -0.479, -0.332, -0.184, 0.626, 0.7, 0.405, 0.553, -0.258, -0.258, -0.626, -0.184, 0.479, 0.405, 0.626, -0.479, -0.479, -0.479, -0.479, 0.479, -0.111, -0.405, 0.479, 0.7, 0.037, -0.258, 0.479, 0.553, 0.184, -0.332, 0.7, 0.7, 0.111, 0.7, -0.111, -0.111, 0.479, 0.553, 0.405, -0.553, -0.405, 0.553, -0.037, 0.037, -0.037, 0.184, 0.479, -0.332, -0.405, 0.405, 0.111, -0.184, 0.184, 0.479, -0.111, -0.405, -0.626, -0.553, 0.479, 0.332, -0.111, 0.332, 0.332, 0.332, 0.553, 0.479, -0.037, -0.479, 0.184, -0.332, -0.7, 0.111, -0.553, -0.111, -0.7, -0.037, 0.405, 0.405, -0.626, -0.553],
      "x_pos15": [0.553, -0.553, 0.111, 0.258, 0.479, 0.405, -0.553, -0.037, -0.405, -0.332, -0.405, -0.332, 0.184, 0.184, -0.258, -0.553, -0.111, 0.184, 0.258, 0.258, 0.332, -0.037, -0.332, 0.332, -0.258, -0.184, 0.626, 0.7, 0.405, 0.405, 0.037, 0.479, -0.258, -0.184, 0.626, 0.479, -0.037, -0.553, 0.037, 0.7, -0.405, -0.7, -0.332, -0.111, -0.111, 0.037, -0.037, -0.479, 0.258, -0.405, 0.037, -0.7, -0.037, 0.111, 0.405, -0.037, 0.258, 0.184, 0.258, 0.405, -0.111, 0.332, 0.479, -0.626, -0.626, -0.037, 0.7, 0.626, 0.037, 0.405, 0.479, -0.184, 0.405, -0.479, 0.037, -0.7, 0.258, -0.405, 0.037, -0.7, -0.111, -0.626, -0.7, 0.7, -0.405, 0.258, 0.111, -0.037, -0.626, -0.405, -0.184, -0.626, 0.037, -0.479],
      "x_pos16": [-0.553, 0.332, 0.7, -0.626, 0.405, -0.037, 0.405, 0.184, 0.7, -0.7, -0.479, 0.111, 0.111, -0.111, -0.184, -0.405, -0.184, -0.7, -0.111, 0.553, 0.626, -0.332, -0.332, -0.7, -0.405, 0.258, 0.258, 0.332, -0.332, -0.332, 0.405, 0.258, 0.479, -0.332, -0.479, -0.184, -0.405, -0.332, 0.626, 0.184, -0.111, 0.7, 0.626, 0.626, 0.258, 0.405, 0.332, -0.184, 0.405, 0.405, -0.258, 0.553, 0.258, 0.037, 0.479, 0.184, 0.037, -0.184, -0.111, 0.405, 0.553, 0.037, -0.479, -0.405, -0.405, -0.479, 0.405, -0.7, 0.7, -0.332, -0.184, -0.479, -0.7, -0.184, 0.037, 0.405, 0.553, 0.626, -0.111, 0.479, -0.184, 0.111, -0.7, -0.332, 0.626, -0.184, -0.258, 0.405, 0.037, 0.111, -0.037, -0.184, -0.405, -0.258],
      "y_pos1": [0.34, 0.34, -0.045, 0.45, 0.285, 0.285, 0.285, 0.34, -0.1, 0.23, 0.34, 0.395, 0.395, -0.045, -0.045, 0.12, 0.12, -0.1, 0.12, 0.12, 0.12, 0.45, 0.285, 0.065, 0.285, -0.045, -0.045, 0.065, 0.45, 0.34, 0.285, -0.155, 0.45, 0.45, 0.01, 0.01, 0.175, -0.155, -0.155, 0.23, -0.045, -0.265, 0.065, -0.045, 0.175, 0.12, 0.065, 0.45, 0.01, -0.265, 0.395, 0.12, 0.34, 0.34, -0.155, -0.045, 0.175, 0.01, 0.065, 0.34, 0.23, -0.1, 0.01, 0.45, 0.285, 0.12, 0.12, 0.12, -0.155, -0.1, 0.01, 0.01, 0.01, 0.23, 0.065, -0.1, 0.285, -0.265, 0.285, -0.045, 0.34, -0.045, -0.045, 0.175, 0.23, -0.1, 0.065, -0.155, 0.12, 0.01, 0.01, 0.01, 0.175, 0.065],
      "y_pos2": [-0.045, -0.155, 0.065, 0.12, 0.285, 0.065, -0.265, 0.23, 0.12, 0.45, 0.01, 0.285, -0.045, 0.285, 0.34, 0.01, -0.1, 0.12, 0.065, -0.045, -0.265, 0.395, 0.065, 0.01, 0.45, -0.265, 0.23, 0.34, 0.01, 0.065, 0.175, 0.34, 0.12, -0.1, 0.175, 0.285, 0.01, 0.45, 0.45, 0.12, 0.34, -0.265, 0.23, -0.155, -0.045, -0.1, 0.175, 0.065, 0.45, -0.21, 0.065, 0.23, 0.23, -0.265, 0.065, 0.23, -0.21, 0.01, 0.285, -0.21, 0.34, 0.175, 0.175, 0.285, -0.265, 0.285, 0.34, 0.45, -0.155, 0.175, 0.01, 0.01, -0.155, 0.12, 0.065, 0.065, 0.45, 0.34, 0.34, -0.21, -0.045, 0.45, 0.065, 0.01, 0.23, -0.155, 0.23, 0.45, -0.155, -0.21, 0.12, -0.265, -0.265, -0.21],
      "y_pos3": [-0.155, -0.155, 0.12, 0.23, -0.21, 0.175, 0.065, -0.265, 0.285, -0.21, 0.12, 0.065, 0.175, 0.34, -0.045, 0.285, 0.12, 0.23, 0.12, 0.01, 0.065, -0.265, 0.45, 0.12, -0.1, 0.065, 0.065, 0.12, -0.1, -0.1, -0.155, 0.065, 0.23, 0.395, -0.1, 0.285, 0.175, 0.395, 0.065, 0.23, 0.285, 0.45, -0.1, 0.175, -0.1, 0.12, -0.265, 0.12, 0.23, 0.285, -0.155, -0.1, 0.12, 0.395, 0.395, -0.265, 0.175, -0.155, 0.34, -0.155, -0.045, 0.175, 0.395, 0.23, 0.175, 0.175, -0.045, 0.23, 0.23, -0.045, 0.23, -0.1, 0.12, -0.045, 0.45, -0.045, -0.265, -0.045, 0.23, 0.175, 0.23, 0.34, 0.23, 0.285, 0.175, -0.265, 0.45, -0.045, -0.265, 0.12, 0.175, -0.21, 0.285, -0.21],
      "y_pos4": [0.34, 0.34, -0.155, -0.045, -0.265, -0.265, -0.265, -0.21, -0.155, -0.265, 0.34, -0.045, 0.34, -0.045, 0.285, -0.1, 0.395, 0.395, -0.1, 0.01, 0.12, 0.01, -0.21, 0.065, -0.1, 0.34, -0.21, -0.155, 0.175, 0.34, 0.065, -0.155, 0.12, 0.065, 0.23, 0.285, 0.12, 0.175, 0.01, 0.285, 0.23, 0.395, 0.01, 0.23, 0.395, 0.285, 0.23, -0.045, -0.045, 0.34, 0.395, 0.34, 0.12, 0.065, 0.45, 0.12, -0.21, 0.45, 0.12, 0.395, -0.265, 0.395, 0.45, 0.175, -0.1, 0.175, 0.285, -0.265, 0.175, 0.065, -0.21, 0.12, 0.285, -0.21, 0.23, 0.285, 0.065, 0.395, 0.01, 0.065, 0.285, 0.01, -0.1, 0.12, 0.175, 0.285, 0.12, 0.34, 0.34, -0.21, 0.285, 0.45, -0.1, -0.265],
      "y_pos5": [0.395, -0.1, -0.21, -0.045, -0.045, -0.265, 0.34, -0.1, 0.395, 0.065, 0.065, 0.45, -0.1, 0.01, -0.21, 0.065, 0.175, -0.21, -0.265, 0.12, 0.23, 0.45, 0.23, 0.12, 0.01, 0.175, 0.45, -0.265, -0.155, 0.395, -0.045, 0.175, -0.1, 0.34, 0.285, -0.265, -0.1, 0.065, 0.065, 0.01, -0.045, -0.155, -0.21, -0.21, 0.45, 0.175, 0.12, 0.23, 0.065, -0.265, 0.065, -0.21, 0.12, 0.395, -0.265, 0.285, -0.21, 0.12, 0.12, -0.155, 0.395, 0.34, -0.155, 0.175, 0.23, -0.155, -0.21, -0.155, -0.1, -0.265, 0.065, 0.12, 0.45, 0.065, -0.155, 0.01, 0.285, 0.065, -0.045, -0.265, 0.175, 0.12, 0.12, 0.12, -0.1, 0.34, 0.45, 0.395, -0.265, 0.175, -0.155, 0.23, -0.155, 0.45],
      "y_pos6": [0.175, 0.395, 0.065, 0.12, 0.12, 0.23, 0.12, 0.12, 0.285, 0.12, -0.155, -0.045, 0.395, -0.21, 0.12, 0.23, -0.265, 0.285, 0.23, -0.1, -0.045, -0.155, 0.34, -0.1, 0.395, -0.155, 0.01, -0.21, 0.34, -0.045, -0.155, 0.12, -0.21, 0.34, -0.21, 0.12, 0.45, -0.045, -0.21, 0.01, 0.285, 0.34, 0.45, 0.01, 0.23, 0.285, 0.23, 0.34, -0.265, 0.175, -0.155, 0.285, 0.01, 0.01, 0.23, 0.175, 0.12, -0.155, 0.065, -0.1, 0.23, 0.45, -0.265, -0.21, 0.285, 0.23, 0.395, -0.21, -0.155, 0.285, 0.065, 0.45, 0.34, 0.01, -0.155, 0.45, -0.1, 0.395, -0.1, -0.045, 0.395, 0.34, 0.12, 0.34, 0.12, 0.065, 0.175, -0.1, -0.155, 0.065, 0.01, -0.265, -0.155, 0.065],
      "y_pos7": [-0.1, 0.065, 0.175, 0.01, 0.175, 0.12, -0.045, 0.23, -0.045, -0.21, 0.34, 0.12, 0.23, 0.45, -0.155, 0.01, 0.45, -0.1, 0.01, 0.23, -0.155, 0.23, 0.285, 0.285, -0.1, 0.45, 0.23, 0.285, -0.045, 0.395, -0.155, 0.23, -0.045, 0.175, 0.12, 0.065, -0.1, -0.1, 0.285, 0.01, 0.395, 0.34, -0.045, -0.1, 0.395, -0.21, 0.065, 0.45, -0.265, 0.12, 0.01, 0.01, -0.045, -0.265, 0.065, -0.21, -0.1, -0.1, 0.01, 0.285, 0.285, 0.34, 0.285, -0.1, -0.045, -0.155, 0.395, 0.23, 0.01, 0.01, 0.12, 0.12, -0.155, -0.265, 0.285, 0.34, 0.285, -0.155, 0.01, 0.34, -0.045, -0.155, 0.12, -0.155, 0.34, 0.395, 0.065, -0.155, -0.265, -0.1, -0.155, 0.065, 0.12, -0.1],
      "y_pos8": [-0.1, 0.34, 0.34, -0.045, 0.395, 0.065, 0.285, -0.265, 0.23, 0.065, -0.045, 0.34, 0.395, 0.12, 0.175, -0.045, 0.285, 0.01, 0.45, -0.265, 0.45, 0.395, -0.265, 0.175, 0.12, 0.395, 0.01, -0.21, 0.395, 0.285, -0.265, -0.21, 0.175, 0.175, -0.1, -0.21, 0.175, -0.1, 0.395, 0.12, -0.21, -0.21, 0.45, 0.01, 0.12, -0.21, 0.01, 0.175, 0.12, 0.285, 0.34, 0.395, 0.395, 0.12, 0.065, 0.065, 0.065, 0.45, 0.34, 0.34, 0.285, -0.155, 0.395, 0.45, 0.065, 0.395, 0.12, -0.265, -0.1, -0.155, 0.01, 0.23, 0.34, 0.23, 0.12, 0.285, -0.155, 0.12, -0.045, -0.265, -0.045, 0.01, 0.395, -0.045, 0.395, -0.21, -0.155, 0.065, 0.065, 0.395, -0.155, -0.265, -0.21, 0.395],
      "y_pos9": [-0.1, 0.065, -0.045, 0.285, 0.23, -0.21, 0.065, 0.23, -0.045, 0.175, -0.21, 0.01, 0.175, 0.01, -0.21, 0.23, 0.23, 0.285, 0.285, 0.12, -0.045, -0.045, -0.1, 0.12, -0.21, 0.01, 0.34, -0.1, -0.155, -0.21, 0.23, 0.175, -0.265, 0.01, -0.1, -0.265, -0.21, -0.265, -0.155, 0.395, -0.1, 0.395, 0.285, -0.1, -0.045, 0.065, 0.34, 0.175, -0.045, -0.21, 0.01, -0.155, -0.1, 0.12, 0.23, 0.175, -0.265, 0.175, -0.1, -0.265, 0.34, -0.155, -0.1, 0.01, 0.175, 0.45, 0.285, -0.155, 0.01, -0.155, -0.045, 0.45, -0.045, -0.21, 0.45, 0.395, -0.1, 0.45, 0.175, 0.23, 0.23, -0.21, 0.34, 0.395, -0.21, -0.155, 0.065, -0.045, 0.12, 0.175, -0.045, 0.45, 0.285, -0.21],
      "y_pos10": [0.12, 0.175, -0.155, -0.265, -0.045, 0.285, -0.1, -0.155, 0.34, -0.155, -0.265, 0.23, 0.395, 0.45, -0.155, 0.45, 0.285, -0.265, 0.34, 0.285, 0.34, 0.395, 0.01, 0.01, 0.45, 0.175, 0.23, -0.155, -0.265, 0.065, 0.12, -0.21, 0.23, 0.23, 0.45, 0.01, 0.01, -0.155, -0.265, -0.1, -0.21, 0.12, 0.01, -0.21, -0.21, 0.01, -0.21, 0.065, -0.045, -0.1, 0.285, 0.175, 0.01, -0.265, 0.065, -0.1, 0.45, 0.12, 0.45, -0.21, -0.045, 0.12, 0.12, -0.265, -0.1, 0.45, 0.285, 0.45, 0.065, 0.23, -0.045, -0.045, 0.34, 0.01, -0.21, -0.265, -0.1, 0.395, 0.23, 0.45, -0.21, 0.175, 0.34, 0.34, -0.1, 0.065, 0.285, 0.12, 0.45, -0.045, 0.065, 0.45, 0.34, -0.045],
      "y_pos11": [-0.1, 0.45, 0.23, 0.01, -0.1, 0.34, 0.01, 0.395, -0.21, 0.12, 0.34, 0.065, -0.1, 0.285, -0.265, -0.1, 0.45, 0.34, 0.45, 0.23, -0.155, -0.045, 0.395, -0.1, 0.01, 0.34, 0.23, -0.1, -0.045, 0.01, 0.34, 0.34, 0.34, 0.175, 0.34, -0.155, 0.34, 0.01, 0.01, 0.34, 0.175, -0.265, -0.21, 0.01, 0.01, 0.23, 0.175, -0.21, 0.285, -0.265, -0.21, -0.265, 0.45, 0.12, 0.175, -0.21, -0.155, 0.01, -0.1, 0.12, 0.01, 0.34, -0.155, 0.34, -0.265, 0.175, 0.34, 0.34, 0.12, 0.34, 0.01, 0.12, 0.12, -0.1, -0.265, -0.1, -0.265, 0.01, -0.265, 0.395, 0.12, 0.065, 0.23, 0.285, 0.175, -0.045, 0.01, -0.21, 0.23, 0.34, -0.265, -0.21, 0.01, 0.45],
      "y_pos12": [0.395, 0.45, 0.23, -0.155, 0.34, 0.01, 0.23, 0.285, -0.155, 0.45, 0.285, -0.155, 0.285, 0.01, -0.21, 0.12, 0.395, 0.285, -0.21, -0.1, -0.1, 0.12, 0.175, 0.12, 0.065, 0.23, 0.285, 0.285, 0.175, 0.45, 0.34, -0.155, -0.265, 0.395, -0.1, -0.21, 0.01, 0.23, 0.285, -0.21, -0.265, 0.285, -0.265, -0.265, -0.045, 0.45, 0.01, -0.1, 0.065, 0.45, 0.23, -0.045, -0.265, 0.12, 0.45, -0.155, 0.45, -0.155, 0.285, 0.23, -0.265, 0.395, 0.285, -0.155, 0.45, 0.395, -0.045, 0.065, 0.065, -0.045, -0.155, -0.265, 0.12, -0.265, -0.155, 0.45, 0.065, 0.285, 0.395, 0.45, 0.45, -0.155, 0.45, 0.285, 0.395, 0.395, 0.34, -0.045, 0.23, 0.285, 0.395, 0.23, 0.175, 0.065],
      "y_pos13": [0.065, 0.12, 0.01, -0.155, 0.065, -0.1, -0.1, -0.045, 0.285, -0.045, 0.175, -0.265, -0.155, 0.175, -0.21, 0.12, 0.065, 0.065, 0.065, -0.1, 0.45, 0.065, -0.155, -0.1, 0.01, 0.175, 0.175, -0.045, 0.23, -0.1, 0.45, 0.065, 0.01, -0.21, 0.285, -0.21, 0.23, 0.34, -0.1, -0.1, 0.285, 0.12, 0.395, 0.175, -0.21, -0.155, -0.265, 0.175, 0.45, 0.34, 0.12, 0.12, -0.155, -0.21, -0.21, 0.34, 0.23, -0.265, 0.01, 0.01, 0.12, -0.045, -0.21, 0.285, 0.34, -0.21, -0.155, 0.065, 0.45, 0.395, 0.395, -0.21, -0.045, 0.01, 0.45, -0.21, -0.21, -0.265, -0.1, 0.175, 0.34, 0.175, 0.395, 0.12, -0.1, 0.285, 0.065, 0.23, -0.21, -0.1, 0.23, -0.155, 0.065, -0.155],
      "y_pos14": [0.01, 0.34, -0.1, -0.155, 0.395, 0.34, -0.1, -0.155, -0.21, 0.01, 0.395, -0.1, 0.12, 0.45, 0.23, 0.34, -0.155, 0.01, -0.265, 0.395, 0.34, -0.21, -0.155, 0.12, 0.285, 0.395, 0.285, -0.045, -0.155, 0.45, -0.1, 0.175, 0.34, 0.23, 0.23, 0.175, 0.01, 0.175, 0.01, 0.45, -0.265, -0.045, -0.1, 0.34, -0.21, 0.23, 0.23, 0.395, 0.23, 0.45, 0.395, 0.34, -0.21, -0.21, -0.21, 0.285, 0.45, -0.1, 0.45, 0.45, -0.045, 0.23, 0.01, -0.1, 0.395, 0.395, -0.155, 0.12, 0.285, -0.155, 0.45, 0.12, 0.065, -0.21, -0.045, -0.045, 0.395, 0.065, 0.285, 0.285, -0.21, 0.12, 0.395, 0.065, -0.21, 0.12, 0.175, -0.155, 0.285, 0.01, -0.1, 0.065, -0.045, -0.21],
      "y_pos15": [-0.1, -0.045, 0.23, 0.12, 0.34, 0.01, 0.065, 0.45, 0.395, 0.12, 0.23, -0.21, 0.285, 0.12, 0.34, 0.45, 0.395, -0.21, 0.12, 0.45, 0.01, 0.175, 0.12, 0.23, -0.21, -0.045, 0.065, 0.285, -0.21, 0.065, 0.175, -0.265, 0.01, 0.285, -0.21, 0.285, 0.01, 0.12, 0.285, 0.34, -0.155, -0.21, 0.065, 0.285, 0.285, 0.34, -0.155, 0.45, 0.065, -0.265, -0.045, 0.01, -0.1, 0.23, 0.175, 0.23, 0.01, -0.045, 0.12, 0.12, 0.23, 0.01, 0.01, 0.065, 0.395, 0.23, -0.045, 0.175, -0.045, 0.285, 0.065, 0.45, 0.34, 0.285, 0.285, 0.065, 0.285, 0.23, 0.23, -0.265, -0.045, 0.065, 0.34, 0.34, -0.1, 0.45, 0.01, -0.265, 0.34, 0.01, -0.045, 0.01, 0.065, -0.1],
      "y_pos16": [-0.21, -0.1, -0.155, -0.1, 0.065, 0.01, -0.155, 0.065, 0.23, -0.1, -0.21, 0.01, 0.23, 0.01, 0.285, 0.01, 0.065, 0.23, -0.21, 0.23, -0.045, 0.065, 0.45, -0.1, 0.12, 0.065, 0.175, -0.1, 0.01, 0.285, 0.01, -0.265, -0.155, 0.175, -0.21, -0.265, 0.34, 0.395, -0.045, 0.395, -0.155, -0.155, 0.065, -0.155, 0.01, 0.45, 0.175, 0.395, 0.395, 0.285, -0.265, -0.1, -0.155, -0.045, -0.045, -0.1, -0.265, 0.34, -0.265, 0.23, -0.045, 0.065, 0.12, -0.21, 0.395, -0.155, 0.12, 0.34, 0.395, 0.23, 0.285, 0.065, -0.21, 0.065, -0.1, 0.45, -0.155, 0.395, 0.12, 0.23, 0.12, 0.12, -0.265, 0.285, -0.045, 0.01, -0.265, 0.23, -0.155, 0.01, -0.21, 0.34, 0.45, 0.01],
      "block": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    },
    {
      "trial_type": ["warmup", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "attention", "test", "test", "test", "test", "test", "test"],
      "mean": [550, 450, 450, 450, 450, 450, 550, 450, 550, 550, 550, 550, 450, 550, 450, 450, 550, 200, 550, 450, 550, 450, 450, 450, 550, 450, 550, 450, 550, 800, 550, 450, 450, 450, 550, 450, 450, 550, 550, 550, 450, 450, 550, 800, 550, 450, 450, 550, 550, 450, 550, 450, 450, 550, 550, 550, 450, 550, 450, 550, 550, 550, 550, 550, 450, 550, 450, 200, 550, 550, 550, 450, 450, 450, 550, 550, 550, 450, 450, 550, 450, 450, 450, 450, 450, 450, 550, 800, 550, 450, 450, 550, 550, 550],
      "stim1": [725, 232, 152, 286, 404, 460, 471, 785, 538, 624, 810, 559, 700, 837, 556, 617, 328, 292, 605, 194, 699, 163, 275, 566, 717, 854, 650, 689, 808, 751, 105, 142, 834, 235, 545, 103, 193, 884, 739, 674, 257, 717, 658, 740, 726, 350, 515, 681, 681, 263, 305, 285, 326, 120, 803, 754, 374, 161, 810, 436, 146, 832, 674, 482, 321, 767, 351, 258, 670, 446, 453, 252, 273, 205, 889, 697, 717, 207, 268, 710, 274, 203, 289, 359, 624, 338, 752, 811, 264, 235, 107, 691, 897, 694],
      "stim2": [517, 768, 569, 789, 579, 178, 835, 304, 773, 436, 828, 330, 816, 707, 146, 269, 791, 152, 841, 455, 192, 239, 823, 870, 736, 258, 867, 193, 883, 795, 752, 362, 234, 569, 548, 820, 747, 402, 113, 704, 324, 654, 166, 754, 700, 311, 445, 541, 806, 140, 348, 513, 404, 405, 120, 191, 768, 783, 773, 190, 654, 501, 800, 452, 402, 869, 357, 101, 251, 149, 529, 873, 407, 185, 567, 628, 312, 301, 153, 365, 411, 430, 445, 852, 897, 178, 861, 739, 730, 204, 856, 102, 105, 193],
      "stim3": [573, 162, 878, 440, 818, 474, 198, 637, 597, 454, 812, 648, 362, 114, 709, 313, 461, 203, 180, 795, 740, 217, 325, 361, 834, 384, 302, 338, 254, 826, 137, 713, 483, 210, 326, 803, 164, 131, 492, 256, 387, 742, 656, 806, 628, 720, 408, 799, 506, 530, 544, 423, 648, 317, 520, 817, 465, 115, 106, 673, 768, 126, 544, 879, 675, 227, 878, 177, 869, 587, 467, 536, 519, 286, 130, 251, 301, 463, 567, 193, 574, 390, 263, 679, 865, 174, 614, 808, 154, 866, 836, 470, 554, 712],
      "stim4": [718, 353, 124, 606, 651, 747, 701, 111, 391, 108, 314, 421, 581, 676, 289, 340, 864, 178, 425, 308, 343, 550, 237, 650, 546, 434, 693, 413, 551, 798, 770, 886, 287, 372, 504, 847, 660, 666, 308, 702, 396, 216, 347, 784, 141, 431, 830, 814, 337, 373, 272, 241, 186, 532, 780, 527, 674, 788, 852, 585, 750, 372, 152, 557, 377, 490, 759, 285, 597, 578, 845, 274, 406, 110, 813, 779, 427, 614, 622, 899, 422, 525, 586, 298, 210, 671, 576, 795, 817, 470, 106, 660, 125, 571],
      "stim5": [675, 590, 489, 207, 110, 344, 784, 104, 104, 492, 796, 655, 673, 648, 472, 718, 848, 141, 752, 608, 513, 732, 383, 315, 517, 457, 409, 228, 146, 839, 501, 542, 369, 720, 273, 147, 237, 436, 517, 592, 514, 236, 355, 838, 662, 654, 263, 599, 400, 889, 779, 883, 235, 735, 845, 477, 160, 712, 506, 890, 721, 697, 684, 457, 447, 510, 767, 214, 664, 808, 493, 208, 423, 339, 556, 763, 730, 294, 534, 306, 718, 832, 736, 652, 143, 205, 833, 746, 518, 707, 677, 725, 727, 539],
      "stim6": [640, 467, 620, 653, 219, 861, 675, 742, 682, 179, 140, 165, 456, 147, 173, 325, 334, 158, 517, 435, 764, 505, 352, 127, 398, 219, 360, 467, 705, 720, 470, 574, 538, 855, 739, 320, 455, 275, 789, 405, 263, 465, 405, 850, 439, 295, 784, 421, 148, 749, 555, 146, 875, 788, 534, 625, 666, 752, 281, 802, 517, 365, 845, 144, 769, 860, 279, 206, 520, 134, 870, 259, 572, 457, 778, 767, 853, 335, 822, 688, 207, 814, 401, 111, 823, 220, 137, 825, 847, 422, 392, 367, 468, 808],
      "stim7": [231, 548, 142, 410, 139, 450, 736, 713, 544, 754, 131, 753, 351, 119, 687, 201, 552, 270, 433, 129, 885, 751, 108, 887, 113, 328, 782, 734, 244, 860, 822, 325, 168, 830, 471, 184, 453, 732, 803, 618, 575, 105, 710, 704, 485, 460, 676, 639, 847, 399, 294, 450, 426, 801, 174, 504, 453, 713, 398, 606, 707, 621, 153, 225, 173, 270, 499, 104, 221, 730, 572, 173, 420, 456, 306, 350, 713, 480, 831, 808, 315, 879, 322, 277, 121, 332, 389, 750, 448, 155, 681, 854, 773, 708],
      "stim8": [482, 169, 412, 305, 685, 264, 506, 326, 312, 893, 755, 412, 320, 661, 266, 350, 112, 137, 811, 479, 684, 481, 871, 391, 874, 813, 551, 546, 830, 755, 132, 232, 603, 317, 639, 842, 137, 652, 705, 840, 650, 391, 530, 900, 516, 232, 218, 104, 466, 261, 540, 712, 215, 207, 713, 484, 630, 324, 286, 286, 772, 598, 547, 521, 274, 673, 133, 216, 882, 550, 236, 248, 734, 770, 436, 681, 752, 585, 243, 329, 564, 299, 281, 200, 122, 812, 711, 860, 619, 181, 164, 644, 320, 882],
      "stim9": [199, 874, 855, 359, 394, 272, 746, 265, 712, 503, 331, 119, 134, 653, 581, 489, 687, 138, 428, 362, 515, 264, 288, 262, 474, 616, 789, 283, 599, 865, 711, 127, 433, 204, 843, 390, 315, 779, 154, 197, 855, 203, 543, 870, 452, 478, 663, 439, 493, 385, 626, 401, 688, 492, 691, 556, 855, 843, 102, 522, 709, 514, 733, 799, 677, 358, 311, 142, 579, 789, 834, 654, 155, 888, 117, 213, 834, 820, 897, 553, 818, 616, 837, 428, 277, 249, 211, 712, 645, 861, 517, 806, 278, 167],
      "stim10": [701, 520, 486, 380, 133, 313, 652, 233, 873, 645, 477, 609, 146, 814, 367, 161, 874, 124, 115, 746, 470, 820, 247, 226, 693, 322, 630, 134, 857, 877, 683, 687, 151, 178, 502, 543, 475, 820, 463, 173, 275, 114, 585, 718, 220, 333, 268, 180, 828, 459, 373, 795, 730, 759, 404, 215, 193, 782, 510, 300, 727, 486, 855, 817, 620, 588, 310, 173, 537, 829, 661, 456, 390, 521, 791, 478, 559, 342, 372, 854, 132, 711, 136, 743, 619, 865, 721, 819, 806, 115, 231, 402, 539, 880],
      "stim11": [728, 173, 224, 521, 439, 349, 356, 784, 670, 802, 665, 723, 703, 586, 708, 527, 732, 291, 674, 421, 219, 289, 515, 524, 879, 570, 284, 676, 173, 777, 835, 895, 537, 532, 431, 655, 235, 887, 466, 746, 789, 874, 760, 722, 388, 641, 241, 425, 716, 656, 886, 276, 627, 864, 230, 617, 557, 647, 140, 829, 449, 568, 603, 594, 360, 796, 799, 169, 417, 611, 301, 784, 397, 191, 505, 373, 504, 369, 401, 855, 557, 182, 319, 255, 404, 547, 311, 792, 149, 464, 378, 649, 794, 516],
      "stim12": [751, 211, 666, 795, 835, 189, 278, 245, 441, 383, 442, 758, 385, 852, 264, 424, 524, 300, 463, 551, 287, 295, 879, 233, 309, 255, 279, 493, 134, 894, 441, 795, 690, 884, 848, 178, 886, 186, 500, 808, 128, 314, 274, 744, 708, 348, 579, 729, 539, 307, 811, 557, 183, 669, 202, 407, 371, 123, 402, 226, 410, 718, 467, 646, 204, 141, 226, 127, 216, 886, 652, 718, 399, 818, 847, 128, 378, 771, 358, 725, 289, 111, 308, 505, 763, 602, 411, 832, 158, 278, 428, 600, 761, 769],
      "stim13": [605, 202, 599, 431, 102, 581, 582, 554, 615, 749, 308, 528, 546, 320, 162, 308, 674, 284, 575, 853, 242, 737, 786, 483, 498, 403, 587, 499, 614, 703, 859, 123, 661, 288, 468, 468, 422, 587, 866, 465, 338, 796, 804, 827, 758, 740, 338, 483, 856, 841, 568, 532, 154, 191, 586, 774, 235, 212, 539, 566, 120, 199, 500, 124, 563, 899, 220, 293, 606, 139, 864, 332, 441, 421, 374, 875, 780, 159, 271, 397, 391, 292, 806, 691, 286, 460, 368, 877, 827, 860, 133, 473, 440, 558],
      "stim14": [414, 818, 609, 341, 607, 456, 303, 448, 220, 524, 691, 855, 599, 361, 763, 637, 145, 118, 522, 126, 771, 435, 664, 191, 466, 428, 592, 231, 602, 856, 235, 268, 621, 250, 571, 204, 277, 391, 565, 821, 532, 442, 867, 885, 642, 538, 589, 547, 172, 550, 702, 302, 367, 630, 633, 679, 331, 668, 432, 755, 318, 768, 352, 564, 438, 893, 579, 208, 722, 291, 797, 353, 485, 453, 787, 515, 265, 843, 181, 163, 693, 495, 368, 627, 665, 340, 722, 861, 657, 535, 674, 513, 621, 214],
      "stim15": [478, 624, 190, 227, 602, 896, 671, 753, 637, 610, 708, 445, 107, 730, 719, 641, 501, 129, 672, 315, 857, 261, 344, 710, 580, 645, 469, 672, 821, 727, 712, 383, 438, 637, 662, 163, 831, 179, 651, 220, 586, 257, 257, 858, 768, 308, 110, 863, 617, 139, 595, 368, 896, 583, 849, 486, 146, 445, 244, 241, 758, 665, 732, 892, 334, 194, 302, 290, 255, 856, 123, 433, 872, 446, 492, 740, 241, 276, 520, 754, 363, 189, 874, 351, 123, 442, 693, 848, 461, 741, 367, 345, 618, 226],
      "stim16": [363, 489, 185, 450, 483, 366, 306, 196, 691, 644, 592, 820, 321, 575, 338, 880, 373, 285, 787, 423, 619, 461, 103, 404, 166, 214, 556, 604, 579, 757, 635, 146, 153, 119, 430, 533, 713, 793, 669, 579, 331, 674, 883, 800, 567, 361, 273, 536, 388, 259, 602, 316, 240, 707, 716, 687, 322, 732, 819, 893, 274, 770, 159, 647, 566, 265, 430, 237, 794, 417, 103, 647, 307, 654, 412, 562, 434, 341, 160, 201, 472, 232, 229, 172, 258, 765, 490, 725, 700, 106, 653, 499, 780, 363],
      "x_pos1": [0.7, -0.184, 0.479, 0.111, 0.332, -0.405, 0.184, -0.111, 0.479, 0.111, 0.553, -0.037, 0.184, 0.037, -0.111, 0.7, 0.332, -0.405, 0.258, -0.111, 0.111, 0.332, -0.626, -0.037, 0.332, -0.184, -0.7, -0.405, 0.479, -0.332, -0.479, -0.7, -0.258, -0.184, 0.405, 0.332, 0.7, 0.332, -0.479, 0.184, -0.037, -0.037, 0.405, -0.332, 0.258, 0.7, -0.258, -0.037, 0.479, 0.258, -0.626, 0.626, -0.332, -0.184, -0.553, -0.037, 0.626, 0.626, 0.111, 0.479, 0.258, -0.626, -0.111, -0.037, -0.626, 0.7, 0.479, -0.405, 0.332, 0.332, 0.332, 0.037, -0.479, 0.7, -0.258, 0.7, -0.626, 0.332, 0.7, 0.405, -0.479, 0.553, 0.479, 0.037, 0.111, -0.332, 0.332, 0.258, -0.184, 0.553, 0.405, -0.479, 0.479, -0.553],
      "x_pos2": [-0.037, 0.332, 0.626, 0.037, 0.258, 0.479, -0.037, 0.479, -0.626, 0.332, 0.184, 0.479, 0.184, 0.332, 0.626, -0.405, -0.7, 0.553, 0.479, 0.405, -0.258, -0.405, 0.037, 0.405, 0.111, 0.332, 0.111, -0.258, 0.405, 0.111, -0.553, 0.405, 0.626, -0.405, 0.479, -0.553, 0.479, 0.405, -0.258, 0.258, 0.037, 0.258, 0.626, -0.479, -0.479, -0.7, 0.7, -0.332, 0.184, 0.184, 0.479, -0.258, -0.037, 0.479, 0.553, -0.184, -0.626, 0.626, -0.626, -0.037, 0.479, 0.037, 0.037, 0.7, -0.111, -0.258, 0.479, -0.7, -0.7, 0.111, 0.553, -0.7, -0.111, -0.332, -0.111, -0.111, -0.037, -0.111, 0.553, 0.626, -0.479, -0.111, 0.553, 0.479, 0.184, 0.405, 0.553, -0.258, -0.7, 0.405, -0.405, -0.111, 0.553, 0.184],
      "x_pos3": [0.184, 0.626, 0.332, -0.553, 0.037, -0.037, -0.332, -0.553, -0.626, -0.037, -0.184, -0.037, 0.7, -0.184, -0.626, -0.258, 0.184, 0.479, -0.626, -0.111, 0.258, 0.405, -0.7, 0.332, 0.258, -0.332, -0.405, -0.479, -0.037, 0.626, -0.332, 0.258, -0.184, -0.111, -0.037, 0.7, -0.479, 0.037, -0.111, 0.332, -0.258, -0.111, 0.553, 0.258, -0.7, -0.405, 0.332, -0.405, 0.111, -0.184, 0.258, -0.405, 0.626, -0.553, -0.553, -0.258, -0.037, 0.553, -0.405, -0.7, -0.479, -0.7, 0.258, -0.626, 0.405, 0.332, 0.405, -0.479, -0.111, 0.184, -0.258, -0.332, -0.479, -0.553, -0.332, -0.332, 0.553, -0.7, -0.037, 0.626, 0.626, -0.111, 0.184, 0.258, -0.626, -0.037, 0.7, -0.258, -0.037, -0.258, 0.332, 0.553, 0.258, -0.553],
      "x_pos4": [0.332, 0.405, -0.626, -0.7, -0.037, 0.332, 0.332, -0.479, 0.553, -0.405, -0.405, 0.111, 0.479, 0.332, 0.553, -0.626, 0.479, -0.626, 0.626, 0.405, -0.184, -0.037, -0.184, -0.553, 0.037, 0.479, -0.626, 0.626, 0.479, -0.405, 0.479, 0.184, 0.7, -0.479, 0.258, -0.037, -0.037, 0.7, -0.7, -0.184, 0.553, -0.405, 0.626, 0.7, -0.626, -0.111, 0.258, -0.553, 0.111, 0.184, -0.184, 0.111, 0.7, -0.553, 0.479, -0.7, 0.479, -0.258, 0.332, 0.626, -0.626, -0.553, -0.332, 0.332, -0.258, 0.553, -0.184, 0.553, -0.258, 0.7, 0.184, -0.405, -0.258, -0.037, -0.405, 0.258, 0.7, 0.037, -0.405, -0.258, 0.037, 0.184, 0.258, -0.111, 0.184, -0.7, -0.037, -0.405, 0.258, 0.258, 0.626, 0.332, 0.111, 0.332],
      "x_pos5": [0.405, 0.479, -0.184, 0.479, 0.332, 0.7, 0.332, 0.626, 0.553, -0.258, 0.405, 0.7, -0.626, -0.405, 0.405, 0.258, -0.626, -0.258, 0.626, -0.258, 0.553, 0.7, 0.626, 0.553, 0.7, -0.553, 0.479, -0.332, 0.479, 0.184, -0.626, -0.332, -0.184, -0.037, -0.553, 0.037, 0.626, 0.258, 0.037, 0.332, -0.553, -0.7, 0.479, -0.111, 0.479, -0.258, 0.258, -0.7, -0.037, -0.332, 0.037, 0.7, -0.332, 0.258, -0.405, -0.184, 0.479, -0.184, 0.258, 0.332, -0.553, 0.111, -0.626, -0.405, 0.111, -0.626, -0.405, -0.626, 0.258, 0.111, 0.111, -0.479, -0.479, -0.332, 0.037, 0.7, -0.553, 0.479, 0.626, -0.626, 0.626, -0.405, -0.258, 0.553, -0.405, -0.258, -0.332, -0.553, -0.037, 0.7, -0.626, 0.184, 0.332, 0.479],
      "x_pos6": [0.553, -0.626, -0.111, -0.258, -0.626, -0.258, -0.111, 0.7, -0.037, 0.184, 0.479, -0.405, -0.332, -0.553, -0.037, 0.553, 0.7, -0.037, 0.037, 0.626, 0.553, 0.479, -0.332, 0.332, -0.037, 0.111, -0.258, -0.332, -0.258, -0.7, -0.7, 0.405, 0.553, 0.258, 0.553, 0.479, 0.258, -0.626, -0.184, -0.184, -0.111, -0.479, -0.7, 0.258, 0.111, -0.332, -0.332, 0.553, 0.7, 0.553, 0.479, -0.7, 0.405, 0.184, 0.553, -0.111, 0.258, 0.626, -0.479, 0.7, 0.184, 0.7, 0.7, 0.184, 0.258, 0.258, -0.332, -0.479, 0.7, 0.111, 0.626, 0.405, -0.7, 0.479, 0.332, 0.553, -0.111, 0.405, 0.037, 0.553, 0.7, 0.184, 0.405, 0.332, 0.332, -0.332, -0.7, -0.332, -0.111, -0.405, -0.7, 0.479, 0.7, 0.626],
      "x_pos7": [-0.037, 0.332, -0.479, -0.626, -0.111, 0.405, -0.258, -0.111, 0.258, 0.7, -0.037, 0.258, 0.037, -0.405, -0.111, 0.479, 0.258, 0.405, -0.7, 0.7, 0.553, -0.553, 0.553, -0.332, -0.7, 0.184, 0.111, 0.626, 0.184, 0.479, -0.405, 0.626, 0.7, -0.037, 0.332, 0.184, -0.553, -0.553, -0.553, 0.258, 0.405, 0.7, 0.626, 0.258, 0.111, -0.332, -0.405, 0.7, 0.184, 0.553, -0.479, -0.405, -0.258, -0.332, -0.332, 0.405, 0.626, 0.7, -0.405, 0.7, -0.405, -0.111, -0.258, 0.626, 0.479, -0.405, -0.7, 0.258, -0.037, 0.258, 0.553, 0.184, -0.553, -0.037, -0.111, -0.479, 0.332, 0.626, 0.111, -0.037, 0.111, -0.7, -0.553, 0.111, -0.332, -0.037, 0.184, 0.553, -0.626, -0.7, 0.037, -0.037, -0.258, -0.7],
      "x_pos8": [-0.626, 0.258, -0.553, 0.7, 0.405, -0.7, 0.7, 0.479, 0.258, -0.479, -0.332, -0.111, -0.258, 0.7, 0.405, -0.037, -0.405, 0.037, -0.332, -0.037, -0.258, -0.405, -0.405, -0.553, -0.7, 0.258, 0.037, -0.258, 0.332, 0.258, 0.184, 0.626, 0.258, 0.037, -0.332, 0.111, 0.7, 0.553, -0.332, 0.479, 0.7, 0.405, 0.258, -0.479, -0.553, 0.479, -0.479, 0.553, 0.626, 0.553, 0.626, -0.184, 0.037, 0.7, 0.332, 0.332, -0.553, -0.111, 0.405, -0.111, -0.405, -0.553, -0.479, 0.626, 0.7, -0.332, 0.553, -0.111, -0.405, 0.479, -0.111, 0.405, 0.258, 0.332, -0.7, -0.184, 0.7, 0.037, 0.479, 0.111, -0.037, -0.479, 0.7, 0.7, 0.405, 0.111, 0.037, 0.553, -0.184, 0.553, -0.258, -0.111, 0.405, 0.037],
      "x_pos9": [-0.037, -0.626, 0.479, -0.479, 0.553, -0.332, -0.258, -0.479, -0.405, 0.7, -0.184, 0.258, 0.479, 0.405, -0.7, 0.037, -0.7, 0.553, -0.111, 0.7, 0.184, 0.184, 0.405, -0.626, -0.553, 0.553, -0.184, 0.479, 0.405, 0.332, 0.184, 0.184, 0.7, -0.258, -0.553, 0.258, 0.479, 0.037, -0.405, -0.332, 0.626, -0.184, -0.479, -0.405, -0.479, 0.111, 0.626, -0.332, -0.553, 0.332, 0.405, 0.258, -0.405, 0.184, 0.037, 0.626, 0.7, -0.111, -0.405, -0.184, 0.111, -0.111, 0.553, 0.405, 0.258, -0.405, -0.7, 0.258, 0.626, -0.553, -0.553, -0.553, 0.626, -0.111, -0.184, 0.405, -0.037, -0.626, -0.258, -0.626, 0.7, -0.7, -0.258, -0.553, -0.111, 0.184, -0.553, -0.332, 0.184, 0.626, -0.626, -0.111, -0.258, 0.184],
      "x_pos10": [-0.037, 0.332, -0.553, -0.479, -0.111, -0.184, 0.7, -0.111, -0.405, 0.111, -0.037, -0.184, -0.479, -0.553, 0.184, 0.553, 0.184, -0.332, -0.405, -0.258, -0.479, -0.626, -0.258, 0.184, 0.405, -0.332, 0.405, -0.405, -0.111, -0.258, -0.626, 0.332, -0.626, 0.332, 0.111, -0.626, 0.626, 0.405, 0.7, 0.037, 0.479, 0.332, -0.037, 0.7, -0.258, 0.184, -0.7, 0.405, 0.258, -0.258, -0.037, 0.405, -0.553, -0.553, 0.479, -0.111, -0.626, -0.037, -0.7, 0.258, 0.111, -0.111, 0.405, -0.258, -0.184, 0.258, -0.553, -0.111, 0.184, 0.553, 0.258, -0.553, 0.258, -0.553, 0.626, 0.479, -0.037, -0.626, 0.626, -0.479, -0.553, -0.626, 0.184, -0.184, -0.037, -0.258, -0.626, -0.553, -0.332, -0.184, 0.111, -0.184, 0.184, 0.258],
      "x_pos11": [0.111, -0.479, -0.037, -0.405, 0.332, 0.626, -0.332, 0.7, -0.479, 0.7, -0.332, 0.626, -0.184, 0.037, 0.479, 0.405, 0.553, 0.7, -0.553, -0.626, -0.405, 0.553, 0.111, -0.332, -0.553, -0.626, 0.184, -0.258, -0.626, 0.405, 0.405, 0.626, 0.111, 0.405, 0.332, 0.7, -0.405, -0.037, 0.184, -0.111, -0.626, -0.7, -0.626, -0.479, -0.184, 0.037, 0.7, -0.553, -0.553, 0.626, -0.111, -0.111, 0.626, -0.479, 0.7, 0.626, 0.332, -0.332, -0.626, -0.479, -0.184, -0.7, 0.405, 0.037, 0.184, 0.184, 0.405, -0.332, -0.626, 0.111, -0.111, -0.553, 0.184, -0.037, -0.037, 0.258, 0.7, -0.553, 0.405, -0.479, 0.479, -0.626, 0.332, 0.553, 0.479, 0.184, 0.332, 0.479, -0.479, -0.626, -0.332, 0.626, 0.332, -0.111],
      "x_pos12": [-0.184, 0.7, -0.332, -0.184, 0.405, -0.184, -0.479, -0.258, 0.553, 0.553, 0.7, 0.332, 0.184, 0.479, -0.479, -0.037, -0.037, 0.037, -0.626, -0.332, 0.626, 0.258, 0.258, -0.553, 0.332, 0.184, -0.405, 0.405, -0.332, -0.037, 0.184, 0.111, -0.479, 0.553, 0.332, 0.626, 0.626, -0.553, -0.626, 0.7, -0.479, -0.553, -0.7, 0.479, 0.479, 0.479, 0.332, -0.332, -0.184, -0.553, -0.553, 0.626, -0.037, -0.553, 0.111, 0.626, 0.258, 0.626, 0.479, 0.111, -0.184, -0.037, 0.184, 0.111, -0.626, 0.626, -0.332, -0.553, -0.184, 0.553, 0.332, -0.7, 0.332, -0.626, -0.626, 0.184, -0.037, -0.111, -0.184, 0.184, 0.111, -0.258, 0.7, -0.258, -0.479, 0.7, -0.037, -0.037, -0.037, 0.258, -0.553, 0.037, -0.479, 0.7],
      "x_pos13": [0.405, 0.184, 0.626, 0.037, 0.405, 0.626, 0.626, -0.405, -0.405, -0.7, -0.553, 0.258, -0.332, 0.553, 0.553, 0.626, -0.405, -0.332, -0.626, -0.258, -0.332, 0.405, -0.553, 0.111, 0.626, 0.479, -0.7, -0.258, -0.405, 0.184, -0.405, 0.332, -0.037, 0.405, 0.7, -0.258, 0.111, -0.479, 0.553, 0.037, -0.037, 0.626, 0.258, 0.405, 0.037, 0.479, -0.258, 0.111, 0.553, -0.479, 0.553, -0.405, -0.037, 0.479, -0.111, -0.7, -0.184, -0.184, -0.184, 0.553, -0.553, -0.553, -0.7, -0.7, -0.037, 0.405, 0.184, -0.111, -0.553, -0.111, 0.332, -0.626, -0.184, -0.037, -0.405, -0.479, -0.405, -0.111, 0.184, 0.037, -0.405, 0.405, -0.7, -0.405, 0.037, -0.111, 0.037, -0.7, -0.7, -0.7, -0.111, 0.7, -0.111, -0.405],
      "x_pos14": [-0.479, -0.184, 0.479, -0.332, -0.479, 0.184, -0.626, -0.7, 0.037, 0.626, 0.184, -0.258, 0.111, 0.7, -0.626, -0.258, 0.405, -0.332, 0.626, -0.332, 0.111, 0.626, 0.332, 0.479, -0.037, 0.626, 0.7, 0.037, 0.7, 0.626, -0.258, 0.111, -0.111, -0.405, -0.626, 0.037, -0.479, -0.037, -0.405, -0.037, 0.184, 0.7, -0.184, 0.405, -0.111, 0.405, -0.479, 0.553, 0.479, 0.111, -0.405, 0.111, 0.037, -0.332, -0.332, 0.258, 0.111, 0.7, -0.111, 0.405, 0.037, -0.037, -0.405, 0.626, -0.184, 0.553, -0.626, -0.184, 0.184, -0.184, -0.037, -0.258, 0.037, -0.7, -0.037, -0.405, 0.111, 0.553, -0.037, -0.405, 0.405, -0.7, 0.111, -0.332, -0.184, 0.405, -0.7, -0.626, 0.258, 0.332, -0.037, 0.7, 0.405, -0.7],
      "x_pos15": [0.332, -0.258, 0.037, 0.184, 0.626, 0.184, 0.258, -0.037, -0.037, 0.184, 0.479, -0.111, -0.7, -0.626, 0.332, -0.258, 0.479, 0.626, 0.7, -0.037, -0.7, 0.184, -0.553, -0.332, 0.479, 0.405, -0.405, -0.332, 0.7, -0.626, -0.258, -0.479, 0.553, 0.111, 0.553, -0.405, -0.626, -0.479, -0.332, 0.479, 0.111, 0.111, -0.111, 0.111, 0.258, -0.405, 0.405, 0.258, -0.626, -0.405, 0.626, -0.479, -0.479, 0.553, -0.7, 0.553, -0.479, -0.332, -0.037, 0.626, 0.258, -0.258, 0.184, -0.332, 0.405, -0.479, 0.7, 0.332, -0.7, -0.7, -0.184, 0.626, 0.7, -0.037, -0.332, 0.258, -0.405, 0.626, 0.037, -0.479, -0.111, -0.332, 0.626, -0.405, 0.184, 0.037, -0.7, -0.037, -0.626, -0.553, -0.111, 0.258, 0.037, -0.405],
      "x_pos16": [-0.184, -0.553, 0.037, 0.626, -0.258, -0.332, 0.553, 0.332, 0.258, 0.626, 0.258, 0.332, -0.553, -0.184, 0.111, 0.184, -0.037, -0.037, 0.111, 0.258, -0.184, -0.111, -0.405, 0.037, 0.111, -0.037, 0.037, 0.184, -0.037, 0.258, 0.332, -0.037, 0.111, -0.626, -0.405, -0.405, 0.258, 0.258, -0.184, 0.479, -0.111, -0.332, 0.258, 0.037, -0.626, -0.7, 0.332, -0.626, 0.405, -0.626, -0.332, 0.553, -0.626, -0.037, -0.553, 0.7, -0.184, -0.553, 0.479, 0.626, 0.553, -0.7, 0.479, 0.479, -0.479, 0.111, -0.184, 0.553, 0.626, 0.258, 0.7, 0.258, -0.258, 0.626, 0.553, -0.7, -0.553, -0.7, -0.037, 0.479, 0.111, 0.553, 0.626, 0.626, 0.111, -0.258, -0.479, 0.111, 0.7, 0.553, 0.553, 0.405, 0.553, 0.258],
      "y_pos1": [-0.1, 0.285, 0.12, 0.23, -0.045, 0.01, -0.1, -0.21, 0.175, -0.1, 0.01, 0.12, 0.395, -0.155, -0.21, 0.285, -0.045, -0.155, 0.34, 0.12, 0.175, -0.045, -0.21, 0.01, 0.01, -0.155, -0.155, -0.21, 0.34, 0.34, 0.065, 0.175, -0.265, 0.395, 0.285, 0.45, 0.395, 0.01, -0.155, -0.21, 0.285, 0.34, 0.175, 0.065, 0.065, 0.395, 0.175, -0.265, -0.265, -0.265, 0.23, 0.285, -0.045, -0.045, -0.155, 0.395, 0.175, -0.265, 0.34, 0.12, 0.175, -0.045, 0.34, 0.175, -0.265, 0.285, 0.175, -0.1, -0.1, 0.065, -0.1, 0.285, 0.395, -0.21, 0.34, 0.065, 0.395, 0.175, -0.155, 0.34, 0.34, 0.01, 0.34, 0.285, 0.175, 0.285, -0.1, 0.23, 0.285, -0.265, 0.065, 0.12, -0.265, 0.34],
      "y_pos2": [0.12, 0.01, 0.23, 0.12, 0.01, -0.1, 0.065, -0.21, -0.1, 0.23, -0.045, 0.395, 0.12, 0.12, -0.1, 0.23, 0.45, 0.45, -0.21, 0.34, -0.045, 0.23, 0.175, 0.45, 0.175, -0.265, 0.01, 0.12, 0.12, -0.265, 0.45, -0.21, 0.175, 0.01, 0.01, -0.045, 0.45, 0.34, -0.155, 0.01, -0.21, 0.23, -0.045, 0.175, 0.01, 0.01, 0.395, 0.065, 0.45, 0.175, 0.34, 0.34, 0.065, 0.01, 0.45, 0.065, 0.285, -0.155, 0.175, 0.175, -0.155, 0.065, 0.065, -0.265, 0.065, 0.12, 0.12, -0.265, -0.21, 0.175, 0.065, 0.34, 0.34, 0.45, 0.175, -0.21, 0.01, -0.1, -0.265, 0.12, 0.23, -0.155, 0.395, 0.065, 0.285, 0.34, -0.155, 0.175, 0.01, 0.395, 0.065, -0.265, 0.285, -0.1],
      "y_pos3": [0.175, 0.065, 0.395, 0.175, -0.045, 0.175, 0.34, 0.12, 0.285, 0.175, -0.1, -0.155, -0.21, -0.21, -0.155, 0.285, -0.155, 0.23, -0.21, 0.23, 0.175, -0.1, 0.285, 0.175, 0.065, -0.155, -0.265, 0.34, 0.065, 0.285, -0.045, -0.21, 0.34, 0.395, 0.395, -0.045, 0.45, -0.1, 0.065, -0.21, 0.01, -0.265, 0.01, 0.175, 0.12, -0.21, -0.155, -0.21, 0.23, 0.12, -0.265, -0.1, 0.395, 0.12, 0.23, 0.285, -0.155, 0.175, 0.395, 0.01, -0.265, -0.155, -0.21, 0.395, 0.065, 0.285, 0.23, 0.45, 0.23, 0.175, -0.265, 0.34, 0.175, 0.45, 0.065, 0.395, 0.01, 0.23, 0.395, -0.265, -0.265, -0.045, 0.175, 0.12, 0.23, 0.285, 0.065, 0.065, -0.155, -0.21, -0.155, 0.395, -0.045, 0.23],
      "y_pos4": [0.01, -0.045, 0.175, 0.34, 0.175, -0.155, 0.175, 0.45, 0.34, -0.21, 0.01, 0.01, 0.395, -0.045, 0.12, -0.1, -0.21, -0.265, 0.285, 0.01, -0.045, 0.395, 0.23, 0.12, 0.34, 0.395, 0.45, -0.045, -0.1, 0.395, 0.395, 0.12, 0.23, 0.065, -0.21, -0.045, -0.1, -0.265, 0.065, -0.155, 0.175, -0.155, -0.265, 0.285, -0.155, 0.34, 0.01, 0.34, 0.285, 0.45, -0.045, -0.1, 0.175, 0.01, 0.45, -0.045, 0.065, 0.175, 0.175, 0.175, 0.23, 0.175, -0.155, 0.23, -0.155, -0.21, 0.175, 0.45, 0.23, 0.285, -0.045, 0.45, -0.155, 0.23, 0.01, 0.12, -0.1, 0.065, 0.23, 0.065, -0.21, 0.34, -0.045, 0.395, -0.1, -0.155, 0.01, 0.23, 0.395, 0.01, 0.12, 0.34, -0.1, -0.045],
      "y_pos5": [0.285, -0.265, 0.12, 0.23, 0.175, -0.265, -0.265, 0.395, -0.155, 0.23, 0.285, -0.1, -0.155, 0.12, -0.1, -0.21, -0.155, 0.285, 0.23, -0.1, -0.155, 0.12, 0.23, 0.395, 0.01, -0.155, -0.21, 0.23, 0.45, -0.1, 0.175, 0.285, 0.12, 0.34, -0.155, 0.395, -0.21, 0.065, 0.45, 0.01, -0.265, -0.155, 0.01, -0.265, 0.285, -0.155, 0.395, 0.34, -0.21, 0.12, 0.12, -0.1, 0.34, 0.395, -0.21, -0.1, 0.45, 0.285, 0.175, -0.1, 0.45, 0.23, 0.175, -0.1, -0.265, -0.045, 0.45, -0.045, -0.21, -0.265, -0.155, 0.12, 0.12, 0.395, 0.285, -0.155, 0.12, -0.1, 0.01, 0.34, -0.21, -0.155, -0.045, 0.395, 0.285, 0.23, -0.21, -0.155, -0.045, 0.23, -0.1, -0.1, 0.285, 0.01],
      "y_pos6": [0.285, 0.12, 0.065, 0.23, 0.285, 0.12, -0.155, -0.045, 0.23, 0.23, 0.34, -0.155, 0.175, -0.265, -0.265, 0.34, 0.175, 0.45, -0.265, -0.1, -0.21, 0.01, 0.45, 0.395, 0.01, 0.23, 0.065, 0.065, -0.045, -0.21, -0.265, -0.1, 0.23, 0.175, 0.01, 0.23, -0.045, 0.065, -0.1, 0.12, 0.01, 0.12, 0.23, 0.45, -0.045, -0.155, 0.395, 0.12, 0.23, 0.395, -0.045, 0.12, 0.45, 0.45, 0.34, 0.175, 0.45, 0.01, 0.12, -0.21, 0.01, -0.045, 0.23, 0.12, 0.12, 0.175, 0.01, 0.12, 0.395, 0.01, 0.34, 0.34, -0.045, -0.1, 0.12, -0.1, -0.155, 0.285, 0.395, 0.45, 0.175, 0.45, 0.45, 0.175, 0.285, 0.01, 0.395, 0.12, 0.175, 0.45, 0.285, -0.21, 0.065, 0.175],
      "y_pos7": [-0.155, 0.12, 0.285, -0.045, 0.23, 0.34, -0.045, -0.265, 0.285, 0.12, 0.395, 0.175, 0.395, 0.175, 0.395, -0.1, -0.155, 0.34, 0.34, -0.155, 0.285, 0.12, -0.1, 0.45, 0.23, 0.065, -0.21, 0.01, -0.21, -0.1, 0.175, 0.45, -0.21, 0.12, 0.23, 0.285, -0.265, 0.175, 0.34, 0.065, 0.23, 0.065, 0.175, -0.265, -0.1, -0.1, 0.12, 0.45, 0.175, -0.155, 0.12, 0.395, 0.065, 0.285, -0.155, 0.12, 0.45, 0.12, 0.23, 0.12, 0.175, 0.23, 0.175, 0.175, -0.155, -0.21, -0.1, -0.21, 0.395, -0.265, 0.175, 0.23, -0.045, 0.175, 0.285, -0.21, 0.065, -0.265, 0.34, 0.45, 0.395, 0.01, -0.045, 0.285, 0.065, -0.045, 0.065, -0.045, 0.12, 0.23, -0.155, 0.01, -0.21, 0.23],
      "y_pos8": [0.34, -0.045, 0.12, 0.395, -0.045, 0.065, -0.265, 0.45, 0.34, 0.12, 0.175, -0.1, 0.45, -0.21, 0.065, -0.21, 0.45, 0.065, -0.155, 0.175, 0.395, -0.1, -0.155, 0.395, 0.285, -0.1, -0.265, 0.175, 0.23, -0.1, 0.12, -0.265, 0.12, 0.12, -0.155, 0.395, 0.175, -0.265, -0.155, -0.155, -0.265, 0.175, -0.265, -0.21, 0.175, -0.045, -0.21, 0.175, 0.285, 0.175, 0.23, -0.265, 0.065, 0.395, -0.155, 0.45, 0.34, -0.045, 0.395, 0.45, 0.12, -0.045, 0.175, -0.21, -0.21, -0.265, 0.395, 0.23, 0.45, 0.285, 0.395, -0.21, -0.155, 0.45, 0.01, 0.45, 0.34, 0.285, -0.21, -0.1, 0.395, -0.21, -0.265, 0.285, -0.21, 0.395, 0.12, 0.285, 0.01, 0.45, 0.065, 0.34, 0.45, -0.045],
      "y_pos9": [-0.265, 0.285, 0.45, 0.175, 0.175, -0.265, 0.395, 0.395, 0.23, -0.21, 0.01, 0.23, -0.21, 0.23, 0.23, 0.065, 0.285, -0.265, -0.21, -0.045, -0.045, 0.34, -0.045, -0.045, 0.12, 0.01, -0.045, -0.21, -0.1, 0.45, 0.285, -0.155, 0.175, -0.21, -0.21, 0.34, 0.065, 0.175, 0.45, -0.155, -0.265, 0.12, 0.34, 0.395, -0.045, 0.065, 0.01, 0.285, 0.065, -0.155, 0.285, 0.065, 0.23, -0.045, 0.45, 0.45, 0.12, 0.285, -0.045, -0.1, 0.45, 0.175, -0.1, 0.23, 0.23, 0.34, 0.175, -0.155, -0.1, -0.045, 0.285, -0.21, 0.285, 0.23, 0.175, -0.21, -0.1, -0.1, 0.23, -0.265, 0.065, -0.265, -0.21, 0.12, 0.285, 0.45, 0.395, 0.175, 0.065, 0.395, -0.21, -0.045, 0.12, 0.285],
      "y_pos10": [-0.21, -0.21, 0.285, 0.065, 0.285, 0.175, -0.045, 0.395, -0.1, 0.45, 0.285, 0.45, 0.285, -0.155, -0.265, -0.21, 0.175, 0.01, 0.285, 0.34, -0.21, 0.175, 0.45, -0.21, 0.23, 0.34, 0.12, 0.175, -0.155, -0.155, 0.065, 0.23, -0.155, 0.12, -0.155, 0.395, 0.175, -0.1, 0.45, 0.12, 0.065, 0.01, -0.21, 0.01, -0.21, 0.395, 0.065, 0.395, 0.285, 0.34, -0.21, 0.45, 0.12, -0.155, 0.12, 0.065, -0.265, 0.395, -0.1, -0.265, -0.155, 0.45, 0.23, 0.23, 0.34, 0.065, 0.12, -0.155, -0.045, 0.065, 0.065, 0.285, 0.23, 0.395, -0.045, -0.155, -0.265, 0.34, 0.12, -0.045, 0.175, 0.12, -0.155, 0.12, 0.23, 0.285, 0.34, -0.045, -0.1, 0.34, -0.155, 0.12, -0.155, 0.175],
      "y_pos11": [-0.155, 0.23, -0.1, 0.34, 0.12, 0.23, -0.265, 0.12, -0.21, 0.01, 0.12, 0.285, -0.1, 0.065, 0.175, 0.395, 0.285, -0.1, 0.45, 0.285, -0.045, -0.155, -0.1, -0.21, 0.23, 0.065, 0.01, -0.265, 0.34, 0.285, -0.21, -0.1, 0.34, -0.045, 0.01, 0.395, -0.21, 0.01, -0.045, 0.175, -0.155, -0.21, 0.12, 0.01, -0.1, 0.23, 0.285, 0.12, -0.21, 0.285, 0.285, -0.1, 0.34, 0.065, 0.175, 0.285, -0.045, 0.065, -0.1, -0.045, -0.265, -0.21, -0.155, 0.175, 0.065, -0.1, 0.34, -0.1, -0.265, 0.23, 0.285, 0.175, 0.285, 0.065, 0.34, 0.285, -0.155, -0.045, 0.395, -0.155, 0.285, -0.21, 0.34, -0.265, 0.175, -0.21, -0.155, 0.065, 0.12, 0.01, -0.045, 0.065, 0.45, 0.175],
      "y_pos12": [0.065, 0.395, -0.1, 0.285, 0.12, 0.12, 0.285, 0.285, 0.45, 0.23, 0.065, 0.45, 0.065, 0.12, 0.23, 0.12, 0.01, 0.285, 0.395, 0.175, 0.34, 0.12, -0.045, -0.21, -0.1, 0.395, 0.12, -0.155, 0.065, -0.265, 0.34, -0.1, 0.285, -0.1, -0.1, 0.175, 0.23, 0.395, 0.285, -0.155, -0.155, -0.155, -0.1, -0.1, -0.21, -0.265, -0.1, 0.23, 0.23, -0.21, 0.01, -0.045, 0.285, 0.45, 0.01, -0.21, 0.175, 0.23, 0.34, -0.1, 0.175, 0.45, -0.1, 0.23, 0.23, 0.175, -0.045, -0.265, 0.395, -0.1, -0.155, 0.12, 0.395, 0.12, -0.045, -0.045, 0.12, 0.12, -0.1, -0.155, -0.1, 0.065, 0.175, 0.01, 0.23, -0.265, -0.1, -0.155, 0.395, 0.12, 0.065, 0.12, 0.285, -0.1],
      "y_pos13": [-0.1, -0.21, -0.21, -0.265, -0.265, -0.21, -0.21, -0.21, -0.155, 0.175, 0.395, -0.265, 0.23, -0.265, -0.155, 0.395, 0.23, -0.21, 0.285, -0.045, -0.265, 0.34, 0.45, -0.045, 0.45, 0.285, -0.21, 0.065, 0.01, -0.21, 0.01, -0.21, 0.175, 0.065, 0.175, 0.395, 0.23, -0.155, 0.395, 0.175, 0.065, 0.23, -0.155, -0.21, -0.045, -0.21, -0.265, -0.21, 0.175, 0.34, -0.21, -0.265, 0.175, 0.45, 0.175, 0.065, 0.45, -0.045, 0.34, -0.265, 0.285, 0.23, 0.34, 0.285, -0.045, -0.045, -0.265, 0.065, -0.155, 0.01, 0.12, 0.45, -0.155, 0.01, 0.34, -0.045, 0.45, 0.23, 0.175, 0.12, 0.45, -0.155, 0.175, 0.23, -0.155, -0.265, 0.45, 0.065, -0.155, 0.285, 0.285, 0.285, 0.065, 0.12],
      "y_pos14": [0.285, 0.01, 0.01, 0.34, 0.23, -0.045, 0.065, -0.1, -0.21, 0.395, -0.1, 0.175, 0.065, 0.285, 0.01, 0.23, 0.23, -0.155, 0.01, -0.1, -0.1, 0.395, 0.175, -0.1, -0.155, 0.285, -0.1, -0.1, -0.155, 0.12, -0.265, 0.065, 0.12, -0.21, 0.45, 0.285, 0.01, -0.155, 0.065, -0.265, -0.155, 0.34, -0.21, -0.045, 0.01, -0.265, 0.065, -0.1, 0.285, 0.395, 0.065, 0.12, 0.01, -0.045, 0.45, 0.395, 0.175, -0.1, 0.23, 0.395, 0.45, 0.175, 0.01, -0.155, 0.45, 0.34, 0.395, 0.065, 0.175, -0.1, -0.1, 0.01, 0.12, 0.175, 0.395, 0.12, 0.34, 0.175, 0.175, 0.395, -0.1, 0.395, 0.45, -0.265, 0.34, 0.285, -0.155, 0.23, -0.155, -0.1, 0.01, 0.12, 0.065, 0.12],
      "y_pos15": [-0.265, 0.285, 0.065, 0.395, -0.045, -0.265, -0.155, 0.12, 0.34, 0.34, -0.1, -0.045, 0.065, -0.21, 0.45, -0.045, 0.175, -0.21, -0.265, -0.265, 0.12, 0.395, -0.265, -0.045, 0.23, 0.45, 0.01, -0.21, 0.12, 0.12, 0.01, 0.395, -0.155, -0.265, -0.1, 0.01, 0.395, -0.265, -0.21, 0.395, -0.1, 0.45, 0.12, 0.34, 0.45, -0.265, 0.34, -0.1, 0.34, 0.01, 0.01, -0.155, 0.395, -0.1, 0.01, 0.23, -0.045, 0.395, 0.23, 0.12, 0.23, 0.065, 0.285, -0.045, 0.175, 0.395, 0.175, 0.23, 0.175, 0.12, -0.265, 0.285, -0.1, -0.1, -0.1, 0.175, -0.265, 0.395, -0.045, 0.395, 0.065, 0.45, 0.285, 0.285, 0.34, 0.395, 0.23, 0.285, 0.45, 0.395, 0.01, 0.065, 0.23, 0.01],
      "y_pos16": [0.45, 0.45, -0.21, 0.01, -0.265, 0.285, 0.12, 0.34, 0.395, 0.065, 0.01, -0.21, -0.1, 0.175, 0.01, -0.21, 0.12, 0.12, -0.045, 0.01, 0.45, 0.23, 0.34, -0.155, 0.065, 0.45, 0.12, 0.285, 0.12, 0.395, 0.23, -0.21, 0.23, 0.175, 0.45, -0.155, 0.175, -0.155, 0.45, 0.065, 0.065, 0.12, -0.045, 0.395, 0.065, -0.045, 0.01, 0.285, 0.01, 0.065, -0.045, -0.1, 0.065, 0.23, -0.21, -0.21, 0.395, -0.1, 0.065, 0.285, -0.155, 0.395, 0.175, 0.395, 0.395, -0.1, 0.12, 0.065, 0.34, 0.12, 0.01, 0.285, 0.285, -0.155, 0.23, 0.01, -0.155, -0.21, 0.12, -0.265, -0.155, 0.12, 0.34, -0.265, -0.045, -0.045, -0.155, 0.065, -0.21, 0.395, 0.01, 0.395, -0.21, -0.045],
      "block": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    }
  ]
  
  
  
  
  // Initialize components for Routine "browser_out"
  browser_outClock = new util.Clock();
  out = new visual.TextStim({
    win: psychoJS.window,
    name: 'out',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  continue_info_out = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info_out', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  continue_border_out = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border_out',
    text: 'Um die Studie in diesem Fenster zu schließen, drücken Sie bitte zwei Mal die Escape-Taste.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instruction_task_1"
  instruction_task_1Clock = new util.Clock();
  header_border1 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border1', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text1',
    text: 'Your Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  info1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info1',
    text: (((("At the center of the study is a numerical task, i.e., a mean value computation task:\n\nIn multiple rounds, 16 numbers will appear simultaneously on your screen at random positions. Your task is to decide whether the mean of the numbers displayed is smaller than 500 or larger than 500.\n\nIf the mean is smaller than 500, please indicate this by pressing the \"A\" key for the answer \"" + smaller) + "\".\n\nIf the mean is larger than 500, please indicate this by pressing the \"L\" key for the answer \"") + larger) + "\"."),
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_info1 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info1', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border1',
    text: 'Please press the spacebar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_task_2"
  instruction_task_2Clock = new util.Clock();
  header_border1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border1_2', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text1_2',
    text: 'Your Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  info1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info1_2',
    text: (((("For half of the rounds, the correct answer is \"" + smaller) + "\" (i.e.,\u00a0the mean of the numbers displayed is smaller than 500). For the other half, the correct answer is \"") + larger) + "\" (i.e.,\u00a0the mean of the numbers displayed is larger than 500).\n\nA cross will appear in the center of the screen before the numbers appear. Please keep your eyes fixed on the cross until the numbers appear in each round.\n\nYou do not have to calculate the exact mean.\nIt might be helpful to look at the first digit of the numbers displayed and count whether the majority of the digits is (a) less than\u00a05 or (b)\u00a05 or greater."),
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_info1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info1_2', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border1_2',
    text: 'Please press the spacebar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp1_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_practice"
  instruction_practiceClock = new util.Clock();
  header_border1231 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border1231', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text1231 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text1231',
    text: 'Your Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  info1231 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info1231',
    text: (((("To familiarize yourself with the task, you will work on a few practice rounds now.\n\nPlease place your index fingers on the keys \"A\" and \"L\". It is important that you keep your index fingers on these keys throughout all rounds.\n\nAs a reminder:\nPress the \"A\" key for the answer \"" + smaller) + "\" (i.e.,\u00a0the mean of the numbers displayed is smaller than 500), and the \"L\" key for the answer \"") + larger) + "\" (i.e.,\u00a0the mean of the numbers displayed is larger than 500)."),
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_info1231 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info1231', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border1231 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border1231',
    text: 'To start the practice rounds, please press the spacebar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: 3.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp1231 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prep"
  prepClock = new util.Clock();
  // Initialize components for Routine "countdown"
  countdownClock = new util.Clock();
  a_border1 = new visual.Rect ({
    win: psychoJS.window, name: 'a_border1', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [(- 0.5), (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  l_border1 = new visual.Rect ({
    win: psychoJS.window, name: 'l_border1', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [0.5, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  label_a1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_a1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  label_l1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_l1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  a_key1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'a_key1',
    text: 'A',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  l_key1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'l_key1',
    text: 'L',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  count5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'count5',
    text: '•••••',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.0925], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  count4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'count4',
    text: '••••',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.0925], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  count3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'count3',
    text: '•••',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.0925], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  count2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'count2',
    text: '••',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.0925], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  count1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'count1',
    text: '•',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.0925], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "fixaion_cross"
  fixaion_crossClock = new util.Clock();
  a_border_cross = new visual.Rect ({
    win: psychoJS.window, name: 'a_border_cross', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [(- 0.5), (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  l_border_cross = new visual.Rect ({
    win: psychoJS.window, name: 'l_border_cross', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [0.5, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  label_a_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_a_cross',
    text: '< 500',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  label_l_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_l_cross',
    text: '> 500',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  a_key_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'a_key_cross',
    text: 'A',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  l_key_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'l_key_cross',
    text: 'L',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  fixation_cross_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross_text',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.0925], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "rt_trial"
  rt_trialClock = new util.Clock();
  a_border_rt = new visual.Rect ({
    win: psychoJS.window, name: 'a_border_rt', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [(- 0.5), (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  l_border_rt = new visual.Rect ({
    win: psychoJS.window, name: 'l_border_rt', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [0.5, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  label_a_rt = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_a_rt',
    text: '< 500',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  label_l_rt = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_l_rt',
    text: '> 500',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  a_key_rt = new visual.TextStim({
    win: psychoJS.window,
    name: 'a_key_rt',
    text: 'A',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  l_key_rt = new visual.TextStim({
    win: psychoJS.window,
    name: 'l_key_rt',
    text: 'L',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  stim_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  stim_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  stim_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  stim_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  stim_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  stim_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  stim_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  stim_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  stim_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  stim_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  stim_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -16.0 
  });
  
  stim_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  stim_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  stim_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  stim_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  stim_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_16',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -21.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  var true_mean
  var trial_type
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  a_border_fb = new visual.Rect ({
    win: psychoJS.window, name: 'a_border_fb', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [(- 0.5), (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  l_border_fb = new visual.Rect ({
    win: psychoJS.window, name: 'l_border_fb', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [0.5, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  label_a_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_a_fb',
    text: '< 500',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  label_l_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_l_fb',
    text: '> 500',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  a_key_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'a_key_fb',
    text: 'A',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  l_key_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'l_key_fb',
    text: 'L',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fb',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  a_border_rt_2 = new visual.Rect ({
    win: psychoJS.window, name: 'a_border_rt_2', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [(- 0.5), (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  l_border_rt_2 = new visual.Rect ({
    win: psychoJS.window, name: 'l_border_rt_2', 
    width: [0.075, 0.075][0], height: [0.075, 0.075][1],
    ori: 0.0, 
    pos: [0.5, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  label_a_rt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_a_rt_2',
    text: '< 500',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  label_l_rt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_l_rt_2',
    text: '> 500',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.46)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  a_key_rt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'a_key_rt_2',
    text: 'A',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  l_key_rt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'l_key_rt_2',
    text: 'L',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "premature_end"
  premature_endClock = new util.Clock();
  header_border_end = new visual.Rect ({
    win: psychoJS.window, name: 'header_border_end', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text_end',
    text: 'Thank you for you time!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  continue_info_end = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info_end', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  continue_border_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border_end',
    text: 'You can now close the browser window.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "instruction_guess"
  instruction_guessClock = new util.Clock();
  header_border121 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border121', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  header_text121 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text121',
    text: 'Your Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  info121 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info121',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -3.0 
  });
  
  continue_info121 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info121', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  continue_border121 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border121',
    text: 'Please press the spacebar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: 3.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp121 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructuon_burn1"
  instructuon_burn1Clock = new util.Clock();
  header_border123123 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border123123', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text123123 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text123123',
    text: 'Your Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  info123123 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info123123',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_info123123 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info123123', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border123123 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border123123',
    text: 'Please press the spacebar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: 3.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp123123 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_burn2"
  instruction_burn2Clock = new util.Clock();
  header_border2 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border2', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text2',
    text: 'Your Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  info2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info2',
    text: (((("Please place your index fingers on the keys \"A\" (\"" + smaller) + "\") and \"L\" (\"") + larger) + "\").\nIt is important that you keep your index fingers on these keys throughout all rounds."),
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_info2 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info2', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border2',
    text: 'To start the warm-up rounds, please press the spacebar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: 3.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_test1"
  instructions_test1Clock = new util.Clock();
  header_border3 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border3', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text3',
    text: 'Your Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  info3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_info3 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info3', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border3',
    text: 'Please press the spacebar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_test2"
  instructions_test2Clock = new util.Clock();
  header_border4 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border4', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text4',
    text: 'Your Task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  continue_info4 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info4', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  continue_border4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border4',
    text: 'Please press the spacebar to begin with the 1st of 4 blocks of the test phase.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  info4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info4',
    text: (((("Please place your index fingers on the keys \"A\" (\"" + smaller) + "\") and \"L\" (\"") + larger) + "\").\nIt is important that you keep your index fingers on these keys throughout all rounds."),
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "interim_postqu"
  interim_postquClock = new util.Clock();
  header_border_postqu = new visual.Rect ({
    win: psychoJS.window, name: 'header_border_postqu', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  header_text_postqu = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text_postqu',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_postqu = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_postqu',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  continue_postqu = new visual.Rect ({
    win: psychoJS.window, name: 'continue_postqu', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  continue_border_postqu = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border_postqu',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp_postqu = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "place_fingers"
  place_fingersClock = new util.Clock();
  header_border12 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border12', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  header_text12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text12',
    text: 'Let’s continue!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  info12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -3.0 
  });
  
  continue_info12 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_info12', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  continue_border12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: 3.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "interim_prequ"
  interim_prequClock = new util.Clock();
  header_border_prequ = new visual.Rect ({
    win: psychoJS.window, name: 'header_border_prequ', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text_prequ = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text_prequ',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_prequ = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_prequ',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_prequ = new visual.Rect ({
    win: psychoJS.window, name: 'continue_prequ', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border_prequ = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border_prequ',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_prequ = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  qu_i = 1;
  qu_text = 'did you take a random guess (i.e.,\u00A0you had not the slightest clue what the correct answer might be and gave up by randomly responding with either "<\u00A0500" or ">\u00A0500")?'
  
  
  // Initialize components for Routine "interim_qu"
  interim_quClock = new util.Clock();
  header_border_qu = new visual.Rect ({
    win: psychoJS.window, name: 'header_border_qu', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text_qu = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text_qu',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_qu = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_qu',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.125], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_qu = new visual.Rect ({
    win: psychoJS.window, name: 'continue_qu', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border_qu = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border_qu',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_qu = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["0\nnever", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10\nvery often"], fontSize: 0.0225, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color([0.0902, (- 1.0), (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  // Initialize components for Routine "postqu"
  postquClock = new util.Clock();
  header_border_postqu_2 = new visual.Rect ({
    win: psychoJS.window, name: 'header_border_postqu_2', 
    width: [2, 0.1][0], height: [2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.44], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.0, 0.0, 0.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  header_text_postqu_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_text_postqu_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_postqu_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_postqu_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  continue_postqu_2 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_postqu_2', 
    width: [2, 0.07][0], height: [2, 0.07][1],
    ori: 0.0, 
    pos: [0, (- 0.462)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    fillColor: new util.Color([(- 0.1461), (- 0.1461), (- 0.1461)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  continue_border_postqu_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_border_postqu_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.462)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_postqu_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "save_dates"
  save_datesClock = new util.Clock();
  da = new Date();
  date_start = da.getFullYear() +"-"+ (da.getMonth()+1) +"-"+ da.getDate() +" "+ da.getHours() +":"+ da.getMinutes() +":"+ da.getSeconds();
  psychoJS.experiment.addData("date_start", date_start);
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setupMaxDurationReached;
var setupMaxDuration;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setup' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    setupClock.reset();
    routineTimer.reset();
    setupMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('setup.started', globalClock.getTime());
    setupMaxDuration = null
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setup' ---
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setup' ---
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('setup.stopped', globalClock.getTime());
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var browser_outMaxDurationReached;
var text_out;
var text_out_time;
var browser_outMaxDuration;
var browser_outComponents;
function browser_outRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'browser_out' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    browser_outClock.reset();
    routineTimer.reset();
    browser_outMaxDurationReached = false;
    // update component parameters for each repeat
    if(browser_check && !safari && !opera){
        psychoJS.experiment.addData('browser', userAgent);
        psychoJS.experiment.addData('browser_version', browser_version);
        psychoJS.experiment.addData('browser_name', browser_name);
    }
    if(!browser_check) {
        text_out = 'Unfortunately, your browser (' + userAgent + ') is out-of-date.' + '\n\n' + 
        'Please update your browser or open a different, more up-to-date browser.' + 
        '\n\n' + 'To return to the study, please use the following link' + '\n' + 
        '(tip: Note down the link now):' + '\n' + 
        'https://run.pavlovia.org/psychmeth-uni-kiel/lfm-rep?pp=' + expInfo["pp"] + '&session=test'
        text_out_time = 999999
    }
    
    if(safari || opera) {
        text_out = 'Participation in this study requires using Mozilla Firefox, Microsoft Edge, or Google Chrome.' + 
        '\n\n' + 'To participate, please open one of the those browsers.' +
        '\n\n' + 'Then, use the following link.' + '\n' + 
        '(tip: Note down the link now):' + '\n' + 
        'https://run.pavlovia.org/psychmeth-uni-kiel/lfm-rep?pp=' + expInfo["pp"] + '&session=test'
        text_out_time = 999999
    }
    out.setText(text_out);
    psychoJS.experiment.addData('browser_out.started', globalClock.getTime());
    browser_outMaxDuration = null
    // keep track of which components have finished
    browser_outComponents = [];
    browser_outComponents.push(out);
    browser_outComponents.push(continue_info_out);
    browser_outComponents.push(continue_border_out);
    
    for (const thisComponent of browser_outComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function browser_outRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'browser_out' ---
    // get current time
    t = browser_outClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *out* updates
    if (t >= 0.0 && out.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      out.tStart = t;  // (not accounting for frame time here)
      out.frameNStart = frameN;  // exact frame index
      
      out.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + text_out_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (out.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      out.setAutoDraw(false);
    }
    
    
    // *continue_info_out* updates
    if (t >= 0.0 && continue_info_out.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info_out.tStart = t;  // (not accounting for frame time here)
      continue_info_out.frameNStart = frameN;  // exact frame index
      
      continue_info_out.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + text_out_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (continue_info_out.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continue_info_out.setAutoDraw(false);
    }
    
    
    // *continue_border_out* updates
    if (t >= 0.0 && continue_border_out.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border_out.tStart = t;  // (not accounting for frame time here)
      continue_border_out.frameNStart = frameN;  // exact frame index
      
      continue_border_out.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + text_out_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (continue_border_out.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continue_border_out.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of browser_outComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function browser_outRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'browser_out' ---
    for (const thisComponent of browser_outComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('browser_out.stopped', globalClock.getTime());
    if(!browser_check || safari || opera) {
        quitPsychoJS()
    }
    
    // the Routine "browser_out" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_task_1MaxDurationReached;
var _key_resp1_allKeys;
var instruction_task_1MaxDuration;
var instruction_task_1Components;
function instruction_task_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_task_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_task_1Clock.reset();
    routineTimer.reset();
    instruction_task_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp1.keys = undefined;
    key_resp1.rt = undefined;
    _key_resp1_allKeys = [];
    psychoJS.experiment.addData('instruction_task_1.started', globalClock.getTime());
    instruction_task_1MaxDuration = null
    // keep track of which components have finished
    instruction_task_1Components = [];
    instruction_task_1Components.push(header_border1);
    instruction_task_1Components.push(header_text1);
    instruction_task_1Components.push(info1);
    instruction_task_1Components.push(continue_info1);
    instruction_task_1Components.push(continue_border1);
    instruction_task_1Components.push(key_resp1);
    
    for (const thisComponent of instruction_task_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_task_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_task_1' ---
    // get current time
    t = instruction_task_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border1* updates
    if (t >= 0.0 && header_border1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border1.tStart = t;  // (not accounting for frame time here)
      header_border1.frameNStart = frameN;  // exact frame index
      
      header_border1.setAutoDraw(true);
    }
    
    
    // *header_text1* updates
    if (t >= 0.0 && header_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text1.tStart = t;  // (not accounting for frame time here)
      header_text1.frameNStart = frameN;  // exact frame index
      
      header_text1.setAutoDraw(true);
    }
    
    
    // *info1* updates
    if (t >= 0.0 && info1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info1.tStart = t;  // (not accounting for frame time here)
      info1.frameNStart = frameN;  // exact frame index
      
      info1.setAutoDraw(true);
    }
    
    
    // *continue_info1* updates
    if (t >= 0.0 && continue_info1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info1.tStart = t;  // (not accounting for frame time here)
      continue_info1.frameNStart = frameN;  // exact frame index
      
      continue_info1.setAutoDraw(true);
    }
    
    
    // *continue_border1* updates
    if (t >= 0.0 && continue_border1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border1.tStart = t;  // (not accounting for frame time here)
      continue_border1.frameNStart = frameN;  // exact frame index
      
      continue_border1.setAutoDraw(true);
    }
    
    
    // *key_resp1* updates
    if (t >= 0.0 && key_resp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp1.tStart = t;  // (not accounting for frame time here)
      key_resp1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp1.clearEvents(); });
    }
    
    if (key_resp1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp1_allKeys = _key_resp1_allKeys.concat(theseKeys);
      if (_key_resp1_allKeys.length > 0) {
        key_resp1.keys = _key_resp1_allKeys[_key_resp1_allKeys.length - 1].name;  // just the last key pressed
        key_resp1.rt = _key_resp1_allKeys[_key_resp1_allKeys.length - 1].rt;
        key_resp1.duration = _key_resp1_allKeys[_key_resp1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_task_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_task_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_task_1' ---
    for (const thisComponent of instruction_task_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_task_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp1.corr, level);
    }
    psychoJS.experiment.addData('key_resp1.keys', key_resp1.keys);
    if (typeof key_resp1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp1.rt', key_resp1.rt);
        psychoJS.experiment.addData('key_resp1.duration', key_resp1.duration);
        routineTimer.reset();
        }
    
    key_resp1.stop();
    // the Routine "instruction_task_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_task_2MaxDurationReached;
var _key_resp1_2_allKeys;
var instruction_task_2MaxDuration;
var instruction_task_2Components;
function instruction_task_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_task_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_task_2Clock.reset();
    routineTimer.reset();
    instruction_task_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp1_2.keys = undefined;
    key_resp1_2.rt = undefined;
    _key_resp1_2_allKeys = [];
    psychoJS.experiment.addData('instruction_task_2.started', globalClock.getTime());
    instruction_task_2MaxDuration = null
    // keep track of which components have finished
    instruction_task_2Components = [];
    instruction_task_2Components.push(header_border1_2);
    instruction_task_2Components.push(header_text1_2);
    instruction_task_2Components.push(info1_2);
    instruction_task_2Components.push(continue_info1_2);
    instruction_task_2Components.push(continue_border1_2);
    instruction_task_2Components.push(key_resp1_2);
    
    for (const thisComponent of instruction_task_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_task_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_task_2' ---
    // get current time
    t = instruction_task_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border1_2* updates
    if (t >= 0.0 && header_border1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border1_2.tStart = t;  // (not accounting for frame time here)
      header_border1_2.frameNStart = frameN;  // exact frame index
      
      header_border1_2.setAutoDraw(true);
    }
    
    
    // *header_text1_2* updates
    if (t >= 0.0 && header_text1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text1_2.tStart = t;  // (not accounting for frame time here)
      header_text1_2.frameNStart = frameN;  // exact frame index
      
      header_text1_2.setAutoDraw(true);
    }
    
    
    // *info1_2* updates
    if (t >= 0.0 && info1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info1_2.tStart = t;  // (not accounting for frame time here)
      info1_2.frameNStart = frameN;  // exact frame index
      
      info1_2.setAutoDraw(true);
    }
    
    
    // *continue_info1_2* updates
    if (t >= 0.0 && continue_info1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info1_2.tStart = t;  // (not accounting for frame time here)
      continue_info1_2.frameNStart = frameN;  // exact frame index
      
      continue_info1_2.setAutoDraw(true);
    }
    
    
    // *continue_border1_2* updates
    if (t >= 0.0 && continue_border1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border1_2.tStart = t;  // (not accounting for frame time here)
      continue_border1_2.frameNStart = frameN;  // exact frame index
      
      continue_border1_2.setAutoDraw(true);
    }
    
    
    // *key_resp1_2* updates
    if (t >= 0.0 && key_resp1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp1_2.tStart = t;  // (not accounting for frame time here)
      key_resp1_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp1_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp1_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp1_2.clearEvents(); });
    }
    
    if (key_resp1_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp1_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp1_2_allKeys = _key_resp1_2_allKeys.concat(theseKeys);
      if (_key_resp1_2_allKeys.length > 0) {
        key_resp1_2.keys = _key_resp1_2_allKeys[_key_resp1_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp1_2.rt = _key_resp1_2_allKeys[_key_resp1_2_allKeys.length - 1].rt;
        key_resp1_2.duration = _key_resp1_2_allKeys[_key_resp1_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_task_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_task_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_task_2' ---
    for (const thisComponent of instruction_task_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_task_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp1_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp1_2.keys', key_resp1_2.keys);
    if (typeof key_resp1_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp1_2.rt', key_resp1_2.rt);
        psychoJS.experiment.addData('key_resp1_2.duration', key_resp1_2.duration);
        routineTimer.reset();
        }
    
    key_resp1_2.stop();
    // the Routine "instruction_task_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_practiceMaxDurationReached;
var _key_resp1231_allKeys;
var instruction_practiceMaxDuration;
var instruction_practiceComponents;
function instruction_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_practiceClock.reset();
    routineTimer.reset();
    instruction_practiceMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp1231.keys = undefined;
    key_resp1231.rt = undefined;
    _key_resp1231_allKeys = [];
    psychoJS.experiment.addData('instruction_practice.started', globalClock.getTime());
    instruction_practiceMaxDuration = null
    // keep track of which components have finished
    instruction_practiceComponents = [];
    instruction_practiceComponents.push(header_border1231);
    instruction_practiceComponents.push(header_text1231);
    instruction_practiceComponents.push(info1231);
    instruction_practiceComponents.push(continue_info1231);
    instruction_practiceComponents.push(continue_border1231);
    instruction_practiceComponents.push(key_resp1231);
    
    for (const thisComponent of instruction_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_practice' ---
    // get current time
    t = instruction_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border1231* updates
    if (t >= 0.0 && header_border1231.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border1231.tStart = t;  // (not accounting for frame time here)
      header_border1231.frameNStart = frameN;  // exact frame index
      
      header_border1231.setAutoDraw(true);
    }
    
    
    // *header_text1231* updates
    if (t >= 0.0 && header_text1231.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text1231.tStart = t;  // (not accounting for frame time here)
      header_text1231.frameNStart = frameN;  // exact frame index
      
      header_text1231.setAutoDraw(true);
    }
    
    
    // *info1231* updates
    if (t >= 0.0 && info1231.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info1231.tStart = t;  // (not accounting for frame time here)
      info1231.frameNStart = frameN;  // exact frame index
      
      info1231.setAutoDraw(true);
    }
    
    
    // *continue_info1231* updates
    if (t >= 0.0 && continue_info1231.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info1231.tStart = t;  // (not accounting for frame time here)
      continue_info1231.frameNStart = frameN;  // exact frame index
      
      continue_info1231.setAutoDraw(true);
    }
    
    
    // *continue_border1231* updates
    if (t >= 0.0 && continue_border1231.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border1231.tStart = t;  // (not accounting for frame time here)
      continue_border1231.frameNStart = frameN;  // exact frame index
      
      continue_border1231.setAutoDraw(true);
    }
    
    
    // *key_resp1231* updates
    if (t >= 0.0 && key_resp1231.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp1231.tStart = t;  // (not accounting for frame time here)
      key_resp1231.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp1231.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp1231.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp1231.clearEvents(); });
    }
    
    if (key_resp1231.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp1231.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp1231_allKeys = _key_resp1231_allKeys.concat(theseKeys);
      if (_key_resp1231_allKeys.length > 0) {
        key_resp1231.keys = _key_resp1231_allKeys[_key_resp1231_allKeys.length - 1].name;  // just the last key pressed
        key_resp1231.rt = _key_resp1231_allKeys[_key_resp1231_allKeys.length - 1].rt;
        key_resp1231.duration = _key_resp1231_allKeys[_key_resp1231_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_practice' ---
    for (const thisComponent of instruction_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_practice.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp1231.corr, level);
    }
    psychoJS.experiment.addData('key_resp1231.keys', key_resp1231.keys);
    if (typeof key_resp1231.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp1231.rt', key_resp1231.rt);
        psychoJS.experiment.addData('key_resp1231.duration', key_resp1231.duration);
        routineTimer.reset();
        }
    
    key_resp1231.stop();
    // the Routine "instruction_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prepMaxDurationReached;
var dat;
var date_within;
var block_stim1;
var block_stim2;
var block_stim3;
var block_stim4;
var block_stim5;
var block_stim6;
var block_stim7;
var block_stim8;
var block_stim9;
var block_stim10;
var block_stim11;
var block_stim12;
var block_stim13;
var block_stim14;
var block_stim15;
var block_stim16;
var block_mean;
var block_x_pos1;
var block_y_pos1;
var block_x_pos2;
var block_y_pos2;
var block_x_pos3;
var block_y_pos3;
var block_x_pos4;
var block_y_pos4;
var block_x_pos5;
var block_y_pos5;
var block_x_pos6;
var block_y_pos6;
var block_x_pos7;
var block_y_pos7;
var block_x_pos8;
var block_y_pos8;
var block_x_pos9;
var block_y_pos9;
var block_x_pos10;
var block_y_pos10;
var block_x_pos11;
var block_y_pos11;
var block_x_pos12;
var block_y_pos12;
var block_x_pos13;
var block_y_pos13;
var block_x_pos14;
var block_y_pos14;
var block_x_pos15;
var block_y_pos15;
var block_x_pos16;
var block_y_pos16;
var trial_i;
var stim1;
var stim2;
var stim3;
var stim4;
var stim5;
var stim6;
var stim7;
var stim8;
var stim9;
var stim10;
var stim11;
var stim12;
var stim13;
var stim14;
var stim15;
var stim16;
var x_1;
var y_1;
var x_2;
var y_2;
var x_3;
var y_3;
var x_4;
var y_4;
var x_5;
var y_5;
var x_6;
var y_6;
var x_7;
var y_7;
var x_8;
var y_8;
var x_9;
var y_9;
var x_10;
var y_10;
var x_11;
var y_11;
var x_12;
var y_12;
var x_13;
var y_13;
var x_14;
var y_14;
var x_15;
var y_15;
var x_16;
var y_16;
var pos1;
var pos2;
var pos3;
var pos4;
var pos5;
var pos6;
var pos7;
var pos8;
var pos9;
var pos10;
var pos11;
var pos12;
var pos13;
var pos14;
var pos15;
var pos16;
var block_nr;
var interim_prequ;
var interim_footer_postqu;
var interim_header_postqu;
var interim_postqu;
var interim_header;
var interim;
var interim_footer;
var prepMaxDuration;
var prepComponents;
function prepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prep' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    prepClock.reset();
    routineTimer.reset();
    prepMaxDurationReached = false;
    // update component parameters for each repeat
    //Save date within
    dat = new Date();
    date_within = dat.getFullYear() +"-"+ (dat.getMonth()+1) +"-"+ dat.getDate() +" "+ dat.getHours() +":"+ dat.getMinutes() +":"+ dat.getSeconds();
    psychoJS.experiment.addData("date_within", date_within);
    
    console.log("Prep code beginn: block_i = ", block_i, "trial_i = ", trial_i)
    block_i +=1
    
    block_stim1 = stim[block_i]['stim1'];
    block_stim2 = stim[block_i]['stim2'];
    block_stim3 = stim[block_i]['stim3'];
    block_stim4 = stim[block_i]['stim4'];
    block_stim5 = stim[block_i]['stim5'];
    block_stim6 = stim[block_i]['stim6'];
    block_stim7 = stim[block_i]['stim7'];
    block_stim8 = stim[block_i]['stim8'];
    block_stim9 = stim[block_i]['stim9'];
    block_stim10 = stim[block_i]['stim10'];
    block_stim11 = stim[block_i]['stim11'];
    block_stim12 = stim[block_i]['stim12'];
    block_stim13 = stim[block_i]['stim13'];
    block_stim14 = stim[block_i]['stim14'];
    block_stim15 = stim[block_i]['stim15'];
    block_stim16 = stim[block_i]['stim16'];
    block_mean = stim[block_i]['mean'];
    
    block_x_pos1 = stim[block_i]['x_pos1'];
    block_y_pos1 = stim[block_i]['y_pos1'];
    block_x_pos2 = stim[block_i]['x_pos2'];
    block_y_pos2 = stim[block_i]['y_pos2'];
    block_x_pos3 = stim[block_i]['x_pos3'];
    block_y_pos3 = stim[block_i]['y_pos3'];
    block_x_pos4 = stim[block_i]['x_pos4'];
    block_y_pos4 = stim[block_i]['y_pos4'];
    block_x_pos5 = stim[block_i]['x_pos5'];
    block_y_pos5 = stim[block_i]['y_pos5'];
    block_x_pos6 = stim[block_i]['x_pos6'];
    block_y_pos6 = stim[block_i]['y_pos6'];
    block_x_pos7 = stim[block_i]['x_pos7'];
    block_y_pos7 = stim[block_i]['y_pos7'];
    block_x_pos8 = stim[block_i]['x_pos8'];
    block_y_pos8 = stim[block_i]['y_pos8'];
    block_x_pos9 = stim[block_i]['x_pos9'];
    block_y_pos9 = stim[block_i]['y_pos9'];
    block_x_pos10 = stim[block_i]['x_pos10'];
    block_y_pos10 = stim[block_i]['y_pos10'];
    block_x_pos11 = stim[block_i]['x_pos11'];
    block_y_pos11 = stim[block_i]['y_pos11'];
    block_x_pos12 = stim[block_i]['x_pos12'];
    block_y_pos12 = stim[block_i]['y_pos12'];
    block_x_pos13 = stim[block_i]['x_pos13'];
    block_y_pos13 = stim[block_i]['y_pos13'];
    block_x_pos14 = stim[block_i]['x_pos14'];
    block_y_pos14 = stim[block_i]['y_pos14'];
    block_x_pos15 = stim[block_i]['x_pos15'];
    block_y_pos15 = stim[block_i]['y_pos15'];
    block_x_pos16 = stim[block_i]['x_pos16'];
    block_y_pos16 = stim[block_i]['y_pos16'];
    
    trial_i = 0;
    
    stim1 = block_stim1[trial_i]
    stim2 = block_stim2[trial_i]
    stim3 = block_stim3[trial_i]
    stim4 = block_stim4[trial_i]
    stim5 = block_stim5[trial_i]
    stim6 = block_stim6[trial_i]
    stim7 = block_stim7[trial_i]
    stim8 = block_stim8[trial_i]
    stim9 = block_stim9[trial_i]
    stim10 = block_stim10[trial_i]
    stim11 = block_stim11[trial_i]
    stim12 = block_stim12[trial_i]
    stim13 = block_stim13[trial_i]
    stim14 = block_stim14[trial_i]
    stim15 = block_stim15[trial_i]
    stim16 = block_stim16[trial_i]
    
    x_1 = block_x_pos1[trial_i]
    y_1 = block_y_pos1[trial_i]
    x_2 = block_x_pos2[trial_i]
    y_2 = block_y_pos2[trial_i]
    x_3 = block_x_pos3[trial_i]
    y_3 = block_y_pos3[trial_i]
    x_4 = block_x_pos4[trial_i]
    y_4 = block_y_pos4[trial_i]
    x_5 = block_x_pos5[trial_i]
    y_5 = block_y_pos5[trial_i]
    x_6 = block_x_pos6[trial_i]
    y_6 = block_y_pos6[trial_i]
    x_7 = block_x_pos7[trial_i]
    y_7 = block_y_pos7[trial_i]
    x_8 = block_x_pos8[trial_i]
    y_8 = block_y_pos8[trial_i]
    x_9 = block_x_pos9[trial_i]
    y_9 = block_y_pos9[trial_i]
    x_10 = block_x_pos10[trial_i]
    y_10 = block_y_pos10[trial_i]
    x_11 = block_x_pos11[trial_i]
    y_11 = block_y_pos11[trial_i]
    x_12 = block_x_pos12[trial_i]
    y_12 = block_y_pos12[trial_i]
    x_13 = block_x_pos13[trial_i]
    y_13 = block_y_pos13[trial_i]
    x_14 = block_x_pos14[trial_i]
    y_14 = block_y_pos14[trial_i]
    x_15 = block_x_pos15[trial_i]
    y_15 = block_y_pos15[trial_i]
    x_16 = block_x_pos16[trial_i]
    y_16 = block_y_pos16[trial_i]
    
    pos1 = [x_1, y_1]
    pos2 = [x_2, y_2]
    pos3 = [x_3, y_3]
    pos4 = [x_4, y_4]
    pos5 = [x_5, y_5]
    pos6 = [x_6, y_6]
    pos7 = [x_7, y_7]
    pos8 = [x_8, y_8]
    pos9 = [x_9, y_9]
    pos10 = [x_10, y_10]
    pos11 = [x_11, y_11]
    pos12 = [x_12, y_12]
    pos13 = [x_13, y_13]
    pos14 = [x_14, y_14]
    pos15 = [x_15, y_15]
    pos16 = [x_16, y_16]
    
    console.log("Prep code end: block_i = ", block_i, "trial_i = ", trial_i, "block_stim1.length =", block_stim1.length)
    
    if (block_i == 2) {
        block_nr = "1st"
    } else if (block_i == 3){
        block_nr = "2nd"
    } else if (block_i == 4) {
        block_nr = "3rd"
    } else {
        block_nr = "last"
    }
    
    interim_prequ = "You have completed the " + block_nr + " of 4 blocks of the test phase."
    
    if (block_i == 5) {
        interim_footer_postqu = "Please press the spacebar to be forwarded to the questionnaire."
    } else {
        interim_footer_postqu = "Please press the spacebar to continue."
    } 
    
    if (block_i < 5){  
        interim_header_postqu = "Your Task"
        interim_postqu = "Feel free to take a break now.\n\nPlease continue to stay in fullscreen mode, meaning do NOT exit even during the break."
        interim_header = "Your Task"
        interim = ""
        interim_footer = "Please press the spacebar to continue."
    }else{
        interim_header_postqu = "Well done!"
        interim_postqu = "You have successfully completed the test phase. " + 
        "You will now be forwarded to a short questionnaire, followed by the second part of the study." +  "\n\n" +
        'For this, you will be redirected to a new page after having pressed the spacebar. Please wait for the pop-up window saying, "Closing the session. Please wait a few moments" to disappear. Then, click "ok" on the subsequent pop-up window with the message saying, "Thank you for your patience."' +
        "\n\nPlease do NOT close the window!"
    }
    
    psychoJS.experiment.addData('prep.started', globalClock.getTime());
    prepMaxDuration = null
    // keep track of which components have finished
    prepComponents = [];
    
    for (const thisComponent of prepComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prepRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prep' ---
    // get current time
    t = prepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prepComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prepRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prep' ---
    for (const thisComponent of prepComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prep.stopped', globalClock.getTime());
    // the Routine "prep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var countdownMaxDurationReached;
var countdownMaxDuration;
var countdownComponents;
function countdownRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'countdown' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    countdownClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    countdownMaxDurationReached = false;
    // update component parameters for each repeat
    label_a1.setText('< 500');
    label_l1.setText('> 500');
    psychoJS.experiment.addData('countdown.started', globalClock.getTime());
    countdownMaxDuration = null
    // keep track of which components have finished
    countdownComponents = [];
    countdownComponents.push(a_border1);
    countdownComponents.push(l_border1);
    countdownComponents.push(label_a1);
    countdownComponents.push(label_l1);
    countdownComponents.push(a_key1);
    countdownComponents.push(l_key1);
    countdownComponents.push(count5);
    countdownComponents.push(count4);
    countdownComponents.push(count3);
    countdownComponents.push(count2);
    countdownComponents.push(count1);
    
    for (const thisComponent of countdownComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function countdownRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'countdown' ---
    // get current time
    t = countdownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *a_border1* updates
    if (t >= 0 && a_border1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_border1.tStart = t;  // (not accounting for frame time here)
      a_border1.frameNStart = frameN;  // exact frame index
      
      a_border1.setAutoDraw(true);
    }
    
    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (a_border1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      a_border1.setAutoDraw(false);
    }
    
    
    // *l_border1* updates
    if (t >= 0.0 && l_border1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_border1.tStart = t;  // (not accounting for frame time here)
      l_border1.frameNStart = frameN;  // exact frame index
      
      l_border1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (l_border1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_border1.setAutoDraw(false);
    }
    
    
    // *label_a1* updates
    if (t >= 0.0 && label_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_a1.tStart = t;  // (not accounting for frame time here)
      label_a1.frameNStart = frameN;  // exact frame index
      
      label_a1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_a1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label_a1.setAutoDraw(false);
    }
    
    
    // *label_l1* updates
    if (t >= 0.0 && label_l1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_l1.tStart = t;  // (not accounting for frame time here)
      label_l1.frameNStart = frameN;  // exact frame index
      
      label_l1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_l1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label_l1.setAutoDraw(false);
    }
    
    
    // *a_key1* updates
    if (t >= 0.0 && a_key1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_key1.tStart = t;  // (not accounting for frame time here)
      a_key1.frameNStart = frameN;  // exact frame index
      
      a_key1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (a_key1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      a_key1.setAutoDraw(false);
    }
    
    
    // *l_key1* updates
    if (t >= 0.0 && l_key1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_key1.tStart = t;  // (not accounting for frame time here)
      l_key1.frameNStart = frameN;  // exact frame index
      
      l_key1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (l_key1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_key1.setAutoDraw(false);
    }
    
    
    // *count5* updates
    if (t >= 0.0 && count5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      count5.tStart = t;  // (not accounting for frame time here)
      count5.frameNStart = frameN;  // exact frame index
      
      count5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (count5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      count5.setAutoDraw(false);
    }
    
    
    // *count4* updates
    if (t >= 1 && count4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      count4.tStart = t;  // (not accounting for frame time here)
      count4.frameNStart = frameN;  // exact frame index
      
      count4.setAutoDraw(true);
    }
    
    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (count4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      count4.setAutoDraw(false);
    }
    
    
    // *count3* updates
    if (t >= 2 && count3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      count3.tStart = t;  // (not accounting for frame time here)
      count3.frameNStart = frameN;  // exact frame index
      
      count3.setAutoDraw(true);
    }
    
    frameRemains = 2 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (count3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      count3.setAutoDraw(false);
    }
    
    
    // *count2* updates
    if (t >= 3 && count2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      count2.tStart = t;  // (not accounting for frame time here)
      count2.frameNStart = frameN;  // exact frame index
      
      count2.setAutoDraw(true);
    }
    
    frameRemains = 3 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (count2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      count2.setAutoDraw(false);
    }
    
    
    // *count1* updates
    if (t >= 4 && count1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      count1.tStart = t;  // (not accounting for frame time here)
      count1.frameNStart = frameN;  // exact frame index
      
      count1.setAutoDraw(true);
    }
    
    frameRemains = 4 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (count1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      count1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of countdownComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function countdownRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'countdown' ---
    for (const thisComponent of countdownComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('countdown.stopped', globalClock.getTime());
    if (countdownMaxDurationReached) {
        countdownClock.add(countdownMaxDuration);
    } else {
        countdownClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: block_stim1.length, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_trials'
    });
    psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
    currentLoop = practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_trial of practice_trials) {
      snapshot = practice_trials.getSnapshot();
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(fixaion_crossRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(fixaion_crossRoutineEachFrame());
      practice_trialsLoopScheduler.add(fixaion_crossRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(rt_trialRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(rt_trialRoutineEachFrame());
      practice_trialsLoopScheduler.add(rt_trialRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(feedbackRoutineEachFrame());
      practice_trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(ITIRoutineEachFrame());
      practice_trialsLoopScheduler.add(ITIRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_trialsLoopEndIteration(practice_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var burn_in_trials;
function burn_in_trialsLoopBegin(burn_in_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    burn_in_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: block_stim1.length, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'burn_in_trials'
    });
    psychoJS.experiment.addLoop(burn_in_trials); // add the loop to the experiment
    currentLoop = burn_in_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBurn_in_trial of burn_in_trials) {
      snapshot = burn_in_trials.getSnapshot();
      burn_in_trialsLoopScheduler.add(importConditions(snapshot));
      burn_in_trialsLoopScheduler.add(fixaion_crossRoutineBegin(snapshot));
      burn_in_trialsLoopScheduler.add(fixaion_crossRoutineEachFrame());
      burn_in_trialsLoopScheduler.add(fixaion_crossRoutineEnd(snapshot));
      burn_in_trialsLoopScheduler.add(rt_trialRoutineBegin(snapshot));
      burn_in_trialsLoopScheduler.add(rt_trialRoutineEachFrame());
      burn_in_trialsLoopScheduler.add(rt_trialRoutineEnd(snapshot));
      burn_in_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      burn_in_trialsLoopScheduler.add(feedbackRoutineEachFrame());
      burn_in_trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      burn_in_trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      burn_in_trialsLoopScheduler.add(ITIRoutineEachFrame());
      burn_in_trialsLoopScheduler.add(ITIRoutineEnd(snapshot));
      burn_in_trialsLoopScheduler.add(burn_in_trialsLoopEndIteration(burn_in_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function burn_in_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(burn_in_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function burn_in_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(prepRoutineBegin(snapshot));
      trialsLoopScheduler.add(prepRoutineEachFrame());
      trialsLoopScheduler.add(prepRoutineEnd(snapshot));
      trialsLoopScheduler.add(countdownRoutineBegin(snapshot));
      trialsLoopScheduler.add(countdownRoutineEachFrame());
      trialsLoopScheduler.add(countdownRoutineEnd(snapshot));
      const test_trialsLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(test_trialsLoopBegin(test_trialsLoopScheduler, snapshot));
      trialsLoopScheduler.add(test_trialsLoopScheduler);
      trialsLoopScheduler.add(test_trialsLoopEnd);
      trialsLoopScheduler.add(premature_endRoutineBegin(snapshot));
      trialsLoopScheduler.add(premature_endRoutineEachFrame());
      trialsLoopScheduler.add(premature_endRoutineEnd(snapshot));
      trialsLoopScheduler.add(interim_postquRoutineBegin(snapshot));
      trialsLoopScheduler.add(interim_postquRoutineEachFrame());
      trialsLoopScheduler.add(interim_postquRoutineEnd(snapshot));
      trialsLoopScheduler.add(place_fingersRoutineBegin(snapshot));
      trialsLoopScheduler.add(place_fingersRoutineEachFrame());
      trialsLoopScheduler.add(place_fingersRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var test_trials;
function test_trialsLoopBegin(test_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: block_stim1.length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'test_trials'
    });
    psychoJS.experiment.addLoop(test_trials); // add the loop to the experiment
    currentLoop = test_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_trial of test_trials) {
      snapshot = test_trials.getSnapshot();
      test_trialsLoopScheduler.add(importConditions(snapshot));
      test_trialsLoopScheduler.add(fixaion_crossRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(fixaion_crossRoutineEachFrame());
      test_trialsLoopScheduler.add(fixaion_crossRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(rt_trialRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(rt_trialRoutineEachFrame());
      test_trialsLoopScheduler.add(rt_trialRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(feedbackRoutineEachFrame());
      test_trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(ITIRoutineEachFrame());
      test_trialsLoopScheduler.add(ITIRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(test_trialsLoopEndIteration(test_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(interim_quRoutineBegin(snapshot));
      trials_4LoopScheduler.add(interim_quRoutineEachFrame());
      trials_4LoopScheduler.add(interim_quRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fixaion_crossMaxDurationReached;
var fixaion_crossMaxDuration;
var fixaion_crossComponents;
function fixaion_crossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixaion_cross' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixaion_crossClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    fixaion_crossMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixaion_cross.started', globalClock.getTime());
    fixaion_crossMaxDuration = null
    // keep track of which components have finished
    fixaion_crossComponents = [];
    fixaion_crossComponents.push(a_border_cross);
    fixaion_crossComponents.push(l_border_cross);
    fixaion_crossComponents.push(label_a_cross);
    fixaion_crossComponents.push(label_l_cross);
    fixaion_crossComponents.push(a_key_cross);
    fixaion_crossComponents.push(l_key_cross);
    fixaion_crossComponents.push(fixation_cross_text);
    
    for (const thisComponent of fixaion_crossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixaion_crossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixaion_cross' ---
    // get current time
    t = fixaion_crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *a_border_cross* updates
    if (t >= 0.0 && a_border_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_border_cross.tStart = t;  // (not accounting for frame time here)
      a_border_cross.frameNStart = frameN;  // exact frame index
      
      a_border_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (a_border_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      a_border_cross.setAutoDraw(false);
    }
    
    
    // *l_border_cross* updates
    if (t >= 0.0 && l_border_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_border_cross.tStart = t;  // (not accounting for frame time here)
      l_border_cross.frameNStart = frameN;  // exact frame index
      
      l_border_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (l_border_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_border_cross.setAutoDraw(false);
    }
    
    
    // *label_a_cross* updates
    if (t >= 0.0 && label_a_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_a_cross.tStart = t;  // (not accounting for frame time here)
      label_a_cross.frameNStart = frameN;  // exact frame index
      
      label_a_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_a_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label_a_cross.setAutoDraw(false);
    }
    
    
    // *label_l_cross* updates
    if (t >= 0.0 && label_l_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_l_cross.tStart = t;  // (not accounting for frame time here)
      label_l_cross.frameNStart = frameN;  // exact frame index
      
      label_l_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_l_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label_l_cross.setAutoDraw(false);
    }
    
    
    // *a_key_cross* updates
    if (t >= 0.0 && a_key_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_key_cross.tStart = t;  // (not accounting for frame time here)
      a_key_cross.frameNStart = frameN;  // exact frame index
      
      a_key_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (a_key_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      a_key_cross.setAutoDraw(false);
    }
    
    
    // *l_key_cross* updates
    if (t >= 0.0 && l_key_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_key_cross.tStart = t;  // (not accounting for frame time here)
      l_key_cross.frameNStart = frameN;  // exact frame index
      
      l_key_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (l_key_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_key_cross.setAutoDraw(false);
    }
    
    
    // *fixation_cross_text* updates
    if (t >= 0.0 && fixation_cross_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross_text.tStart = t;  // (not accounting for frame time here)
      fixation_cross_text.frameNStart = frameN;  // exact frame index
      
      fixation_cross_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_cross_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixaion_crossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixaion_crossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixaion_cross' ---
    for (const thisComponent of fixaion_crossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixaion_cross.stopped', globalClock.getTime());
    if (fixaion_crossMaxDurationReached) {
        fixaion_crossClock.add(fixaion_crossMaxDuration);
    } else {
        fixaion_crossClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rt_trialMaxDurationReached;
var _key_resp_allKeys;
var true_mean;
var trial_type;
var rt_trialMaxDuration;
var rt_trialComponents;
function rt_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rt_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    rt_trialClock.reset();
    routineTimer.reset();
    rt_trialMaxDurationReached = false;
    // update component parameters for each repeat
    stim_1.setPos(pos1);
    stim_1.setText(stim1);
    stim_2.setPos(pos2);
    stim_2.setText(stim2);
    stim_3.setPos(pos3);
    stim_3.setText(stim3);
    stim_4.setPos(pos4);
    stim_4.setText(stim4);
    stim_5.setPos(pos5);
    stim_5.setText(stim5);
    stim_6.setPos(pos6);
    stim_6.setText(stim6);
    stim_7.setPos(pos7);
    stim_7.setText(stim7);
    stim_8.setPos(pos8);
    stim_8.setText(stim8);
    stim_9.setPos(pos9);
    stim_9.setText(stim9);
    stim_10.setPos(pos10);
    stim_10.setText(stim10);
    stim_11.setPos(pos11);
    stim_11.setText(stim11);
    stim_12.setPos(pos12);
    stim_12.setText(stim12);
    stim_13.setPos(pos13);
    stim_13.setText(stim13);
    stim_14.setPos(pos14);
    stim_14.setText(stim14);
    stim_15.setPos(pos15);
    stim_15.setText(stim15);
    stim_16.setPos(pos16);
    stim_16.setText(stim16);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    true_mean = stim[block_i]['mean'][trial_i] 
    trial_type = stim[block_i]['trial_type'][trial_i] 
    
    console.log("true mean =", true_mean)
    psychoJS.experiment.addData('rt_trial.started', globalClock.getTime());
    rt_trialMaxDuration = null
    // keep track of which components have finished
    rt_trialComponents = [];
    rt_trialComponents.push(a_border_rt);
    rt_trialComponents.push(l_border_rt);
    rt_trialComponents.push(label_a_rt);
    rt_trialComponents.push(label_l_rt);
    rt_trialComponents.push(a_key_rt);
    rt_trialComponents.push(l_key_rt);
    rt_trialComponents.push(stim_1);
    rt_trialComponents.push(stim_2);
    rt_trialComponents.push(stim_3);
    rt_trialComponents.push(stim_4);
    rt_trialComponents.push(stim_5);
    rt_trialComponents.push(stim_6);
    rt_trialComponents.push(stim_7);
    rt_trialComponents.push(stim_8);
    rt_trialComponents.push(stim_9);
    rt_trialComponents.push(stim_10);
    rt_trialComponents.push(stim_11);
    rt_trialComponents.push(stim_12);
    rt_trialComponents.push(stim_13);
    rt_trialComponents.push(stim_14);
    rt_trialComponents.push(stim_15);
    rt_trialComponents.push(stim_16);
    rt_trialComponents.push(key_resp);
    
    for (const thisComponent of rt_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rt_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rt_trial' ---
    // get current time
    t = rt_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *a_border_rt* updates
    if (t >= 0.0 && a_border_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_border_rt.tStart = t;  // (not accounting for frame time here)
      a_border_rt.frameNStart = frameN;  // exact frame index
      
      a_border_rt.setAutoDraw(true);
    }
    
    
    // *l_border_rt* updates
    if (t >= 0.0 && l_border_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_border_rt.tStart = t;  // (not accounting for frame time here)
      l_border_rt.frameNStart = frameN;  // exact frame index
      
      l_border_rt.setAutoDraw(true);
    }
    
    
    // *label_a_rt* updates
    if (t >= 0.0 && label_a_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_a_rt.tStart = t;  // (not accounting for frame time here)
      label_a_rt.frameNStart = frameN;  // exact frame index
      
      label_a_rt.setAutoDraw(true);
    }
    
    
    // *label_l_rt* updates
    if (t >= 0.0 && label_l_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_l_rt.tStart = t;  // (not accounting for frame time here)
      label_l_rt.frameNStart = frameN;  // exact frame index
      
      label_l_rt.setAutoDraw(true);
    }
    
    
    // *a_key_rt* updates
    if (t >= 0.0 && a_key_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_key_rt.tStart = t;  // (not accounting for frame time here)
      a_key_rt.frameNStart = frameN;  // exact frame index
      
      a_key_rt.setAutoDraw(true);
    }
    
    
    // *l_key_rt* updates
    if (t >= 0.0 && l_key_rt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_key_rt.tStart = t;  // (not accounting for frame time here)
      l_key_rt.frameNStart = frameN;  // exact frame index
      
      l_key_rt.setAutoDraw(true);
    }
    
    
    // *stim_1* updates
    if (t >= 0.0 && stim_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_1.tStart = t;  // (not accounting for frame time here)
      stim_1.frameNStart = frameN;  // exact frame index
      
      stim_1.setAutoDraw(true);
    }
    
    
    // *stim_2* updates
    if (t >= 0.0 && stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_2.tStart = t;  // (not accounting for frame time here)
      stim_2.frameNStart = frameN;  // exact frame index
      
      stim_2.setAutoDraw(true);
    }
    
    
    // *stim_3* updates
    if (t >= 0.0 && stim_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_3.tStart = t;  // (not accounting for frame time here)
      stim_3.frameNStart = frameN;  // exact frame index
      
      stim_3.setAutoDraw(true);
    }
    
    
    // *stim_4* updates
    if (t >= 0.0 && stim_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_4.tStart = t;  // (not accounting for frame time here)
      stim_4.frameNStart = frameN;  // exact frame index
      
      stim_4.setAutoDraw(true);
    }
    
    
    // *stim_5* updates
    if (t >= 0.0 && stim_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_5.tStart = t;  // (not accounting for frame time here)
      stim_5.frameNStart = frameN;  // exact frame index
      
      stim_5.setAutoDraw(true);
    }
    
    
    // *stim_6* updates
    if (t >= 0.0 && stim_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_6.tStart = t;  // (not accounting for frame time here)
      stim_6.frameNStart = frameN;  // exact frame index
      
      stim_6.setAutoDraw(true);
    }
    
    
    // *stim_7* updates
    if (t >= 0.0 && stim_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_7.tStart = t;  // (not accounting for frame time here)
      stim_7.frameNStart = frameN;  // exact frame index
      
      stim_7.setAutoDraw(true);
    }
    
    
    // *stim_8* updates
    if (t >= 0.0 && stim_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_8.tStart = t;  // (not accounting for frame time here)
      stim_8.frameNStart = frameN;  // exact frame index
      
      stim_8.setAutoDraw(true);
    }
    
    
    // *stim_9* updates
    if (t >= 0.0 && stim_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_9.tStart = t;  // (not accounting for frame time here)
      stim_9.frameNStart = frameN;  // exact frame index
      
      stim_9.setAutoDraw(true);
    }
    
    
    // *stim_10* updates
    if (t >= 0.0 && stim_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_10.tStart = t;  // (not accounting for frame time here)
      stim_10.frameNStart = frameN;  // exact frame index
      
      stim_10.setAutoDraw(true);
    }
    
    
    // *stim_11* updates
    if (t >= 0.0 && stim_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_11.tStart = t;  // (not accounting for frame time here)
      stim_11.frameNStart = frameN;  // exact frame index
      
      stim_11.setAutoDraw(true);
    }
    
    
    // *stim_12* updates
    if (t >= 0.0 && stim_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_12.tStart = t;  // (not accounting for frame time here)
      stim_12.frameNStart = frameN;  // exact frame index
      
      stim_12.setAutoDraw(true);
    }
    
    
    // *stim_13* updates
    if (t >= 0.0 && stim_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_13.tStart = t;  // (not accounting for frame time here)
      stim_13.frameNStart = frameN;  // exact frame index
      
      stim_13.setAutoDraw(true);
    }
    
    
    // *stim_14* updates
    if (t >= 0.0 && stim_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_14.tStart = t;  // (not accounting for frame time here)
      stim_14.frameNStart = frameN;  // exact frame index
      
      stim_14.setAutoDraw(true);
    }
    
    
    // *stim_15* updates
    if (t >= 0.0 && stim_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_15.tStart = t;  // (not accounting for frame time here)
      stim_15.frameNStart = frameN;  // exact frame index
      
      stim_15.setAutoDraw(true);
    }
    
    
    // *stim_16* updates
    if (t >= 0.0 && stim_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_16.tStart = t;  // (not accounting for frame time here)
      stim_16.frameNStart = frameN;  // exact frame index
      
      stim_16.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rt_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var feedback_colour;
var feedback_text;
var ITI_length;
function rt_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rt_trial' ---
    for (const thisComponent of rt_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rt_trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    feedback_colour = colour_false;
    feedback_text = 'False!';
    
    if (block_i == 0) { //practice block
        if (true_mean < 500 & key_resp.keys == 'a'){
            feedback_text = 'Correct!';
        } else if (true_mean > 500 & key_resp.keys == 'l') {
            feedback_text = 'Correct!';
        }
    } else { //burn_in and test blocks
        feedback_text = '';
    }
    
    if (key_resp.rt < 0.52 & trial_type != 'attention') { //Fast guess
        if (block_i == 0) {
            feedback_text += "\nToo fast!"
        } else {
            feedback_text += "Too fast!"
        }
    }
    
    ITI_length = 0.3
    
    if(trial_i == block_stim1.length-1){
        ITI_length = 0
    }
    
    console.log(true_mean, key_resp.keys, feedback_text)
    // the Routine "rt_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset();
    routineTimer.reset();
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    text_fb.setPos([0, 0.0925]);
    text_fb.setText(feedback_text);
    console.log("begin routine feedback text:", feedback_text)
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(a_border_fb);
    feedbackComponents.push(l_border_fb);
    feedbackComponents.push(label_a_fb);
    feedbackComponents.push(label_l_fb);
    feedbackComponents.push(a_key_fb);
    feedbackComponents.push(l_key_fb);
    feedbackComponents.push(text_fb);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *a_border_fb* updates
    if (t >= 0 && a_border_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_border_fb.tStart = t;  // (not accounting for frame time here)
      a_border_fb.frameNStart = frameN;  // exact frame index
      
      a_border_fb.setAutoDraw(true);
    }
    
    frameRemains = 0 + feedback_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (a_border_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      a_border_fb.setAutoDraw(false);
    }
    
    
    // *l_border_fb* updates
    if (t >= 0.0 && l_border_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_border_fb.tStart = t;  // (not accounting for frame time here)
      l_border_fb.frameNStart = frameN;  // exact frame index
      
      l_border_fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + feedback_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (l_border_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_border_fb.setAutoDraw(false);
    }
    
    
    // *label_a_fb* updates
    if (t >= 0.0 && label_a_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_a_fb.tStart = t;  // (not accounting for frame time here)
      label_a_fb.frameNStart = frameN;  // exact frame index
      
      label_a_fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + feedback_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_a_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label_a_fb.setAutoDraw(false);
    }
    
    
    // *label_l_fb* updates
    if (t >= 0.0 && label_l_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_l_fb.tStart = t;  // (not accounting for frame time here)
      label_l_fb.frameNStart = frameN;  // exact frame index
      
      label_l_fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + feedback_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_l_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label_l_fb.setAutoDraw(false);
    }
    
    
    // *a_key_fb* updates
    if (t >= 0.0 && a_key_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_key_fb.tStart = t;  // (not accounting for frame time here)
      a_key_fb.frameNStart = frameN;  // exact frame index
      
      a_key_fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + feedback_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (a_key_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      a_key_fb.setAutoDraw(false);
    }
    
    
    // *l_key_fb* updates
    if (t >= 0.0 && l_key_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_key_fb.tStart = t;  // (not accounting for frame time here)
      l_key_fb.frameNStart = frameN;  // exact frame index
      
      l_key_fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + feedback_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (l_key_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_key_fb.setAutoDraw(false);
    }
    
    
    // *text_fb* updates
    if (t >= 0.0 && text_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fb.tStart = t;  // (not accounting for frame time here)
      text_fb.frameNStart = frameN;  // exact frame index
      
      text_fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + feedback_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fb.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    console.log("end routine feedback text :", feedback_text)
    
    psychoJS.experiment.addData('mean', block_mean[trial_i]);
    psychoJS.experiment.addData('session', (parseInt(expInfo["session"])));
    psychoJS.experiment.addData('group', group);
    
    psychoJS.experiment.addData('feedback_text', feedback_text);
    psychoJS.experiment.addData('block', block_i);
    psychoJS.experiment.addData('trial', trial_i);
    psychoJS.experiment.addData('trial_type', trial_type);
    psychoJS.experiment.addData('Fullscreen', isFullscreen());
    //psychoJS.experiment.addData('screen_height', screen_height);
    //psychoJS.experiment.addData('height_pixel', $(window).height());
    //psychoJS.experiment.addData('width_pixel', $(window).width());
                                                               
    
    
    
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ITIMaxDurationReached;
var ITIMaxDuration;
var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ITIClock.reset();
    routineTimer.reset();
    ITIMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('ITI.started', globalClock.getTime());
    ITIMaxDuration = null
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(a_border_rt_2);
    ITIComponents.push(l_border_rt_2);
    ITIComponents.push(label_a_rt_2);
    ITIComponents.push(label_l_rt_2);
    ITIComponents.push(a_key_rt_2);
    ITIComponents.push(l_key_rt_2);
    
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI' ---
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *a_border_rt_2* updates
    if (t >= 0.0 && a_border_rt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_border_rt_2.tStart = t;  // (not accounting for frame time here)
      a_border_rt_2.frameNStart = frameN;  // exact frame index
      
      a_border_rt_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ITI_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (a_border_rt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      a_border_rt_2.setAutoDraw(false);
    }
    
    
    // *l_border_rt_2* updates
    if (t >= 0.0 && l_border_rt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_border_rt_2.tStart = t;  // (not accounting for frame time here)
      l_border_rt_2.frameNStart = frameN;  // exact frame index
      
      l_border_rt_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ITI_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (l_border_rt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_border_rt_2.setAutoDraw(false);
    }
    
    
    // *label_a_rt_2* updates
    if (t >= 0.0 && label_a_rt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_a_rt_2.tStart = t;  // (not accounting for frame time here)
      label_a_rt_2.frameNStart = frameN;  // exact frame index
      
      label_a_rt_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ITI_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_a_rt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label_a_rt_2.setAutoDraw(false);
    }
    
    
    // *label_l_rt_2* updates
    if (t >= 0.0 && label_l_rt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_l_rt_2.tStart = t;  // (not accounting for frame time here)
      label_l_rt_2.frameNStart = frameN;  // exact frame index
      
      label_l_rt_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ITI_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_l_rt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label_l_rt_2.setAutoDraw(false);
    }
    
    
    // *a_key_rt_2* updates
    if (t >= 0.0 && a_key_rt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_key_rt_2.tStart = t;  // (not accounting for frame time here)
      a_key_rt_2.frameNStart = frameN;  // exact frame index
      
      a_key_rt_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ITI_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (a_key_rt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      a_key_rt_2.setAutoDraw(false);
    }
    
    
    // *l_key_rt_2* updates
    if (t >= 0.0 && l_key_rt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_key_rt_2.tStart = t;  // (not accounting for frame time here)
      l_key_rt_2.frameNStart = frameN;  // exact frame index
      
      l_key_rt_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ITI_length - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (l_key_rt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_key_rt_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI' ---
    for (const thisComponent of ITIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ITI.stopped', globalClock.getTime());
    trial_i +=1
    
    stim1 = block_stim1[trial_i]
    stim2 = block_stim2[trial_i]
    stim3 = block_stim3[trial_i]
    stim4 = block_stim4[trial_i]
    stim5 = block_stim5[trial_i]
    stim6 = block_stim6[trial_i]
    stim7 = block_stim7[trial_i]
    stim8 = block_stim8[trial_i]
    stim9 = block_stim9[trial_i]
    stim10 = block_stim10[trial_i]
    stim11 = block_stim11[trial_i]
    stim12 = block_stim12[trial_i]
    stim13 = block_stim13[trial_i]
    stim14 = block_stim14[trial_i]
    stim15 = block_stim15[trial_i]
    stim16 = block_stim16[trial_i]
    
    x_1 = block_x_pos1[trial_i]
    y_1 = block_y_pos1[trial_i]
    x_2 = block_x_pos2[trial_i]
    y_2 = block_y_pos2[trial_i]
    x_3 = block_x_pos3[trial_i]
    y_3 = block_y_pos3[trial_i]
    x_4 = block_x_pos4[trial_i]
    y_4 = block_y_pos4[trial_i]
    x_5 = block_x_pos5[trial_i]
    y_5 = block_y_pos5[trial_i]
    x_6 = block_x_pos6[trial_i]
    y_6 = block_y_pos6[trial_i]
    x_7 = block_x_pos7[trial_i]
    y_7 = block_y_pos7[trial_i]
    x_8 = block_x_pos8[trial_i]
    y_8 = block_y_pos8[trial_i]
    x_9 = block_x_pos9[trial_i]
    y_9 = block_y_pos9[trial_i]
    x_10 = block_x_pos10[trial_i]
    y_10 = block_y_pos10[trial_i]
    x_11 = block_x_pos11[trial_i]
    y_11 = block_y_pos11[trial_i]
    x_12 = block_x_pos12[trial_i]
    y_12 = block_y_pos12[trial_i]
    x_13 = block_x_pos13[trial_i]
    y_13 = block_y_pos13[trial_i]
    x_14 = block_x_pos14[trial_i]
    y_14 = block_y_pos14[trial_i]
    x_15 = block_x_pos15[trial_i]
    y_15 = block_y_pos15[trial_i]
    x_16 = block_x_pos16[trial_i]
    y_16 = block_y_pos16[trial_i]
    
    pos1 = [x_1, y_1]
    pos2 = [x_2, y_2]
    pos3 = [x_3, y_3]
    pos4 = [x_4, y_4]
    pos5 = [x_5, y_5]
    pos6 = [x_6, y_6]
    pos7 = [x_7, y_7]
    pos8 = [x_8, y_8]
    pos9 = [x_9, y_9]
    pos10 = [x_10, y_10]
    pos11 = [x_11, y_11]
    pos12 = [x_12, y_12]
    pos13 = [x_13, y_13]
    pos14 = [x_14, y_14]
    pos15 = [x_15, y_15]
    pos16 = [x_16, y_16]
    
    console.log("Block_i = ", block_i)
    console.log("trial_i = ", trial_i)
    // the Routine "ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var premature_endMaxDurationReached;
var text_end_time;
var premature_endMaxDuration;
var premature_endComponents;
function premature_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'premature_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    premature_endClock.reset();
    routineTimer.reset();
    premature_endMaxDurationReached = false;
    // update component parameters for each repeat
    if(isFullscreen() != 1){
        text_end += '\n\n' +
        'It has been detected that you exited fullscreen mode. Therefore, unfortunately, it is not possible to continue the study.' 
        text_end_time = 999999
    }
    /*
    if(condition_met_acc==0 && block_i==2) {
        text_end += '\n\n' +
        'Es liegen Anzeichen vor, dass Sie die Aufgabe nicht ernsthaft bearbeiten. Deshalb ist eine Fortsetzung der Studie leider nicht möglich.' 
        text_end_time = 999999
    }
    */
    end_2.setText(text_end);
    psychoJS.experiment.addData('premature_end.started', globalClock.getTime());
    premature_endMaxDuration = null
    // keep track of which components have finished
    premature_endComponents = [];
    premature_endComponents.push(header_border_end);
    premature_endComponents.push(header_text_end);
    premature_endComponents.push(end_2);
    premature_endComponents.push(continue_info_end);
    premature_endComponents.push(continue_border_end);
    
    for (const thisComponent of premature_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function premature_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'premature_end' ---
    // get current time
    t = premature_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border_end* updates
    if (t >= 0.0 && header_border_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border_end.tStart = t;  // (not accounting for frame time here)
      header_border_end.frameNStart = frameN;  // exact frame index
      
      header_border_end.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + text_end_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (header_border_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      header_border_end.setAutoDraw(false);
    }
    
    
    // *header_text_end* updates
    if (t >= 0.0 && header_text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text_end.tStart = t;  // (not accounting for frame time here)
      header_text_end.frameNStart = frameN;  // exact frame index
      
      header_text_end.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + text_end_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (header_text_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      header_text_end.setAutoDraw(false);
    }
    
    
    // *end_2* updates
    if (t >= 0.0 && end_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_2.tStart = t;  // (not accounting for frame time here)
      end_2.frameNStart = frameN;  // exact frame index
      
      end_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + text_end_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_2.setAutoDraw(false);
    }
    
    
    // *continue_info_end* updates
    if (t >= 0.0 && continue_info_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info_end.tStart = t;  // (not accounting for frame time here)
      continue_info_end.frameNStart = frameN;  // exact frame index
      
      continue_info_end.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + text_end_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (continue_info_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continue_info_end.setAutoDraw(false);
    }
    
    
    // *continue_border_end* updates
    if (t >= 0.0 && continue_border_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border_end.tStart = t;  // (not accounting for frame time here)
      continue_border_end.frameNStart = frameN;  // exact frame index
      
      continue_border_end.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + text_end_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (continue_border_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continue_border_end.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of premature_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function premature_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'premature_end' ---
    for (const thisComponent of premature_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('premature_end.stopped', globalClock.getTime());
    if(text_end_time>0) {
        quitPsychoJS()
    }
    
    // the Routine "premature_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_guessMaxDurationReached;
var instruction;
var instruction_1;
var _key_resp121_allKeys;
var instruction_guessMaxDuration;
var instruction_guessComponents;
function instruction_guessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_guess' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_guessClock.reset();
    routineTimer.reset();
    instruction_guessMaxDurationReached = false;
    // update component parameters for each repeat
    if (group == "control"){
        instruction = control_instruction
        instruction_1 = control_instruction_1
    }else{// group == "guess"
        instruction = guess_instruction
        instruction_1 = guess_instruction_1
        }
    info121.setText(("You have completed the practice rounds.\n\nIn the following test phase, you will continue with the numerical task.\nHowever, from now on, please " + instruction_1));
    key_resp121.keys = undefined;
    key_resp121.rt = undefined;
    _key_resp121_allKeys = [];
    psychoJS.experiment.addData('instruction_guess.started', globalClock.getTime());
    instruction_guessMaxDuration = null
    // keep track of which components have finished
    instruction_guessComponents = [];
    instruction_guessComponents.push(header_border121);
    instruction_guessComponents.push(header_text121);
    instruction_guessComponents.push(info121);
    instruction_guessComponents.push(continue_info121);
    instruction_guessComponents.push(continue_border121);
    instruction_guessComponents.push(key_resp121);
    
    for (const thisComponent of instruction_guessComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_guessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_guess' ---
    // get current time
    t = instruction_guessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border121* updates
    if (t >= 0.0 && header_border121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border121.tStart = t;  // (not accounting for frame time here)
      header_border121.frameNStart = frameN;  // exact frame index
      
      header_border121.setAutoDraw(true);
    }
    
    
    // *header_text121* updates
    if (t >= 0.0 && header_text121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text121.tStart = t;  // (not accounting for frame time here)
      header_text121.frameNStart = frameN;  // exact frame index
      
      header_text121.setAutoDraw(true);
    }
    
    
    // *info121* updates
    if (t >= 0.0 && info121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info121.tStart = t;  // (not accounting for frame time here)
      info121.frameNStart = frameN;  // exact frame index
      
      info121.setAutoDraw(true);
    }
    
    
    // *continue_info121* updates
    if (t >= 0.0 && continue_info121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info121.tStart = t;  // (not accounting for frame time here)
      continue_info121.frameNStart = frameN;  // exact frame index
      
      continue_info121.setAutoDraw(true);
    }
    
    
    // *continue_border121* updates
    if (t >= 0.0 && continue_border121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border121.tStart = t;  // (not accounting for frame time here)
      continue_border121.frameNStart = frameN;  // exact frame index
      
      continue_border121.setAutoDraw(true);
    }
    
    
    // *key_resp121* updates
    if (t >= 0.0 && key_resp121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp121.tStart = t;  // (not accounting for frame time here)
      key_resp121.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp121.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp121.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp121.clearEvents(); });
    }
    
    if (key_resp121.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp121.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp121_allKeys = _key_resp121_allKeys.concat(theseKeys);
      if (_key_resp121_allKeys.length > 0) {
        key_resp121.keys = _key_resp121_allKeys[_key_resp121_allKeys.length - 1].name;  // just the last key pressed
        key_resp121.rt = _key_resp121_allKeys[_key_resp121_allKeys.length - 1].rt;
        key_resp121.duration = _key_resp121_allKeys[_key_resp121_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_guessComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_guessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_guess' ---
    for (const thisComponent of instruction_guessComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_guess.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp121.corr, level);
    }
    psychoJS.experiment.addData('key_resp121.keys', key_resp121.keys);
    if (typeof key_resp121.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp121.rt', key_resp121.rt);
        psychoJS.experiment.addData('key_resp121.duration', key_resp121.duration);
        routineTimer.reset();
        }
    
    key_resp121.stop();
    // the Routine "instruction_guess" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructuon_burn1MaxDurationReached;
var _key_resp123123_allKeys;
var instructuon_burn1MaxDuration;
var instructuon_burn1Components;
function instructuon_burn1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructuon_burn1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructuon_burn1Clock.reset();
    routineTimer.reset();
    instructuon_burn1MaxDurationReached = false;
    // update component parameters for each repeat
    info123123.setText((("Before starting with the test phase, you will engage in a few warm-up rounds to familiarize yourself with the instruction to " + instruction_1) + "\n\nPLEASE NOTE:\n From now on, you will no longer receive feedback on the correctness of your answers."));
    key_resp123123.keys = undefined;
    key_resp123123.rt = undefined;
    _key_resp123123_allKeys = [];
    psychoJS.experiment.addData('instructuon_burn1.started', globalClock.getTime());
    instructuon_burn1MaxDuration = null
    // keep track of which components have finished
    instructuon_burn1Components = [];
    instructuon_burn1Components.push(header_border123123);
    instructuon_burn1Components.push(header_text123123);
    instructuon_burn1Components.push(info123123);
    instructuon_burn1Components.push(continue_info123123);
    instructuon_burn1Components.push(continue_border123123);
    instructuon_burn1Components.push(key_resp123123);
    
    for (const thisComponent of instructuon_burn1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructuon_burn1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructuon_burn1' ---
    // get current time
    t = instructuon_burn1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border123123* updates
    if (t >= 0.0 && header_border123123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border123123.tStart = t;  // (not accounting for frame time here)
      header_border123123.frameNStart = frameN;  // exact frame index
      
      header_border123123.setAutoDraw(true);
    }
    
    
    // *header_text123123* updates
    if (t >= 0.0 && header_text123123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text123123.tStart = t;  // (not accounting for frame time here)
      header_text123123.frameNStart = frameN;  // exact frame index
      
      header_text123123.setAutoDraw(true);
    }
    
    
    // *info123123* updates
    if (t >= 0.0 && info123123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info123123.tStart = t;  // (not accounting for frame time here)
      info123123.frameNStart = frameN;  // exact frame index
      
      info123123.setAutoDraw(true);
    }
    
    
    // *continue_info123123* updates
    if (t >= 0.0 && continue_info123123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info123123.tStart = t;  // (not accounting for frame time here)
      continue_info123123.frameNStart = frameN;  // exact frame index
      
      continue_info123123.setAutoDraw(true);
    }
    
    
    // *continue_border123123* updates
    if (t >= 0.0 && continue_border123123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border123123.tStart = t;  // (not accounting for frame time here)
      continue_border123123.frameNStart = frameN;  // exact frame index
      
      continue_border123123.setAutoDraw(true);
    }
    
    
    // *key_resp123123* updates
    if (t >= 0.0 && key_resp123123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp123123.tStart = t;  // (not accounting for frame time here)
      key_resp123123.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp123123.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp123123.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp123123.clearEvents(); });
    }
    
    if (key_resp123123.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp123123.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp123123_allKeys = _key_resp123123_allKeys.concat(theseKeys);
      if (_key_resp123123_allKeys.length > 0) {
        key_resp123123.keys = _key_resp123123_allKeys[_key_resp123123_allKeys.length - 1].name;  // just the last key pressed
        key_resp123123.rt = _key_resp123123_allKeys[_key_resp123123_allKeys.length - 1].rt;
        key_resp123123.duration = _key_resp123123_allKeys[_key_resp123123_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructuon_burn1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructuon_burn1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructuon_burn1' ---
    for (const thisComponent of instructuon_burn1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructuon_burn1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp123123.corr, level);
    }
    psychoJS.experiment.addData('key_resp123123.keys', key_resp123123.keys);
    if (typeof key_resp123123.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp123123.rt', key_resp123123.rt);
        psychoJS.experiment.addData('key_resp123123.duration', key_resp123123.duration);
        routineTimer.reset();
        }
    
    key_resp123123.stop();
    // the Routine "instructuon_burn1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_burn2MaxDurationReached;
var _key_resp2_allKeys;
var instruction_burn2MaxDuration;
var instruction_burn2Components;
function instruction_burn2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_burn2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_burn2Clock.reset();
    routineTimer.reset();
    instruction_burn2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp2.keys = undefined;
    key_resp2.rt = undefined;
    _key_resp2_allKeys = [];
    psychoJS.experiment.addData('instruction_burn2.started', globalClock.getTime());
    instruction_burn2MaxDuration = null
    // keep track of which components have finished
    instruction_burn2Components = [];
    instruction_burn2Components.push(header_border2);
    instruction_burn2Components.push(header_text2);
    instruction_burn2Components.push(info2);
    instruction_burn2Components.push(continue_info2);
    instruction_burn2Components.push(continue_border2);
    instruction_burn2Components.push(key_resp2);
    
    for (const thisComponent of instruction_burn2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_burn2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_burn2' ---
    // get current time
    t = instruction_burn2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border2* updates
    if (t >= 0.0 && header_border2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border2.tStart = t;  // (not accounting for frame time here)
      header_border2.frameNStart = frameN;  // exact frame index
      
      header_border2.setAutoDraw(true);
    }
    
    
    // *header_text2* updates
    if (t >= 0.0 && header_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text2.tStart = t;  // (not accounting for frame time here)
      header_text2.frameNStart = frameN;  // exact frame index
      
      header_text2.setAutoDraw(true);
    }
    
    
    // *info2* updates
    if (t >= 0.0 && info2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info2.tStart = t;  // (not accounting for frame time here)
      info2.frameNStart = frameN;  // exact frame index
      
      info2.setAutoDraw(true);
    }
    
    
    // *continue_info2* updates
    if (t >= 0.0 && continue_info2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info2.tStart = t;  // (not accounting for frame time here)
      continue_info2.frameNStart = frameN;  // exact frame index
      
      continue_info2.setAutoDraw(true);
    }
    
    
    // *continue_border2* updates
    if (t >= 0.0 && continue_border2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border2.tStart = t;  // (not accounting for frame time here)
      continue_border2.frameNStart = frameN;  // exact frame index
      
      continue_border2.setAutoDraw(true);
    }
    
    
    // *key_resp2* updates
    if (t >= 0.0 && key_resp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp2.tStart = t;  // (not accounting for frame time here)
      key_resp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp2.clearEvents(); });
    }
    
    if (key_resp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp2_allKeys = _key_resp2_allKeys.concat(theseKeys);
      if (_key_resp2_allKeys.length > 0) {
        key_resp2.keys = _key_resp2_allKeys[_key_resp2_allKeys.length - 1].name;  // just the last key pressed
        key_resp2.rt = _key_resp2_allKeys[_key_resp2_allKeys.length - 1].rt;
        key_resp2.duration = _key_resp2_allKeys[_key_resp2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_burn2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_burn2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_burn2' ---
    for (const thisComponent of instruction_burn2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_burn2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp2.corr, level);
    }
    psychoJS.experiment.addData('key_resp2.keys', key_resp2.keys);
    if (typeof key_resp2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp2.rt', key_resp2.rt);
        psychoJS.experiment.addData('key_resp2.duration', key_resp2.duration);
        routineTimer.reset();
        }
    
    key_resp2.stop();
    // the Routine "instruction_burn2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_test1MaxDurationReached;
var _key_resp3_allKeys;
var instructions_test1MaxDuration;
var instructions_test1Components;
function instructions_test1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_test1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_test1Clock.reset();
    routineTimer.reset();
    instructions_test1MaxDurationReached = false;
    // update component parameters for each repeat
    info3.setText(("You have now completed all warm-up rounds.\n\n During the test phase, you will work on 4 blocks, consisting of approximately 100\u00a0rounds each. After each test block, you will have time for a break.\n\n As a reminder:\n You are supposed to " + instruction_1));
    key_resp3.keys = undefined;
    key_resp3.rt = undefined;
    _key_resp3_allKeys = [];
    psychoJS.experiment.addData('instructions_test1.started', globalClock.getTime());
    instructions_test1MaxDuration = null
    // keep track of which components have finished
    instructions_test1Components = [];
    instructions_test1Components.push(header_border3);
    instructions_test1Components.push(header_text3);
    instructions_test1Components.push(info3);
    instructions_test1Components.push(continue_info3);
    instructions_test1Components.push(continue_border3);
    instructions_test1Components.push(key_resp3);
    
    for (const thisComponent of instructions_test1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_test1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_test1' ---
    // get current time
    t = instructions_test1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border3* updates
    if (t >= 0.0 && header_border3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border3.tStart = t;  // (not accounting for frame time here)
      header_border3.frameNStart = frameN;  // exact frame index
      
      header_border3.setAutoDraw(true);
    }
    
    
    // *header_text3* updates
    if (t >= 0.0 && header_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text3.tStart = t;  // (not accounting for frame time here)
      header_text3.frameNStart = frameN;  // exact frame index
      
      header_text3.setAutoDraw(true);
    }
    
    
    // *info3* updates
    if (t >= 0.0 && info3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info3.tStart = t;  // (not accounting for frame time here)
      info3.frameNStart = frameN;  // exact frame index
      
      info3.setAutoDraw(true);
    }
    
    
    // *continue_info3* updates
    if (t >= 0.0 && continue_info3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info3.tStart = t;  // (not accounting for frame time here)
      continue_info3.frameNStart = frameN;  // exact frame index
      
      continue_info3.setAutoDraw(true);
    }
    
    
    // *continue_border3* updates
    if (t >= 0.0 && continue_border3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border3.tStart = t;  // (not accounting for frame time here)
      continue_border3.frameNStart = frameN;  // exact frame index
      
      continue_border3.setAutoDraw(true);
    }
    
    
    // *key_resp3* updates
    if (t >= 0.0 && key_resp3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp3.tStart = t;  // (not accounting for frame time here)
      key_resp3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp3.clearEvents(); });
    }
    
    if (key_resp3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp3_allKeys = _key_resp3_allKeys.concat(theseKeys);
      if (_key_resp3_allKeys.length > 0) {
        key_resp3.keys = _key_resp3_allKeys[_key_resp3_allKeys.length - 1].name;  // just the last key pressed
        key_resp3.rt = _key_resp3_allKeys[_key_resp3_allKeys.length - 1].rt;
        key_resp3.duration = _key_resp3_allKeys[_key_resp3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_test1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_test1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_test1' ---
    for (const thisComponent of instructions_test1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_test1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp3.corr, level);
    }
    psychoJS.experiment.addData('key_resp3.keys', key_resp3.keys);
    if (typeof key_resp3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp3.rt', key_resp3.rt);
        psychoJS.experiment.addData('key_resp3.duration', key_resp3.duration);
        routineTimer.reset();
        }
    
    key_resp3.stop();
    // the Routine "instructions_test1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_test2MaxDurationReached;
var _key_resp4_allKeys;
var instructions_test2MaxDuration;
var instructions_test2Components;
function instructions_test2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_test2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_test2Clock.reset();
    routineTimer.reset();
    instructions_test2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp4.keys = undefined;
    key_resp4.rt = undefined;
    _key_resp4_allKeys = [];
    psychoJS.experiment.addData('instructions_test2.started', globalClock.getTime());
    instructions_test2MaxDuration = null
    // keep track of which components have finished
    instructions_test2Components = [];
    instructions_test2Components.push(header_border4);
    instructions_test2Components.push(header_text4);
    instructions_test2Components.push(continue_info4);
    instructions_test2Components.push(continue_border4);
    instructions_test2Components.push(key_resp4);
    instructions_test2Components.push(info4);
    
    for (const thisComponent of instructions_test2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_test2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_test2' ---
    // get current time
    t = instructions_test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border4* updates
    if (t >= 0.0 && header_border4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border4.tStart = t;  // (not accounting for frame time here)
      header_border4.frameNStart = frameN;  // exact frame index
      
      header_border4.setAutoDraw(true);
    }
    
    
    // *header_text4* updates
    if (t >= 0.0 && header_text4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text4.tStart = t;  // (not accounting for frame time here)
      header_text4.frameNStart = frameN;  // exact frame index
      
      header_text4.setAutoDraw(true);
    }
    
    
    // *continue_info4* updates
    if (t >= 0.0 && continue_info4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info4.tStart = t;  // (not accounting for frame time here)
      continue_info4.frameNStart = frameN;  // exact frame index
      
      continue_info4.setAutoDraw(true);
    }
    
    
    // *continue_border4* updates
    if (t >= 0.0 && continue_border4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border4.tStart = t;  // (not accounting for frame time here)
      continue_border4.frameNStart = frameN;  // exact frame index
      
      continue_border4.setAutoDraw(true);
    }
    
    
    // *key_resp4* updates
    if (t >= 0.0 && key_resp4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp4.tStart = t;  // (not accounting for frame time here)
      key_resp4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp4.clearEvents(); });
    }
    
    if (key_resp4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp4_allKeys = _key_resp4_allKeys.concat(theseKeys);
      if (_key_resp4_allKeys.length > 0) {
        key_resp4.keys = _key_resp4_allKeys[_key_resp4_allKeys.length - 1].name;  // just the last key pressed
        key_resp4.rt = _key_resp4_allKeys[_key_resp4_allKeys.length - 1].rt;
        key_resp4.duration = _key_resp4_allKeys[_key_resp4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *info4* updates
    if (t >= 0.0 && info4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info4.tStart = t;  // (not accounting for frame time here)
      info4.frameNStart = frameN;  // exact frame index
      
      info4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_test2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_test2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_test2' ---
    for (const thisComponent of instructions_test2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_test2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp4.corr, level);
    }
    psychoJS.experiment.addData('key_resp4.keys', key_resp4.keys);
    if (typeof key_resp4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp4.rt', key_resp4.rt);
        psychoJS.experiment.addData('key_resp4.duration', key_resp4.duration);
        routineTimer.reset();
        }
    
    key_resp4.stop();
    // the Routine "instructions_test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var interim_postquMaxDurationReached;
var _key_resp_postqu_allKeys;
var interim_postquMaxDuration;
var interim_postquComponents;
function interim_postquRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'interim_postqu' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    interim_postquClock.reset();
    routineTimer.reset();
    interim_postquMaxDurationReached = false;
    // update component parameters for each repeat
    if(block_i == 5) {
        continueRoutine = false;
    }
    header_text_postqu.setText(interim_header_postqu);
    text_postqu.setText(((interim_prequ + "\n\n") + interim_postqu));
    continue_border_postqu.setText(interim_footer_postqu);
    key_resp_postqu.keys = undefined;
    key_resp_postqu.rt = undefined;
    _key_resp_postqu_allKeys = [];
    psychoJS.experiment.addData('interim_postqu.started', globalClock.getTime());
    interim_postquMaxDuration = null
    // keep track of which components have finished
    interim_postquComponents = [];
    interim_postquComponents.push(header_border_postqu);
    interim_postquComponents.push(header_text_postqu);
    interim_postquComponents.push(text_postqu);
    interim_postquComponents.push(continue_postqu);
    interim_postquComponents.push(continue_border_postqu);
    interim_postquComponents.push(key_resp_postqu);
    
    for (const thisComponent of interim_postquComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function interim_postquRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'interim_postqu' ---
    // get current time
    t = interim_postquClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border_postqu* updates
    if (t >= 0.0 && header_border_postqu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border_postqu.tStart = t;  // (not accounting for frame time here)
      header_border_postqu.frameNStart = frameN;  // exact frame index
      
      header_border_postqu.setAutoDraw(true);
    }
    
    
    // *header_text_postqu* updates
    if (t >= 0.0 && header_text_postqu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text_postqu.tStart = t;  // (not accounting for frame time here)
      header_text_postqu.frameNStart = frameN;  // exact frame index
      
      header_text_postqu.setAutoDraw(true);
    }
    
    
    // *text_postqu* updates
    if (t >= 0.0 && text_postqu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_postqu.tStart = t;  // (not accounting for frame time here)
      text_postqu.frameNStart = frameN;  // exact frame index
      
      text_postqu.setAutoDraw(true);
    }
    
    
    // *continue_postqu* updates
    if (t >= 0.0 && continue_postqu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_postqu.tStart = t;  // (not accounting for frame time here)
      continue_postqu.frameNStart = frameN;  // exact frame index
      
      continue_postqu.setAutoDraw(true);
    }
    
    
    // *continue_border_postqu* updates
    if (t >= 0.0 && continue_border_postqu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border_postqu.tStart = t;  // (not accounting for frame time here)
      continue_border_postqu.frameNStart = frameN;  // exact frame index
      
      continue_border_postqu.setAutoDraw(true);
    }
    
    
    // *key_resp_postqu* updates
    if (t >= 0.0 && key_resp_postqu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_postqu.tStart = t;  // (not accounting for frame time here)
      key_resp_postqu.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_postqu.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_postqu.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_postqu.clearEvents(); });
    }
    
    if (key_resp_postqu.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_postqu.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_postqu_allKeys = _key_resp_postqu_allKeys.concat(theseKeys);
      if (_key_resp_postqu_allKeys.length > 0) {
        key_resp_postqu.keys = _key_resp_postqu_allKeys[_key_resp_postqu_allKeys.length - 1].name;  // just the last key pressed
        key_resp_postqu.rt = _key_resp_postqu_allKeys[_key_resp_postqu_allKeys.length - 1].rt;
        key_resp_postqu.duration = _key_resp_postqu_allKeys[_key_resp_postqu_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of interim_postquComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function interim_postquRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'interim_postqu' ---
    for (const thisComponent of interim_postquComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('interim_postqu.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_postqu.corr, level);
    }
    psychoJS.experiment.addData('key_resp_postqu.keys', key_resp_postqu.keys);
    if (typeof key_resp_postqu.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_postqu.rt', key_resp_postqu.rt);
        psychoJS.experiment.addData('key_resp_postqu.duration', key_resp_postqu.duration);
        routineTimer.reset();
        }
    
    key_resp_postqu.stop();
    // the Routine "interim_postqu" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var place_fingersMaxDurationReached;
var _key_resp12_allKeys;
var place_fingersMaxDuration;
var place_fingersComponents;
function place_fingersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'place_fingers' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    place_fingersClock.reset();
    routineTimer.reset();
    place_fingersMaxDurationReached = false;
    // update component parameters for each repeat
    if(block_i == 5) {
        continueRoutine = false;
    }
    
    if (block_i == 2) {
        block_nr = "2nd"
    } else if (block_i == 3){
        block_nr = "3rd"
    } else {
        block_nr = "last"
    } 
    info12.setText(((((("Please place your index fingers on the keys \"A\" (\"" + smaller) + "\") and \"L\" (\"") + larger) + "\").\nIt is important that you keep your index fingers on these keys throughout all rounds.\n\n") + instruction));
    continue_border12.setText((("Please press the spacebar to continue with the " + block_nr) + " of 4 blocks of the test phase."));
    key_resp12.keys = undefined;
    key_resp12.rt = undefined;
    _key_resp12_allKeys = [];
    psychoJS.experiment.addData('place_fingers.started', globalClock.getTime());
    place_fingersMaxDuration = null
    // keep track of which components have finished
    place_fingersComponents = [];
    place_fingersComponents.push(header_border12);
    place_fingersComponents.push(header_text12);
    place_fingersComponents.push(info12);
    place_fingersComponents.push(continue_info12);
    place_fingersComponents.push(continue_border12);
    place_fingersComponents.push(key_resp12);
    
    for (const thisComponent of place_fingersComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function place_fingersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'place_fingers' ---
    // get current time
    t = place_fingersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border12* updates
    if (t >= 0.0 && header_border12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border12.tStart = t;  // (not accounting for frame time here)
      header_border12.frameNStart = frameN;  // exact frame index
      
      header_border12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + t_place_fingers - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (header_border12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      header_border12.setAutoDraw(false);
    }
    
    
    // *header_text12* updates
    if (t >= 0.0 && header_text12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text12.tStart = t;  // (not accounting for frame time here)
      header_text12.frameNStart = frameN;  // exact frame index
      
      header_text12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + t_place_fingers - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (header_text12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      header_text12.setAutoDraw(false);
    }
    
    
    // *info12* updates
    if (t >= 0.0 && info12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info12.tStart = t;  // (not accounting for frame time here)
      info12.frameNStart = frameN;  // exact frame index
      
      info12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + t_place_fingers - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (info12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      info12.setAutoDraw(false);
    }
    
    
    // *continue_info12* updates
    if (t >= 0.0 && continue_info12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_info12.tStart = t;  // (not accounting for frame time here)
      continue_info12.frameNStart = frameN;  // exact frame index
      
      continue_info12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + t_place_fingers - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (continue_info12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continue_info12.setAutoDraw(false);
    }
    
    
    // *continue_border12* updates
    if (t >= 0 && continue_border12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border12.tStart = t;  // (not accounting for frame time here)
      continue_border12.frameNStart = frameN;  // exact frame index
      
      continue_border12.setAutoDraw(true);
    }
    
    frameRemains = 0 + t_place_fingers - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (continue_border12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continue_border12.setAutoDraw(false);
    }
    
    
    // *key_resp12* updates
    if (t >= 0.0 && key_resp12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp12.tStart = t;  // (not accounting for frame time here)
      key_resp12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp12.clearEvents(); });
    }
    
    frameRemains = 0.0 + t_place_fingers - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp12.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp12_allKeys = _key_resp12_allKeys.concat(theseKeys);
      if (_key_resp12_allKeys.length > 0) {
        key_resp12.keys = _key_resp12_allKeys[_key_resp12_allKeys.length - 1].name;  // just the last key pressed
        key_resp12.rt = _key_resp12_allKeys[_key_resp12_allKeys.length - 1].rt;
        key_resp12.duration = _key_resp12_allKeys[_key_resp12_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of place_fingersComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function place_fingersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'place_fingers' ---
    for (const thisComponent of place_fingersComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('place_fingers.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp12.corr, level);
    }
    psychoJS.experiment.addData('key_resp12.keys', key_resp12.keys);
    if (typeof key_resp12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp12.rt', key_resp12.rt);
        psychoJS.experiment.addData('key_resp12.duration', key_resp12.duration);
        routineTimer.reset();
        }
    
    key_resp12.stop();
    // the Routine "place_fingers" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var interim_prequMaxDurationReached;
var _key_resp_prequ_allKeys;
var t_place_fingers;
var interim_prequMaxDuration;
var interim_prequComponents;
function interim_prequRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'interim_prequ' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    interim_prequClock.reset();
    routineTimer.reset();
    interim_prequMaxDurationReached = false;
    // update component parameters for each repeat
    header_text_prequ.setText('Your Task');
    text_prequ.setText(((interim_prequ + "\n\n") + "Please answer the following questions honestly, regardless of whether you were able to follow the given instructions.\nYour answers will not impact your approval rate on Prolific, nor will they result in exclusion from the study.\n\nRespond by clicking the mouse on the respective part of the slider."));
    continue_border_prequ.setText('Please press the spacebar to continue.');
    key_resp_prequ.keys = undefined;
    key_resp_prequ.rt = undefined;
    _key_resp_prequ_allKeys = [];
    // Run 'Begin Routine' code from code_prequ
    qu_i = 1;
    qu_text = "did you take an educated guess (i.e.,\u00A0you chose the answer that seemed most probable at first glance, even without complete certainty of its correctness)?"
    
    if (block_i == 5) {
        t_place_fingers = 0;
    } else {
        t_place_fingers = 99999;
    }
    psychoJS.experiment.addData('interim_prequ.started', globalClock.getTime());
    interim_prequMaxDuration = null
    // keep track of which components have finished
    interim_prequComponents = [];
    interim_prequComponents.push(header_border_prequ);
    interim_prequComponents.push(header_text_prequ);
    interim_prequComponents.push(text_prequ);
    interim_prequComponents.push(continue_prequ);
    interim_prequComponents.push(continue_border_prequ);
    interim_prequComponents.push(key_resp_prequ);
    
    for (const thisComponent of interim_prequComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function interim_prequRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'interim_prequ' ---
    // get current time
    t = interim_prequClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border_prequ* updates
    if (t >= 0.0 && header_border_prequ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border_prequ.tStart = t;  // (not accounting for frame time here)
      header_border_prequ.frameNStart = frameN;  // exact frame index
      
      header_border_prequ.setAutoDraw(true);
    }
    
    
    // *header_text_prequ* updates
    if (t >= 0.0 && header_text_prequ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text_prequ.tStart = t;  // (not accounting for frame time here)
      header_text_prequ.frameNStart = frameN;  // exact frame index
      
      header_text_prequ.setAutoDraw(true);
    }
    
    
    // *text_prequ* updates
    if (t >= 0.0 && text_prequ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_prequ.tStart = t;  // (not accounting for frame time here)
      text_prequ.frameNStart = frameN;  // exact frame index
      
      text_prequ.setAutoDraw(true);
    }
    
    
    // *continue_prequ* updates
    if (t >= 0.0 && continue_prequ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_prequ.tStart = t;  // (not accounting for frame time here)
      continue_prequ.frameNStart = frameN;  // exact frame index
      
      continue_prequ.setAutoDraw(true);
    }
    
    
    // *continue_border_prequ* updates
    if (t >= 0.0 && continue_border_prequ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border_prequ.tStart = t;  // (not accounting for frame time here)
      continue_border_prequ.frameNStart = frameN;  // exact frame index
      
      continue_border_prequ.setAutoDraw(true);
    }
    
    
    // *key_resp_prequ* updates
    if (t >= 0.0 && key_resp_prequ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_prequ.tStart = t;  // (not accounting for frame time here)
      key_resp_prequ.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_prequ.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prequ.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prequ.clearEvents(); });
    }
    
    if (key_resp_prequ.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_prequ.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_prequ_allKeys = _key_resp_prequ_allKeys.concat(theseKeys);
      if (_key_resp_prequ_allKeys.length > 0) {
        key_resp_prequ.keys = _key_resp_prequ_allKeys[_key_resp_prequ_allKeys.length - 1].name;  // just the last key pressed
        key_resp_prequ.rt = _key_resp_prequ_allKeys[_key_resp_prequ_allKeys.length - 1].rt;
        key_resp_prequ.duration = _key_resp_prequ_allKeys[_key_resp_prequ_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of interim_prequComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function interim_prequRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'interim_prequ' ---
    for (const thisComponent of interim_prequComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('interim_prequ.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_prequ.corr, level);
    }
    psychoJS.experiment.addData('key_resp_prequ.keys', key_resp_prequ.keys);
    if (typeof key_resp_prequ.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_prequ.rt', key_resp_prequ.rt);
        psychoJS.experiment.addData('key_resp_prequ.duration', key_resp_prequ.duration);
        routineTimer.reset();
        }
    
    key_resp_prequ.stop();
    // the Routine "interim_prequ" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var interim_quMaxDurationReached;
var _key_resp_qu_allKeys;
var interim_quMaxDuration;
var interim_quComponents;
function interim_quRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'interim_qu' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    interim_quClock.reset();
    routineTimer.reset();
    interim_quMaxDurationReached = false;
    // update component parameters for each repeat
    header_text_qu.setText('Your Task');
    text_qu.setText(("During the test phase, how often " + qu_text));
    continue_border_qu.setText('Please press the spacebar to continue.');
    key_resp_qu.keys = undefined;
    key_resp_qu.rt = undefined;
    _key_resp_qu_allKeys = [];
    slider.reset()
    psychoJS.experiment.addData('interim_qu.started', globalClock.getTime());
    interim_quMaxDuration = null
    // keep track of which components have finished
    interim_quComponents = [];
    interim_quComponents.push(header_border_qu);
    interim_quComponents.push(header_text_qu);
    interim_quComponents.push(text_qu);
    interim_quComponents.push(continue_qu);
    interim_quComponents.push(continue_border_qu);
    interim_quComponents.push(key_resp_qu);
    interim_quComponents.push(slider);
    
    for (const thisComponent of interim_quComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function interim_quRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'interim_qu' ---
    // get current time
    t = interim_quClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border_qu* updates
    if (t >= 0.0 && header_border_qu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border_qu.tStart = t;  // (not accounting for frame time here)
      header_border_qu.frameNStart = frameN;  // exact frame index
      
      header_border_qu.setAutoDraw(true);
    }
    
    
    // *header_text_qu* updates
    if (t >= 0.0 && header_text_qu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text_qu.tStart = t;  // (not accounting for frame time here)
      header_text_qu.frameNStart = frameN;  // exact frame index
      
      header_text_qu.setAutoDraw(true);
    }
    
    
    // *text_qu* updates
    if (t >= 0.0 && text_qu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_qu.tStart = t;  // (not accounting for frame time here)
      text_qu.frameNStart = frameN;  // exact frame index
      
      text_qu.setAutoDraw(true);
    }
    
    
    // *continue_qu* updates
    if (t >= 0.0 && continue_qu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_qu.tStart = t;  // (not accounting for frame time here)
      continue_qu.frameNStart = frameN;  // exact frame index
      
      continue_qu.setAutoDraw(true);
    }
    
    
    // *continue_border_qu* updates
    if (t >= 0.0 && continue_border_qu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border_qu.tStart = t;  // (not accounting for frame time here)
      continue_border_qu.frameNStart = frameN;  // exact frame index
      
      continue_border_qu.setAutoDraw(true);
    }
    
    
    // *key_resp_qu* updates
    if ((slider.getRating()) && key_resp_qu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_qu.tStart = t;  // (not accounting for frame time here)
      key_resp_qu.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_qu.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_qu.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_qu.clearEvents(); });
    }
    
    if (key_resp_qu.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_qu.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_qu_allKeys = _key_resp_qu_allKeys.concat(theseKeys);
      if (_key_resp_qu_allKeys.length > 0) {
        key_resp_qu.keys = _key_resp_qu_allKeys[_key_resp_qu_allKeys.length - 1].name;  // just the last key pressed
        key_resp_qu.rt = _key_resp_qu_allKeys[_key_resp_qu_allKeys.length - 1].rt;
        key_resp_qu.duration = _key_resp_qu_allKeys[_key_resp_qu_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of interim_quComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function interim_quRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'interim_qu' ---
    for (const thisComponent of interim_quComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('interim_qu.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_qu.corr, level);
    }
    psychoJS.experiment.addData('key_resp_qu.keys', key_resp_qu.keys);
    if (typeof key_resp_qu.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_qu.rt', key_resp_qu.rt);
        psychoJS.experiment.addData('key_resp_qu.duration', key_resp_qu.duration);
        routineTimer.reset();
        }
    
    key_resp_qu.stop();
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // Run 'End Routine' code from code_qu
    //psychoJS.experiment.addData('qu_nr', qu_i);
    psychoJS.experiment.addData('qu_text', qu_text);
    
    qu_i += 1
    
    if (qu_i == 2) {
        qu_text = 'did you take a random guess (i.e.,\u00A0you had not the slightest clue what the correct answer might be and gave up by randomly responding with either "<\u00A0500" or ">\u00A0500")?'
    } 
    
    
    // the Routine "interim_qu" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var postquMaxDurationReached;
var _key_resp_postqu_2_allKeys;
var postquMaxDuration;
var postquComponents;
function postquRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'postqu' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    postquClock.reset();
    routineTimer.reset();
    postquMaxDurationReached = false;
    // update component parameters for each repeat
    header_text_postqu_2.setText(interim_header_postqu);
    text_postqu_2.setText(interim_postqu);
    continue_border_postqu_2.setText(interim_footer_postqu);
    key_resp_postqu_2.keys = undefined;
    key_resp_postqu_2.rt = undefined;
    _key_resp_postqu_2_allKeys = [];
    psychoJS.experiment.addData('postqu.started', globalClock.getTime());
    postquMaxDuration = null
    // keep track of which components have finished
    postquComponents = [];
    postquComponents.push(header_border_postqu_2);
    postquComponents.push(header_text_postqu_2);
    postquComponents.push(text_postqu_2);
    postquComponents.push(continue_postqu_2);
    postquComponents.push(continue_border_postqu_2);
    postquComponents.push(key_resp_postqu_2);
    
    for (const thisComponent of postquComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function postquRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'postqu' ---
    // get current time
    t = postquClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *header_border_postqu_2* updates
    if (t >= 0.0 && header_border_postqu_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_border_postqu_2.tStart = t;  // (not accounting for frame time here)
      header_border_postqu_2.frameNStart = frameN;  // exact frame index
      
      header_border_postqu_2.setAutoDraw(true);
    }
    
    
    // *header_text_postqu_2* updates
    if (t >= 0.0 && header_text_postqu_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_text_postqu_2.tStart = t;  // (not accounting for frame time here)
      header_text_postqu_2.frameNStart = frameN;  // exact frame index
      
      header_text_postqu_2.setAutoDraw(true);
    }
    
    
    // *text_postqu_2* updates
    if (t >= 0.0 && text_postqu_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_postqu_2.tStart = t;  // (not accounting for frame time here)
      text_postqu_2.frameNStart = frameN;  // exact frame index
      
      text_postqu_2.setAutoDraw(true);
    }
    
    
    // *continue_postqu_2* updates
    if (t >= 0.0 && continue_postqu_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_postqu_2.tStart = t;  // (not accounting for frame time here)
      continue_postqu_2.frameNStart = frameN;  // exact frame index
      
      continue_postqu_2.setAutoDraw(true);
    }
    
    
    // *continue_border_postqu_2* updates
    if (t >= 0.0 && continue_border_postqu_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_border_postqu_2.tStart = t;  // (not accounting for frame time here)
      continue_border_postqu_2.frameNStart = frameN;  // exact frame index
      
      continue_border_postqu_2.setAutoDraw(true);
    }
    
    
    // *key_resp_postqu_2* updates
    if (t >= 0.0 && key_resp_postqu_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_postqu_2.tStart = t;  // (not accounting for frame time here)
      key_resp_postqu_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_postqu_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_postqu_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_postqu_2.clearEvents(); });
    }
    
    if (key_resp_postqu_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_postqu_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_postqu_2_allKeys = _key_resp_postqu_2_allKeys.concat(theseKeys);
      if (_key_resp_postqu_2_allKeys.length > 0) {
        key_resp_postqu_2.keys = _key_resp_postqu_2_allKeys[_key_resp_postqu_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_postqu_2.rt = _key_resp_postqu_2_allKeys[_key_resp_postqu_2_allKeys.length - 1].rt;
        key_resp_postqu_2.duration = _key_resp_postqu_2_allKeys[_key_resp_postqu_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of postquComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function postquRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'postqu' ---
    for (const thisComponent of postquComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('postqu.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_postqu_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_postqu_2.keys', key_resp_postqu_2.keys);
    if (typeof key_resp_postqu_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_postqu_2.rt', key_resp_postqu_2.rt);
        psychoJS.experiment.addData('key_resp_postqu_2.duration', key_resp_postqu_2.duration);
        routineTimer.reset();
        }
    
    key_resp_postqu_2.stop();
    // the Routine "postqu" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var save_datesMaxDurationReached;
var save_datesMaxDuration;
var save_datesComponents;
function save_datesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'save_dates' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    save_datesClock.reset();
    routineTimer.reset();
    save_datesMaxDurationReached = false;
    // update component parameters for each repeat
    dat = new Date();
    date_within = dat.getFullYear() +"-"+ (dat.getMonth()+1) +"-"+ dat.getDate() +" "+ dat.getHours() +":"+ dat.getMinutes() +":"+ dat.getSeconds();
    psychoJS.experiment.addData("date_within", date_within);
    
    psychoJS.experiment.addData('save_dates.started', globalClock.getTime());
    save_datesMaxDuration = null
    // keep track of which components have finished
    save_datesComponents = [];
    
    for (const thisComponent of save_datesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function save_datesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'save_dates' ---
    // get current time
    t = save_datesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of save_datesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var d;
var date_end;
function save_datesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'save_dates' ---
    for (const thisComponent of save_datesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('save_dates.stopped', globalClock.getTime());
    d = new Date();
    date_end = d.getFullYear() +"-"+ (d.getMonth()+1) +"-"+ d.getDate() +" "+ d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
    psychoJS.experiment.addData("date_end", date_end);
    
    // the Routine "save_dates" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


var myCompletedURL;
async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  myCompletedURL = "https://www.soscisurvey.de/lfmjl_post/?pp=" + expInfo["participant"] + "&group=" + group + "&ext=" 
  
  psychoJS.setRedirectUrls(myCompletedURL, 'about:blank');
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

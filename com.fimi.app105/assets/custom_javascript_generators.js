/*
 *  Copyright 2016 Google Inc. All Rights Reserved.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @fileoverview Generators for the Turtle Blockly demo on Android.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

Blockly.JavaScript['control_start'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    return '';
};

Blockly.JavaScript['control_takeoff'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    return 'X9.takeoff(\''+ block.id +'\');\n';
};

Blockly.JavaScript['control_takeoff_on_hand'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    return 'X9.takeoffOnHand(\''+ block.id +'\');\n';
};

Blockly.JavaScript['control_landing'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    return 'X9.landing(\''+ block.id +'\');\n';
};

Blockly.JavaScript['control_hover'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    return 'X9.hover(\''+ block.id +'\');\n';
};

Blockly.JavaScript['control_accelerator'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + 0 + ', '
        + 0 + ', '
        + 0 + ', '
        + value_value + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_course'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + 0 + ', '
        + 0 + ', '
        + value_value + ', '
        + 0 + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_pitch'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + value_value + ', '
        + 0 + ', '
        + 0 + ', '
        + 0 + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_roll'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + 0 + ', '
        + value_value + ', '
        + 0 + ', '
        + 0 + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_accelerator_course'] = function(block) {
    var value_accelerator = Blockly.JavaScript.valueToCode(block, 'ACCELERATOR', Blockly.JavaScript.ORDER_ATOMIC);
    var value_course = Blockly.JavaScript.valueToCode(block, 'COURSE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + 0 + ', '
        + 0 + ', '
        + value_course + ', '
        + value_accelerator + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_accelerator_pitch'] = function(block) {
    var value_accelerator = Blockly.JavaScript.valueToCode(block, 'ACCELERATOR', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pitch = Blockly.JavaScript.valueToCode(block, 'PITCH', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + value_pitch + ', '
        + 0 + ', '
        + 0 + ', '
        + value_accelerator + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_accelerator_roll'] = function(block) {
    var value_accelerator = Blockly.JavaScript.valueToCode(block, 'ACCELERATOR', Blockly.JavaScript.ORDER_ATOMIC);
    var value_roll = Blockly.JavaScript.valueToCode(block, 'ROLL', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + 0 + ', '
        + value_roll + ', '
        + 0 + ', '
        + value_accelerator + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_course_pitch'] = function(block) {
    var value_course = Blockly.JavaScript.valueToCode(block, 'COURSE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pitch = Blockly.JavaScript.valueToCode(block, 'PITCH', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + value_pitch + ', '
        + 0 + ', '
        + value_course + ', '
        + 0 + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_course_roll'] = function(block) {
    var value_course = Blockly.JavaScript.valueToCode(block, 'COURSE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_roll = Blockly.JavaScript.valueToCode(block, 'ROLL', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + 0 + ', '
        + value_roll + ', '
        + value_course + ', '
        + 0 + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_pitch_roll'] = function(block) {
    var value_pitch = Blockly.JavaScript.valueToCode(block, 'PITCH', Blockly.JavaScript.ORDER_ATOMIC);
    var value_roll = Blockly.JavaScript.valueToCode(block, 'ROLL', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + value_pitch + ', '
        + value_roll + ', '
        + 0 + ', '
        + 0 + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_omnidirectional'] = function(block) {
    var value_accelerator = Blockly.JavaScript.valueToCode(block, 'ACCELERATOR', Blockly.JavaScript.ORDER_ATOMIC);
    var value_course = Blockly.JavaScript.valueToCode(block, 'COURSE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pitch = Blockly.JavaScript.valueToCode(block, 'PITCH', Blockly.JavaScript.ORDER_ATOMIC);
    var value_roll = Blockly.JavaScript.valueToCode(block, 'ROLL', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.controlPitchRollCourseAcceleratorTime(\''
        + block.id +'\', '
        + value_pitch + ', '
        + value_roll + ', '
        + value_course + ', '
        + value_accelerator + ', '
        + value_time + ');\n';
    return code;
};

Blockly.JavaScript['control_flip_pitch_down'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.pitchDownFlipCount(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_flip_pitch_up'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.pitchUpFlipCount(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_flip_roll_down'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.rollDownFlipCount(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_flip_roll_up'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.rollUpFlipCount(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_move_before'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlBeforeAndAfterValue(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_move_after'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlBeforeAndAfterValue(\'' + block.id +'\', -' + value_value + ');\n';
};

Blockly.JavaScript['control_move_left'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlLeftAndRightValue(\'' + block.id +'\', -' + value_value + ');\n';
};

Blockly.JavaScript['control_move_right'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlLeftAndRightValue(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_move_up'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlUpAndDownValue(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_move_down'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlUpAndDownValue(\'' + block.id +'\', -' + value_value + ');\n';
};

Blockly.JavaScript['control_rotate_CW'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlRotateValue(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_rotate_CCW'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlRotateValue(\'' + block.id +'\', -' + value_value + ');\n';
};

Blockly.JavaScript['control_draw_circle_CW'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlDrawCircleValue(\'' + block.id +'\', ' + value_value + ');\n';
};

Blockly.JavaScript['control_draw_circle_CCW'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'X9.controlDrawCircleValue(\'' + block.id +'\', -' + value_value + ');\n';
};

Blockly.JavaScript['condition_takeoff_ready'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.allowTakeoff()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_takeoff_not_ready'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '!X9.allowTakeoff()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_in_flight'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.inFlight()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_not_in_flight'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '!X9.inFlight()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_flip_ready'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.flipReady()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_flip_not_ready'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '!X9.flipReady()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_is_hover'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.isHover()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_low_power'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.isLowPower()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_negate'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '!' + value_value;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['logic_if'] = function(block) {
    var value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var statements_true = Blockly.JavaScript.statementToCode(block, 'TRUE');
    // TODO: Assemble JavaScript into code variable.
    var code = 'if (' + value_bool + ')\n{\n' + statements_true + '}\n';
    return code;
};

Blockly.JavaScript['logic_if_else'] = function(block) {
    var value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var statements_true = Blockly.JavaScript.statementToCode(block, 'TRUE');
    var statements_false = Blockly.JavaScript.statementToCode(block, 'FALSE');
    // TODO: Assemble JavaScript into code variable.
    var code = 'if (' + value_bool + ')\n{\n' + statements_true + '}\nelse\n{\n' + statements_false + '}\n';
    return code;
};

Blockly.JavaScript['logic_repeat_ext'] = function(block) {
    var value_count = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    // TODO: Assemble JavaScript into code variable.
    var code = 'for (var i = 0; i < ' + value_count + '; ++i)\n{\n  X9.isHover();\n' + statements_do +'}\n';
    return code;
};

Blockly.JavaScript['logic_while'] = function(block) {
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    // TODO: Assemble JavaScript into code variable.
    var code = 'while (true)\n{\n  X9.isHover();\n' + statements_do + '}\n';
    return code;
};

Blockly.JavaScript['logic_while_until'] = function(block) {
    var value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    // TODO: Assemble JavaScript into code variable.
    var code = 'while (!' + value_bool + ')\n{\n  X9.isHover();\n' + statements_do + '}\n';
    return code;
};

Blockly.JavaScript['logic_continue'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'continue;\n';
    return code;
};

Blockly.JavaScript['logic_break'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'break;\n';
    return code;
};

Blockly.JavaScript['logic_keep_waiting'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.highlightBlock(\'' + block.id +'\');\n'
        +'while (!' + value_value + ')\n{\n  X9.sleep(0.1);\n}\n'+
        'X9.notlightBlock(\'' + block.id +'\');\n';
    return code;
};

Blockly.JavaScript['logic_sleep'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'X9.sleepInterval(\'' + block.id +'\', ' + value_value + ');\n';
    return code;
};

Blockly.JavaScript['custom_number'] = function(block) {
  var number_num = block.getFieldValue('NUM');
  // TODO: Assemble JavaScript into code variable.
  var code = number_num;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['custom_accelerator'] = function(block) {
    var number_num = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = number_num;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['custom_course'] = function(block) {
    var number_num = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = number_num;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['custom_pitch'] = function(block) {
    var number_num = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = number_num;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['custom_roll'] = function(block) {
    var number_num = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = number_num;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['custom_move_number'] = function(block) {
    var number_num = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = number_num;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['custom_rotate_number'] = function(block) {
    var number_num = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = number_num;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};




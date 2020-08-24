"use strict";
const isOneEddit = (input1, input2) => {
    if (input1.length > input2.length + 1 || input1.length < input2.length - 1) {
        return false;
    }
    let countingLetters = 0;
    for (const char of input2) {
        if (input1.indexOf(char) !== -1) {
            countingLetters++;
        }
        console.log(countingLetters);
    }
    if (countingLetters <= input1.length + 1 && countingLetters >= input1.length - 1) {
        return true;
    }
    return false;
};
const compressingChar = (input) => {
    const strings = [];
    let savingChar = input[0];
    let countingLetters = 0;
    for (const char of input) {
        if (char !== savingChar) {
            strings.push(savingChar + countingLetters);
            savingChar = char;
            countingLetters = 0;
        }
        countingLetters++;
    }
    strings.push(savingChar + countingLetters);
    let result = '';
    for (const char of strings) {
        result += char;
    }
    if (result.length > input.length) {
        return input;
    }
    return result;
};
console.log(compressingChar("escola"));

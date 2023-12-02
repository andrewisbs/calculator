let choiceNum1 = undefined;
let choiceNum2 = undefined;
let choiceOperation = undefined;










function operation(num1, functionChoice, number2){
    functionChoice(num1,num2)
}

function add(num1,num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1-num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 == 0) {
        return "FAIL";
    }
    else {
        return num1/num2;
    }
}

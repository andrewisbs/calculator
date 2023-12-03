let choiceNum1 = undefined;
let choiceNum2 = undefined;
let choiceOperation = undefined;
const dispChoice = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
const firstValueh2 = document.createElement("h2");
const firstOph2 = document.createElement("h2");
const secondValueh2 = document.createElement("h2");
const screenTotalh2 = document.createElement("h2");
let isFirstItem = true;
let firstValue = "";
let firstOp = "";
let secondOp = "";
let secondValue = "";
let screenTotal = "";

console.table(buttons);
buttons.addEventListener('mousedown', (e) => {
    let inputValue = e.target.textContent;
    updateThings(inputValue);
    firstValueh2.textContent = firstValue;
    firstOph2.textContent = firstOp;
    secondValueh2.textContent = secondValue;
    dispChoice.appendChild(firstValueh2);
    dispChoice.appendChild(firstOph2);
    dispChoice.appendChild(secondValueh2);
})
function updateThings(input) {
    if(testIsNumber(input)){
    if (isFirstItem) {
       return firstValue = firstValue + input;
    } else {
       return secondValue = secondValue + input;
    }}
    else {
        if (firstOp == ""){
            if(input != "CLEAR"){firstOp = input;}
            isFirstItem = false;
            return;
        }
        runOperation(input);
        if (input != '=') {firstOp = input;}
        return;
}
}
function testIsNumber(input) {
    switch(input) {
        case 'CLEAR':
        case '.':
        case '=':
        case '%':
        case 'X':
        case '-':
        case '+':
            return false;
            break;
        default:
            return true;
            break;
}
}
function runOperation(input) {
    if (isFirstItem) {
        firstOp = input;
        isFirstItem = false;
        return;
    }
    else {
        switch(firstOp) {
            case 'CLEAR':
                reset();
                break;
            case '.':
                break;
            case '%':
                calculate(divide);
                break;
            case 'X':
                calculate(multiply);
                break;
            case '-':
                calculate(subtract);
                break;
            case '+':
                calculate(add);
                break;
        }
    }
}

function reset(){
    isFirstItem = true;
    firstValue = "";
    firstOp = "";
    secondOp = "";
    secondValue = "";
    screenTotal = "";
    firstValueh2.textContent = firstValue;
    firstOph2.textContent = firstOp;
    secondValueh2.textContent = secondValue;
    dispChoice.removeChild(firstValueh2);
    dispChoice.removeChild(firstOph2);
    dispChoice.removeChild(secondValueh2);
}

function calculate(op) {
    a = parseInt(firstValue)
    b = parseInt(secondValue)
    screenTotal= op(a,b)
    dispChoice.appendChild(screenTotalh2);
    dispChoice.removeChild(firstValueh2);
    dispChoice.removeChild(firstOph2);
    isFirstItem = false;
    firstValue = screenTotal;
    firstOp = secondOp;
    secondOp = "";
    secondValue = "";
}
//if isFirst = true, grab firstVale until op.
//store op

//if isFirst = false, grab second value until op. then 
//use second value and op on first value. 
//screenTotal is result(and first value is reassigned to it). 
//second op becomes first.










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

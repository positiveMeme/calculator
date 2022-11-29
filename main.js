
// ToDo: Add keyboard support

const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const display = document.querySelector('.display');
const decimal = document.querySelector('.decimal');
const AC = document.querySelector('.AC');
const C = document.querySelector('.C');
const sign = document.querySelector('.sign');
const equals = document.querySelector('.equals');
const deleteLast = document.querySelector('.delete');

let previousDisplay = document.querySelector('.previousDisplay');
let currentDisplay = document.querySelector('.currentDisplay');

let previousNum = '';
let currentNum = '';
let operator = '';


// Click listeners:
for (let number of numbers) {
    number.addEventListener('click', e => {
        createNumber(e.target.textContent);
        currentDisplay.textContent = currentNum;
    });
};

for (let op of operators) {
    op.addEventListener('click', e => {
        createOperator(e.target.textContent);
        previousDisplay.textContent = `${previousNum} ${operator}`;
        currentDisplay.textContent = '0';
    });
}

equals.addEventListener('click', () => {
    switch (operator) { // Calculate and print output
        case "+":
            currentNum = places(calculate(add, previousNum, currentNum));
            currentDisplay.textContent = currentNum;
            previousNum = '';
            previousDisplay.textContent = '';
            break;

        case "-":
            currentNum = places(calculate(subtract, previousNum, currentNum));
            currentDisplay.textContent = currentNum;
            previousNum = '';
            previousDisplay.textContent = '';
            break;

        case "*":
            currentNum = places(calculate(multiply, previousNum, currentNum));
            currentDisplay.textContent = currentNum;
            previousNum = '';
            previousDisplay.textContent = '';
            break;

        case "/":
            currentNum = places(calculate(divide, previousNum, currentNum));
            currentDisplay.textContent = currentNum;
            previousNum = '';
            previousDisplay.textContent = '';
            break;


        default:
            break;
    }
});

AC.addEventListener("click", () => {
    clearAll();
});

C.addEventListener("click", () => {
    clearLast();
});

deleteLast.addEventListener("click", () => {
    del();
});

decimal.addEventListener("click", () => {
    dot();
});

// Functions:
function createNumber(num) {
    if (currentNum.length <= 10) {
        currentNum += num;
    }
}

function createOperator(op) {
    operator = op;
    previousNum = currentNum;
    currentNum = '';
}

function calculate(func, a, b) {
    return func(a, b);
}

function add(a, b) {
    return (parseFloat(a) + parseFloat(b)).toString();
}

function subtract(a, b) {
    return (parseFloat(a) - parseFloat(b)).toString();
}

function multiply(a, b) {
    return (parseFloat(a) * parseFloat(b)).toString();
}

function divide(a, b) {
    return (parseFloat(a) / parseFloat(b)).toString();
}

function places(n) {
    return Math.round(n * 100000) / 100000;
}

function clearAll() {
    currentNum = '';
    previousNum = '';
    operator = '';
    currentDisplay.textContent = currentNum;
    previousDisplay.textContent = previousNum;
}

function clearLast() {
    currentNum = '';
    currentDisplay.textContent = '0';
}

function del() {
    currentNum = currentNum.slice(0, -1);
    currentDisplay.textContent = currentNum;
}

function dot() {
    if (currentNum.includes('.') !== true)
        currentNum = currentNum.concat('.');
    currentDisplay.textContent = currentNum;
}
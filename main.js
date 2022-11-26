const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
let displayValue = "0";

let firstNum = "";
let secondNum = "";
let operator = "";

for (let number of numbers) {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            firstNum += e.target.innerText;
            console.log(firstNum);
            display.innerText = firstNum;
        } else { // Read second number
            secondNum += e.target.innerText;
            console.log(secondNum);
            display.innerText = secondNum;
        }
    });
};

for (let op of operators) {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") { // If the operator is not equals
            operator = e.target.innerText;
            console.log(operator); // Print the operator
        }
        else { // If equals button clicked
            switch (operator) { // Calculate and print output
                case "+":
                    console.log(parseInt(firstNum) + parseInt(secondNum));
                    display.innerText = calculate(add, firstNum, secondNum);
                    break;

                case "-":
                    console.log(parseInt(firstNum) - parseInt(secondNum));
                    display.innerText = calculate(subtract, firstNum, secondNum);
                    break;

                case "*":
                    console.log(parseInt(firstNum) * parseInt(secondNum));
                    display.innerText = calculate(multiply, firstNum, secondNum);
                    break;

                case "/":
                    console.log(parseInt(firstNum) / parseInt(secondNum));
                    display.innerText = calculate(divide, firstNum, secondNum);
                    break;


                default:
                    break;
            }
        }
    })
};

clear.addEventListener("click", () => {
    AC();
});

decimal.addEventListener("click", () => {
    dot();
});


// calculator();

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function calculate(func, a, b) {
    return func(a, b);
}

function AC() {
    firstNum = "";
    secondNum = "";
    operator = "";
    display.innerText = "0";
}

// function dot() {
//     display.innerText = `${display.innerText}.`
// }

// function delete () {
    
// }
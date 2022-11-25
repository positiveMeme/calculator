const buttons = document.querySelectorAll('button');
const input = document.querySelector('.display');
const numbers = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
let displayValue = "0";

let firstNum = "";
let secondNum = "";
let operator = "";

numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            firstNum += e.target.innerText;
            console.log(firstNum);
        } else { // Read second number
            secondNum += e.target.innerText;
            console.log(secondNum);
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") { // If the operator is not equals
            operator = e.target.innerText;
            console.log(operator); // Print the operator

        } else { // If equals button clicked
            console.log(secondNum); // Print 2nd number
        }
        switch (operator) { // Calculate and print output
            case "+":
                console.log(parseInt(firstNum) + parseInt(secondNum));
                break;

            case "-":
                console.log(parseInt(firstNum) - parseInt(secondNum));
                break;

            // etc...

            default:
                break;
        }
    })
});

// function calculator(firstNum, secondNum, operator) {
//     operators.forEach(operator => {
//         operator.addEventListener("click", (e) => {
//             firstNum = displayValue;
//             console.log(firstNum);
//             operator = e.target.innerText;
//             console.log(operator);
//         })
//     })
// }


calculator();

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(func, a, b) {
    return func(a, b);
}
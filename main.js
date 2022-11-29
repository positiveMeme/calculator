// ToDo: String operators together ie 5 + 4 * 2 / 3 = 6
// ToDo: Finish decimal and disable button to avoid 12.4.678.5 etc
// ToDo: Add DEL button functionality
// ToDo: Add keyboard support
// ToDo: Add +/- button functionality

const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const display = document.querySelector('.display');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const sign = document.querySelector('.sign');
const equals = document.querySelector('.equals');

let previousDisplay = document.querySelector('.previousDisplay');
let currentDisplay = document.querySelector('.currentDisplay');

let currentNum = '';
let previousNum = '';
let operator = '';

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

function createNumber(num) {
    if (currentNum.length <= 6) {
        currentNum += num;
    }
}

function createOperator(op) {
    operator = op;
    previousNum = currentNum;
    currentNum = '';
}
// if (operator === "") {
//     firstNum += e.target.innerText;
//     console.log(`currentNum is ${currentNum}`);
//     currentNum.innerText = firstNum;
// } 
// if (operator !== "" && secondNum !== "")

// else { // Read second number
//     secondNum += e.target.innerText;
//     console.log(`secondNum is ${secondNum}`);
//     display.innerText = secondNum;
// }


// for (let op of operators) {
//     op.addEventListener("click", e => {
//         if (e.target.innerText !== "=") { // If the operator is not equals
//             operator = e.target.innerText;
//             console.log(operator); // Print the operator
//         }
//         else { // If equals button clicked
//             switch (operator) { // Calculate and print output
//                 case "+":
//                     console.log(parseInt(firstNum) + parseInt(secondNum));
//                     display.innerText = places(calculate(add, firstNum, secondNum));
//                     break;

//                 case "-":
//                     console.log(parseInt(firstNum) - parseInt(secondNum));
//                     display.innerText = places(calculate(subtract, firstNum, secondNum));
//                     break;

//                 case "*":
//                     console.log(parseInt(firstNum) * parseInt(secondNum));
//                     display.innerText = places(calculate(multiply, firstNum, secondNum));
//                     break;

//                 case "/":
//                     console.log(parseInt(firstNum) / parseInt(secondNum));
//                     display.innerText = places(calculate(divide, firstNum, secondNum));
//                     break;


//                 default:
//                     break;
//             }
//         }
//     })
// };



// clear.addEventListener("click", () => {
//     AC();
// });

// decimal.addEventListener("click", () => {
//     dot();
// });

// // sign.addEventListener("click", () => {
// //     ();

// // });

// // calculator();

// function add(a, b) {
//     return parseInt(a) + parseInt(b);
// }

// function subtract(a, b) {
//     return parseInt(a) - parseInt(b);
// }

// function multiply(a, b) {
//     return parseInt(a) * parseInt(b);
// }

// function divide(a, b) {
//     return parseInt(a) / parseInt(b);
// }

// function calculate(func, a, b) {
//     return func(a, b);
// }

// function AC() {
//     firstNum = "";
//     secondNum = "";
//     operator = "";
//     display.innerText = "0";
// }

// function places(n) {
//     return Math.round(n * 100000) / 100000;
// }
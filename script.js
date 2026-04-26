// Basic math operators

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b ;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};


let num1;
let operator;
let num2;

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    };
}

let displayArr = [];

// Diplay update when clicking on numbers

function updateDisplay(arr) {
    const displayDiv = document.querySelector(".display");
    displayDiv.textContent = arr.join("");
}

const zero = document.querySelector("#zero");
    zero.addEventListener("click", () => {
    displayArr.push(0);
    updateDisplay(displayArr);
});

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    displayArr.push(1);
    updateDisplay(displayArr);
}) ;

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    displayArr.push(2);
    updateDisplay(displayArr);
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    displayArr.push(3);
    updateDisplay(displayArr);
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
    displayArr.push(4);
    updateDisplay(displayArr);
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    displayArr.push(5);
    updateDisplay(displayArr);
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    displayArr.push(6);
    updateDisplay(displayArr);
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    displayArr.push(7);
    updateDisplay(displayArr);
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    displayArr.push(8);
    updateDisplay(displayArr);
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    displayArr.push(9);
    updateDisplay(displayArr);
});

// Clear display

function clearDisplay(arr) {
    const displayClear = document.querySelector(".display");
    displayClear.textContent = arr;
   }; 

const clear = document.querySelector(".clear");
    clear.addEventListener("click", () => {
    displayArr.length = 0;
    clearDisplay(displayArr);
});

    
/* let displayArr = [];

// Diplay update when clicking on numbers

function updateDisplay(arr) {
    const displayDiv = document.querySelector(".display");
    displayDiv.textContent = arr.join("");
}

const zero = document.querySelector("#zero");
    zero.addEventListener("click", () => {
    displayArr.push(0);
    updateDisplay(displayArr);
}); */



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


let num1 = null;
let operator;
let num2;
let result;
let displayArr = [];

function operateEqual(operator, nb1, nb2) {
    if (operator === "+") {
        result = add(nb1, nb2);
        console.log(result);
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
        num1 = null;
    } else if (operator === "-") {
        result = subtract(nb1, nb2);
        console.log(result);
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
        num1 = null;
    } else if (operator === "*") {
        result = multiply(nb1, nb2);
        console.log(result);
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
        num1 = null;
    } else if (operator === "/") {
        result =  divide(nb1, nb2);
        console.log(result);
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
        num1 = null;
    };
}

function calculateOperator(operator, nb1, nb2) {
   if (operator === "+") {
        result = add(nb1, nb2);
        console.log(result);
        displayArr.length = 0;
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
        } else if (operator === "-") {
        result = subtract(nb1, nb2);
        console.log(result);
        displayArr.length = 0;
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
    } else if (operator === "*") {
        result = multiply(nb1, nb2);
        console.log(result);
        displayArr.length = 0;
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
    } else if (operator === "/") {
        result =  divide(nb1, nb2);
        console.log(result);
        displayArr.length = 0;
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
    };
}



// Update display when clicking on numbers

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
    num1 = null;
    num2 = null;
    result = null;
});

// Activate the operate function


const sum = document.querySelector("#sum");
sum.addEventListener("click", () => {
    if (num1 === null) {
        num1 = parseInt(displayArr.join(""));
        console.log(typeof num1, num1);
        operator = "+";
        console.log(operator);
        displayArr.length = 0;
        clearDisplay(displayArr);
 
    } else {
        num2 = parseInt(displayArr.join(""));
        console.log(typeof num2, num2);
        calculateOperator(operator, num1, num2);
        console.log(result);
        num1 = result;
        displayArr.length = 0;
        //clearDisplay(displayArr);
        operator = "+";
    };
});

const subtraction = document.querySelector("#subtraction");
subtraction.addEventListener("click", () => {
    if (num1 === null) {
    num1 = parseInt(displayArr.join(""));
    console.log(typeof num1, num1);
    operator = "-";
    console.log(operator);
    displayArr.length = 0;
    clearDisplay(displayArr);

    } else {
        num2 = parseInt(displayArr.join(""));
        console.log(typeof num2, num2);
        calculateOperator(operator, num1, num2);
        console.log(result);
        num1 = result;
        displayArr.length = 0;
        //clearDisplay(displayArr);
        operator = "-"
    }
    });

const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click", () => {
    if (num1 === null) {
    num1 = parseInt(displayArr.join(""));
    console.log(typeof num1, num1);
    operator = "*";
    console.log(operator);
    displayArr.length = 0;
    clearDisplay(displayArr);

    } else {
      num2 = parseInt(displayArr.join(""));
        console.log(typeof num2, num2);
        calculateOperator(operator, num1, num2);
        console.log(result);
        num1 = result;
        displayArr.length = 0;
        //clearDisplay(displayArr);  
        operator = "*";
    }
    });

const division = document.querySelector("#division");
division.addEventListener("click", () => {
    if (num1 === null) {
    num1 = parseInt(displayArr.join(""));
    console.log(typeof num1, num1);
    operator = "/";
    console.log(operator);
    displayArr.length = 0;
    clearDisplay(displayArr);

    } else {
        num2 = parseInt(displayArr.join(""));
        console.log(typeof num2, num2);
        calculateOperator(operator, num1, num2);
        console.log(result);
        num1 = result;
        displayArr.length = 0;
        //clearDisplay(displayArr);
        operator = "/";
    }
    });

const total = document.querySelector("#equal");
total.addEventListener("click", () => {
    num2 = parseInt(displayArr.join(""));
    console.log(typeof num2, num2);
    displayArr.length = 0;
    clearDisplay(displayArr);
    return operateEqual(operator, num1, num2);
});

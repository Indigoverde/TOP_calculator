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
let roundedResult;
let displayArr = [];
let operatorArr = [];

function operateEqual(operator, nb1, nb2) {
    if (operator === "+") {
        result = add(nb1, nb2);
        console.log(result);
        roundedResult = Math.round(result * 10000000000) / 10000000000;
        console.log(roundedResult);
        displayArr.push(roundedResult);
        console.log(displayArr);
        updateDisplay(displayArr);
        num1 = null; 
        } else if (operator === "-") {
        result = subtract(nb1, nb2);
        console.log(result);
        roundedResult = Math.round(result * 10000000000) / 10000000000;
        console.log(roundedResult);
        displayArr.push(roundedResult);
        console.log(displayArr);
        updateDisplay(displayArr);
        num1 = null;
    } else if (operator === "*") {
        result = multiply(nb1, nb2);
        console.log(result);
        roundedResult = Math.round(result * 10000000000) / 10000000000;
        console.log(roundedResult);
        displayArr.push(roundedResult);
        console.log(displayArr);
        updateDisplay(displayArr);
        num1 = null;
    } else if (operator === "/") {
        if (num2 !== 0 ){
        result =  divide(nb1, nb2);
        console.log(result);
        roundedResult = Math.round(result * 10000000000) / 10000000000;
        console.log(roundedResult);
        displayArr.push(roundedResult);
        console.log(displayArr);
        updateDisplay(displayArr);
        num1 = null;
        } else {
            displayArr.length = 0;
            displayArr.push("Error !");
            updateDisplay(displayArr);
            displayArr.length = 0;
            num1 = null;
            num2 = null;
            result = null;
            roundedResult = null; 
            operatorArr = [];          
        }
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
        if (num2 !== 0 ){
        result =  divide(nb1, nb2);
        console.log(result);
        displayArr.length = 0;
        displayArr.push(result)
        console.log(displayArr)
        updateDisplay(displayArr);
        } else {
            displayArr.length = 0;
            displayArr.push("Error !");
            updateDisplay(displayArr);
            displayArr.length = 0;
            num1 = null;
            num2 = null;
            result = null;
            roundedResult = null;           
        }
    };
}


// Update display when clicking on numbers

function updateDisplay(arr) {
    const displayDiv = document.querySelector(".display");
    displayDiv.textContent = arr.join("");
}

// Numbers and decimal

const dot = document.querySelector("#decimal");
dot.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        if (displayArr.indexOf(".") == -1) {
            operatorArr.length = 0;
            displayArr.push(".");
            console.log(displayArr);
            let firstItem = displayArr[0];
            console.log(firstItem);
            if (firstItem === ".") {
                displayArr.unshift("0");
            };
            updateDisplay(displayArr);
        }; 
    } else {
        operatorArr.length = 0;  
        displayArr.length = 0;
        console.log(displayArr);
        updateDisplay(displayArr);
        num2 = null;
        result = null;
        roundedResult = null;
        /* displayArr.push("0.");
        updateDisplay(displayArr); */
        if (displayArr.indexOf(".") == -1) {
            operatorArr.length = 0;
            displayArr.push(".");
            console.log(displayArr);
            displayArr.unshift("0");
            console.log(displayArr);
            };
        updateDisplay(displayArr);
        }
    });




const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0; // ?
        displayArr.push(0);
        updateDisplay(displayArr);
    } else {
            operatorArr.length = 0;    // ?
            displayArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(0);
            updateDisplay(displayArr);
    }
}) ;

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(1);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(1);
            updateDisplay(displayArr);
    }
}) ;

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(2);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(2);
            updateDisplay(displayArr);
    }
}) ;

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(3);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(3);
            updateDisplay(displayArr);
    }
}) ;

const four = document.querySelector("#four");
four.addEventListener("click", () => {
 if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(4);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(4);
            updateDisplay(displayArr);
    }
}) ;

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(5);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(5);
            updateDisplay(displayArr);
    }
}) ;

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(6);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(6);
            updateDisplay(displayArr);
    }
}) ;

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(7);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(7);
            updateDisplay(displayArr);
    }
}) ;

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(8);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(8);
            updateDisplay(displayArr);
    }
}) ;

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    if (displayArr.indexOf(roundedResult) == -1) {
        operatorArr.length = 0;
        displayArr.push(9);
        updateDisplay(displayArr);
    } else {    
            displayArr.length = 0;
            operatorArr.length = 0;
            updateDisplay(displayArr);
            num2 = null;
            result = null;
            roundedResult = null;
            displayArr.push(9);
            updateDisplay(displayArr);
    }
}) ;

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
    roundedResult = null;
    operatorArr.length = 0;
});

// Activate the operate function


const sum = document.querySelector("#sum");
sum.addEventListener("click", () => {
    if (num1 === null) {
        if (operatorArr.indexOf("+") == -1) {
            num1 = parseFloat(displayArr.join(""));
            console.log(typeof num1, num1);
            operator = "+";
            operatorArr = ["+"];
            console.log(operator);
            displayArr.length = 0;
            //clearDisplay(displayArr);
        } else {
            console.log("error : successive clicks on operator")
        };
 
    } else {
        if (operatorArr.indexOf("+")== -1) {
        num2 = parseFloat(displayArr.join(""));
        console.log(typeof num2, num2);
        calculateOperator(operator, num1, num2);
        console.log(result);
        num1 = result;
        //clearDisplay(displayArr);
        displayArr.length = 0;
        operator = "+";
        operatorArr = ["+"];
        } else {
            console.log("error : successive clicks on operator")
        };
    };
});

const subtraction = document.querySelector("#subtraction");
subtraction.addEventListener("click", () => {
    if (num1 === null) {
    num1 = parseFloat(displayArr.join(""));
    console.log(typeof num1, num1);
    operator = "-";
    operatorArr = ["-"];
    console.log(operator);
    displayArr.length = 0;
    //clearDisplay(displayArr);

    } else {
        if (operatorArr.indexOf("-")== -1) {
        num2 = parseFloat(displayArr.join(""));
        console.log(typeof num2, num2);
        calculateOperator(operator, num1, num2);
        console.log(result);
        num1 = result;
        displayArr.length = 0;
        //clearDisplay(displayArr);
        operator = "-";
        operatorArr = ["-"];
    } else {
            console.log("error : successive clicks on operator")
        };
    };
    });


const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click", () => {
    if (num1 === null) {
    num1 = parseFloat(displayArr.join(""));
    console.log(typeof num1, num1);
    operator = "*";
    operatorArr = ["*"];
    console.log(operator);
    displayArr.length = 0;
    //clearDisplay(displayArr);

    } else {
        if (operatorArr.indexOf("*")== -1) {
        num2 = parseFloat(displayArr.join(""));
        console.log(typeof num2, num2);
        calculateOperator(operator, num1, num2);
        console.log(result);
        num1 = result;
        displayArr.length = 0;
        //clearDisplay(displayArr);  
        operator = "*";
        operatorArr = ["*"];
    } else {
            console.log("error : successive clicks on operator")
        };
    };
    });

const division = document.querySelector("#division");
division.addEventListener("click", () => {
    if (num1 === null) {
    num1 = parseFloat(displayArr.join(""));
    console.log(typeof num1, num1);
    operator = "/";
    operatorArr = ["/"];
    console.log(operator);
    displayArr.length = 0;
    //clearDisplay(displayArr);

    } else {
        if (operatorArr.indexOf("/")== -1) {
        num2 = parseFloat(displayArr.join(""));
        console.log(typeof num2, num2);
        calculateOperator(operator, num1, num2);
        console.log(result);
        num1 = result;
        displayArr.length = 0;
        //clearDisplay(displayArr);
        operator = "/";
        operatorArr = ["/"];
     } else {
            console.log("error : successive clicks on operator")
        };
    };
    });

const total = document.querySelector("#equal");
total.addEventListener("click", () => {
    if (displayArr.length >= 1 && num1 !== null) {
    if (operatorArr.indexOf("=") == -1)
    num2 = parseFloat(displayArr.join(""));
    console.log(typeof num2, num2);
    displayArr.length = 0;
    clearDisplay(displayArr);
    return operateEqual(operator, num1, num2);
    }
});

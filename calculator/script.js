display = document.querySelector("#display");
buttonAction = document.querySelectorAll(".button");
acButton = document.querySelector(".ac-button");

console.log(buttonAction);

display.innerText = 0;
let operator;
numArr = [];
let num1 = "";
let num2 = "";

buttonAction.forEach((button) => {
    button.addEventListener("click", () => {

        if(button.innerText === "÷" || button.innerText === "x" ||
            button.innerText === "-" || button.innerText === "+") {
            
            if(operator == null && display.innerText !== "0") {
                display.innerText = display.innerText + button.innerText;
                operator = button.innerText;
                console.log("operator added");

            } else if (display.innerText === "0") {
                return;
            } else if (operator != null) {
                operate(operator, num1, num2);
            }

            
        } else if (button.innerText === "="){

            if(num1 !== null && num2 !== null) {
                operate(operator, num1, num2);
            } else {
                return;
            }
        } else {
            if(operator == null) {
                if(display.innerText === "0"){
                    display.innerText = button.innerText;
                } else {
                    display.innerText = display.innerText + button.innerText;
                }
                num1 = num1 + button.innerText;
                console.log("num1 added");
            } else if (operator != null) {
                display.innerText = display.innerText + button.innerText;
                num2 = num2 + button.innerText;
                console.log("num2 added");
            }
        }

    });
});



    acButton.addEventListener("click", () => {

        display.innerText = 0;
        num1 = [];
        num2 = [];
        operator = null;
    });






function operate(operator, num1, num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let finalResult;
    if(operator === "+") {
        finalResult = num1 + num2;
    } else if (operator === "-") {
        finalResult = num1 -num2;
    } else if (operator === "÷") {
        finalResult = num1 / num2;
    } else if (operator === "x") {
        finalResult = num1 * num2;
    }

    display.innerText = parseFloat(finalResult.toFixed(3));
}
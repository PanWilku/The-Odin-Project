display = document.querySelector("#display");
buttonAction = document.querySelectorAll(".button");
acButton = document.querySelector(".ac-button");

display.innerText = 0;
let operator;
let num1 = "";
let num2 = "";

buttonAction.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.innerText === "÷" ||
      button.innerText === "x" ||
      button.innerText === "-" ||
      button.innerText === "+"
    ) {
      if (operator == null && display.innerText !== "0") {
        display.innerText = display.innerText + button.innerText;
        operator = button.innerText;
      } else if (display.innerText === "0") {
        return;
      } else if (operator != null && num2 !== "") {
        operate(operator, num1, num2);
        display.innerText = display.innerText + button.innerText;
        operator = button.innerText;
      }

    } else if (button.innerText === "=") {
      if (num1 !== null && num2 !== null) {
        operate(operator, num1, num2);
      } else {
        return;
      }

    } else {
      if (operator == null) {
        if (display.innerText === "0") {
          display.innerText = button.innerText;
        } else {
          display.innerText = display.innerText + button.innerText;
        }
        num1 = num1 + button.innerText;
      } else if (operator != null) {
        display.innerText = display.innerText + button.innerText;
        num2 = num2 + button.innerText;
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


// ----------------------------------------------------------
// Couldnt figure it out how to make it work with parameters so I used global variables
// calculations with parameters are incorrect in next calculations.
// ----------------------------------------------------------
function operate(op, firstNumber, secondNumber) {


  let n1 = parseFloat(num1);  
  let n2 = parseFloat(num2);  
  let finalResult;

  
  if (operator === "+") {  
    finalResult = n1 + n2;
  } else if (operator === "-") {
    finalResult = n1 - n2;
  } else if (operator === "÷") {
    finalResult = n1 / n2;
  } else if (operator === "x") {
    finalResult = n1 * n2;
  }

  finalResult = parseFloat(finalResult.toFixed(3));
  display.innerText = finalResult;

  num1 = finalResult.toString(); 
  num2 = "";                     
  operator = null;               
}

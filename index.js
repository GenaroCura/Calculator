//Funcion para sumar
const addNumber = (a, b) => {
  return a + b;
};

//Funcion para restar
const subtractNumber = (a, b) => {
  return a - b;
};

//Funcion para divir
const divisionNumber = (a, b) => {
  if(b!==0){
    return a/b;
  }else{
    return "Error División por 0"
  }
};

//Funcion para multiplicar
const multiplyNumber = (a, b) => {
  return a * b;
};

// console.log(addNumber(4, 6));
// console.log(subtractNumber(6, 2));
// console.log(divisionNumber(9, 0));
// console.log(multiplyNumber(5, 5));

//Funcion para la calculadora
const operate = (operator, oneNumber, twoNumber) => {
  switch (operator) {
    case "+":
      return addNumber(oneNumber, twoNumber);
    case "-":
      return subtractNumber(oneNumber, twoNumber);
    case "/":
      return divisionNumber(oneNumber, twoNumber);
    case "*":
      return multiplyNumber(oneNumber, twoNumber);
    default:
      return null;
  }
};

// console.log(operate("+",5,6));

//Funcion para visualizar el boton que estoy apretando

// Selecciona todos los botones
const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let visualDisplay = "";
let oneNumber = null;
let operator = null;
let twoNumber = null;


//Funcion para actualizar el display
const updateDisplay = (content) => {
  display.textContent = content;
};


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (!isNaN(buttonText)) {  // Si es un número
      visualDisplay += buttonText;
      updateDisplay(visualDisplay);
    } else if (["+","-","*","/"].includes(buttonText)) {  // Si es un operador
      if (oneNumber === null) {
        oneNumber = parseFloat(visualDisplay);
        operator = buttonText;
        visualDisplay = "";
      } else {
        twoNumber = parseFloat(visualDisplay);
        const result = operate(operator, oneNumber, twoNumber);
        updateDisplay(result);
        oneNumber = result;
        operator = buttonText;
        visualDisplay = "";
      }
    } else if (buttonText === "=") {  // Si es el botón "="
      if (oneNumber !== null && operator !== null) {
        twoNumber = parseFloat(visualDisplay);
        const result = operate(operator, oneNumber, twoNumber);
        updateDisplay(result);
        oneNumber = result;
        operator = null;
        visualDisplay = "";
      }
    } else if (buttonText === "Clear") {  // Si es el botón "Clear"
      oneNumber = null;
      operator = null;
      twoNumber = null;
      visualDisplay = "";
      updateDisplay(0);
    } else if (buttonText === "Backspace") {  // Si es el botón "Backspace"
      visualDisplay = visualDisplay.slice(0, -1);
      updateDisplay(visualDisplay || 0);
    } else if (buttonText === ".") {  // Si es el botón de punto decimal
      if (!visualDisplay.includes(".")) {
        visualDisplay += ".";
        updateDisplay(visualDisplay);
      }
    }
  });
});
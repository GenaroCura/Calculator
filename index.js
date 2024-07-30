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
  return a / b;
};

//Funcion para multiplicar
const multiplyNumber = (a, b) => {
  return a * b;
};

// console.log(addNumber(4, 6));
// console.log(subtractNumber(6, 2));
// console.log(divisionNumber(9, 3));
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
      return "Operador no válido";
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


const updateDisplay = (content) => {
  display.textContent = content;
};


buttons.forEach((button)=>{
  button.addEventListener("click", () =>{
    const buttonText = button.textContent;

    if(!isNaN(buttonText)){
      visualDisplay+=buttonText;
      updateDisplay(visualDisplay);
    }else if (["+","-","*","/"].includes(buttonText)){
      if(oneNumber === null){
        oneNumber= parseFloat(visualDisplay);
        operator = buttonText;
        visualDisplay = ""
      }else{
        twoNumber = parseFloat(visualDisplay);
        const result = operate(operator,oneNumber,twoNumber);
        updateDisplay(result);
        oneNumber=result;
        operator=buttonText;
        visualDisplay="";
      }
    }else if (buttonText === "="){
      if(oneNumber !== null && operator !== null){
        twoNumber = parseFloat(visualDisplay);
        const result = operate (operator,oneNumber,twoNumber);
        updateDisplay(result);
        oneNumber = result;
        operator = null;
        visualDisplay = "";
      }
    }else if(buttonText === "Clear"){
      oneNumber = null;
      operator= null;
      twoNumber = null;
      visualDisplay = "";
      updateDisplay(visualDisplay);
    }
  });
});
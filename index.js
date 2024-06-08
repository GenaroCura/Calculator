//Funcion para sumar
const addNumber = (a,b) =>{
    return a + b
};

//Funcion para restar
const subtractNumber = (a,b) =>{
    return a - b
}

//Funcion para divir
const divisionNumber = (a,b) => {
    return a / b
}

//Funcion para multiplicar
const multiplyNumber = (a,b) =>{
    return a*b
};

console.log(addNumber(4,6));
console.log(subtractNumber(6,2));
console.log(divisionNumber(9,3));
console.log(multiplyNumber(5,5));


//Operacion de calculadora, creo las variables.
let oneNumber;
let operator;
let twoNumber;

//Funcion para la calculadora

const operate = (oneNumber,operator,twoNumber) =>{
    if (operator === "+"){
        return addNumber(oneNumber,twoNumber)
    }else if (operator === "-"){
        return subtractNumber(oneNumber,twoNumber)
    }else if (operator === "x"){
        return multiplyNumber(oneNumber,twoNumber)
    }else if (operator === "/"){
        return divisionNumber(oneNumber,twoNumber)
    }else{
        return "Operador no valido"
    }
};

console.log(operate(3,"/",9));



//Logica para que al realizar operaciones, se visualizen en la pantalla de la calculadora

//Creo la variable y la seteo en 0
let displayValue = "0";

//Seleccionar elemento por ID
const display = document.getElementById("display");


//Actualizar pantalla
const updateDisplay = () =>{
    display.textContent = displayValue;
};

const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonValue = button.textContent;
  
      // Verificar si el botón es un número
      if (!isNaN(buttonValue)) {
        // Si displayValue es '0', reemplazarlo, de lo contrario, añadir el número
        if (displayValue === '0') {
          displayValue = buttonValue;
        } else {
          displayValue += buttonValue;
        }
      } else if (buttonValue === 'Clear') {
        // Si el botón es "Clear", reiniciar displayValue
        displayValue = '0';
      }
      
      // Actualizar la pantalla
      updateDisplay();
    });
  });





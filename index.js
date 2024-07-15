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

//Operacion de calculadora, creo las variables.
let oneNumber;
let operator;
let twoNumber;

//Funcion para la calculadora
const operate = (operator,oneNumber,twoNumber) =>{
  switch(operator){
    case "+":
      return addNumber(oneNumber,twoNumber);
    case "-":
      return subtractNumber(oneNumber,twoNumber);
    case "/":
      return divisionNumber(oneNumber,twoNumber);
    case "*":
      return multiplyNumber(oneNumber,twoNumber);
      default:
        return "Operador no válido"
  }
};


// console.log(operate("+",5,6));


//Funcion para visualizar el boton que estoy apretando

// Selecciona todos los botones
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

let visualDisplay = '';


// Agrega un event listener a cada botón
buttons.forEach(button => {
  button.addEventListener('click', () => {
    //Verifico si el boton presionado es un numero
    const buttonText = `${button.textContent}`
    if(!isNaN(buttonText) || buttonText === '.'){
      visualDisplay+= buttonText;
    }else if(buttonText === 'Clear'){
      visualDisplay = '';
    }else if(buttonText === '+' || '-' || '*' || '/'){
      visualDisplay+= buttonText;
    }else if(buttonText === '='){
      
    }

    display.textContent = visualDisplay
  });
});


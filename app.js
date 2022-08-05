// const calcButtons = document.querySelector('.calculator-btns');

// function createButtons() {
//     for (let i = 0; i < 16; i++){
//         const buttons = document.createElement('div');
//         buttons.classList.add('btns');
//         calcButtons.append(buttons)
//     }
// }

// createButtons();

//calculate functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operator = function (op, a, b) {
  return op(a, b);
};

const btn1 = document.querySelector(".btn-1");
const display = document.querySelector(".display");
const Numberbuttons = document.querySelectorAll(".number-btns");
const operatorbuttons = document.querySelectorAll(".operator-btns");
const clearButton = document.querySelector(".btn-clear");
const equalButton = document.querySelector(".btn-equal");

let btnPressNum1 = 0;
let btnPressNum2 = 0;
let btnPressStr = [];
let btnPressOp;
let answer = 0;

Numberbuttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (btnPressOp == undefined) {
      value = e.target.textContent;
      btnPressNum1 = Number(btnPressNum1 + value);
      btnPressStr.push(value);
      display.textContent = btnPressStr.join("");
    } else if ((btnPressOp != undefined && btnPressNum2 === 0) || answer > 0) {
      display.textContent = "";
      btnPressNum2 = 0;
      value = e.target.textContent;
      btnPressStr = [];
      btnPressNum2 = Number(btnPressNum2 + value);
      btnPressStr.push(value);
      display.textContent = btnPressStr.join("");
    } else {
      value = e.target.textContent;
      btnPressNum2 = Number(btnPressNum2 + value);
      btnPressStr.push(value);
      display.textContent = btnPressStr.join("");
    }
  });
});



operatorbuttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    const containsAdd = e.target.classList.contains('btn-add');
    const containsSubtract = e.target.classList.contains('btn-subtract');
    const containsMultiply = e.target.classList.contains('btn-multiply');
    const containsDivide = e.target.classList.contains('btn-divide');

    function recurCalc() {
      answer = operator(btnPressOp, btnPressNum1, btnPressNum2);
      btnPressNum1 = answer;
      display.textContent = answer;
    }

    //Additions
    if (containsAdd && btnPressNum2 === 0) {
      btnPressOp = add;   
    } else if (containsAdd && btnPressNum2 > 0) {
      recurCalc();
      btnPressOp = add;
    }

    //Subtractions
    if (containsSubtract && btnPressNum2 === 0) {
      btnPressOp = subtract;
    } else if (containsSubtract && btnPressNum2 > 0) {
      recurCalc();
      btnPressOp = subtract;
    }


    //Multiplications
    if (containsMultiply && btnPressNum2 === 0) {
      btnPressOp = multiply;
    } else if (containsMultiply && btnPressNum2 > 0) {
      recurCalc();
      btnPressOp = multiply;
    }


    //Divisions
    if (containsDivide && btnPressNum2 === 0) {
      btnPressOp = divide;
    } else if (containsDivide && btnPressNum2 > 0) {
      recurCalc();
      btnPressOp = divide;
    }

  });
});

clearButton.addEventListener("click", (e) => {
  init();
});

equalButton.addEventListener("click", () => {
  if (btnPressNum1 != 0 && btnPressNum2 != 0 && btnPressOp != undefined) {
    answer = operator(btnPressOp, btnPressNum1, btnPressNum2);
    display.textContent = answer;
  }
});

function init() {
  btnPressNum1 = 0;
  btnPressNum2 = 0;
  btnPressStr = [];
  btnPressOp = undefined;
  answer = 0;
  display.textContent = "";
}

// console.log(answer);

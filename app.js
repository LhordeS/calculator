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

let btnPressNum1 = 0;
let btnPressNum2 = 0;
let btnPressStr = [];
let btnPressOp;

Numberbuttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    value = e.target.textContent;
      btnPressNum = Number(btnPressNum + value);
      console.log(btnPressNum);
    // btnPressStr = btnPressStr + '1';
    btnPressStr.push(value);
    // btnPressStr.split(',')
    display.textContent = btnPressStr.join("");
  });
});

operatorbuttons.forEach(function (button) {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-add')) btnPressOp = add;
        if (e.target.classList.contains('btn-subtract')) btnPressOp = subtract;
        if (e.target.classList.contains('btn-multiply')) btnPressOp = multiply;
        if (e.target.classList.contains('btn-divide')) btnPressOp = divide;
        console.log(btnPressOp);
    })
})
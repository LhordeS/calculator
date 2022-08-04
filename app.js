const calcButtons = document.querySelector('.calculator-btns');

function createButtons() {
    for (let i = 0; i < 16; i++){
        const buttons = document.createElement('div');
        buttons.classList.add('btns');
        calcButtons.append(buttons)
    }
}

createButtons();
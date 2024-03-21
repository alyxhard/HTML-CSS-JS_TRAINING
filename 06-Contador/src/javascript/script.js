const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalID = 0;

plusButton.addEventListener('mousedown', () => {
    intervalID = setInterval(() => {
        count += 1;
        updateValue()
    }, 80)
});

document.addEventListener('mouseup', () => clearInterval(intervalID))

minusButton.addEventListener('mousedown', () => {
    intervalID = setInterval(() => {
        count -= 1;
        updateValue()
    }, 100)
});

document.addEventListener('mouseup', () => clearInterval(intervalID))

resetButton.addEventListener('click', () => {
    count = 0;
    updateValue()
})
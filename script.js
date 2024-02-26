const numBtns = document.getElementsByClassName('number-btns')[0].children;
const operationBtns = document.getElementsByClassName('operation-btns')[0].children;
const equation = document.getElementById('screen-text');


    for (let index = 0; index < numBtns.length; index++) {
    numBtns[index].addEventListener('click', ()=> {
        equation.innerHTML = equation.innerHTML + numBtns[index].dataset.value;
    })
    
}

//Adds the function to display the operation, to the simple operations

for (let index = 0; index < 4; index++) {
    operationBtns[index + 2].addEventListener('click', ()=> {
        equation.innerHTML = equation.innerHTML + operationBtns[index + 2].dataset.value;
    })
    
}

// Unique btns

const deleteBtn = document.getElementById('delete-btn');

deleteBtn.addEventListener('click', () => {
    equation.innerHTML = equation.innerHTML.slice(0, this.length - 1)
})

const equalBtn = document.getElementById('equal-btn');

equalBtn.addEventListener('click', () => {
    equation.innerText = doEquation(equation.innerText);
})

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
    equation.innerText = "";
})

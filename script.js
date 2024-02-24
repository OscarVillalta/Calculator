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

//delete btn

const deleteBtn = document.getElementById('delete-btn');

deleteBtn.addEventListener('click', () => {
    equation.innerHTML = equation.innerHTML.slice(0, this.length - 1)
})

//equal btn

const equalBtn = document.getElementById('equal-btn');

equalBtn.addEventListener('click', () => {
    equation.innerText = doEquation(equation.innerText);
})

function doEquation(equation) {
    let equationArr = equation.split(" ");

    let resultArr = [];

    for (let index = 0; index < equationArr.length; index++) {
        switch (equationArr[index]) {
            case 'X':
                const product = parseFloat(equationArr[index - 1]) * parseFloat(equationArr[index + 1]);
                
                resultArr.push(product.toString());
                
                resultArr.splice(index - 1, 1);
                equationArr.splice(index + 1, 1);
                equationArr.splice(index - 1, 1);

                index--;

                console.log(resultArr[index - 1]);
                console.log(equationArr[index + 1]);
                console.log(equationArr[index - 1]);
                break;
        
            default:
                resultArr.push(equationArr[index]);
                break;
        }
    }

    return resultArr.toString().replaceAll(',', '')
}

module.exports = doEquation;

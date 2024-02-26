let operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'X': (a, b) => a * b,
    '/': (a, b) => a / b
}

function doEquation(equation) {
    let equationArr = equation.split(" ");
    let resultArr = [];

    try {
        if(equationArr.includes('X')) resultArr = operate(equationArr, 'X');
        if(equationArr.includes('/')) resultArr = operate(equationArr, '/');
        if(equationArr.includes('+')) resultArr = operate(equationArr, '+');
        if(equationArr.includes('-')) resultArr = operate(equationArr, '-');

        return resultArr.toString();

    } catch (error) {
        console.log(error);
        return 'SYNTAX ERROR'
    }
}

function operate(equation, type) {
    let resultArr = [];

    for(let index = 0; index < equation.length; index++){
        if(equation[index] == type){

            if(isNaN(equation[index + 1])) {
                throw new Error('Cannot chain operators');
            }

            if(index == 0 || index == equation.length) {
                throw new Error('Missing a number to operate');
            }

            const product = operators[type](parseFloat(equation[index - 1]), parseFloat(equation[index + 1]));
            resultArr.splice(-1, 1);
            resultArr.push(product.toString());
            equation.splice(index + 1, 1, product);
            equation.splice(index - 1, 2);
            index = 0;
        } else {
            resultArr.push(equation[index]); 
        }
    }

    return resultArr;
}

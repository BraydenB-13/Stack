const Stack = require('./stack').Stack;

function rpn(string) {
    const stack = new Stack();
    const operators = [];
    //seperate operands and operators
    const array = string.split(' ');
    array.forEach(item => {
        if(isNaN(Number(item))) {
            operators.push(item);
        } else {
        stack.push(Number(item));
        }
    });
    //loop through operators
    operators.forEach(operator => {
        //pop two numbers
        const number1 = stack.pop();
        const number2 = stack.pop();
        //operate on those two
        //push results in stack
        switch (operator) {
            case'+':
                stack.push(number1 + number2)
                break;
            case'-':
                stack.push(number1 - number2)
                break;
            case'*':
                stack.push(number1 * number2)
                break;
            case'/':
                stack.push(number1 / number2)
                break;
            default:
                throw `Operator ${operator} is not supported`;
        }
    });
    //return top of stack
    return stack.pop();
}

const result = rpn('3 5 10 + *');

console.log(result);

module.exports.rpn = rpn;
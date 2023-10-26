function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

let num1 = 0
let operator = ""
let num2 = 0

function operate(a, operator, b){
    if (operator == '+'){
        return add(a,b)
    }
    else if(operator == '-'){
        return subtract(a,b)
    }
    else if(operator == 'x'){
        return multiply(a,b)
    }
    else if(operator == '/'){
        return divide(a,b)
    }
}

console.log(operate(10, "-", 3))
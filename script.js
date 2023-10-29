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

const divOperation = document.querySelector(".operation")
const divSolution = document.querySelector(".solution")



let solutionValue = 0
let operationValue = 0

function hasOperator(){
    if(divOperation.textContent[divOperation.textContent.length - 1] === "×" || divOperation.textContent[divOperation.textContent.length - 1] === "+"|| divOperation.textContent[divOperation.textContent.length - 1] === "-"|| divOperation.textContent[divOperation.textContent.length - 1] === "÷"){
        return true
    }
    return false
}

function print(event){
    if(hasOperator()){

        divSolution.textContent = event.target.textContent
    }
    else{
        if(divSolution.textContent == 0)
            divSolution.textContent = event.target.textContent
        else{
            divSolution.textContent += event.target.textContent
        }
    } 
    solutionValue = divSolution.textContent
}


const numbers = document.querySelectorAll(".number")
numbers.forEach(number => {
    number.addEventListener("click", print)
});


function printOperator(event){
    divOperation.textContent = `${solutionValue} ${event.target.textContent}`
    operationValue = divOperation.textContent
    divSolution.textContent = parseInt(divSolution.textContent)
}


const operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", printOperator)
});




function printEqual(event){
    if(hasOperator() && divSolution.textContent){
    divOperation.textContent += ` ${divSolution.textContent} ${event.target.textContent}`
    divSolution.textContent = solution}
}



const equal = document.querySelector(".equal")
equal.addEventListener("click", printEqual)




const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    divOperation.textContent = ""
    divSolution.textContent = "0"
})

const del = document.querySelector(".delete")
del.addEventListener("click", () => {
    if(divSolution.textContent.length > 1){
        divSolution.textContent = divSolution.textContent.slice(0, divSolution.textContent.length - 1)
    }
    else{
        divSolution.textContent = 0
    }
})


const divOperation = document.querySelector(".operation")
const divSolution = document.querySelector(".solution")

let aValue = ""
let bValue = ""
let operationValue = ""
let solution = 0


function hasOperator(){
    if(divOperation.textContent[divOperation.textContent.length - 1] === "×" || divOperation.textContent[divOperation.textContent.length - 1] === "+"|| divOperation.textContent[divOperation.textContent.length - 1] === "-"|| divOperation.textContent[divOperation.textContent.length - 1] === "÷"){
        return true
    }
    return false
}


function print(event){
    if(divSolution.textContent === ""){
        divSolution.textContent += event.target.textContent
        bValue = divSolution.textContent
    }
    else{
        if(divSolution.textContent == 0)
            divSolution.textContent = event.target.textContent
        else{
            divSolution.textContent += event.target.textContent
        }
        aValue = divSolution.textContent
    } 
    
   
}


function printOperator(event){
    if(hasOperator() && divSolution.textContent === "" || divOperation.textContent === ""){
    divOperation.textContent = `${aValue} ${event.target.textContent}`
    operationValue = divOperation.textContent
    divSolution.textContent = ""
    }

    else{
        calculate()
        divOperation.textContent = `${solution} ${event.target.textContent}` 
        divSolution.textContent = ""
    }
}


function calculate(){
    
    solution = operate(parseFloat(aValue),operationValue[operationValue.length -1],parseFloat(bValue))
    console.log(solution)
}

function printEqual(event){
    if(hasOperator() && divSolution.textContent !== ""){
    divOperation.textContent += ` ${divSolution.textContent} =`
    divSolution.textContent = solution}
    aValue = divSolution.textContent
}

function pressEqual(){
    calculate()
    printEqual()
}


function printDot(){
    if(!divSolution.textContent.includes(".")){
        divSolution.textContent += dot.textContent
    }
}



const numbers = document.querySelectorAll(".number")
numbers.forEach(number => {
    number.addEventListener("click", print)
});

const operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", printOperator)
});



const equal = document.querySelector(".equal")
equal.addEventListener("click", pressEqual)



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

const dot = document.querySelector(".dot")
dot.addEventListener("click", printDot)




/*Operate*/

function add(a,b){
    return parseFloat(a+b)
}

function subtract(a,b){
    return parseFloat(a-b)
}

function multiply(a,b){
    return parseFloat(a*b)
}

function divide(a,b){
    return parseFloat(a/b)
}


function operate(a, operator, b){
    if (operator == '+'){
        return add(a,b)
    }
    else if(operator == '-'){
        return subtract(a,b)
    }
    else if(operator == '×'){
        return multiply(a,b)
    }
    else if(operator == '÷'){
        return divide(a,b)
    }
}



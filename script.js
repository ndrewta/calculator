function add(a, b) {3
    resetFlags()
    return a + b
}

function subtract(a, b) {
    resetFlags()
    return a - b
}

function multiply(a, b) {
    resetFlags()
    return a * b
}

function divide(a, b) {
    resetFlags()
    return a / b
    
}

function operate(a, b) {
    if (addFlag) {
        return add(a, b)
    } else if (subtractFlag) {
        return subtract(a, b)
    } else if (multiplyFlag) {
        return multiply(a, b)
    } else if (divideFlag) {
        return divide(a, b)
    }
    resetFlags()
}

function outputNumber(e) {
    if (e.value == 0 && screenOutput == "") {
        screenOutput = ""
        outputBox.textContent = "0"
    } else {
        screenOutput += e.value
        outputBox.textContent = screenOutput
    }
}

function storeNumbers(operator) {
    if (operator.value == '=') {
        if (!firstNum) {
            console.log("'=' and !firstNum")
            screenOutput = ""
            firstNum = parseInt(outputBox.textContent)
            secondNum = ""
        } else if (!secondNum) {
            if (addFlag == true || subtractFlag == true || multiplyFlag == true || divideFlag == true) {
                console.log("'=' and secondNum and opeator flags check")
                secondNum = parseInt(outputBox.textContent)
                finalSum = operate(firstNum, secondNum)
                outputBox.textContent = finalSum
                screenOutput = ""
                firstNum = finalSum
                secondNum = ""
            } else if (finalSum) {
                console.log("'=' and !secondNum and finalSum check")
                outputBox.textContent = finalSum
                screenOutput = ""
                firstNum = finalSum
            } else {
                console.log("'=' and secondNum and else")
                finalSum = firstNum
                outputBox.textContent = finalSum
                screenOutput = ""
                secondNum = ""
            } 
        }
    } else {
        if (equalFlag && !firstNum) {
            console.log("Not '=' and equalFlag + firstNum check")
            screenOutput = ""
            equalFlag = false
        } else if (equalFlag) {
            console.log("Not '=' and equalFlag check")
            screenOutput = ""
            outputBox.textContent = finalSum
            equalFlag = false
        } else {
            if (!firstNum) {
                console.log("Not '=' and !firstNum")
                firstNum = parseInt(outputBox.textContent)
                screenOutput = ""
                equalFlag = false
            } else {
                console.log("Not '=' and else")
                secondNum = parseInt(outputBox.textContent)
                finalSum = operate(firstNum, secondNum)
                outputBox.textContent = finalSum
                screenOutput = ""
                firstNum = finalSum
                secondNum = ""
                equalFlag = false
            }
        }
    }
    activateFlags(operator)
}

function clear() {
    screenOutput = ""
    outputBox.textContent = "0"
    firstNum = ""
    secondNum = ""
    finalSum = ""
    resetFlags()
    equalFlag = false
}

function resetFlags() {
    addFlag = false
    subtractFlag = false
    divideFlag = false
    multiplyFlag = false
}

function activateFlags(operator) {
    if (operator.value == '+') {
        addFlag = true
        console.log("addFlag: " + addFlag)
    } else if (operator.value == '-') {
        subtractFlag = true
        console.log("subtractFlag: " + subtractFlag)
    } else if (operator.value == '÷') {
        divideFlag = true
        console.log("divideFlag: " + divideFlag)
    } else if (operator.value == 'x') {
        multiplyFlag = true
        console.log("multiplyFlag: " + multiplyFlag)
    } else if (operator.value == '=') {
        equalFlag = true
        console.log("equalFlag: " + equalFlag)
    }
}

function createButtons(min, max) {
    for (i = min; i <= max; i++) {
        const btn = document.createElement('button')
        btn.setAttribute('id', `btn-${[i]}`)
        btn.textContent = i
        btn.value = i
        btn.addEventListener('click', e => outputNumber(e.target))
        btnContainer.appendChild(btn)
    }
}


let screenOutput = ""
let firstNum = ""
let secondNum = ""
let finalSum = ""
let addFlag = false
let subtractFlag = false
let divideFlag = false
let multiplyFlag = false
let equalFlag = false

const container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.appendChild(container)

const outputBox = document.createElement('div')
outputBox.setAttribute('id', 'output-box')
outputBox.textContent = "0"
container.appendChild(outputBox)

const btnContainer = document.createElement('div')
btnContainer.setAttribute('id', 'btn-container')
container.appendChild(btnContainer)

createButtons(7, 9)

const btnDivide = document.createElement('button')
btnDivide.setAttribute('id', 'btn-divide')
btnDivide.textContent = '÷'
btnDivide.value = '÷'
btnDivide.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnDivide)

createButtons(4, 6)

const btnMultiply = document.createElement('button')
btnMultiply.setAttribute('id', 'btn-multiply')
btnMultiply.textContent = 'x'
btnMultiply.value = 'x'
btnMultiply.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnMultiply)

createButtons(1, 3)

const btnSubtract = document.createElement('button')
btnSubtract.setAttribute('id', 'btn-subtract')
btnSubtract.textContent = '−'
btnSubtract.value = '-'
btnSubtract.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnSubtract)

const btnClear = document.createElement('button')
btnClear.setAttribute('id', 'btn-clear')
btnClear.textContent = 'C'
btnClear.addEventListener('click', clear)
btnContainer.appendChild(btnClear)

const btn0 = document.createElement('button')
btn0.setAttribute('id', `btn-0`)
btn0.textContent = 0
btn0.value = 0
btn0.addEventListener('click', e => outputNumber(e.target))
btnContainer.appendChild(btn0)

const btnEqual = document.createElement('button')
btnEqual.setAttribute('id', 'btn-equal')
btnEqual.textContent = '='
btnEqual.value = '='
btnEqual.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnEqual)

const btnAdd = document.createElement('button')
btnAdd.setAttribute('id', 'btn-add')
btnAdd.textContent = '+'
btnAdd.value = '+'
btnAdd.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnAdd)


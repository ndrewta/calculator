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
    } else if (screenOutput == "-0") {
        screenOutput = "-" + e.value
        outputBox.textContent = screenOutput
    } else if (outputBox.textContent.length <= 12) {
        screenOutput += e.value
        outputBox.textContent = screenOutput
    }
}

function switchPosNeg() {
    x = parseFloat(outputBox.textContent)

    if (x > 0) {
            y = parseFloat(outputBox.textContent = "-" + x)
            screenOutput = y

            if (firstNum) {
                firstNum = y
                finalSum = y
            }
    } else if (x <= 0) {
        y = Math.abs(x)
        outputBox.textContent = y
        screenOutput = y

        if (firstNum) {
            firstNum = y
            finalSum = y
        }
    }
}

function decimalPoint(e) {
    if (decimalFlag == false) {
        if (screenOutput == "") {
            screenOutput = "0."
            outputBox.textContent = screenOutput
        } else {
            screenOutput += e.value
            outputBox.textContent = screenOutput
        }
    }

    activateFlags(e)
}

function backspace(e) {
    if (e.value == '⌫' && screenOutput == "") {
        screenOutput = ""
        outputBox.textContent = "0"
    } else if (e.value == '⌫') {
        if (outputBox.textContent) {
            x = outputBox.textContent
            y = x.toString().split('').slice(0, -1).join('')
            screenOutput = y
            outputBox.textContent = y

            if (outputBox.textContent == "") {
                outputBox.textContent = "0"
            } else if (outputBox.textContent == "-"){
                outputBox.textContent = "0"
                screenOutput = ""
            }
        }
    }

    x = outputBox.textContent
    if (!x.includes(".")) {
        decimalFlag = false
    }
}

function storeNumbers(operator) {
    if (operator.value == '-' && outputBox.textContent == "0") {
        screenOutput = ""
        screenOutput += "-0"
        outputBox.textContent = screenOutput

    } else if (operator.value == '=') {
        if (!firstNum) {
            firstNum = parseFloat(outputBox.textContent)
            secondNum = ""
        } else if (!secondNum) {
            if (addFlag == true || subtractFlag == true || multiplyFlag == true || divideFlag == true) {
                secondNum = parseFloat(outputBox.textContent)
                finalSum = operate(firstNum, secondNum)
                outputBox.textContent = finalSum
                screenOutput = ""
                firstNum = finalSum
                secondNum = ""
            } else if (finalSum) {
                outputBox.textContent = finalSum
                screenOutput = ""
                firstNum = finalSum
            } else {
                finalSum = firstNum
                outputBox.textContent = finalSum
                screenOutput = ""
                secondNum = ""
            } 
        }
        activateFlags(operator)
        } else {
            if (equalFlag && !firstNum) {
                screenOutput = ""
                equalFlag = false
            } else if (equalFlag) {
                screenOutput = ""
                outputBox.textContent = finalSum
                equalFlag = false
            } else {
                if (!firstNum) {
                    firstNum = parseFloat(outputBox.textContent)
                    screenOutput = ""
                    equalFlag = false
                } else {
                    secondNum = parseFloat(outputBox.textContent)
                    finalSum = operate(firstNum, secondNum)
                    outputBox.textContent = finalSum
                    screenOutput = ""
                    firstNum = finalSum
                    secondNum = ""
                    equalFlag = false
                }
            }
            activateFlags(operator)
        }
        
    decimalFlag = false
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
    decimalFlag = false
}

function activateFlags(operator) {
    if (operator.value == '+') {
        addFlag = true
    } else if (operator.value == '-') {
        subtractFlag = true
    } else if (operator.value == '÷') {
        divideFlag = true
    } else if (operator.value == 'x') {
        multiplyFlag = true
    } else if (operator.value == '=') {
        equalFlag = true
    } else if (operator.value == '.') {
        decimalFlag = true
    }
}

function createButtons(min, max) {
    for (i = min; i <= max; i++) {
        const btn = document.createElement('button')
        btn.setAttribute('id', `btn-${[i]}`)
        btn.setAttribute('class', 'btn-group-2')
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
let decimalFlag = false

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

const btnClear = document.createElement('button')
btnClear.setAttribute('id', 'btn-clear')
btnClear.setAttribute('class', 'btn-group-1')
btnClear.textContent = 'AC'
btnClear.addEventListener('click', clear)
btnContainer.appendChild(btnClear)

const btnSwitch = document.createElement('button')
btnSwitch.setAttribute('id', 'btn-switch')
btnSwitch.setAttribute('class', 'btn-group-1')
btnSwitch.textContent = '+/−'
btnSwitch.value = 'switch'
btnSwitch.addEventListener('click', switchPosNeg)
btnContainer.appendChild(btnSwitch)

const btnDelete = document.createElement('button')
btnDelete.setAttribute('id', 'btn-delete')
btnDelete.setAttribute('class', 'btn-group-1')
btnDelete.textContent = '⌫'
btnDelete.value = '⌫'
btnDelete.addEventListener('click', e => backspace(e.target))
btnContainer.appendChild(btnDelete)

const btnDivide = document.createElement('button')
btnDivide.setAttribute('id', 'btn-divide')
btnDivide.setAttribute('class', 'btn-group-3')
btnDivide.textContent = '÷'
btnDivide.value = '÷'
btnDivide.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnDivide)

createButtons(7, 9)

const btnMultiply = document.createElement('button')
btnMultiply.setAttribute('id', 'btn-multiply')
btnMultiply.setAttribute('class', 'btn-group-3')
btnMultiply.textContent = 'x'
btnMultiply.value = 'x'
btnMultiply.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnMultiply)

createButtons(4, 6)

const btnSubtract = document.createElement('button')
btnSubtract.setAttribute('id', 'btn-subtract')
btnSubtract.setAttribute('class', 'btn-group-3')
btnSubtract.textContent = '−'
btnSubtract.value = '-'
btnSubtract.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnSubtract)

createButtons(1, 3)

const btnAdd = document.createElement('button')
btnAdd.setAttribute('id', 'btn-add')
btnAdd.setAttribute('class', 'btn-group-3')
btnAdd.textContent = '+'
btnAdd.value = '+'
btnAdd.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnAdd)

const btn0 = document.createElement('button')
btn0.setAttribute('id', `btn-0`)
btn0.setAttribute('class', 'btn-group-2')
btn0.textContent = 0
btn0.value = 0
btn0.addEventListener('click', e => outputNumber(e.target))
btnContainer.appendChild(btn0)

const btnDecimal = document.createElement('button')
btnDecimal.setAttribute('id', 'btn-decimal')
btnDecimal.setAttribute('class', 'btn-group-3')
btnDecimal.textContent = '.'
btnDecimal.value = '.'
btnDecimal.addEventListener('click', e => decimalPoint(e.target))
btnContainer.appendChild(btnDecimal)

const btnEqual = document.createElement('button')
btnEqual.setAttribute('id', 'btn-equal')
btnEqual.setAttribute('class', 'btn-group-3')
btnEqual.textContent = '='
btnEqual.value = '='
btnEqual.addEventListener('click', e => storeNumbers(e.target))
btnContainer.appendChild(btnEqual)

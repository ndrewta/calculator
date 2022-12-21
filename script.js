function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    return operator == '+' ? add(a, b)
        : operator == '-' ? substract(a, b)
        : operator == '*' ? multiply(a, b)
        : operator == '/' ? divide(a, b)
        : false
}

function outputNumber(e) {
    if (e.value == 0 && storedValue == "") {
        storedValue = ""
        outputBox.textContent = "0"
    } else {
        storedValue += e.value
        outputBox.textContent = storedValue
    }
}

function clear() {
    storedValue = ""
    outputBox.textContent = "0"
}

let storedValue = ""

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

for (i = 0; i <= 9; i++) {
    const btn = document.createElement('button')
    btn.setAttribute('id', `btn-${[i]}`)
    btn.textContent = i
    btn.value = i
    btn.addEventListener('click', e => outputNumber(e.target))
    btnContainer.appendChild(btn)
}

const btnClear = document.createElement('button')
btnClear.setAttribute('id', 'btn-clear')
btnClear.textContent = 'C'
btnClear.addEventListener('click', clear)
btnContainer.appendChild(btnClear)

const btnSubtract = document.createElement('button')
btnSubtract.setAttribute('id', 'btn-subtract')
btnSubtract.textContent = '−'
btnContainer.appendChild(btnSubtract)

const btnMultiply = document.createElement('button')
btnMultiply.setAttribute('id', 'btn-multiply')
btnMultiply.textContent = '×'
btnContainer.appendChild(btnMultiply)

const btnDivide = document.createElement('button')
btnDivide.setAttribute('id', 'btn-divide')
btnDivide.textContent = '÷'
btnContainer.appendChild(btnDivide)

const btnEqual = document.createElement('button')
btnEqual.setAttribute('id', 'btn-equal')
btnEqual.textContent = '='
btnContainer.appendChild(btnEqual)

const btnAdd = document.createElement('button')
btnAdd.setAttribute('id', 'btn-add')
btnAdd.textContent = '+'
btnContainer.appendChild(btnAdd)

const btn0 = document.getElementById('btn-0')
const btn3 = document.getElementById('btn-3')
const btn6 = document.getElementById('btn-6')
const btn9 = document.getElementById('btn-9')
const btnC = document.getElementById('btn-clear')
const btnD = document.getElementById('btn-divide')
const btnMulti = document.getElementById('btn-multiply')
const btnP = document.getElementById('btn-add')
const btnMin = document.getElementById('btn-subtract')
btnC.after(btn0)
btn3.after(btnD)
btn6.after(btnMulti)
btn9.after(btnMin)
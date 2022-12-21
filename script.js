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

const container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.appendChild(container)

const outputBox = document.createElement('div')
outputBox.setAttribute('id', 'output-box')
outputBox.textContent = 12903812390
container.appendChild(outputBox)

const btnContainer = document.createElement('div')
btnContainer.setAttribute('id', 'btn-container')
container.appendChild(btnContainer)

for (i = 0; i <= 9; i++) {
    const btn = document.createElement('button')
    btn.setAttribute('id', `btn-${[i]}`)
    btn.textContent = i
    btnContainer.appendChild(btn)
}

const btnClear = document.createElement('button')
btnClear.setAttribute('id', 'btn-clear')
btnClear.textContent = 'C'
btnContainer.appendChild(btnClear)

const btnEqual = document.createElement('button')
btnEqual.setAttribute('id', 'btn-equal')
btnEqual.textContent = '='
btnContainer.appendChild(btnEqual)

const btn0 = document.getElementById('btn-0')
const btnC = document.getElementById('btn-clear')
btnC.after(btn0)
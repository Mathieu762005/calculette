function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function calculer(operation, num1, num2) {
    if(operation == add()){
        return add(num1, num2)
    } else if(operation == subtract()){
        return subtract(num1, num2)
    } else if(operation == multiply()){
        return multiply(num1, num2)
    } else if(operation == divide()){
        return divide(num1, num2)
    }
    return operation
}
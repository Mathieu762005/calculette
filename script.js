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
        return add(a,b)
    } else if(operation == subtract()){
        return subtract(a, b)
    } else if(operation == multiply()){
        return multiply(a, b)
    } else if(operation == divide()){
        return divide(a, b)
    }
}
// Exercise 2: Simple Calculator
// Write a program that calculates simple arithmetic operations.

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) throw new Error("Cannot divide by zero.");
    return x / y;
}

// Example usage:
const num1 = 5;
const num2 = 3;

console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);

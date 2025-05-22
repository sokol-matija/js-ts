// Variables and Data Types Example
function showVariables() {
    // Different ways to declare variables
    let name = "John";
    const age = 25;
    var isStudent = true;
    
    // Different data types
    let number = 42;
    let decimal = 3.14;
    let text = "Hello, World!";
    let isActive = true;
    let empty = null;
    let notDefined;
    
    // Display the variables
    const output = document.getElementById('variables-output');
    output.innerHTML = `
        <h3>Variable Examples:</h3>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Is Student: ${isStudent}</p>
        <h3>Data Types:</h3>
        <p>Number: ${number}</p>
        <p>Decimal: ${decimal}</p>
        <p>Text: ${text}</p>
        <p>Boolean: ${isActive}</p>
        <p>Null: ${empty}</p>
        <p>Undefined: ${notDefined}</p>
    `;
}

// Functions Example
function calculateSquare() {
    const input = document.getElementById('number-input').value;
    const number = parseFloat(input);
    
    if (isNaN(number)) {
        alert('Please enter a valid number!');
        return;
    }
    
    const square = number * number;
    const output = document.getElementById('function-output');
    output.innerHTML = `
        <p>The square of ${number} is: ${square}</p>
    `;
}

// Arrays and Loops Example
function showArrayExample() {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
    let output = '<h3>Fruits Array:</h3><ul>';
    
    // Using forEach loop
    fruits.forEach(fruit => {
        output += `<li>${fruit}</li>`;
    });
    
    output += '</ul>';
    
    // Using map to transform array
    const upperFruits = fruits.map(fruit => fruit.toUpperCase());
    output += '<h3>Uppercase Fruits:</h3><ul>';
    upperFruits.forEach(fruit => {
        output += `<li>${fruit}</li>`;
    });
    output += '</ul>';
    
    document.getElementById('array-output').innerHTML = output;
}

// DOM Manipulation Example
function changeBackground() {
    const colorInput = document.getElementById('color-input').value;
    const container = document.querySelector('.container');
    
    if (colorInput) {
        container.style.backgroundColor = colorInput;
    } else {
        alert('Please enter a color!');
    }
}

// Add some console logging for debugging
console.log('JavaScript file loaded successfully!'); 
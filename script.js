// Part 2: JavaScript Functions

// Function with parameters and return value
function calculateSum(a, b) {
    return a + b;
}

const sumResult = calculateSum(5, 10);
document.getElementById('sum-result').textContent = sumResult;

// Scope Demonstration
let globalVar = "I'm global!";

function scopeTest() {
    let localVar = "I'm local!";
    document.getElementById('local-var').textContent = localVar;
    document.getElementById('global-var').textContent = globalVar;
}

scopeTest();

// Part 3: Combining CSS Animations with JavaScript

const animateButton = document.getElementById('animate-button');
const animateBox = document.getElementById('animate-box');

animateButton.addEventListener('click', () => {
    animateBox.classList.toggle('do-animation');
});

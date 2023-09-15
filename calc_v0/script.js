//Selecionar elementos do DOM

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");


const resultSpan = document.getElementById("result");

// Função para somar
function add() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
    
        if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        resultSpan.textContent = result;
        } else {
        resultSpan.textContent = "Entradas inválidas";
        }
    }
    

addButton.addEventListener("click", add);

// Função para somar
function subt() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 - num2;
        resultSpan.textContent = result;
        } else {
        resultSpan.textContent = "Entradas inválidas";
        }
    }
    

subtractButton.addEventListener("click", subt);

// Função para multiplicar
function multiplicar() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        resultSpan.textContent = result;
        } else {
        resultSpan.textContent = "Entradas inválidas";
        }
    }
    

multiplyButton.addEventListener("click", multiplicar);

// Função para dividir
function dividir() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        if (!isNaN(num1) && !isNaN(num2)) {
            const result = num1 / num2;
            resultSpan.textContent = result;
        } else {
            resultSpan.textContent = "Entradas inválidas";
        }
    }
    

divideButton.addEventListener("click", dividir);
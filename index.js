
let resultElement = document.getElementById('clear-button');
let clearBtn = document.getElementById('clear-button');
let deleteBtn = document.getElementById('delete-button');
let divideBtn = document.getElementById('divide-button');
let multiplyBtn = document.getElementById('multiply-button');
let subtractBtn = document.getElementById('subtract-button');
let addBtn = document.getElementById('add-button');
let decimalBtn = document.getElementById('decimal-button');
let equalBtn = document.getElementById('equal-button');
let numberBtns = document.getElementById('.number');



let result = '';
let operation = '';
let previousOperand = 0;



//function to append number
let appendNumber = (number) => {
     result += number;
     
}




numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    }
        
    )
});
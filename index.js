"use strict";
var input1;
var input2;
var valueInput1;
var valueInput2;
var total;
var addObject;
var displayObject;
var totalHistory;
addObject = {
    num1: '',
    operation: 'n',
    num2: ''
};
totalHistory = [];
function addNumber(num) {
    if (addObject.operation === 'n') {
        input1 = document.getElementById('inputNum').value;
        valueInput1 = input1.concat(num);
        document.getElementById('inputNum').value = valueInput1;
        addObject.num1 = valueInput1;
    }
    else {
        input2 = document.getElementById('inputNum').value;
        valueInput2 = input2.concat(num);
        document.getElementById('inputNum').value = valueInput2;
        addObject.num2 = valueInput2;
        document.getElementById('equal').disabled = false;
    }
}
function operation(ope) {
    document.getElementById('inputNum').value = "";
    addObject.operation = ope;
}
function calculate() {
    switch (addObject.operation) {
        case '-':
            total = parseInt(addObject.num1) - parseInt(addObject.num2);
            break;
        case '+':
            total = parseInt(addObject.num1) + parseInt(addObject.num2);
            break;
        case '*':
            total = parseInt(addObject.num1) * parseInt(addObject.num2);
            break;
        case '/':
            total = parseInt(addObject.num1) / parseInt(addObject.num2);
            break;
        case '%':
            total = parseInt(addObject.num1) % parseInt(addObject.num2);
            break;
        default:
            total = 0;
    }
    displayObject = {
        num1: addObject.num1,
        num2: addObject.num2,
        operation: addObject.operation,
        total: total
    };
    totalHistory.push(displayObject);
    addObject.num1 = '';
    addObject.num2 = '';
    addObject.operation = 'n';
    document.getElementById('inputNum').value = '';
    document.getElementById('equal').disabled = true;
    displayHistory();
}
function displayHistory() {
    document.getElementById('displayHistory').innerHTML = '';
    totalHistory.map(function (hist) {
        document.getElementById('displayHistory').innerHTML += hist.num1 + ' ' + hist.operation + ' ' + hist.num2 + ' = ' + hist.total + '</br>';
    });
}

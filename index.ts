let input1:any;
let input2:any;
let valueInput1:any;
let valueInput2:any;
let total:any;

let addObject:any;
let displayObject:any;
let totalHistory:any;

addObject = {
    num1: '',
    operation: 'n',
    num2: ''
}
totalHistory = [];

function addNumber(num:any) {
    if (addObject.operation === 'n') {
        input1 = (<HTMLInputElement>document.getElementById('inputNum')).value;
       valueInput1 = input1.concat(num);
        (<HTMLInputElement>document.getElementById('inputNum')).value = valueInput1;
        addObject.num1 = valueInput1;
    } else {
        input2 = (<HTMLInputElement>document.getElementById('inputNum')).value;
       valueInput2 = input2.concat(num);
        (<HTMLInputElement>document.getElementById('inputNum')).value = valueInput2;
        addObject.num2 = valueInput2;
        (<HTMLInputElement>document.getElementById('equal')).disabled = false;
    }
}

function operation(ope:any) {
    (<HTMLInputElement>document.getElementById('inputNum')).value = "";
    addObject.operation = ope;
}

function calculate() {
    switch (addObject.operation) {
        case '-':
            total = parseInt(addObject.num1) - parseInt(addObject.num2)
            break;
        case '+':
            total = parseInt(addObject.num1) + parseInt(addObject.num2)
            break;
        case '*':
            total = parseInt(addObject.num1) * parseInt(addObject.num2)
            break;
        case '/':
            total = parseInt(addObject.num1) / parseInt(addObject.num2)
            break;
        case '%':
            total = parseInt(addObject.num1) % parseInt(addObject.num2)
            break;
        default:
            total = 0;
    }
    displayObject = {
        num1: addObject.num1,
        num2: addObject.num2,
        operation: addObject.operation,
        total
    }

    totalHistory.push(displayObject);
    addObject.num1 = '';
    addObject.num2 = '';
    addObject.operation = 'n';
    (<HTMLInputElement>document.getElementById('inputNum')).value = '';
    (<HTMLInputElement>document.getElementById('equal')).disabled = true;
    
    displayHistory();
}

function displayHistory() {
    (<HTMLInputElement>document.getElementById('displayHistory')).innerHTML = '';
    totalHistory.map((hist:any) => {
        (<HTMLInputElement>document.getElementById('displayHistory')).innerHTML += hist.num1 + ' ' + hist.operation + ' ' + hist.num2 + ' = ' + hist.total + '</br>';
    });
}
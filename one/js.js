function divide(number1, number2) {
    console.log(number1 / number2);
}


function plus(num1, num2) {

    console.log(num1 + num2);

}
function Minus(num1, num2) {
    console.log(num1 - num2);
}
function double(num1, num2) {
    console.log(num1 * num2);
}
function Division(num1, num2) {
    console.log(num1 / num2);
}

function calc(num1, num2, calfunc) {
    calfunc(num1, num2)
}
function go() {
    const num1 = +prompt('Enter the first Number');
    const num2 = +prompt('Enter the first Number');
    const Oper = prompt('Which one : + , - , * , / ');
    if (Oper === '+') {
        calc(num1, num2, plus)
    }
    else if (Oper === '-') {
        calc(num1, num2, Minus)
    } else if (Oper === '*') {
        calc(num1, num2, double)
    } else if (Oper === '/') {
        calc(num1, num2, Division)
    }
    else {
        console.log('thank you');

    }
}
go()
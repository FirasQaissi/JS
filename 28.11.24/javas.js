

const rndNum1 = Math.ceil(Math.random() * 10)
const rndNum2 = Math.ceil(Math.random() * 10)

const operators = ['+', '-', '*', '/']

const randomIndex = Math.floor(Math.random() * operators.length);
const opertator = operators[randomIndex];

let result = 0;

if (opertator === '+') {
    result = rndNum1 + rndNum2;
} else if (opertator === '-') {
    result = rndNum1 - rndNum2;
} else if (opertator === '*') {
    result = rndNum1 * rndNum2;
} else if (opertator === '/') {
    result = rndNum1 / rndNum2
}
console.log(`${rndNum1} ${opertator} ${rndNum2} = ${result} `);


function practice2() {
    const rndmNum1 = Math.ceil(Math.random() * 10)

    if (rndmNum1 <= 10) {
        console.log(`your number is ${rndmNum1}`)
    }
}
practice3()

function practice3() {
    const rndmNum5 = Math.ceil(Math.random() * 10)
    const rndmNum6 = Math.ceil(Math.random() * 100)
    const rndmNum7 = Math.ceil(Math.random() * 1000)
    const any = prompt("Enter a number: 10, 100, 1000:")

    if (any === "10") {
        console.log(`${rndmNum5} is Maxium`)
    } else if (any === "100") {
        console.log(`${rndmNum6} is Maxium`)
    } else if (any === "1000") {
        console.log(`${rndmNum7} is Maxium`)
    }
}
practice3()
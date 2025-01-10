let result = 0;
for (let i = 0; i <= 3; i++) {
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10)
    const operatorss = ['+', '-', '*', '/'];
    let randomOper = Math.floor(Math.random() * operatorss.length);
    let oper = operatorss[randomOper]
    let corecctResults

    if (oper === '+') {
        corecctResults = num1 + num2;
    } else if (oper === '-') {
        corecctResults = num1 - num2;
    } else if (oper === '*') {
        corecctResults = num1 * num2;
    } else if (oper === '/') {
        corecctResults = num1 / num2;
    }
    let userQuestion = +prompt(`${num1} ${oper} ${num2}` + '=')
    if (userQuestion === corecctResults)
        result++

}

console.log(`${result}`);


let myid = document.getElementById('questions')
myid.innerHTML = 'Hello WOrld'


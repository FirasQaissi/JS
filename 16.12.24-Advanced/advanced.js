const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr2 = arr1

arr2[0] = 100

arr2 = [...arr1]
arr2[0] = 200;

console.log('arr1', arr1);
console.log('arr1', arr2);

const test = Math.max(...arr1)
console.log(test);


console.log('----------------------------------');

const sum = (operator, ...args) => {
    let sum = 0;
    for (const arg of args) {
        if (operator === '+') {
            sum += arg;
        } else if (operator === '-') {
            sum -= arg;
        }

    }
    console.log('sum', sum);

}
sum('-', 200, 300, 500)



let cart1 = [100, 200, 300, 400, 1000];
console.log(cart1);
console.log(...cart1);




let cart2 = [...cart1]

cart2[0] = 777;

console.log(cart1)
console.log(cart2);

let person = {

    first: 'david',
    age: '22',
    email: 'jerusalem@gmail.com'

}


let personCopy = person

console.log(person);
console.log(personCopy);

personCopy.email = 'hello@gmail.com'

console.log(person);
console.log(personCopy);



let NewPerson = { ...person }

NewPerson.first = 'alex'

console.log(NewPerson);

console.log(person);





let cartone = [100, 200, 300, 400,]
let carttwo = [450, 500, 600, 700]
let carts = [...cartone, ...carttwo]

console.log(carts);

let newone = carttwo[1] = 1000;
console.log(newone);
console.log(carts);

carts = []
carts = [[66, 44], [33, 99]];

console.log(...cartone, ...carttwo);

console.log(carts);
console.log(carttwo);

console.log('---------------Try-Catch--------------');


let finalMessage = ''

function divide(x, y) {
    const all = x / y;
    return all
}

try {
    console.log(divide(10, 3));
    finalMessage = 'succses'

}
catch (error) {
    finalMessage = 'error'

} finally {
    console.log(finalMessage);


}




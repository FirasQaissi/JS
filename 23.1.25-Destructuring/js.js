const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const [first, second, ...all] = arr;
console.log(all);

console.log((first + second * 4))


const animals = ['horse', 'dog', 'fish', 'cat', 'bird', 'elephant', 'lion', 'tiger', 'bear', 'wolf'];


const [theFirst, TheSecond,] = animals;

console.log(animals[animals.length - 1]);

const [, , , , , , , , , theLast] = animals;

console.log((theFirst + ' ' + TheSecond + ' ' + theLast))


console.log('\n--------------------------\n');

const person = {
    fname: 'John',
    age: 30,
    city: 'New York',
    job: 'Web Developer'
};

const { city, fname, ...restOfPerson } = person;

console.log(fname);

console.log(restOfPerson);


const people = [

    { firstName: 'roy', lastName: 'heloo', age: 30, country: 'japan' },

]


for (const { firstName, lastName } of people) {
    console.log(firstName + ' ' + lastName);

}

console.log('\n----------Default Parameters----------------\n');

const add = (num1 = 50, num2) => { console.log(num1 + num2) };
add(null, 20);



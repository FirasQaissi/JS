const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const number2 = numbers.filter((num) => {
    return num % 2 == 0
}).map((num) => {
    return num * 100
})

console.log(number2);


const capitals = ['paris', 'washinton', 'london', 'tokyo', 'berlin'];
const countries = ['france', 'usa', 'england', 'japan', 'germany'];

const cc = capitals.map((item, i) => {
    return item + "- " + countries[i];


})
console.log(cc);
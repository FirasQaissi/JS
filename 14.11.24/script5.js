
//console.log('************for of *********');
//let flags = ['israel', 'england', 'france', 'spain', 'india', 'USA', 'China'];

//for (let flag of flags) {
//  console.log('flag is ' + flag);

//}
//console.log('************for in *********');

//for (let i in flags) {
//  console.log('the flag is :' + flags[6]);

//}

//console.log('************Break - contunie *********');

//const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
//for (let i in numbers) {
//  if (i == 2) {
//    break;
//}
//console.log('number is ' + numbers[i]);
//if (numbers[i] === 500) {
//   continue;
// }

//console.log(numbers[i]);

//
//}


let animals = ['lion', 'horse', 'cat', 'dog', 'snake', 'bird'];

for (let animal of animals) {
    let newitem = animal.split('');
    newitem[0] = newitem[0].toUpperCase();
    const text = newitem.join('');
    console.log(text);

}



'************Filter *********'


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumber = numbers.filter(function (item) {
    return item % 2 == 0;
}

)
console.log(oddNumber);
for (let i in oddNumber) {
    oddNumber[i] *= 100;
}
console.log(oddNumber);




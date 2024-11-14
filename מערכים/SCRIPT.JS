


//*************Demo4-5******************* */


let flags = ['israel', 'england', 'france', 'spain', 'india', 'USA', 'China'];

const colors = ['red', 'blue', 'yellow', 'black', 'white', 'purple', 'brown'];

console.log(flags);
console.log(colors);
console.log(typeof flags + ' ' + typeof colors);
console.log(flags.length + ' ' + colors.length);

let x = flags[2];
console.log(flags[2]);

let y = colors[3] + ' ' + colors[4] + ' ' + colors[5]
console.log(y);


flags.splice(2, 1, 'Canada')
console.log(flags);

flags.splice(3, 1, 'australlia',)
flags.splice(4, 1, 'Russia',)
flags.splice(5, 1, 'Jordan',)
console.log(flags);

flags.push('Ukraine');
console.log(flags);

flags.splice(4, 1);
console.log(flags);

for (let i = 1; i < flags.length; i++) {
    console.log(flags[i]);

}














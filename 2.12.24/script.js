const car = {

    manafacturer: 'Bmw',
    year: '2020',
    model: 'm3',
    color: 'black',

    drive: () => {
        console.log('drive Know Please');

    },

    changeYear: (year) => {
        car.year = year;
    },

    changeModel: function (model) {
        this.model = model;
    },
}

console.log(car);

console.log(typeof car);
console.log(car.color);
console.log(car['model']);

console.log("-------------------Objects Methods---------------");


car.drive()
car.changeYear(2024)
console.log(car);


car.changeModel('Bmw-m5')
console.log(car.model);


for (let key in car) {
    console.log(key);

}

for (let key in car) {
    console.log(car[key]);

}


for (let obj of Object.values(car)) {
    console.log(obj);

}

console.log(Object.keys(car));
console.log(Object.values(car));
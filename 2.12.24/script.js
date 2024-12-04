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



let user = {
    first: 'firas',
    last: 'Qaissi',
    age: 33,
    weight: 75,
    location: 'jerusalem',
    color: 'blue',
    password: '123456',
    isLogin: true,
    oldPass: 1234,



    changeFullName: function (first, last) {
        this.first = first;
        this.last = last;
    },


    login: function () {
        let username = prompt('UserName Please?');
        let password1 = +prompt('Your Password?');
        if (username === user.first || password1 === user.password) {
            this.isLogin = true, alert('sucsses')
        } else { alert('try again') }

    },

    logout: function () {
        let lgout = prompt('are you want to logout?')
        if (lgout === 'yes') {
            this.isLogin = false;
        }
    },

    changePassword: function () {
        let firstpass = +prompt('Enter Your First Password?');

        if (firstpass === this.password) {
            prompt('enter your newPass Please');

        } else { alert('not good') }
    },

}



console.log(user);
console.log(typeof user);

function say() {
    console.log('hi Helloo ' + user.first + ' ' + user.last);

}
say(user)
console.log(user);

user.changeFullName('david', 'jimmy')
console.log(`${user.first} ${user.last}`);



user.changePassword()


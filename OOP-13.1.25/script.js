


class Person {
    static count = 0
    firstName;
    lastName;
    age;
    email;
    id;

    constructor(firstName, lastName, age, email) {

        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.id = Person.count++
    }

    changeName(newFirst, newLast,) {
        this.firstName = newFirst
        this.lastName = newLast
    }

    static getPersonCount() {
        console.log(`ther are ${Person.count} people`);

    }
}

const moshe = new Person('moshe', 'cohen', 30, 'moshe@emai.com')
const bob = new Person('bob', 'smith', 40, 'bob@email.com')
const alice = new Person('alice', 'wary', 50, 'alice@email.com')
const alice2 = new Person('alice', 'wary', 30, 'alice@email.com')

console.log(alice2);
alice2.changeName('Ruth', 'Levi')

console.log(moshe);
console.log(bob);
console.log(alice);
console.log(alice2);




Person.getPersonCount()



console.log('--------------Excersice----------------------');


class Animals {
    static count = 0;
    static counting = [];

    constructor(kindOf, color, age, location) {

        this.firstName = kindOf
        this.lastName = color
        this.age = age
        this.city = location
        this.id = Animals.count++
        Animals.counting.push(this)
    }




    static toprint() {
        console.log(`there are ${Animals.count} animals in zoo`);

    }


    static getAnim() {
        console.log(...Animals.counting);

    }


}

const dog = new Animals('dog', 'black', 7, 'Tel-Aviv')
const lion = new Animals('lion', 'orange', 12, 'jerusalem')
const zipra = new Animals('zipra', 'red', 3, 'Haifa')
const snake = new Animals('snake', 'white', 2, 'Tel-Aviv')
const asdasd = new Animals('snake', 'white', 2, 'Tel-Aviv')
const snakqweqwee = new Animals('snake', 'white', 2, 'Tel-Aviv')




Animals.toprint()
Animals.getAnim()


console.log('====================================');


class User extends Person {
    password;
    constructor(firstName, lastName, age, email, password) {
        super(firstName, lastName, age, email,);
        this.password = password;

    }
}

const user = new User('User', 'name', 30, 'user@email.com', '1234')

console.log(user);

console.log('--------------------------------');

console.log('--------------------------------');

console.log('--------------------------------');


class StudentsClass {
    static grades = [55, 71, 83, 91, 98]

    constructor(grades) {
        this.grade = grades
    }


    static toPrinting() {
        console.log(this.grades);
        console.log(this.grades.length);
        console.log(...this.grades);
        const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
        console.log(sum);
        const averge = sum / this.grades.length
        console.log(averge);

    }

}

const u2 = new StudentsClass('44')

StudentsClass.toPrinting()

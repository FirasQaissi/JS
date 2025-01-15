
import { yes } from "./index.js";

let newUsersAdded = []

const try1 = () => {


    const email = document.getElementById('email');
    const submit1 = document.getElementById('submit');
    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    const pass = document.getElementById('pass')


    let newUser =
        []


    submit1.addEventListener('click', () => {
        if (email && email.value) {
            newUser.push('Email: ' + email.value)
            console.log('Current array:', newUser);
        } else {
            console.log('Email is empty or invalid');
        }

    });

    submit1.addEventListener('click', () => {
        if (fname && fname.value) {
            newUser.push('First: ' + fname.value)
                ;
        }
    })


    submit1.addEventListener('click', () => {
        if (lname && lname.value) {
            newUser.push('Last: ' + lname.value)
                ;
        }
    })


    submit1.addEventListener('click', () => {
        if (pass && pass.value) {
            newUser.push('password: ' + pass.value)
                ;
        }

        const div2 = document.getElementById('added')
        const h2 = document.createElement('h2')
        h2.innerText = `congratulations,  ${newUser[0]}  Added Sucssesfull`
        h2.style.fontFamily = 'cruze'
        h2.style.color = 'green'
        div2.appendChild(document.createElement("br"));
        div2.appendChild(document.createElement("br"));
        div2.appendChild(h2)

        const btn = document.createElement('button')
        btn.style.color = 'blue'
        btn.innerText = 'login'
        div2.appendChild(btn)


        btn.addEventListener('click', () => {
            const a = document.createElement('a')
            a.href = 'index.html';
            a.click();
        })
        console.log(newUser);
    })


    const newUsersAdded = [...newUser]
    return newUsersAdded

}
try1()




const person = {
    userName: 'firas',
    email: 'firas@gmail.com',
    password: '1234',
    newUsersName: ''
}

let newUsers = [];

const getFlagData = async (country) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (!response.ok) throw new Error('Country not found');
        const data = await response.json();
        return data[0].flags.png; // כתובת התמונה של דגל המדינה
    } catch (error) {
        console.error(error.message);
        return null;
    }

};


window.yes = yes



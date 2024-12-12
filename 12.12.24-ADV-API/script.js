



const load = () => {
    const storageName = localStorage.getItem("name");
    const title = document.getElementById('title');

    const storageColorsHtml = localStorage.getItem("colors");
    const list = document.getElementById('list');
    list.innerHTML = storageColorsHtml || "";

    title.innerHTML = "Hello " + (storageName || "Guest");
}

window.onload = load;

const save = () => {
    const name = document.getElementById('name');
    const title = document.getElementById('title');

    title.innerHTML = "Hello " + name.value;
    localStorage.setItem("name", name.value);
}

const pickColor = () => {
    const color = document.getElementById('colors').value;
    const colorLi = document.createElement('li');
    colorLi.innerText = color;
    colorLi.style.color = color;

    const list = document.getElementById('list');
    const colorsArr = list.getElementsByTagName('li');

    for (let i = 0; i < colorsArr.length; i++) {
        if (colorsArr[i].innerText === color) {
            alert("Color already exists");
            return;
        }
    }

    list.appendChild(colorLi);
    localStorage.setItem("colors", list.innerHTML);
}

const people = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Jane",
        age: 30
    },
    {
        name: "Jim",
        age: 35
    }
];


const jsonString = JSON.stringify(people);
console.log(jsonString);


localStorage.setItem("people", jsonString);


const data = localStorage.getItem('people');
const parsed = JSON.parse(data);

parsed.push({ name: 'jack', age: 40 });
console.log(parsed);




const animals = ['dog', 'cat', 'lion', 'tiger', 'bird', 'snake', 'fish'];

const Json = JSON.stringify(animals);
localStorage.setItem('Animals ', Json);

const animalFromStorage = localStorage.getItem('animals');
const parseAnimals = JSON.parse(animalFromStorage);
parseAnimals.pop();

localStorage.setItem('new-animals', JSON.stringify(parseAnimals));




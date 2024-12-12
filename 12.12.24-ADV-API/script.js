
const animals = ['dog', 'cat', 'lion', 'tiger', 'bird', 'snake', 'fish'];

const jsonToStorage = JSON.stringify(animals)
const getlocal = localStorage.setItem('animals ', jsonToStorage)


const animalFromStorage = localStorage.getItem(animals)
const parseAnimals = JSON.parse(animalFromStorage)
animals.pop()

const animalstringfy1 = JSON.stringify(parseAnimals)
localStorage.setItem('NewAnimals', animals)


console.log(animals);

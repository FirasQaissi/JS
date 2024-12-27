const myPromis = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 100)

    if (randomNum % 2 === 0) {
        resolve(randomNum)
    } else {
        reject(randomNum + ' is not even')
    }
})

console.log(myPromis);

myPromis.then((value) => {
    console.log('success , promise resolved');
    console.log(value);

}).catch((value) => {
    console.log(value);

}).finally(() => {
    console.log('promise is settled');

})


const getPokemons = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0', false);
    request.send();
    if (request.status === 200) {
        return JSON.parse(request.response);
    } else {
        return 'Error';
    }
}

const myPromise = new Promise((resolve, reject) => {
    const pokemons = getPokemons();
    if (pokemons !== 'Error') {
        resolve(pokemons);
    } else {
        reject('Error');
    }
}).then((pokemons) => {
    console.log(pokemons);
}).catch((error) => {
    console.log(error.message);
}).finally(() => {
    console.log('Promise finished');
});


console.log('-----------------------------');

const mymypromise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')

    request.onload = () => {
        if (request.status === 200) {
            resolve(JSON.parse(request.response))

        } else {
            reject(new Error('Error'))
        }
    }
    request.send()
})
mymypromise.then((pok) => {
    console.log(pok);
    console.log('Promise');
    

}).catch((error) => {
    console.log(error.message);
    console.log('Promise Finished');


})
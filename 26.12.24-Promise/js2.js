

const getData = (country) => {
    const request = new XMLHttpRequest();
    console.log(request);
    const userEnter = prompt('enter the country')
    request.open('GET', `https://restcountries.com/v3.1/name/${userEnter}`, false)
    request.send()

    if (request.status === 200) {
        return JSON.parse(request.response);
    } else {
        return 'country not found'
    }
}


const testCountry = (country) => {
    const data = getData(country)
    console.log(data);

}



const mySecondPromise = new Promise((resolve, reject) => {
    const testing = testCountry()
    if (testing !== 'Error') {
        resolve(testing)
    } else { reject('BAD') }
}).then((testing) => {
    console.log(testing);
}).catch((error) => {
    console.log(error.message);

}).finally(() => {
    console.log('Succses!!!!!');
})

function getFlag() {

    

    const secondLabel = document.createElement('')
    secondLabel.innerHTML = ''
    inputs.appendChild(secondLabel)
    document.body.appendChild(main)


    element1.style.backgroundColor = 'black'
    element1.style.width = '50%'
    element1.style.height = '50%'
    element1.style.border = '1px solid white'
}
getFlag()
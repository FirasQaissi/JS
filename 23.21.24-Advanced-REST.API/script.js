const fn1 = () => {
    setTimeout(() => {
        console.log('Function 1');

    }, 100)
}

const fn2 = () => {
    setTimeout(() => {
        console.log('Function 2');

    },)
}



console.log('********XMLHttpRequest**********');


const getData = () => {
    const req = new XMLHttpRequest()


    req.onload = () => {
        console.log(req.response);
        console.log(JSON.parse(req.response));
        console.log(req.status);


    };
    req.open('GET', 'https://pokeapi.co/api/v2/pokemon/squirtle')
    req.send();
}






const test = (flag) => {

    const request = new XMLHttpRequest()
    try {
        request.open('GET', 'https://restcountries.com/v3.1/name/' + flag, false);
        request.send();

        if (request.status === 200) {
            return JSON.parse(request.response);
        } else {
            return 'Country Not found';
        }
    } catch (error) {
        console.log(error.message);

    }
}
const printCountryData = (flag) => {
    const data = test(flag)

    const img = document.getElementById('loading')
    img.src = data[0].flags.png

}

const print2 = (flag) => {
    const data2 = test(flag)
    const img2 = document.getElementById('loading2')
    img2.src = data2[0].flags.png
}

const print3 = (flag) => {
    const data3 = test(flag)
    const img3 = document.getElementById('loading3')
    img3.src = data3[0].flags.png

}




printCountryData('france')
print2('iran')
print3()










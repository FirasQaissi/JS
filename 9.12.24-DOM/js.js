const styleElemnt = (elemnet) => {

    elemnet.style.bacgroundColor = 'brown';
    elemnet.style.color = 'blue';
    elemnet.style.fontSize = '50px';
    elemnet.style.border = '1px solid black';
    elemnet.style.boxShadow = '0 0 15px';
    elemnet.style.margin = 'Auto';
    elemnet.style.textAlign = 'Center';



}

const text = document.getElementById('box');




const emptyDiv = document.createElement('div');

const h2 = document.createElement('h2')
h2.innerHTML = 'Hello There We Are H2'


emptyDiv.appendChild(h2);
document.body.appendChild(emptyDiv)

const styling = () => {

    const emptyDiv = document.createElement('div');

    emptyDiv.style.width = '100px';
    emptyDiv.style.height = '100px';
    emptyDiv.style.backgroundColor = 'blue';
    emptyDiv.style.fontSize = 'larger';

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Hola'
    emptyDiv.appendChild(h2);
    document.body.appendChild(emptyDiv)

}
styling()


const first = () => {

    const onediv = document.createElement('a')
    onediv.style.width = '100px'
    onediv.style.height = 'Auto'
    onediv.style.backgroundColor = 'silver'
    onediv.href = 'https://www.google.com'
    onediv.target = 'blank'
    onediv.innerHTML = 'Qaissi'
    document.body.appendChild(onediv)

}


const removeNow = () => {
    const box1 = document.getElementById('box1');
    document.body.removeChild(box1);
}


const removeItemsFromList = () => {


    const list = document.getElementById('list');
    const listItems = list.querySelectorAll('li')
    console.log(listItems);


    listItems.forEach((item) => {
        if (item.innerText === 'yes') {
            item.style.backgroundColor = 'Green'
        } else if (item.innerText === 'no') {
            item.style.backgroundColor = 'red'
        } else {
            item.remove();
        }

    })
}

const cssRemove = document.querySelector('link')
document.head.removeChild(cssRemove);

const circle = document.querySelector('.circle')

circle.addEventListener('click', (event) => {

    circle.style.Color = 'black'

})
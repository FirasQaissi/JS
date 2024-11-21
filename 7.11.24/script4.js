
function teva() {




    let uName = prompt(' Hello I am Android , What is your name?');
    let q1 = +prompt('I have a question ' + uName + 'how many people you are ? ')

    let price = 0;

    switch (q1) {
        case 1: case 2:
            alert('Room M')
            break;
        case 3: case 4: case 5:
            alert('Room L')
            break;
        case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
            alert('Room XL')
            break;
        default:
            alert('thank you');
    }

    let nights = prompt('how many night you will stay with us?');

}

teva()
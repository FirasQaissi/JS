




function test() {

    let option1 = 200;
    let option2 = 300;


    let uName = prompt(' Hello I am Android , What is your name?');
    let q1 = prompt('I have a question ' + uName + ' Are you Coming alone? (yes/no/')

    if (q1 === 'no') {
        let hMany = +prompt('how many guests you are?');
    } else if (q1 === 'yes')


        alert(' i have two option for you: 1- for couples the price is 200$ for each - Option2 - Sweeti Couples is 300$ for each')

    let whichoption = prompt('which option do you prefer ' + uName);
    let nights = +prompt('number of nights ? ' + 'Mr ' + uName);
    let askbreak = prompt('The Cost For Our Breakfast Is Just 30 Shekels, Do you Want ? Y/N');

    let breakfast = 30 * nights;
    let total1 = nights * option1 + breakfast;
    let total2 = nights * option2 + breakfast;


    if (whichoption === '2') {
        alert('until now for ' + nights + 'Nights  for ' + ' Guests  for Option number ' + whichoption + ' the cost is ' + total1);

    }
    else if (whichoption === '1') {
        alert(option1 * nights);

    }
}
test()




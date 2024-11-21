const a = [55, 92, 78, 99, 88];
function oki() {

    const faild = [];
    const mideum = [];
    const excelent = [];

    for (let one of a) {
        if (one >= 90) {
            excelent.push(one);
        } else if (one <= 90 && one >= 70) {
            mideum.push(one);
        }
        else { faild.push(one) }
    } console.log(faild); console.log(mideum); console.log(excelent);


}


oki()


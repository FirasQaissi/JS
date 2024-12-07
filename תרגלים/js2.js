
function calc() {
    let correctAnswers = 0
    document.querySelector('.first').innerHTML = `
        <h1>משחק של 2025</h1>
        <div id = "part2"> </div>
        <p>if you get 10 from 10 you can get 150$</p>
        <p id="corecct" ></p>
     `
    let userQuestion = 0

    plusMin()

    function plusMin() {

        if (userQuestion < 2) {
            let num1 = Math.floor(Math.random() * 10)
            let num2 = Math.floor(Math.random() * 10)
            const operatorss = ['+', '-', '*', '/'];
            let randomOper = Math.floor(Math.random() * operatorss.length);
            let oper = operatorss[randomOper]
            let corecctResults

            if (oper === '+') {
                corecctResults = num1 + num2;
            } else if (oper === '-') {
                corecctResults = num1 - num2;
            } else if (oper === '*') {
                corecctResults = num1 * num2;
            } else if (oper === '/') {
                corecctResults = num1 / num2;
            }

            document.getElementById("part2").innerHTML = `
                <div class="question">
                <h2>שאלה ${userQuestion + 1}  מתוך 10 </h2>
               <p> ${num1}  ${oper} ${num2} </p>
                 <input type="number" id = "answerInput">
                 <button onclick= 'check( ${corecctResults})' >בדוק תשובה</button></div>
            `


        } else {

            document.querySelector('#corecct').innerHTML = `
            ${correctAnswers} ענית נכון על

            `

        }



        window.check = function (corecctResults) {
            let userAnswer = parseInt(document.getElementById('answerInput').value);
            if (userAnswer === corecctResults) {
                correctAnswers++;
            }
            userQuestion++;
            plusMin();

        }

    }

}

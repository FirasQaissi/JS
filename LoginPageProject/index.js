


const person = {
    userName: 'firas',
    email: 'firas@gmail.com',
    password: '1234',
    newUsersName: ''
}

let newUsers = [];

const getFlagData = async (country) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (!response.ok) throw new Error('Country not found');
        const data = await response.json();
        return data[0].flags.png; // כתובת התמונה של דגל המדינה
    } catch (error) {
        console.error(error.message);
        return null;
    }

};
function yes() {
    enterUsername = document.getElementById('username').value
    enterpass = document.getElementById('pass').value
    if (enterUsername === person.userName && enterpass === person.password) {
        inputs.appendChild(document.createElement("br"));
        document.getElementById('changeName')
        const changeNameLabel = document.createElement('label')
        changeNameLabel.innerHTML = 'Enter New Username Please'
        inputs.appendChild(changeNameLabel)
        document.body.appendChild(UserBox)
        changeNameLabel.style.color = 'green'

        document.getElementById('changeName')
        const brr = document.createElement('br')
        brr.innerHTML = ''
        inputs.appendChild(brr)
        document.body.appendChild(UserBox)

        document.getElementById('changeName')
        const brr2 = document.createElement('br')

        inputs.appendChild(brr2)
        document.body.appendChild(UserBox)

        document.getElementById('changeName')
        const changeNameInput = document.createElement('input')
        changeNameInput.innerHTML = ''
        inputs.appendChild(changeNameInput)
        document.body.appendChild(UserBox)

        document.getElementById('changeName')
        const brr3 = document.createElement('br')
        brr3.innerHTML = ''
        inputs.appendChild(brr3)
        document.body.appendChild(UserBox)

        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.style.cursor = "pointer";
        inputs.appendChild(document.createElement("br"));
        inputs.appendChild(submitButton);

        submitButton.addEventListener('click', () => {
            const newUserNames = changeNameInput.value
            if (newUserNames) {
                newUsers.push(newUserNames)

                console.log("Updated users:", newUsers);

                document.getElementById('changeName')
                const newSave = document.createElement('h2')

                newSave.innerHTML = `New Username is:( ${newUserNames} ) added successfully !!`

                inputs.appendChild(newSave)
                document.body.appendChild(UserBox)
                newSave.style.color = 'green'

                const newFlagInput = document.createElement('input');
                newFlagInput.placeholder = "Enter your favorite country";
                inputs.appendChild(document.createElement('br'));
                inputs.appendChild(newFlagInput);

                const submitButtonFlag = document.createElement("button");
                submitButtonFlag.textContent = "Submit Country";
                submitButtonFlag.style.cursor = "pointer";
                inputs.appendChild(document.createElement('br'));
                inputs.appendChild(submitButtonFlag);
                inputs.appendChild(document.createElement("br"));

                submitButtonFlag.addEventListener('click', async () => {
                    const countryName = newFlagInput.value;
                    if (countryName) {
                        const flagUrl = await getFlagData(countryName);
                        if (flagUrl) {
                            const flagImg = document.createElement('img');
                            flagImg.src = flagUrl;
                            flagImg.alt = `Flag of ${countryName}`;
                            flagImg.style.width = '150px';
                            flagImg.style.height = 'auto';
                            inputs.appendChild(document.createElement('br'));
                            inputs.appendChild(flagImg);
                        } else {
                            alert("Country not found. Please try again.");
                        }
                    } else {
                        alert("Please enter a valid country name.");
                    }
                });
            } else {
                alert("Please enter a valid username.");
            }
        });


    } else {
        setTimeout((ok) => {
            document.getElementById('wrong')
            const wrongInputs = document.createElement('h3')
            wrongInputs.innerHTML = 'Wrong Username or password, try Again'
            inputs.appendChild(wrongInputs)
            document.body.appendChild(UserBox)
            wrongInputs.style.color = 'red'
        },)

    }


}

export{yes}









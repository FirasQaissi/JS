const username = document.getElementById('username');
const usernameHelper = document.getElementById('username-helper');
const email = document.getElementById('email');
const emailHelper = document.getElementById('email-helper');
const password = document.getElementById('password');
const passwordHelper = document.getElementById('password-helper');

username.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length < 3) {
        usernameHelper.innerText = 'Username must be at least 3 characters long';
        if (!username.classList.contains('error')) {
            username.classList.add('error');
        }
    } else {
        usernameHelper.innerText = '';
        username.classList.remove('error');
    }
});

email.addEventListener('input', (e) => {
    const value = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(value)) {
        emailHelper.innerText = 'Email must be a valid email address';
        if (!email.classList.contains('error')) {
            email.classList.add('error');
        }
    } else {
        emailHelper.innerText = '';
        email.classList.remove('error');
    }


});


password.addEventListener('input', (e) => {
    const value = e.target.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

    if (!passwordRegex.test(value)) {
        passwordHelper.innerText = 'password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character';
        if (!password.classList.contains('error')) {
            password.classList.add('error');
        }
    } else {
        passwordHelper.innerText = '';
        password.classList.remove('error');
    }
});
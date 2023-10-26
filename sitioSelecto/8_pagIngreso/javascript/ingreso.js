const loginForm = document.querySelector('#loginForm');
let isValid = false;
let isLogged = false;

document.addEventListener('DOMContentLoaded', function () {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        isValid = validarForm(email, password);
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (isValid) {
            const validUser = users.find(user => user.email === email && user.password === password);
            if (!validUser) {
                return alert('Usuario y/o contraseña son incorrectos o no existen');
            }
            alert(`Bienvenido ${validUser.name}`);
            isLogged = true;
            localStorage.setItem('logged', JSON.stringify(isLogged));
            localStorage.setItem('userLogged', JSON.stringify(validUser.name));
            window.location.href = '/index.html';
        } else {
            alert('Datos inválidos');
        }

    });
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    emailInput.addEventListener('input', function () {
        const errorElement = document.getElementById('errorEmail');
        const correctElement = document.getElementById('correctEmail');
        const emailValue = emailInput.value;
        if (!validarEmail(emailValue)) {
            errorElement.style.visibility = 'visible';
            correctElement.style.visibility = 'hidden';
        } else {
            errorElement.style.visibility = 'hidden';
            correctElement.style.visibility = 'visible';
        }
    });

    passwordInput.addEventListener('input', function () {
        const errorElement = document.getElementById('errorPassword');
        const correctElement = document.getElementById('correctPassword');
        const passwordValue = passwordInput.value;
        if (!validarContrasena(passwordValue)) {
            errorElement.style.visibility = 'visible';
            correctElement.style.visibility = 'hidden';
        } else {
            errorElement.style.visibility = 'hidden';
            correctElement.style.visibility = 'visible';
        }
    });
});

function validarContrasena(contrasena) {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,12}$/;
    return regExp.test(contrasena);
}

function validarEmail(email) {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
}

function validarForm(email, password) {
    const isValidPassword = validarContrasena(password);
    const isValidEmail = validarEmail(email);
    return isValidPassword && isValidEmail;
}
const signupForm = document.querySelector('#signupForm');
let isValid = false;

document.addEventListener('DOMContentLoaded', function(){
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const password = document.querySelector('#password').value;

        isValid = validarForm(name, phone, password);

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if(isValid){
            
            const isUserRegistered = users.find(user => user.email === email);

            if(isUserRegistered){
                return alert('El usuario ya está registrado!');
            } else {

            users.push({name: name, email: email, phone: phone, password: password});

            localStorage.setItem('users', JSON.stringify(users));

            alert('Registro Exitoso!');

            window.location.href = '../8_pagIngreso/ingreso.html';
            }

        }else{
            alert('Datos inválidos');
        }
    });

    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');

    nameInput.addEventListener('input', function() {
        const nameValue = nameInput.value;
        const errorElement = document.getElementById('errorName');
        const correctElement = document.getElementById('correctName');
        if (!validarNombreUsuario(nameValue)) {
            errorElement.style.visibility = 'visible';
            correctElement.style.visibility = 'hidden';
        } else{
            errorElement.style.visibility = 'hidden';
            correctElement.style.visibility = 'visible';
        }
    });

    phoneInput.addEventListener('input', function() {
        const errorElement = document.getElementById('errorNumber');
        const correctElement = document.getElementById('correctNumber');
        const phoneValue = phoneInput.value;
        if (!validarCampoNumerico(phoneValue)) {
            errorElement.style.visibility = 'visible';
            correctElement.style.visibility = 'hidden';
        }else{
            errorElement.style.visibility = 'hidden';
            correctElement.style.visibility = 'visible';
        }
    });

    emailInput.addEventListener('input', function() {
        const errorElement = document.getElementById('errorEmail');
        const correctElement = document.getElementById('correctEmail');
        const emailValue = emailInput.value;
        if (!validarEmail(emailValue)) {
            errorElement.style.visibility = 'visible';
            correctElement.style.visibility = 'hidden';
        } else{
            errorElement.style.visibility = 'hidden';
            correctElement.style.visibility = 'visible';
        }
    });

});

// Funciones
function validarContrasena(contrasena) {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,12}$/;
    return regExp.test(contrasena);
}

function validarNombreUsuario(nombreUsuario) {
    if (nombreUsuario.length < 10 || nombreUsuario.length > 50) {
        return false;
    }
    const validUsername = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    return validUsername.test(nombreUsuario);
}

function validarEmail(email) {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
}

function validarCampoNumerico(phone) {
    const regexNumeros = /^[0-9]+$/;
    if (!regexNumeros.test(phone)) {
        return false;
    }
    if (phone.length !== 10) {
        return false;
    }
    return true; 
}

function validarForm(name, phone, password) {
    const isValidPassword = validarContrasena(password);
    const isValidName = validarNombreUsuario(name);
    const isValidNumber = validarCampoNumerico(phone);

    return isValidPassword && isValidName && isValidNumber;
}

function mostrarErrorEmail() {
    const errorElement = document.getElementById('errorEmail');
    errorElement.style.visibility = 'visible'
    errorElement.style.color = 'darkred';
}

function validarContrasenaInput(contrasena) {
    const requirements = [];
    const passwordRequirements = document.getElementById('passwordRequirements');

    if (contrasena.length < 6 || contrasena.length > 12) {
        requirements.push("Debe tener entre 6 y 12 caracteres.");
    }

    if (!/(?=.*\d)/.test(contrasena)) {
        requirements.push("Debe contener al menos un número.");
    }

    if (!/(?=.*[a-z])/.test(contrasena)) {
        requirements.push("Debe contener al menos una letra minúscula.");
    }

    if (!/(?=.*[A-Z])/.test(contrasena)) {
        requirements.push("Debe contener al menos una letra mayúscula.");
    }

    if (!/(?=.*[!@#$%^&*])/.test(contrasena)) {
        requirements.push("Debe contener al menos un carácter especial.");
    }

    if (requirements.length > 0) {
        const errorElement = document.getElementById('errorPassword');
        const correctElement = document.getElementById('correctPassword');
        passwordRequirements.style.visibility = 'visible'
        errorElement.style.visibility = 'visible';
        correctElement.style.visibility = 'hidden';
        passwordRequirements.innerHTML = '<ul><li>' + requirements.join('</li><li>') + '</li></ul>';
    } else {
        const errorElement = document.getElementById('errorPassword');
        const correctElement = document.getElementById('correctPassword');
        errorElement.style.visibility = 'hidden';
        correctElement.style.visibility = 'visible';
        passwordRequirements.style.visibility = 'hidden'
    }
}
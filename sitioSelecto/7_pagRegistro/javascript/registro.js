const signupForm = document.querySelector('#signupForm');
let isValid = false;
let isRegistered = false;

document.addEventListener('DOMContentLoaded', function(){
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const password = document.querySelector('#password').value;

        isValid = validarForm(name, phone, password);
        console.log(isValid);

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if(isValid){
            
            const isUserRegistered = users.find(user => user.email === email);

            if(isUserRegistered){
                return alert('El usuario ya está registrado!');
            } else {

            users.push({name: name, email: email, phone: phone, password: password});
            isRegistered = true;

            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('isRegistered', JSON.stringify(isRegistered));
            alert('Registro Exitoso!');

            window.location.href = '../8_pagIngreso/ingreso.html';
            }

        }else{
            alert('Contraseña inválida');
        }
    });

    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');

    nameInput.addEventListener('input', function() {
        const nameValue = nameInput.value;
        if (validarNombreUsuario(nameValue)) {
            mostrarErrorNombre('nombre correcto', 'green');
        } else {
            mostrarErrorNombre('nombre erróneo', 'red');
        }
    });

    phoneInput.addEventListener('input', function() {
        const phoneValue = phoneInput.value;
        if (validarCampoNumerico(phoneValue)) {
            mostrarErrorNumero('número correcto', 'green');
        } else {
            mostrarErrorNumero('número erróneo', 'red');
        }
    });

    emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value;
        if (validarEmail(emailValue)) {
            mostrarErrorEmail('correo electrónico correcto', 'green');
        } else {
            mostrarErrorEmail('correo electrónico erróneo', 'red');
        }
    });

});

// Funciones
function validarContrasena(contrasena) {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,12}$/;
    return regExp.test(contrasena);
}

function validarNombreUsuario(nombreUsuario) {
    if (nombreUsuario.length < 4 || nombreUsuario.length > 50) {
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

function mostrarErrorNombre(message, color) {
    const errorElement = document.getElementById('errorName');
    errorElement.textContent = message;
    errorElement.style.color = color;
}

function mostrarErrorNumero(message, color) {
    const errorElement = document.getElementById('errorNumber');
    errorElement.textContent = message;
    errorElement.style.color = color;
}

function mostrarErrorEmail(message, color) {
    const errorElement = document.getElementById('errorEmail');
    errorElement.textContent = message;
    errorElement.style.color = color;
}

function validarContrasenaInput(contrasena) {
    const requirements = [];
    const passwordRequirements = document.getElementById('passwordRequirements');

    if (contrasena.length < 6 || contrasena.length > 12) {
        requirements.push("La contraseña debe tener entre 6 y 12 caracteres.");
    }

    if (!/(?=.*\d)/.test(contrasena)) {
        requirements.push("La contraseña debe contener al menos un número.");
    }

    if (!/(?=.*[a-z])/.test(contrasena)) {
        requirements.push("La contraseña debe contener al menos una letra minúscula.");
    }

    if (!/(?=.*[A-Z])/.test(contrasena)) {
        requirements.push("La contraseña debe contener al menos una letra mayúscula.");
    }

    if (!/(?=.*[!@#$%^&*])/.test(contrasena)) {
        requirements.push("La contraseña debe contener al menos un carácter especial.");
    }

    if (requirements.length > 0) {
        passwordRequirements.style.color = 'red';
        passwordRequirements.textContent = requirements.join(' ,');
    } else {
        passwordRequirements.style.color = 'green';
        passwordRequirements.textContent = 'Contraseña válida';
    }
}
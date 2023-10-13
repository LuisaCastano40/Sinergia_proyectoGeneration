const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.email === email && user.password === password);

    if(!validUser){
        return alert ('Usuario y/o contraseña son incorrectos o no existen');
    }

    alert(`Bienvenido ${validUser.name}`);

    window.location.href = '/1_pagInicio/index.html';

});
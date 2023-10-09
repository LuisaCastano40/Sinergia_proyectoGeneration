const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const password = document.querySelector('#password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const isUserRegistered = users.find(user => user.email === email);

    if(isUserRegistered){
        return alert('El usuario ya está registrado!');
    }

    users.push({name:name, email:email,phone:phone , password:password});
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro Exitoso!');

    window.location.href = '#'

});

window.addEventListener('load', function(){
    //Traigo los elementos del HTML
    const shoppingBag = document.getElementById('shoppingBag');
    const closeBag = document.getElementById('close');
    
    //Eventos
    shoppingBag.addEventListener('click', abrirCarrito);
    closeBag.addEventListener('click', cerrarCarrito);
});

// Funciones
function abrirCarrito(){
    const visible = document.querySelector('.activeCart');
    const carrito = document.querySelector('.carro_comprar');

    if (window.innerWidth <= 768) {
            visible.style.visibility = 'visible'
            carrito.style.width = '100%';
    } else
    {
        visible.style.visibility = 'visible'
        carrito.style.width = '40%';
    }
}
function cerrarCarrito(){
    const visible = document.querySelector('.activeCart');
    const carrito = document.querySelector('.carro_comprar');
    visible.style.visibility = 'hidden'
    carrito.style.width = '0%';
}


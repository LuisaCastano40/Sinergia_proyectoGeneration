
window.addEventListener('load', function(){
    //Traigo los elementos del HTML
    const shoppingBag = document.getElementById('shoppingBag');
    const closeBag = document.getElementById('close');
    const btnVaciar = document.getElementById('btn-vaciar');
    
    //Eventos
    shoppingBag.addEventListener('click', function(){
        abrirCarrito();
        productosCart();
    });
    closeBag.addEventListener('click', cerrarCarrito);
    btnVaciar.addEventListener('click',borrarCarrito);
});


// Funciones
function abrirCarrito(){
    const visible = document.querySelector('.activeCart');
    const carrito = document.querySelector('.carro_comprar');
    visible.style.visibility = 'visible'
    carrito.style.width = '40%';
    productosCart();
}
function cerrarCarrito(){
    const visible = document.querySelector('.activeCart');
    const carrito = document.querySelector('.carro_comprar');
    visible.style.visibility = 'hidden'
    carrito.style.width = '0%';
}
function borrarCarrito(){
    const productsCart = document.getElementById('container-cartProd');
    productsCart.innerHTML = '';
    // carritoProducts = [];
    // calcularYMostrarTotal();
}
function productosCart(){
    const productsCart = document.getElementById('container-cartProd');
    productsCart.innerHTML = `
            <article class="cartProductos" data-id="">
                <div class="producto">
                    <div class="cart-image">
                        <img src="/1_pagInicio/assetsInicio/images/img1-galleria.svg" alt="producto-selecto">
                    </div>
                    <div class="cart-infoProducto">
                        <h3>Nombre Producto</h3>
                        <h4>$ precio</h4>
                    </div>
                </div>
                <div class="accionesProducto">
                    <i class='bx bx-plus-circle'></i>
                    <span>1</span>
                    <i class='bx bx-minus-circle'></i>
                    <i class='bx bxs-trash'></i>
                </div>
            </article>`;
}
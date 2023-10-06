//Vamos a exportar el arreglo de datos
export const productosSelecto = [];

function Producto(id, categoria, imagen, nombre, precio, stock, descripcion) {

    this.id = id;
    this.categoria = categoria;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
}

//Creamos los productos
for (let i = 0; i < 20; i++) {

    const producto = new Producto(
        i,
        "ceras",
        "/4_pagServicios/assets/producto1.svg",
        "Cera Red One",
        "48.000",
        20,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem aliquid hic cupiditate atque doloremque veniam at, quia."
    );

    productosSelecto.push(producto);
}

console.log(productosSelecto)
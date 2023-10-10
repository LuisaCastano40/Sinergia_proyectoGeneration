
const boton = document.querySelector('#subir')
const datos = document.querySelector('#formularioProducto');

datos.addEventListener('submit', (e) => {
    e.preventDefault()

   const imagen = document.querySelector('#imagenProducto').value;
    const nombreProducto = document.querySelector('#nombreProducto').value;
    const subtituloProducto = document.querySelector('#subtituloProducto').value;
    const etiquetaProducto = document.querySelector('#etiquetaProducto').value;
    const descripcionProducto = document.querySelector('#descripcionProducto').value;
    const precioProducto = document.querySelector('#precioProducto').value;
    const descuentoProducto = document.querySelector('#descuentoProducto').value;
    const cantidadProducto = document.querySelector('#cantidadProducto').value;
    const categoriaProducto = document.querySelector('#categoriaProducto').value;

    
    let datosRecibidos = JSON.parse(localStorage.getItem('datosRecibidos')) || [];

    datosRecibidos.push({
        imagen: imagen,
        nombreProducto: nombreProducto,
        subtituloProducto: subtituloProducto,
        etiquetaProducto: etiquetaProducto,
        descripcionProducto: descripcionProducto,
        precioProducto: precioProducto,
        descuentoProducto: descuentoProducto,
        cantidadProducto,
        categoriaProducto
    });

    localStorage.setItem('datosRecibidos', JSON.stringify(datosRecibidos));

    alert('!Producto agregado con exito!')

    window.location.href = "/prueba.html";
});





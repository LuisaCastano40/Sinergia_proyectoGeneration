export const serviciosSelecto = [];

function Servicio (id, imagen, nombre, precio, categoria, descripcion) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.descripcion = descripcion;
}

for (let i = 0; i < 20; i++) {

    const servicio = new Servicio(
        i,
        "/formularioIngresoProducto/assests/servicio1.svg",
        "Corte",
        "50.000",
        "Cabello",
        "Corte de cabello a gusto del cliente"

    );
    serviciosSelecto.push(servicio);
}

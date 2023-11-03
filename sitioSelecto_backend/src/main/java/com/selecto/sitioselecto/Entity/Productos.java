package com.selecto.sitioselecto.Entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
//Inyectaremos esta dependencia para especificar que trabajaremos en una clase entidad
//Inyectaremos esta dependencia para especificar el nombre de la tabla en BD
@Table(name = "productos")

public class Productos {

    //Especificamos nuestra PK
    @Id
    // Especificamos que se autoIncremente el ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Selecionaremos las columnas de la tabla, para asignar el valor que debe recibir.
    @Column(name = "ID_Producto")
    private int id;

    @Column(name = "Nombre_de_producto")
    private String nombre;

    @Column(name = "Imagen_url")
    private String imagenUrl;

    @Column(name = "Descripcion")
    private String descripcion;

    @Column(name = "Categoria")
    private String categoria;

    @Column(name = "Etiqueta")
    private String etiqueta;

    @Column(name = "Precio")
    private int precio;

    @Column(name = "Cantidad")
    private int cantidad;

    @Column(name = "Proveedor")
    private String proveedor;

    @Column(name = "Descuento")
    private double descuento;

    @Column(name = "Fecha_de_adicion")
    private Date fechaAdicion;
}

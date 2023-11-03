package com.selecto.sitioselecto.Entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
//Inyectaremos esta dependencia para especificar que trabajaremos en una clase entidad
//Inyectaremos esta dependencia para especificar el nombre de la tabla en BD
@Table(name = "barberos")

public class Barberos {
    //Especificamos nuestra PK
    @Id
    // Especificamos que se autoIncremente el ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Selecionaremos las columnas de la tabla, para asignar el valor que debe recibir.
    @Column(name = "ID_Barbero")
    private int id;

    @Column(name = "Nombre")
    private String nombre;

    @Column(name = "Apellido")
    private String apellido;

    @Column(name = "Fecha_Nacimiento")
    private Date fechaNacimiento;

    @Column(name = "Genero")
    private String genero;

    @Column(name = "Celular")
    private String celular;

    @Column(name = "Direccion")
    private String direccion;

    @Column(name = "Correo")
    private String correo;

    @Column(name = "Fecha_Contratacion")
    private Date fechaContratacion;

    @Column(name = "Cantidad_Productos_Vendidos")
    private int cantidadProductosVendidos;

    @Column(name = "Prestamos")
    private double prestamos;

    @Column(name = "salario")
    private double salario;

}

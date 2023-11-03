package com.selecto.sitioselecto.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
//Inyectaremos esta dependencia para especificar que trabajaremos en una clase entidad
//Inyectaremos esta dependencia para especificar el nombre de la tabla en BD
@Table(name = "clientes")

public class Clientes {

    //Especificamos nuestra PK
    @Id
    // Especificamos que se autoIncremente el ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Selecionaremos las columnas de la tabla, para asignar el valor que debe recibir.
    @Column(name = "ID_Cliente")
    private int id;

    @Column(name = "Nombre")
    private String nombre;

    @Column(name = "Apellido")
    private String apellido;

    @Column(name = "Celular")
    private String celular;

    @Column(name = "Correo")
    private String correo;

    @Column(name = "Como_conocio")
    private String como_conocio;
}

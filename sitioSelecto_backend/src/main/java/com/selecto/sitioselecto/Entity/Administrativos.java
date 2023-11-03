package com.selecto.sitioselecto.Entity;

//Importaciones
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
//Inyectaremos esta dependencia para especificar que trabajaremos en una clase entidad
//Inyectaremos esta dependencia para especificar el nombre de la tabla en BD
@Table(name = "administrativos")

public class Administrativos {

    //Especificamos nuestra PK
    @Id
    // Especificamos que se autoIncremente el ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Selecionaremos las columnas de la tabla, para asignar el valor que debe recibir.
    @Column(name = "ID_Administrativos")
    private int id;

    @Column(name = "Nombre")
    private String nombre;

    @Column(name = "Correo")
    private String correo;

    @Column(name = "Contraseña")
    private String contrasena;

    @Column(name = "Cargo")
    private String cargo;

}

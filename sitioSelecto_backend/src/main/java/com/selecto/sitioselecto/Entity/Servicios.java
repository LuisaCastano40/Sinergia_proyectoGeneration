package com.selecto.sitioselecto.Entity;


import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
//Inyectaremos esta dependencia para especificar que trabajaremos en una clase entidad
//Inyectaremos esta dependencia para especificar el nombre de la tabla en BD
@Table(name = "servicios")
public class Servicios {
    //Especificamos nuestra PK
    @Id
    // Especificamos que se autoIncremente el ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Selecionaremos las columnas de la tabla, para asignar el valor que debe recibir.
    @Column(name = "ID_Servicio")
    private int idServicio;

    @Column(name = "Nombre_Servicio")
    private String nombreServicio;

    @Column(name = "Imagen_url")
    private String imagenUrl;

    @Column(name = "Descripcion")
    private String descripcion;

    @Column(name = "Costo")
    private double costo;

    @Column(name = "Duracion")
    private Time duracion;

    @ManyToMany(mappedBy = "servicios")
    private Set<Reservas> reservas = new HashSet<>();

}

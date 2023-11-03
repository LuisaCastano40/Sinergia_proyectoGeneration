package com.selecto.sitioselecto.Entity;

import jakarta.persistence.*;
import lombok.Data;
import java.sql.Time;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
//Inyectaremos esta dependencia para especificar que trabajaremos en una clase entidad
//Inyectaremos esta dependencia para especificar el nombre de la tabla en BD
@Table(name = "reservas")

public class Reservas {
    //Especificamos nuestra PK
    @Id
    // Especificamos que se autoIncremente el ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Selecionaremos las columnas de la tabla, para asignar el valor que debe recibir.
    @Column(name = "ID_Reserva")
    private int idReserva;

    @Column(name = "Fecha_reserva")
    private Date fechaReserva;

    @Column(name = "Hora_reserva")
    private Time horaReserva;

    @Column(name = "Medio_reserva")
    private String medioReserva;

    @Column(name = "Valor_total")
    private double valorTotal;

    //claves foráneas
    @ManyToOne
    @JoinColumn(name = "ID_Cliente")
    private Clientes idCliente;

    @ManyToOne
    @JoinColumn(name = "ID_Barbero")
    private Barberos idBarbero;

    @ManyToMany
    @JoinTable(name = "Servicios_Reservas",
            joinColumns = @JoinColumn(name = "ID_Reserva "),
            inverseJoinColumns = @JoinColumn(name = "ID_Servicio"))
    private Set<Servicios> servicios = new HashSet<>();

}

package com.selecto.sitioselecto.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
//Inyectaremos esta dependencia para especificar que trabajaremos en una clase entidad
//Inyectaremos esta dependencia para especificar el nombre de la tabla en BD
@Table(name = "ventas")
public class Ventas {
    //Especificamos nuestra PK
    @Id
    // Especificamos que se autoIncremente el ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Selecionaremos las columnas de la tabla, para asignar el valor que debe recibir.
    @Column(name = "ID_Ventas")
    private int id;

    @Column(name = "Medio_de_Venta")
    private String medioVenta;

    @Column(name = "Fecha_de_Venta")
    private Date fechaVenta;

    @Column(name = "Monto_total_de_Venta")
    private double montoTotalVenta;

    @ManyToOne
    @JoinColumn(name = "ID_Cliente")
    private Clientes idCliente;

    @ManyToOne
    @JoinColumn(name = "ID_Barbero")
    private Barberos idBarbero;

    @ManyToOne
    @JoinColumn(name = "ID_Producto")
    private Productos idProducto;
}

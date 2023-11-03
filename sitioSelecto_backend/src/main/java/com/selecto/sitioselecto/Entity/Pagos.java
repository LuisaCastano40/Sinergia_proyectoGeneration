package com.selecto.sitioselecto.Entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
//Inyectaremos esta dependencia para especificar que trabajaremos en una clase entidad
//Inyectaremos esta dependencia para especificar el nombre de la tabla en BD
@Table(name = "pagos")
public class Pagos {

    //Especificamos nuestra PK
    @Id
    // Especificamos que se autoIncremente el ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Selecionaremos las columnas de la tabla, para asignar el valor que debe recibir.
    @Column(name = "ID_Pagos")
    private int id;

    @Column(name = "Fecha_de_pago")
    private Date fechaContratacion;

    @Column(name = "Monto_de_pago")
    private String montoPago;

    @Column(name = "Metodo_de_pago")
    private String metodoPago;

    @OneToOne
    @JoinColumn(name = "ID_Ventas")
    private Ventas idVentas;
}

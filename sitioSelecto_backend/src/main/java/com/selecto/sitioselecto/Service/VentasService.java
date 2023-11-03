package com.selecto.sitioselecto.Service;

import com.selecto.sitioselecto.Entity.Ventas;
import com.selecto.sitioselecto.Repository.VentasRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VentasService {
    @Autowired
    VentasRepo ventasRepo;

    //La coleccion List nos ayuda a crear una lista de datos (Peticion GET)
    public List<Ventas> consultarVentas(){
        return (List<Ventas>) this.ventasRepo.findAll();
    }

    //este codigo nos permite crear los datos que queremos insertar en la BD
    public Ventas crearVentas(Ventas venta){
        venta.setMedioVenta(venta.getMedioVenta());
        return this.ventasRepo.save(venta);
    }

    //Este codigo nos permite actualizar los datos de la BD
    public Ventas modificarServicio(Ventas venta){
        return this.ventasRepo.save(venta);
    }

    //Este codigo nos permite buscar un ID en especifico
    public Ventas buscarVentas(int id){
        return this.ventasRepo.findById(id).get();
    }

    //Este codigo nos permite eliminar un dato mediante el ID El metodo como va a borrar datos,
    // no debera retornar informacion
    public void eliminarVentas(int id){
        this.ventasRepo.deleteById(id);
    }
}

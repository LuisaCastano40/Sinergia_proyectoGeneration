package com.selecto.sitioselecto.Service;

import com.selecto.sitioselecto.Entity.Pagos;
import com.selecto.sitioselecto.Repository.PagosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PagosService {

    @Autowired
    PagosRepo pagosRepo;

    //La coleccion List nos ayuda a crear una lista de datos (Peticion GET)
    public List<Pagos> consultarPagos(){
        return (List<Pagos>) this.pagosRepo.findAll();
    }

    //este codigo nos permite crear los datos que queremos insertar en la BD
    public Pagos crearPagos(Pagos pago){
        pago.setMetodoPago(pago.getMetodoPago());
        return this.pagosRepo.save(pago);
    }

    //Este codigo nos permite actualizar los datos de la BD
    public Pagos modificarPago(Pagos pago){
        return this.pagosRepo.save(pago);
    }

    //Este codigo nos permite buscar un ID en especifico
    public Pagos buscarPago(int id){
        return this.pagosRepo.findById(id).get();
    }

    //Este codigo nos permite eliminar un dato mediante el ID El metodo como va a borrar datos,
    // no debera retornar informacion
    public void eliminarPago(int id){
        this.pagosRepo.deleteById(id);
    }
}

package com.selecto.sitioselecto.Service;

import com.selecto.sitioselecto.Entity.Reservas;
import com.selecto.sitioselecto.Repository.ReservasRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservasService {
    @Autowired
    ReservasRepo reservasRepo;

    //La coleccion List nos ayuda a crear una lista de datos (Peticion GET)
    public List<Reservas> consultarReservas(){
        return (List<Reservas>) this.reservasRepo.findAll();
    }

    //este codigo nos permite crear los datos que queremos insertar en la BD
    public Reservas crearReserva(Reservas reserva){
        reserva.setMedioReserva(reserva.getMedioReserva());
        return this.reservasRepo.save(reserva);
    }

    //Este codigo nos permite actualizar los datos de la BD
    public Reservas modificarReserva(Reservas reserva){
        return this.reservasRepo.save(reserva);
    }

    //Este codigo nos permite buscar un ID en especifico
    public Reservas buscarReserva(int id){
        return this.reservasRepo.findById(id).get();
    }

    //Este codigo nos permite eliminar un dato mediante el ID El metodo como va a borrar datos,
    // no debera retornar informacion
    public void eliminarReserva(int id){
        this.reservasRepo.deleteById(id);
    }
}

package com.selecto.sitioselecto.Service;

import com.selecto.sitioselecto.Entity.Administrativos;
import com.selecto.sitioselecto.Entity.Barberos;
import com.selecto.sitioselecto.Repository.BarberosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BarberosService {

    @Autowired
    private BarberosRepo barberosRepo;

    //La coleccion List nos ayuda a crear una lista de datos (Peticion GET)
    public List<Barberos> consultarBarberos(){
        return (List<Barberos>) this.barberosRepo.findAll();
    }

    //este codigo nos permite crear los datos que queremos insertar en la BD
    public Barberos crearBarberos(Barberos barbero){
        barbero.setNombre(barbero.getNombre());
        return this.barberosRepo.save(barbero);
    }

    //Este codigo nos permite actualizar los datos de la BD
    public Barberos modificarBarberos(Barberos barbero){
        return this.barberosRepo.save(barbero);
    }

    //Este codigo nos permite buscar un ID en especifico
    public Barberos buscarBarberos(int id){
        return this.barberosRepo.findById(id).get();
    }

    //Este codigo nos permite eliminar un dato mediante el ID El metodo como va a borrar datos,
    // no debera retornar informacion
    public void eliminarBarbero(int id){
        this.barberosRepo.deleteById(id);
    }
}

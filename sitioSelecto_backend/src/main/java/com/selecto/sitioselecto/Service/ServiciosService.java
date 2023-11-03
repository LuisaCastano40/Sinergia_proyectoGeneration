package com.selecto.sitioselecto.Service;

import com.selecto.sitioselecto.Entity.Servicios;
import com.selecto.sitioselecto.Repository.ServiciosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiciosService {
    @Autowired
    ServiciosRepo serviciosRepo;

    //La coleccion List nos ayuda a crear una lista de datos (Peticion GET)
    public List<Servicios> consultarServicios(){
        return (List<Servicios>) this.serviciosRepo.findAll();
    }

    //este codigo nos permite crear los datos que queremos insertar en la BD
    public Servicios crearServicios(Servicios servicio){
        servicio.setNombreServicio(servicio.getNombreServicio());
        return this.serviciosRepo.save(servicio);
    }

    //Este codigo nos permite actualizar los datos de la BD
    public Servicios modificarServicio(Servicios servicio){
        return this.serviciosRepo.save(servicio);
    }

    //Este codigo nos permite buscar un ID en especifico
    public Servicios buscarServicio(int id){
        return this.serviciosRepo.findById(id).get();
    }

    //Este codigo nos permite eliminar un dato mediante el ID El metodo como va a borrar datos,
    // no debera retornar informacion
    public void eliminarServicio(int id){
        this.serviciosRepo.deleteById(id);
    }
}

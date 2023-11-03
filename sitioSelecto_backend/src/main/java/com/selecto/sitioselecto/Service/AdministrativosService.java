package com.selecto.sitioselecto.Service;

import com.selecto.sitioselecto.Entity.Administrativos;
import com.selecto.sitioselecto.Repository.AdministrativosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AdministrativosService {

    @Autowired
    private AdministrativosRepo adminRepo;

    //La coleccion List nos ayuda a crear una lista de datos (Peticion GET)
    public List<Administrativos> consultarAdministrativos(){
        return (List<Administrativos>) this.adminRepo.findAll();
    }

    //este codigo nos permite crear los datos que queremos insertar en la BD
    public Administrativos crearAdministrativos(Administrativos administrativo){
        administrativo.setNombre(administrativo.getNombre());
        return this.adminRepo.save(administrativo);
    }

    //Este codigo nos permite actualizar los datos de la BD
    public Administrativos modificarAdministrativos(Administrativos administrativo){
        return this.adminRepo.save(administrativo);
    }

    //Este codigo nos permite buscar un ID en especifico
    public Administrativos buscarAdministrativos(int id){
        return this.adminRepo.findById(id).get();
    }

    //Este codigo nos permite eliminar un dato mediante el ID El metodo como va a borrar datos,
    // no debera retornar informacion
    public void eliminarAdministrativos(int id){
        this.adminRepo.deleteById(id);
    }
}

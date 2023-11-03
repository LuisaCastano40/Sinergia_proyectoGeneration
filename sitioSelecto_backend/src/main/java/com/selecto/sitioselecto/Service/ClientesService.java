package com.selecto.sitioselecto.Service;

import com.selecto.sitioselecto.Entity.Clientes;
import com.selecto.sitioselecto.Repository.ClientesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientesService {
    @Autowired
    ClientesRepo clientesRepo;

    //La coleccion List nos ayuda a crear una lista de datos (Peticion GET)
    public List<Clientes> consultarClientes(){
        return (List<Clientes>) this.clientesRepo.findAll();
    }

    //este codigo nos permite crear los datos que queremos insertar en la BD
    public Clientes crearClientes(Clientes cliente){
        cliente.setNombre(cliente.getNombre());
        return this.clientesRepo.save(cliente);
    }

    //Este codigo nos permite actualizar los datos de la BD
    public Clientes modificarClientes(Clientes cliente){
        return this.clientesRepo.save(cliente);
    }

    //Este codigo nos permite buscar un ID en especifico
    public Clientes buscarCliente(int id){
        return this.clientesRepo.findById(id).get();
    }

    //Este codigo nos permite eliminar un dato mediante el ID El metodo como va a borrar datos,
    // no debera retornar informacion
    public void eliminarCliente(int id){
        this.clientesRepo.deleteById(id);
    }
}

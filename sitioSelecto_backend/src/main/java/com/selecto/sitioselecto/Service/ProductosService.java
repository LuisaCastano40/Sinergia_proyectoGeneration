package com.selecto.sitioselecto.Service;

import com.selecto.sitioselecto.Entity.Productos;
import com.selecto.sitioselecto.Repository.ProductosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductosService {
    @Autowired
    ProductosRepo productosRepo;

    //La coleccion List nos ayuda a crear una lista de datos (Peticion GET)
    public List<Productos> consultarProducto(){
        return (List<Productos>) this.productosRepo.findAll();
    }

    //este codigo nos permite crear los datos que queremos insertar en la BD
    public Productos crearProductos(Productos producto){
        producto.setNombre(producto.getNombre());
        return this.productosRepo.save(producto);
    }

    //Este codigo nos permite actualizar los datos de la BD
    public Productos modificarProductos(Productos producto){
        return this.productosRepo.save(producto);
    }

    //Este codigo nos permite buscar un ID en especifico
    public Productos buscarProducto(int id){
        return this.productosRepo.findById(id).get();
    }

    //Este codigo nos permite eliminar un dato mediante el ID El metodo como va a borrar datos,
    // no debera retornar informacion
    public void eliminarProducto(int id){
        this.productosRepo.deleteById(id);
    }
}

package com.selecto.sitioselecto.Controller;

import com.selecto.sitioselecto.Entity.Productos;
import com.selecto.sitioselecto.Service.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("productos")
public class ProductosController {

    @Autowired
    ProductosService productosService;

    //Esta anotación nos ayudará a mapear la solicitud GET
    //http://localhost:8080/productos/ConsultarProductos
    @GetMapping
    @RequestMapping(value = "ConsultarProductos", method = RequestMethod.GET)
    //si los datos son correctos, me mostrará un código respuesta HTTP 200
    public ResponseEntity<?> ConsultarProductos(){
        List<Productos> productosList = this.productosService.consultarProducto();
        return ResponseEntity.ok(productosList);
    }

    //Este código nos ayuda a insertar datos en la DB
    //El mapeo del POST sería: http://localhost:8080/productos/Crear
    @PutMapping
    @RequestMapping(value = "Crear", method = RequestMethod.POST)
    public ResponseEntity<?> CrearProducto(@RequestBody Productos producto){
        Productos productoCrear = this.productosService.crearProductos(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(productoCrear);
    }

    //El mapeo del PUT sería: http://localhost:8080/pagos/Modificar/{id}
    @PutMapping
    @RequestMapping(value = "Modificar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarProductos(@RequestBody Productos producto){
        Productos productoModificado = this.productosService.modificarProductos(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(productoModificado);
    }

    //El mapeo del GET sería: http://localhost:8080/pagos/Buscar/{id}
    @GetMapping
    @RequestMapping(value = "Buscar/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarProducto(@PathVariable int id){
        Productos producto = this.productosService.buscarProducto(id);
        return ResponseEntity.ok(producto);
    }

    //El mapeo del DELETE sería: http://localhost:8080/pagos/EliminarAdmin/{id}
    @DeleteMapping
    @RequestMapping(value = "Eliminar/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarProducto(@PathVariable int id){
        this.productosService.eliminarProducto(id);
        return ResponseEntity.ok().build();
    }

}

package com.selecto.sitioselecto.Controller;

import com.selecto.sitioselecto.Entity.Ventas;
import com.selecto.sitioselecto.Service.VentasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ventas")
public class VentasController {
    @Autowired
    VentasService ventasService;

    //Esta anotación nos ayudará a mapear la solicitud GET
    //http://localhost:8080/ventas/ConsultarVentas
    @GetMapping
    @RequestMapping(value = "ConsultarVentas", method = RequestMethod.GET)
    //si los datos son correctos, me mostrará un código respuesta HTTP 200
    public ResponseEntity<?> ConsultarVentas(){
        List<Ventas> ventasList = this.ventasService.consultarVentas();
        return ResponseEntity.ok(ventasList);
    }

    //Este código nos ayuda a insertar datos en la DB
    //El mapeo del POST sería: http://localhost:8080/ventas/Crear
    @PutMapping
    @RequestMapping(value = "Crear", method = RequestMethod.POST)
    public ResponseEntity<?> CrearVenta(@RequestBody Ventas venta){
        Ventas ventaCrear = this.ventasService.crearVentas(venta);
        return ResponseEntity.status(HttpStatus.CREATED).body(ventaCrear);
    }

    //El mapeo del PUT sería: http://localhost:8080/ventas/Modificar/{id}
    @PutMapping
    @RequestMapping(value = "Modificar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarVenta(@RequestBody Ventas venta){
        Ventas ventaModificado = this.ventasService.modificarServicio(venta);
        return ResponseEntity.status(HttpStatus.CREATED).body(ventaModificado);
    }

    //El mapeo del GET sería: http://localhost:8080/ventas/Buscar/{id}
    @GetMapping
    @RequestMapping(value = "Buscar/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarVenta(@PathVariable int id){
        Ventas venta = this.ventasService.buscarVentas(id);
        return ResponseEntity.ok(venta);
    }

    //El mapeo del DELETE sería: http://localhost:8080/ventas/EliminarAdmin/{id}
    @DeleteMapping
    @RequestMapping(value = "Eliminar/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarVenta(@PathVariable int id){
        this.ventasService.eliminarVentas(id);
        return ResponseEntity.ok().build();
    }
}

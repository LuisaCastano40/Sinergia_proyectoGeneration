package com.selecto.sitioselecto.Controller;

import com.selecto.sitioselecto.Entity.Pagos;
import com.selecto.sitioselecto.Service.PagosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("pagos")
public class PagosController {
    @Autowired
    PagosService pagosService;

    //Esta anotación nos ayudará a mapear la solicitud GET
    //http://localhost:8080/pagos/ConsultarPagos
    @GetMapping
    @RequestMapping(value = "ConsultarPagos", method = RequestMethod.GET)
    //si los datos son correctos, me mostrará un código respuesta HTTP 200
    public ResponseEntity<?> ConsultarPagos(){
        List<Pagos> pagosList = this.pagosService.consultarPagos();
        return ResponseEntity.ok(pagosList);
    }

    //Este código nos ayuda a insertar datos en la DB
    //El mapeo del POST sería: http://localhost:8080/pagos/Crear
    @PutMapping
    @RequestMapping(value = "Crear", method = RequestMethod.POST)
    public ResponseEntity<?> CrearPagos(@RequestBody Pagos pago){
        Pagos pagoCrear = this.pagosService.crearPagos(pago);
        return ResponseEntity.status(HttpStatus.CREATED).body(pagoCrear);
    }

    //El mapeo del PUT sería: http://localhost:8080/pagos/Modificar/{id}
    @PutMapping
    @RequestMapping(value = "Modificar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarPago(@RequestBody Pagos pago){
        Pagos pagoModificado = this.pagosService.modificarPago(pago);
        return ResponseEntity.status(HttpStatus.CREATED).body(pagoModificado);
    }

    //El mapeo del GET sería: http://localhost:8080/pagos/Buscar/{id}
    @GetMapping
    @RequestMapping(value = "Buscar/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarPago(@PathVariable int id){
        Pagos pago = this.pagosService.buscarPago(id);
        return ResponseEntity.ok(pago);
    }

    //El mapeo del DELETE sería: http://localhost:8080/pagos/EliminarAdmin/{id}
    @DeleteMapping
    @RequestMapping(value = "Eliminar/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarPago(@PathVariable int id){
        this.pagosService.eliminarPago(id);
        return ResponseEntity.ok().build();
    }
}

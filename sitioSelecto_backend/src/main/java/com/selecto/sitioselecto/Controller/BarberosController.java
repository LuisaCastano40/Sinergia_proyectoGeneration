package com.selecto.sitioselecto.Controller;

import com.selecto.sitioselecto.Entity.Barberos;
import com.selecto.sitioselecto.Service.BarberosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("barberos")
public class BarberosController {

    @Autowired
    BarberosService barberosService;

    //Esta anotación nos ayudará a mapear la solicitud GET
    //http://localhost:8080/barberos/ConsultarBarberos
    @GetMapping
    @RequestMapping(value = "ConsultarBarberos", method = RequestMethod.GET)
    //si los datos son correctos, me mostrará un código respuesta HTTP 200
    public ResponseEntity<?> ConsultarBarberos(){
        List<Barberos> barberoList = this.barberosService.consultarBarberos();
        return ResponseEntity.ok(barberoList);
    }

    //Este código nos ayuda a insertar datos en la DB
    //El mapeo del POST sería: http://localhost:8080/barberos/Crear
    @PutMapping
    @RequestMapping(value = "Crear", method = RequestMethod.POST)
    public ResponseEntity<?> CrearBarbero(@RequestBody Barberos barbero){
        Barberos barberosCrear = this.barberosService.crearBarberos(barbero);
        return ResponseEntity.status(HttpStatus.CREATED).body(barberosCrear);
    }

    //El mapeo del PUT sería: http://localhost:8080/barberos/Modificar/{id}
    @PutMapping
    @RequestMapping(value = "Modificar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarBarbero(@RequestBody Barberos barbero){
        Barberos barberoModificado = this.barberosService.modificarBarberos(barbero);
        return ResponseEntity.status(HttpStatus.CREATED).body(barberoModificado);
    }

    //El mapeo del GET sería: http://localhost:8080/barberos/Buscar/{id}
    @GetMapping
    @RequestMapping(value = "Buscar/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarBarbero(@PathVariable int id){
        Barberos barbero = this.barberosService.buscarBarberos(id);
        return ResponseEntity.ok(barbero);
    }

    //El mapeo del DELETE sería: http://localhost:8080/administrativos/EliminarAdmin/{id}
    @DeleteMapping
    @RequestMapping(value = "Eliminar/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarAdmin(@PathVariable int id){
        this.barberosService.eliminarBarbero(id);
        return ResponseEntity.ok().build();
    }
}

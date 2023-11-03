package com.selecto.sitioselecto.Controller;

import com.selecto.sitioselecto.Entity.Servicios;
import com.selecto.sitioselecto.Service.ServiciosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("servicios")
public class ServiciosController {

    @Autowired
    ServiciosService serviciosService;

    //Esta anotación nos ayudará a mapear la solicitud GET
    //http://localhost:8080/servicios/ConsultarServicios
    @GetMapping
    @RequestMapping(value = "ConsultarServicios", method = RequestMethod.GET)
    //si los datos son correctos, me mostrará un código respuesta HTTP 200
    public ResponseEntity<?> ConsultarServicios(){
        List<Servicios> serviciosList = this.serviciosService.consultarServicios();
        return ResponseEntity.ok(serviciosList);
    }

    //Este código nos ayuda a insertar datos en la DB
    //El mapeo del POST sería: http://localhost:8080/servicios/Crear
    @PostMapping
    @RequestMapping(value = "Crear", method = RequestMethod.POST)
    public ResponseEntity<?> CrearServicio(@RequestBody Servicios servicio){
        Servicios servicioCrear = this.serviciosService.crearServicios(servicio);
        return ResponseEntity.status(HttpStatus.CREATED).body(servicioCrear);
    }

    //El mapeo del PUT sería: http://localhost:8080/servicios/Modificar/{id}
    @PutMapping
    @RequestMapping(value = "Modificar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarServicio(@RequestBody Servicios servicio){
        Servicios servicioModificado = this.serviciosService.modificarServicio(servicio);
        return ResponseEntity.status(HttpStatus.CREATED).body(servicioModificado);
    }

    //El mapeo del GET sería: http://localhost:8080/servicios/Buscar/{id}
    @GetMapping
    @RequestMapping(value = "Buscar/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarServicio(@PathVariable int id){
        Servicios servicio = this.serviciosService.buscarServicio(id);
        return ResponseEntity.ok(servicio);
    }

    //El mapeo del DELETE sería: http://localhost:8080/servicios/EliminarAdmin/{id}
    @DeleteMapping
    @RequestMapping(value = "Eliminar/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarServicio(@PathVariable int id){
        this.serviciosService.eliminarServicio(id);
        return ResponseEntity.ok().build();
    }
}

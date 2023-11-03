package com.selecto.sitioselecto.Controller;

import com.selecto.sitioselecto.Entity.Reservas;
import com.selecto.sitioselecto.Service.ReservasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("reservas")
public class ReservasController {
    @Autowired
    ReservasService reservasService;

    //Esta anotación nos ayudará a mapear la solicitud GET
    //http://localhost:8080/reservas/ConsultarReservas
    @GetMapping
    @RequestMapping(value = "ConsultarReservas", method = RequestMethod.GET)
    //si los datos son correctos, me mostrará un código respuesta HTTP 200
    public ResponseEntity<?> ConsultarReservas(){
        List<Reservas> reservasList = this.reservasService.consultarReservas();
        return ResponseEntity.ok(reservasList);
    }

    //Este código nos ayuda a insertar datos en la DB
    //El mapeo del POST sería: http://localhost:8080/reservas/Crear
    @PutMapping
    @RequestMapping(value = "Crear", method = RequestMethod.POST)
    public ResponseEntity<?> CrearReserva(@RequestBody Reservas reserva){
        Reservas reservaCrear = this.reservasService.crearReserva(reserva);
        return ResponseEntity.status(HttpStatus.CREATED).body(reservaCrear);
    }

    //El mapeo del PUT sería: http://localhost:8080/reservas/Modificar/{id}
    @PutMapping
    @RequestMapping(value = "Modificar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarReserva(@RequestBody Reservas reserva){
        Reservas reservaModificado = this.reservasService.modificarReserva(reserva);
        return ResponseEntity.status(HttpStatus.CREATED).body(reservaModificado);
    }

    //El mapeo del GET sería: http://localhost:8080/reservas/Buscar/{id}
    @GetMapping
    @RequestMapping(value = "Buscar/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarReserva(@PathVariable int id){
        Reservas reserva= this.reservasService.buscarReserva(id);
        return ResponseEntity.ok(reserva);
    }

    //El mapeo del DELETE sería: http://localhost:8080/reservas/EliminarAdmin/{id}
    @DeleteMapping
    @RequestMapping(value = "Eliminar/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarReserva(@PathVariable int id){
        this.reservasService.eliminarReserva(id);
        return ResponseEntity.ok().build();
    }
}

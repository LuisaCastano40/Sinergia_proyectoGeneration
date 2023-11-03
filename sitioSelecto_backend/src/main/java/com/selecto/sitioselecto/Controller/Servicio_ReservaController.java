package com.selecto.sitioselecto.Controller;

import com.selecto.sitioselecto.Entity.Reservas;
import com.selecto.sitioselecto.Entity.Servicios;
import com.selecto.sitioselecto.Service.ReservasService;
import com.selecto.sitioselecto.Service.ServiciosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("asignar-servicio")
public class Servicio_ReservaController {
    @Autowired
    private ServiciosService serviciosService;

    @Autowired
    private ReservasService reservasService;

    // Endpoint para asignar un servicio a una reserva
    // Endpoint para asignar un servicio a una reserva
    @PostMapping("/asignar-servicio-a-reserva")
    public ResponseEntity<String> asignarServicioAReserva(@RequestParam int servicioId, @RequestParam int reservaId) {
        Servicios servicio = serviciosService.buscarServicio(servicioId);
        Reservas reserva = reservasService.buscarReserva(reservaId);

        if (servicio != null && reserva != null) {
            reserva.getServicios().add(servicio);
            reservasService.modificarReserva(reserva);
            return new ResponseEntity<>("Servicio asignado a la reserva con éxito", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Servicio o reserva no encontrados", HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint para quitar un servicio de una reserva
    @PostMapping("/quitar-servicio-a-reserva")
    public ResponseEntity<String> quitarServicioAReserva(@RequestParam int servicioId, @RequestParam int reservaId) {
        Servicios servicio = serviciosService.buscarServicio(servicioId);
        Reservas reserva = reservasService.buscarReserva(reservaId);

        if (servicio != null && reserva != null) {
            reserva.getServicios().remove(servicio);
            reservasService.modificarReserva(reserva);
            return new ResponseEntity<>("Servicio quitado de la reserva con éxito", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Servicio o reserva no encontrados", HttpStatus.NOT_FOUND);
        }
    }
}

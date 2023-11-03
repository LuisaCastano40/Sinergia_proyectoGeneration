package com.selecto.sitioselecto.Controller;
import com.selecto.sitioselecto.Entity.Administrativos;
import com.selecto.sitioselecto.Service.AdministrativosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("administrativos")
public class AdministrativosController {
    @Autowired
    AdministrativosService administrativoService;

    //Esta anotación nos ayudará a mapear la solicitud GET
    //http://localhost:8080/administrativos/ConsultarAdmin
    @GetMapping
    @RequestMapping(value = "ConsultarAdmin", method = RequestMethod.GET)
    //si los datos son correctos, me mostrará un código respuesta HTTP 200
    public ResponseEntity<?> ConsultarAdmin(){
        List<Administrativos> adminList = this.administrativoService.consultarAdministrativos();
        return ResponseEntity.ok(adminList);
    }

    //Este código nos ayuda a insertar datos en la DB
    //El mapeo del POST sería: http://localhost:8080/administrativos/CrearAdmin
    @PutMapping
    @RequestMapping(value = "CrearAdmin", method = RequestMethod.POST)
    public ResponseEntity<?> CrearAdmin(@RequestBody Administrativos administrativos){
        Administrativos adminCrear = this.administrativoService.crearAdministrativos(administrativos);
        return ResponseEntity.status(HttpStatus.CREATED).body(adminCrear);
    }

    //El mapeo del PUT sería: http://localhost:8080/administrativos/ModificarAdmin/{id}
    @PutMapping
    @RequestMapping(value = "ModificarAdmin/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarAdmin(@RequestBody Administrativos administrativos){
        Administrativos adminModificado = this.administrativoService.modificarAdministrativos(administrativos);
        return ResponseEntity.status(HttpStatus.CREATED).body(adminModificado);
    }

    //El mapeo del GET sería: http://localhost:8080/administrativos/BuscarAdmin/{id}
    @GetMapping
    @RequestMapping(value = "BuscarAdmin/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarAdmin(@PathVariable int id){
        Administrativos administrativo = this.administrativoService.buscarAdministrativos(id);
        return ResponseEntity.ok(administrativo);
    }

    //El mapeo del DELETE sería: http://localhost:8080/administrativos/EliminarAdmin/{id}
    @DeleteMapping
    @RequestMapping(value = "EliminarAdmin/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarAdmin(@PathVariable int id){
        this.administrativoService.eliminarAdministrativos(id);
        return ResponseEntity.ok().build();
    }
}

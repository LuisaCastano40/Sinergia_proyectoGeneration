package com.selecto.sitioselecto.Controller;

import com.selecto.sitioselecto.Entity.Clientes;
import com.selecto.sitioselecto.Service.ClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("clientes")
public class ClientesController {

    @Autowired
    ClientesService clientesService;

    //Esta anotación nos ayudará a mapear la solicitud GET
    //http://localhost:8080/clientes/ConsultarClientes
    @GetMapping
    @RequestMapping(value = "ConsultarClientes", method = RequestMethod.GET)
    //si los datos son correctos, me mostrará un código respuesta HTTP 200
    public ResponseEntity<?> ConsultarClientes(){
        List<Clientes> clientesList = this.clientesService.consultarClientes();
        return ResponseEntity.ok(clientesList);
    }

    //Este código nos ayuda a insertar datos en la DB
    //El mapeo del POST sería: http://localhost:8080/clientes/Crear
    @PutMapping
    @RequestMapping(value = "Crear", method = RequestMethod.POST)
    public ResponseEntity<?> CrearCliente(@RequestBody Clientes cliente){
        Clientes clienteCrear = this.clientesService.crearClientes(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteCrear);
    }

    //El mapeo del PUT sería: http://localhost:8080/clientes/Modificar/{id}
    @PutMapping
    @RequestMapping(value = "Modificar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarCliente(@RequestBody Clientes cliente){
        Clientes clienteModificado = this.clientesService.modificarClientes(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteModificado);
    }

    //El mapeo del GET sería: http://localhost:8080/clientes/Buscar/{id}
    @GetMapping
    @RequestMapping(value = "Buscar/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarCliente(@PathVariable int id){
        Clientes clientes = this.clientesService.buscarCliente(id);
        return ResponseEntity.ok(clientes);
    }

    //El mapeo del DELETE sería: http://localhost:8080/clientes/EliminarAdmin/{id}
    @DeleteMapping
    @RequestMapping(value = "Eliminar/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarCliente(@PathVariable int id){
        this.clientesService.eliminarCliente(id);
        return ResponseEntity.ok().build();
    }
}

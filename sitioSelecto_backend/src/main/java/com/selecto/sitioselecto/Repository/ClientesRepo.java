package com.selecto.sitioselecto.Repository;

import com.selecto.sitioselecto.Entity.Clientes;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
// El CrudRepository nos permite inicializar las peticiones CRUD
public interface ClientesRepo extends CrudRepository<Clientes,Integer> {
}

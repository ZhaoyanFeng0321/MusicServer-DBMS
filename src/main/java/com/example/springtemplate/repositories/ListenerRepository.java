package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Listener;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ListenerRepository
        extends CrudRepository<Listener, Integer> { // implements ORM access to database based on existing implementation

  @Query(value = "SELECT * FROM listeners",
          nativeQuery = true) // override SQL query used to retrieve all listeners
  public List<Listener> findAllListeners(); // wrap query in high-level method
  @Query(value = "SELECT * FROM listeners WHERE id=:listenerId",
          nativeQuery = true) // override SQL query to retrieve listener by their ID
  public Listener findListenerById(@Param("listenerId") Integer id); // wrap query in high-level method
}

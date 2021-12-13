package com.example.springtemplate.daos;

import com.example.springtemplate.models.Listener;
import com.example.springtemplate.repositories.ListenerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // make this available through HTTP
@CrossOrigin(origins = "*") // allow access from any internet domain
public class ListenerOrmDao {
  @Autowired //implements database access using ORM automatically instantiate
  ListenerRepository listenerRepository; // implements ORM access to database

  @PostMapping("/orm/listeners") // map this method to an HTTP POST
  public Listener createListener(@RequestBody Listener listener) { // parse new listener from HTTP Request BODY
    return listenerRepository.save(listener); // insert new listener into listeners table
  }

  @GetMapping("/orm/listeners") // map this method to an HTTP GET request
  public List<Listener> findAllListeners() { // execute this method is URL matches /api/listeners
    return listenerRepository.findAllListeners(); // retrieve all records from listeners table and return as list of listeners
  }

  @GetMapping("/orm/listeners/{listenerId}") // map this method to HTTP GET request
  public Listener findListenerById( // execute this method when URL matches /api/listeners/ID
                                @PathVariable("listenerId") Integer id) { // parse listener ID from path variable listenerId
    return listenerRepository.findListenerById(id); // retrieve single listener by ID and return as instance of Listener
  }

  @PutMapping("/orm/listeners/{listenerId}") // map method to HTTP PUT
  public Listener updateListener(
          @PathVariable("listenerId") Integer id, // parse listener's ID from URL
          @RequestBody Listener listenerUpdates) { // parse listener object from BODY
    Listener listener = listenerRepository.findListenerById(id); // retrieve listener from database
    // listener.setId(listenerUpdates.getId()); // update
    listener.setFirstName(listenerUpdates.getFirstName()); // update
    listener.setLastName(listenerUpdates.getLastName()); // listener fields
    listener.setUsername(listenerUpdates.getUsername()); // with new
    listener.setPassword(listenerUpdates.getPassword()); // values from
    listener.setEmail(listenerUpdates.getEmail()); // listener interface
    listener.setDateOfBirth(listenerUpdates.getDateOfBirth());
    listener.setVip(listenerUpdates.getVip()); // listener fields
    return listenerRepository.save(listener); // save changes to database
  }

  @DeleteMapping("/orm/listeners/{listenerId}") // map this method to HTTP DELETE request
  public void deleteListener( // execute this method is URL matches /api/listeners/ID
                            @PathVariable("listenerId") Integer id) { // parse listener's ID from path variable
    listenerRepository.deleteById(id); // use repository to permanently remove the listener by their ID
  }
}

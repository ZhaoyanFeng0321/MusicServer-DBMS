package com.example.springtemplate.daos;

import com.example.springtemplate.models.Listener;
import com.example.springtemplate.models.Playlist;
import com.example.springtemplate.repositories.ListenerRepository;
import com.example.springtemplate.repositories.PlaylistRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@RestController // make this available through HTTP
@CrossOrigin(origins = "*") // allow access from any internet domain
public class ListenerOrmDao {
    @Autowired //implements database access using ORM automatically instantiate
    ListenerRepository listenerRepository; // implements ORM access to database

//    @Autowired
//    PlaylistRepository playlistRepository;

    @PostMapping("/orm/listeners")
    public Listener createListener(
            @RequestBody Listener listener){
        return listenerRepository.save(listener);
    }

    @GetMapping("/orm/listeners")
    public List<Listener> findAllListeners(){
        return listenerRepository.findAllListeners();
    }

    @GetMapping("/orm/listeners/{lid}")
    public Listener findListenerById(
            @PathVariable("lid") Integer id){
        return listenerRepository.findListenerById(id);
    }


    @PutMapping("/orm/listeners/{lid}")
    public Listener updatelistener(
            @PathVariable("lid") Integer id,
            @RequestBody Listener listenerUpdates){
        Listener listener = listenerRepository.findListenerById(id);
        listener.setUsername(listenerUpdates.getUsername());
        listener.setFirstName(listenerUpdates.getFirstName());
        listener.setLastName(listenerUpdates.getLastName());
        listener.setPassword(listenerUpdates.getPassword());
        listener.setEmail(listenerUpdates.getEmail());
        listener.setDateOfBirth(listenerUpdates.getDateOfBirth());
        listener.setVip(listenerUpdates.getVip());
        return listenerRepository.save(listener);
    }

    @DeleteMapping("/orm/listeners/{pid}")
    public void removeListener(
            @PathVariable("pid") Integer id){
        listenerRepository.deleteById(id);
    }


//    @GetMapping("/orm/m2m/listeners")
//    public List<Listener> findAllRecords() {
//        return (List<Listener>) listenerRepository.findAll();
//    }
//
//    @GetMapping("/orm/m2m/listeners/{id}")
//    public Listener findRecordById(
//            @PathVariable("id") Integer id) {
//        return listenerRepository.findById(id).get();
//    }
//
//    @GetMapping("/orm/m2m/listeners/{id}/remove")
//    public void removeRecord(
//            @PathVariable("id") Integer id) {
//        listenerRepository.deleteById(id);
//    }
//
////      @PostMapping("/orm/m2m/listeners") // map this method to an HTTP POST
////      public Listener createListener(@RequestBody Listener listener) { // parse new artist from HTTP Request BODY
////        return listenerRepository.save(listener); // insert new artist into artists table
////      }
//
//    @GetMapping("/orm/m2m/listeners/create")
//    public void createRecord() {
//        Listener newRecord = new Listener();
////
//        newRecord.setUsername("New User Name");
//        newRecord.setFirstName("First Name"); // update
//        newRecord.setLastName("Last Name"); // listener fields
//        //newRecord.setUsername(newRecord.getUsername()); // with new
//        newRecord.setPassword("Password"); // values from
//        newRecord.setEmail("Email"); // listener interface
//        newRecord.setDateOfBirth(new Date(1990-01-01));
//        newRecord.setVip(0); // listener fields
//
//        listenerRepository.save(newRecord);
//    }
//
//    @GetMapping("/orm/m2m/listeners/{id}/playlists/create")
//    public void createOneToMany(
//            @PathVariable("id") Integer id
//    ) {
//        Listener oneRecord = findRecordById(id);
//
//        Playlist newManyRecord = new Playlist();
//        newManyRecord.setTitle("New Playlist");
//        newManyRecord.setListener(oneRecord);
//
//        oneRecord.getPlaylists().add(newManyRecord);
//
//        listenerRepository.save(oneRecord);
//        playlistRepository.save(newManyRecord);
//    }
//
//    @GetMapping("/orm/m2m/listeners/{id}/playlists")
//    public List<Playlist> findOneToManyRecords(
//            @PathVariable("id") Integer id) {
//        return listenerRepository.findById(id).get().getPlaylists();
//    }
//
//    @PutMapping("/orm/m2m/listeners")
//    public void updateRecord(
//            @RequestBody Listener newRecord
//    ) {
//        Listener oldRecord = listenerRepository.findById(newRecord.getId()).get();
//
//        oldRecord.setUsername(newRecord.getUsername());
//        oldRecord.setFirstName(newRecord.getFirstName());
//        oldRecord.setLastName(newRecord.getLastName());
//
//        oldRecord.setPassword(newRecord.getPassword()); // values from
//        oldRecord.setEmail(newRecord.getEmail()); // listener interface
//        oldRecord.setDateOfBirth(newRecord.getDateOfBirth());
//        oldRecord.setVip(newRecord.getVip()); // listener fields
//        listenerRepository.save(oldRecord);
//    }
}

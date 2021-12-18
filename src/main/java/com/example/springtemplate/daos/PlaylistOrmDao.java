package com.example.springtemplate.daos;

import com.example.springtemplate.models.Playlist;
import com.example.springtemplate.models.Listener;
import com.example.springtemplate.repositories.ListenerRepository;
import com.example.springtemplate.repositories.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;

@RestController
@CrossOrigin(origins = "*")
public class PlaylistOrmDao {
    @Autowired
    PlaylistRepository playlistRepository;

//    @Autowired
//    ListenerRepository listenerRepository;

    @PostMapping("/orm/playlists")
    public Playlist createPlaylist(
            @RequestBody Playlist playlist){
        return playlistRepository.save(playlist);
    }

    @GetMapping("/orm/playlists")
    public List<Playlist> findAllPlaylists(){
        return playlistRepository.findAllPlaylists();
    }

    @GetMapping("/orm/playlists/{pid}")
    public Playlist findPlaylistById(
            @PathVariable("pid") Integer id){
        return playlistRepository.findPlaylistById(id);
    }


    @PutMapping("/orm/playlists/{pid}")
    public Playlist updatePlaylist(
            @PathVariable("pid") Integer id,
            @RequestBody Playlist playlistUpdates){
        Playlist playlist = playlistRepository.findPlaylistById(id);
        playlist.setTitle(playlistUpdates.getTitle());
        playlist.setDescription(playlistUpdates.getDescription());
        return playlistRepository.save(playlist);
    }

    @DeleteMapping("/orm/playlists/{pid}")
    public void removePlaylist(
            @PathVariable("pid") Integer id){
        playlistRepository.deleteById(id);
    }

//    @GetMapping("/orm/m2m/playlists")
//    public List<Playlist> findAllRecords() {
//        return (List<Playlist>) playlistRepository.findAll();
//    }
//
//    @GetMapping("/orm/m2m/playlists/{id}")
//    public Playlist findRecordById(
//            @PathVariable("id")
//                    Integer id) {
//        return playlistRepository.findById(id).get();
//    }
//
//    @GetMapping("/orm/m2m/playlists/{id}/remove")
//    public void removeRecord(
//            @PathVariable("id") Integer id) {
//        playlistRepository.deleteById(id);
//    }
//
////todo
//
//    @GetMapping("/orm/m2m/playlists/create")
//    public void createRecord() {
//        Playlist newRecord = new Playlist();
//
//        newRecord.setTitle("New Name");
//        newRecord.setDescription("Playlist");
//
//        playlistRepository.save(newRecord);
//    }
//
//    @GetMapping("/orm/m2m/playlists/{id}/listeners/create")
//    public void createOneToMany(
//            @PathVariable("id") Integer id
//    ) {
//        Playlist oneRecord = findRecordById(id);
//
//        Listener newManyRecord = new Listener();
//        //newManyRecord.setVip("1");
//
//        newManyRecord.setUsername("New Listener");
//        newManyRecord.setPlaylist(oneRecord);
//
//        oneRecord.getListeners().add(newManyRecord);
//
//        listenerRepository.save(newManyRecord);
//        playlistRepository.save(oneRecord);
//    }
//
//    @PutMapping("/orm/m2m/playlists")
//    public void updateRecord(
//            @RequestBody Playlist newRecord
//    ) {
//        Playlist oldRecord = playlistRepository.findById(newRecord.getId()).get();
//
//        oldRecord.setTitle(newRecord.getTitle());
//        oldRecord.setDescription(newRecord.getDescription());
//
//        playlistRepository.save(oldRecord);
//    }
//
//    @GetMapping("/orm/m2m/playlists/{id}/listeners")
//    public List<Listener> findOneToManyRecords(
//            @PathVariable("id") Integer id) {
//        return playlistRepository.findById(id).get().getListeners();
//    }
}

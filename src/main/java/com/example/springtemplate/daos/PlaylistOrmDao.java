package com.example.springtemplate.daos;

import com.example.springtemplate.models.Playlist;
import com.example.springtemplate.models.Listener;
import com.example.springtemplate.repositories.ListenerRepository;
import com.example.springtemplate.repositories.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlaylistOrmDao {
    @Autowired
    PlaylistRepository playlistRepository;

    @GetMapping("/orm/playlists")
    public List<Playlist> findAllRecords() {
        return (List<Playlist>) playlistRepository.findAll();
    }

    @GetMapping("/orm/playlist/{id}")
    public Playlist findRecordById(
            @PathVariable("id")
                    Integer id) {
        return playlistRepository.findById(id).get();
        //return listener.getPlaylist();
    }

    @GetMapping("/orm/playlist/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        playlistRepository.deleteById(id);
    }

    @GetMapping("/orm/playlists/create")
    public void createRecord() {
        Playlist newRecord = new Playlist();

        newRecord.setTitle("New");
        newRecord.setDescription("Playlist");

        playlistRepository.save(newRecord);
    }
    @GetMapping("/orm/playlists/{id}/listener/create")
    public void createOneToMany(
            @PathVariable("id") Integer id
    ) {
        Playlist oneRecord = findRecordById(id);

        Listener newManyRecord = new Listener();
        newManyRecord.setVip("1");
    }

    @PutMapping("/orm/playlists")
    public void updateRecord(
            @RequestBody Playlist newRecord
    ) {
        Playlist oldRecord = playlistRepository.findById(newRecord.getId()).get();

        oldRecord.setTitle(newRecord.getTitle());
        oldRecord.setDescription(newRecord.getDescription());

        playlistRepository.save(oldRecord);
    }
}

package com.example.springtemplate.daos;

import com.example.springtemplate.models.Collecting;
import com.example.springtemplate.repositories.CollectingRepository;
import com.example.springtemplate.repositories.ListenerRepository;
import com.example.springtemplate.repositories.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CollectingOrmDao {
    @Autowired
    CollectingRepository repository;
    @Autowired
    PlaylistRepository playlistRepository;
    @Autowired
    ListenerRepository listenerRepository;

    @GetMapping("/orm/playlists/{id}/listeners")
    public List<Collecting> findAllRelations(
            @PathVariable("id") Integer id
    ) {
        return (List<Collecting>) repository.findListenersForPlaylist(id);
    }
    @GetMapping("/orm/listeners/{id}/playlists")
    public List<Collecting> findAllInverseRelations(
            @PathVariable("id") Integer id
    ) {
        return (List<Collecting>) repository.findPlaylistsForListener(id);
    }
}

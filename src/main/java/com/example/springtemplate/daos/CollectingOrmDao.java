package com.example.springtemplate.daos;

import com.example.springtemplate.models.Collecting;
import com.example.springtemplate.models.Listener;
import com.example.springtemplate.models.Playlist;
import com.example.springtemplate.repositories.CollectingRepository;
import com.example.springtemplate.repositories.ListenerRepository;
import com.example.springtemplate.repositories.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CollectingOrmDao {
    @Autowired
    CollectingRepository collectingRepository;
    @Autowired
    PlaylistRepository playlistRepository;
    @Autowired
    ListenerRepository listenerRepository;

//    @GetMapping("/orm/playlists/{id}/listeners")
//    public List<Collecting> findAllRelations(
//            @PathVariable("id") Integer id
//    ) {
//        return (List<Collecting>) repository.findListenersForPlaylist(id);
//    }
//    @GetMapping("/orm/listeners/{id}/playlists")
//    public List<Collecting> findAllInverseRelations(
//            @PathVariable("id") Integer id
//    ) {
//        return (List<Collecting>) repository.findPlaylistsForListener(id);
//    }

  //todo
    @PostMapping("/orm/listeners/{lid}/playlists/{pid}/collectings")
    public Collecting createCollecting(
            @PathVariable("lid") Integer lid,
            @PathVariable("pid") Integer pid,
            @RequestBody Collecting collecting){
      collecting = collectingRepository.save(collecting);
      Listener listener = listenerRepository.findListenerById(lid);
      Playlist playlist = playlistRepository.findPlaylistById(pid);
      collecting.setListener(listener);
      collecting.setPlaylist(playlist);
      return collectingRepository.save(collecting);
    }

    @GetMapping("/orm/collectings")
    public List<Collecting> findAllCollectings(){
        return collectingRepository.findAllCollectings();
    }

    @GetMapping("/orm/collectings/{cid}")
    public Collecting findCollectingById(
            @PathVariable("cid") Integer id){
        return collectingRepository.findCollectingById(id);
    }

    @GetMapping("orm/listeners/{lid}/collectings")
    public List<Collecting> findCollectingsForListener(
            @PathVariable("lid") Integer lid){
      Listener listener = listenerRepository.findById(lid).get();
      return listener.getCollectings();
    }

    @GetMapping("orm/playlists/{pid}/collectings")
    public List<Collecting> findCollectingsForPlaylist(
            @PathVariable("pid") Integer pid){
      Playlist playlist = playlistRepository.findById(pid).get();
      return playlist.getCollectings();
    }

    @DeleteMapping("/orm/collectings/{cid}")
    public void deleteCollecting(
            @PathVariable("cid") Integer id){
      collectingRepository.deleteById(id);
    }
}



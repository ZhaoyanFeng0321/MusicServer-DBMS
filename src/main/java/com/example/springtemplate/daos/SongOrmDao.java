package com.example.springtemplate.daos;

import com.example.springtemplate.models.Album;
import com.example.springtemplate.models.Song;
import com.example.springtemplate.repositories.AlbumRepository;
import com.example.springtemplate.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SongOrmDao {
  @Autowired
  SongRepository songRepository;

  @Autowired
  AlbumRepository albumRepository;
  
  @PostMapping("/orm/songs")
  public Song createSong(@RequestBody Song song) {
    return songRepository.save(song);
  }

  @PostMapping("/orm/albums/{albumId}/songs")
  public Song createSongForAlbum(
          @PathVariable("albumId") Integer aid,
          @RequestBody Song song) {
    song = songRepository.save(song);
    Album album = albumRepository.findById(aid).get();
    song.setAlbum(album);
    return songRepository.save(song);
  }

  @GetMapping("/orm/albums/{aid}/songs")
  public List<Song> findSongsForAlbum(
          @PathVariable("aid") Integer albumId) {
    Album album = albumRepository.findById(albumId).get();
    return album.getSongs();
  }

  @GetMapping("/orm/songs")
  public List<Song> findAllSongs() {
    return (List<Song>) songRepository.findAll();
  }

  @GetMapping("/orm/songs/{songId}")
  public Song findSongById(
          @PathVariable("songId") Integer id) {
    return songRepository.findById(id).get();
  }

  @PutMapping("/orm/songs/{songId}")
  public Song updateSong(
          @PathVariable("songId") Integer id,
          @RequestBody() Song newSong) {
    Song song = this.findSongById(id);
    song.setName(newSong.getName());
    song.setGenre(newSong.getGenre());
    return songRepository.save(song);
  }

  @DeleteMapping("/orm/songs/{songId}")
  public void deleteSong(
          @PathVariable("songId") Integer id) {
    songRepository.deleteById(id);
  }
}
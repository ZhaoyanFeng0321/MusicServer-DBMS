package com.example.springtemplate.daos;

import com.example.springtemplate.models.Album;
import com.example.springtemplate.models.Artist;
import com.example.springtemplate.repositories.AlbumRepository;
import com.example.springtemplate.repositories.ArtistRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AlbumOrmDao {
  @Autowired
  AlbumRepository albumRepository;

  @Autowired
  ArtistRepository artistRepository;

  @PostMapping("/orm/artists/{artistId}/albums")
  public Album createAlbumForArtist(
          @PathVariable("artistId") Integer aid,
          @RequestBody Album album) {
    album = albumRepository.save(album);
    Artist artist = artistRepository.findById(aid).get();
    album.setArtist(artist);
    return albumRepository.save(album);
  }

  @PostMapping("/orm/albums")
  public Album createAlbum(@RequestBody Album album) {
    return albumRepository.save(album);
  }

  @GetMapping("/orm/artists/{aid}/albums")
  public List<Album> findAlbumsForArtist(
          @PathVariable("aid") Integer artistId) {
    Artist artist = artistRepository.findById(artistId).get();
    return artist.getAlbums();
  }

  @GetMapping("/orm/albums")
  public List<Album> findAllAlbums() {
    return (List<Album>) albumRepository.findAll();
  }

  @GetMapping("/orm/albums/{albumId}")
  public Album findAlbumById(
          @PathVariable("albumId") Integer id) {
    return albumRepository.findById(id).get();
  }

  @PutMapping("/orm/albums/{albumId}")
  public Album updateAlbum(
          @PathVariable("albumId") Integer id,
          @RequestBody() Album newAlbum) {
    Album album = this.findAlbumById(id);
    album.setTitle(newAlbum.getTitle());
    album.setYear(newAlbum.getYear());
    return albumRepository.save(album);
  }

  @DeleteMapping("/orm/albums/{albumId}")
  public void deleteAlbum(
          @PathVariable("albumId") Integer id) {
    albumRepository.deleteById(id);
  }
}
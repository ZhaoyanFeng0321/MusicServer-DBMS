package com.example.springtemplate.daos;

import com.example.springtemplate.models.Artist;
import com.example.springtemplate.repositories.ArtistRepository;

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
public class ArtistOrmDao {
  @Autowired //implements database access using ORM automatically instantiate
  ArtistRepository artistRepository; // implements ORM access to database

  @PostMapping("/orm/artists") // map this method to an HTTP POST
  public Artist createArtist(@RequestBody Artist artist) { // parse new artist from HTTP Request BODY
    return artistRepository.save(artist); // insert new artist into artists table
  }

  @GetMapping("/orm/artists") // map this method to an HTTP GET request
  public List<Artist> findAllArtists() { // execute this method is URL matches /api/artists
    return artistRepository.findAllArtists(); // retrieve all records from artists table and return as list of artists
  }

  @GetMapping("/orm/artists/{artistId}") // map this method to HTTP GET request
  public Artist findArtistById( // execute this method when URL matches /api/artists/ID
                            @PathVariable("artistId") Integer id) { // parse artist ID from path variable artistId
    return artistRepository.findArtistById(id); // retrieve single artist by ID and return as instance of Artist
  }

  @PutMapping("/orm/artists/{artistId}") // map method to HTTP PUT
  public Artist updateArtist(
          @PathVariable("artistId") Integer id, // parse artist's ID from URL
          @RequestBody Artist artistUpdates) { // parse artist object from BODY
    Artist artist = artistRepository.findArtistById(id); // retrieve artist from database
   // artist.setId(artistUpdates.getId()); // update
    artist.setFirstName(artistUpdates.getFirstName()); // update
    artist.setLastName(artistUpdates.getLastName()); // artist fields
    artist.setUsername(artistUpdates.getUsername()); // with new
    artist.setPassword(artistUpdates.getPassword()); // values from
    artist.setEmail(artistUpdates.getEmail()); // artist interface
    artist.setDateOfBirth(artistUpdates.getDateOfBirth());
    artist.setLanguage(artistUpdates.getLanguage()); // artist fields
    return artistRepository.save(artist); // save changes to database
  }

  @DeleteMapping("/orm/artists/{artistId}") // map this method to HTTP DELETE request
  public void deleteArtist( // execute this method is URL matches /api/artists/ID
                          @PathVariable("artistId") Integer id) { // parse artist's ID from path variable
    artistRepository.deleteById(id); // use repository to permanently remove the artist by their ID
  }
}

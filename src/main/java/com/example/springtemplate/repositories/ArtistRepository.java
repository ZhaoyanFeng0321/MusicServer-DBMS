package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Artist;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArtistRepository
        extends CrudRepository<Artist, Integer> { // implements ORM access to database based on existing implementation
  @Query(value = "SELECT * FROM artists",
          nativeQuery = true) // override SQL query used to retrieve all artists
  public List<Artist> findAllArtists(); // wrap query in high-level method
  @Query(value = "SELECT * FROM artists WHERE id=:artistId",
          nativeQuery = true) // override SQL query to retrieve artist by their ID
  public Artist findArtistById(@Param("artistId") Integer id); // wrap query in high-level method
}

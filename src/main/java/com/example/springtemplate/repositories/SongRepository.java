package com.example.springtemplate.repositories;


import com.example.springtemplate.models.Song;
import com.example.springtemplate.models.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SongRepository
        extends CrudRepository<Song, Integer> {
  @Query(value = "SELECT * FROM songs",
          nativeQuery = true)
  public List<Song> findAllSongs();
  @Query(value = "SELECT * FROM songs WHERE id=:songId",
          nativeQuery = true)
  public Song findSongById(@Param("songId") Integer id);
}

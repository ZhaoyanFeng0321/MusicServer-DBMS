package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Playlist;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlaylistRepository
        extends CrudRepository<Playlist, Integer> {

  @Query(value = "SELECT * FROM playlists", nativeQuery = true)
  public List<Playlist> findAllPlaylists();

  @Query(value = "SELECT * FROM playlists WHERE id=:playlistId", nativeQuery = true)
  public Playlist findPlaylistById(@Param("playlistId") Integer id);
}
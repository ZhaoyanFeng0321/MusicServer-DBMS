package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Playlist;
import org.springframework.data.repository.CrudRepository;

public interface PlaylistRepository
        extends CrudRepository<Playlist, Integer> {
}
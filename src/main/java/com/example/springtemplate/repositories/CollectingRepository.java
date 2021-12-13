package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Collecting;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CollectingRepository
        extends CrudRepository<Collecting, Integer> {
    @Query(value = "select * from collectings c, playlists p where c.playlist_id = p.id and c.listener_id = :lid", nativeQuery = true)
    public List<Collecting> findPlaylistsForListener(@Param("lid") Integer lid);

    @Query(value = "select * from collectings c, listeners l where c.listener_id = l.id and c.playlist_id = :pid", nativeQuery = true)
    public List<Collecting> findListenersForPlaylist(@Param("pid") Integer pid);
}

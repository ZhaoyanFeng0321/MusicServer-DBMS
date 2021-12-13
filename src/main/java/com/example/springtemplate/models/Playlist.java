package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "playlists")
public class Playlist {
    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;

    @OneToMany(mappedBy = "playlist", cascade = CascadeType.REMOVE)
    private List<Collecting> listeners;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public List<Collecting> getListeners() {
        return listeners;
    }

    public void setListeners(List<Collecting> listeners) {
        this.listeners = listeners;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}


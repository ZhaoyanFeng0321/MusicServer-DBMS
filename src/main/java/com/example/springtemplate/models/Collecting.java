package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "collectings")
public class Collecting {
    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JsonIgnore
    private Playlist playlist;

    @ManyToOne
    @JsonIgnore
    private Listener listener;

    @Transient
    public String getListenerInfo() {
        return listener.getFirstName() + " " + listener.getLastName() + " " + listener.getUsername() + " " + listener.getPassword() + " " + listener.getEmail() + " " + listener.getDateOfBirth() + " " + listener.getVip();
    }

    @Transient
    public String getPlaylistInfo() {
        return playlist.getTitle() + " " + playlist.getDescription();
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Playlist getPlaylist() {
        return playlist;
    }

    public void setPlaylist(Playlist playlist) {
        this.playlist = playlist;
    }

    public Listener getListener() {
        return listener;
    }

    public void setListener(Listener listener) {
        this.listener = listener;
    }
}


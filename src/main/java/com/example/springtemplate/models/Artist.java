package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="artists") // CREATE TABLE `artists`
public class Artist extends User{
  @Column(name = "LANGUAGE", nullable = true)
  private String language;


  @OneToMany(mappedBy = "artist")
  @JsonIgnore
  private List<Album> albums;

  public List<Album> getAlbums() {
    return albums;
  }

//  public void setAlbums(List<Album> albums) {
//    this.albums = albums;
//  }

  public void setAlbums(Album album) {
    this.albums.add(album);
    if(album.getArtist() != this) {
      album.setArtist(this);
    }
  }

  public String getLanguage() { return language; }
  public void setLanguage(String language) { this.language = language; }

  public Artist(String username, String password, String first_name, String last_name, String email, Date date_of_birth, String language) {
    super(username, password, first_name, last_name, email, date_of_birth);
    this.language = language;
  }

  public Artist() {}
}

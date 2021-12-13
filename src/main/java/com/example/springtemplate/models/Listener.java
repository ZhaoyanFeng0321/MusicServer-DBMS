package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="listeners") // CREATE TABLE `listeners`
public class Listener extends User{
  @Column(name = "VIP", nullable = true)
  private String vip;

  public List<Collecting> getPlaylists() {
    return playlists;
  }

  public void setPlaylists(List<Collecting> playlists) {
    this.playlists = playlists;
  }

  @OneToMany(mappedBy = "listener", cascade = CascadeType.REMOVE)
  private List<Collecting> playlists;

  public String getVip() { return vip; }
  public void setVip(String vip) { this.vip = vip; }

  public Listener(String username, String password, String first_name, String last_name, String email, Date date_of_birth, String vip) {
    super(username, password, first_name, last_name, email, date_of_birth);
    this.vip = vip;
  }

  public Listener() {}
}

package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="listeners") // CREATE TABLE `listeners`
public class Listener extends User{
  @Column(name = "VIP", nullable = true)
  private Integer vip;

  @OneToMany(mappedBy = "listener")
  @JsonIgnore
  private List<Collecting> collectings;

  public Integer getVip() { return vip; }
  public void setVip(Integer vip) { this.vip = vip; }

  public List<Collecting> getCollectings() {
    return collectings;
  }

  public void setCollectings(List<Collecting> collectings) {
    this.collectings = collectings;
  }

  public Listener(String username, String password, String first_name, String last_name, String email, Date date_of_birth, Integer vip) {
    super(username, password, first_name, last_name, email, date_of_birth);
    this.vip = vip;
  }

  public Listener() {}
}

package com.example.springtemplate.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name="users") // CREATE TABLE `users`
@Inheritance(strategy= InheritanceType.TABLE_PER_CLASS)
public class User {
    @Id // PRIMARY KEY (`id`)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id; // `id` int(11) NOT NULL AUTO_INCREMENT,
    private String firstName; //  `first_name` varchar(45) DEFAULT NULL,
    private String lastName; // `last_name` varchar(45) DEFAULT NULL,
    private String username; // `username` varchar(45) DEFAULT NULL,
    private String password; //  `password` varchar(45) DEFAULT NULL,
    private String email; // `email` varchar(45) DEFAULT NULL,
    private Date dateOfBirth; // `date_of_birth` Date DEFAULT NULL,

    // setters and getters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Date getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public User(String username, String password, String first_name, String last_name, String email, Date date_of_birth) {
        this.username = username;
        this.password = password;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.dateOfBirth = date_of_birth;
    }

    public User() {}
}

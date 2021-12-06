package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*
 implements the CRUD operations in terms of the repository and makes the operations available
 as HTTP end points accessible to clients that want to integrate with the data model.
 */

@RestController // make this available through HTTP
@CrossOrigin(origins = "*") // allow access from any internet domain
public class UserOrmDao {
  @Autowired //implements database access using ORM automatically instantiate
  UserRepository userRepository; // implements ORM access to database

  @PostMapping("/orm/users") // map this method to an HTTP POST
  public User createUser(@RequestBody User user) { // parse new user from HTTP Request BODY
    return userRepository.save(user); // insert new user into users table
  }

  @GetMapping("/orm/users") // map this method to an HTTP GET request
  public List<User> findAllUsers() { // execute this method is URL matches /api/users
    return userRepository.findAllUsers(); // retrieve all records from users table and return as list of users
  }

  @GetMapping("/orm/users/{userId}") // map this method to HTTP GET request
  public User findUserById( // execute this method when URL matches /api/users/ID
                            @PathVariable("userId") Integer id) { // parse user ID from path variable userId
    return userRepository.findUserById(id); // retrieve single user by ID and return as instance of User
  }

  @PutMapping("/orm/users/{userId}") // map method to HTTP PUT
  public User updateUser(
          @PathVariable("userId") Integer id, // parse user's ID from URL
          @RequestBody User userUpdates) { // parse user object from BODY
    User user = userRepository.findUserById(id); // retrieve user from database
    user.setFirstName(userUpdates.getFirstName()); // update
    user.setLastName(userUpdates.getLastName()); // user fields
    user.setUsername(userUpdates.getUsername()); // with new
    user.setPassword(userUpdates.getPassword()); // values from
    user.setEmail(userUpdates.getEmail()); // user interface
    user.setDateOfBirth(userUpdates.getDateOfBirth());
    return userRepository.save(user); // save changes to database
  }

  @DeleteMapping("/orm/users/{userId}") // map this method to HTTP DELETE request
  public void deleteUser( // execute this method is URL matches /api/users/ID
                          @PathVariable("userId") Integer id) { // parse user's ID from path variable
    userRepository.deleteById(id); // use repository to permanently remove the user by their ID
  }
}

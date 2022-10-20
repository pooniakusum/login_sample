package com.example.kycapp.controllers;

import com.example.kycapp.model.ChangeRequest;
import com.example.kycapp.model.Contact;
import com.example.kycapp.model.User;
import com.example.kycapp.model.UserDetails;
import com.example.kycapp.repositories.ContactRepo;
import com.example.kycapp.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController {
    @Autowired
    UserService userService;
    @Autowired
    ContactRepo contactRepo;

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable String id) {
        try {
            User user = userService.getUser(id);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PostMapping("/users")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        try {
            userService.addUser(user);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok("User Deleted");
        } catch (Exception e) {
            // e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PatchMapping("/users/pwd/{id}")
    public ResponseEntity<?> passwdUpdate(@PathVariable String id, @RequestBody ChangeRequest changeRequest) {
        if (userService.updatePasswd(changeRequest, id))
            return ResponseEntity.ok("Success");
        else
            return ResponseEntity.badRequest().build();
    }

    @PostMapping("/users/{id}")
    public ResponseEntity<?> addDetails(@PathVariable String id, @RequestBody UserDetails userDetails) {
        try {
            userService.addDetails(id, userDetails);
            return ResponseEntity.ok("Success");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/users/userdetail/{id}")
    public ResponseEntity<?> deleteDetails(@PathVariable String id) {
        try {
            userService.deleteDetails(id);
            return ResponseEntity.ok("Details Deleted");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }

    @PostMapping("/contact")
    public ResponseEntity<?> addContact(@RequestBody Contact contact) {
        try {
            contactRepo.save(contact);
            return ResponseEntity.ok("Success");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

}

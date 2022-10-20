package com.example.kycapp.service;

import java.util.List;

import com.example.kycapp.model.ChangeRequest;
import com.example.kycapp.model.User;
import com.example.kycapp.model.UserDetails;
import com.example.kycapp.repositories.UserDetailsRepo;
import com.example.kycapp.repositories.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private UserDetailsRepo udr;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getUser(String id) {
        return userRepo.findById(id).get();
    }

    public void addUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepo.save(user);
    }

    public Boolean updatePasswd(ChangeRequest changeRequest, String id) {
        User user = userRepo.findById(id).get();
        String oldPassSaved = user.getPassword();
        if (bCryptPasswordEncoder.matches(changeRequest.getOldPassword(), oldPassSaved)) {
            System.out.println("password matched");
            user.setPassword(bCryptPasswordEncoder.encode(changeRequest.getNewPassword()));
            userRepo.save(user);
            return true;
        } else {
            return false;
        }
    }

    public void deleteUser(String id) {
        User user = userRepo.findById(id).get();
        if (user.getUserDetails() != null) {
            Integer uid = user.getUserDetails().getId();
            userRepo.deleteById(id);
            udr.deleteById(uid);
        } else {
            userRepo.deleteById(id);
        }

    }

    public void addDetails(String id, UserDetails userDetails) {
        User user = userRepo.findById(id).get();
        user.setUserDetails(userDetails);
        udr.save(userDetails);
        userRepo.save(user);
    }

    public void deleteDetails(String id) {
        User user = userRepo.findById(id).get();
        Integer uid = user.getUserDetails().getId();
        user.setUserDetails(null);
        udr.deleteById(uid);
        userRepo.save(user);
    }

}

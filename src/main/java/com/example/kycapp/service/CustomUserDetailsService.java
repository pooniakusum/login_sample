package com.example.kycapp.service;

import java.util.ArrayList;

import com.example.kycapp.repositories.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        if (userRepo.findById(userName).isPresent()) {

            return new User(userRepo.findById(userName).get().getEmailId(),
                    userRepo.findById(userName).get().getPassword(), new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User Not Found...!!!");
        }
    }

}

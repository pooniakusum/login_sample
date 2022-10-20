package com.example.kycapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.kycapp.model.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact, Integer> {

}

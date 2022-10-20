package com.example.kycapp.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private Integer age;
    private String location;
    private String occupation;

    public UserDetails() {
    }

    public UserDetails(Gender gender, Integer age, String location, String occupation) {
        this.gender = gender;
        this.age = age;
        this.location = location;
        this.occupation = occupation;
    }

    public UserDetails(Integer id, Gender gender, Integer age, String location, String occupation) {
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.location = location;
        this.occupation = occupation;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Gender getGender() {
        return this.gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Integer getAge() {
        return this.age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getOccupation() {
        return this.occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

}

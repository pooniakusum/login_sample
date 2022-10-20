package com.example.kycapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class User {
    @Id
    private String emailId;
    private String userName;
    private String password;
    @OneToOne
    private UserDetails userDetails;

    public User() {
    }

    public User(String userName, String emailId, String password) {
        this.userName = userName;
        this.emailId = emailId;
        this.password = password;
    }

    public User(String emailId, String userName, String password, UserDetails userDetails) {
        this.emailId = emailId;
        this.userName = userName;
        this.password = password;
        this.userDetails = userDetails;
    }

    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmailId() {
        return this.emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserDetails getUserDetails() {
        return this.userDetails;
    }

    public void setUserDetails(UserDetails userDetails) {
        this.userDetails = userDetails;
    }

}

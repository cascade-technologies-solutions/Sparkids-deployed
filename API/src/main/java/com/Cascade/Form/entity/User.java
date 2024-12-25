package com.Cascade.Form.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String name;
    private String contact;
    private String address;
    private String courses;  
    private String email;
    private String currentctc;
    private String expectedctc;
    private String link;

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCourses() {
        return courses;
    }

    public void setCourses(String courses) {
        this.courses = courses;
    }
    public String getEmail() {
    	return email;
    }
    public void setEmail(String email) {
    	this.email=email;
    }
    //
    public String getCtc() {
        return currentctc;
    }

    public void setCtc(String currentctc) {
        this.currentctc = currentctc;
    }
    public String getEctc() {
    	return expectedctc;
    }
    public void setEctc(String expectedctc) {
    	this.expectedctc=expectedctc;
    }
    public String getLink() {
    	return link;
    }
    public void setLink(String link) {
    	this.link=link;
    }
    
    
}

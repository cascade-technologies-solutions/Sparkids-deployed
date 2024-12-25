package com.Cascade.Form.Controller;

import com.Cascade.Form.Repository.ContactRepository;
import com.Cascade.Form.entity.User;  // Make sure to import your User entity

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/api/contact")
    public ResponseEntity<String> savePhoneNumber(@RequestParam("phoneNumber") String phoneNumber) {
        if (phoneNumber == null || phoneNumber.isEmpty()) {
            return ResponseEntity.badRequest().body("Phone number is required");
        }

        if (contactRepository.existsByContact(phoneNumber)) {
            return ResponseEntity.status(409).body("Phone number already exists in the database");
        }

        User contact = new User();
        contact.setContact(phoneNumber);

        contactRepository.save(contact);

        return ResponseEntity.ok("Phone number saved successfully");
    }
    @PostMapping("/email")
    public ResponseEntity<String> saveEmail(@RequestParam("Email") String email) {
        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        if (contactRepository.existsByEmail(email)) {
            return ResponseEntity.status(409).body("Email already exists in the database");
        }
        User user = new User();
        
        user.setEmail(email);
        contactRepository.save(user);

        return ResponseEntity.ok("Email saved successfully");
    }

   
}

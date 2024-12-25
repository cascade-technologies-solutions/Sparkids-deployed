package com.Cascade.Form.Controller;

import com.Cascade.Form.Repository.ContactRepository;
import com.Cascade.Form.entity.User;  

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/contactform")
    public String showForm(Model model) { 
    	model.addAttribute("user", new User());
        return "form";  
    }

    @PostMapping("/submitForm")
    public String submitForm(@ModelAttribute User user, Model model) {

       
        Optional<User> existingContact = contactRepository.findByNameAndContactAndAddress(user.getName(), user.getContact(), user.getAddress());

        if (existingContact.isPresent()) {
        	model.addAttribute("errorMessage", "This contact already exists in the database.");
            model.addAttribute("user", user);  
            return "form";
        } else {
            
            contactRepository.save(user);  
            return "redirect:/contactform";  
        }	
    }
    
    @PostMapping("/api/contact")
    public ResponseEntity<String> savePhoneNumber(@RequestBody Map<String, String> request) {
        String phoneNumber = request.get("phoneNumber");
        if (phoneNumber == null || phoneNumber.isEmpty()) {
            return ResponseEntity.badRequest().body("Phone number is required");
        }

        User contact = new User();
        contact.setContact(phoneNumber);

        contactRepository.save(contact);

        return ResponseEntity.ok("Phone number saved successfully");
    }
}

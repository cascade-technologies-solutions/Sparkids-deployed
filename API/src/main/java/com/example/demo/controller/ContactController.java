package com.example.demo.controller;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ModelAttribute;

@RestController
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;
    

    @GetMapping("/contactform")
    public String showForm(Model model) {
        model.addAttribute("contact", new Contact()); 
        return "contactForm"; 
    }

    @PostMapping("/submit-contact")
    public String submitForm(@ModelAttribute Contact contact, Model model) {
        Optional<Contact> existingContact = contactRepository.findByNameAndContactAndAddress(contact.getName(), contact.getContact(), contact.getAddress());

        if (existingContact.isPresent()) {
            model.addAttribute("errorMessage", "This contact already exists in the database.");
            model.addAttribute("contact", contact);  
            return "contactForm";  
        } else {
            contactRepository.save(contact);
            return "redirect:/contactform";  
        }
    }
    
//    @PostMapping("/api/contact")
//    public ResponseEntity<String> savePhoneNumber(@RequestBody Map<String, String> request) {
//        String phoneNumber = request.get("phoneNumber");
//        if (phoneNumber == null || phoneNumber.isEmpty()) {
//            return ResponseEntity.badRequest().body("Phone number is required");
//        }
//
//        Contact contact = new Contact();
//        contact.setContact(phoneNumber);
//
//        contactRepository.save(contact);
//
//        return ResponseEntity.ok("Phone number saved successfully");
//    }

}


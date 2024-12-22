package com.example.demo.controller;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
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
}


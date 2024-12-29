package com.Cascade.Form.Controller;

import com.Cascade.Form.Repository.ContactRepository;
import org.springframework.http.HttpStatus;

import com.Cascade.Form.entity.User;  

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
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
    
    @PostMapping("/contact")
    public ResponseEntity<String> saveContactForm(
            @RequestParam("fullName") String fullName,
            @RequestParam("phone") String contact,
            @RequestParam("email") String email,
            @RequestParam("reason") String reason,
            @RequestParam("message") String message) {

        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        if (contactRepository.existsByEmail(email)) {
            return ResponseEntity.status(409).body("Email already exists in the database");
        }

        User contactForm = new User(fullName, contact, email, reason, message);

        contactRepository.save(contactForm);

        return ResponseEntity.ok("Contact form submitted successfully");
    }
   
    @PostMapping("/job-application")
    public ResponseEntity<String> saveJobApplication(
            @RequestParam("fullName") String fullName,
            @RequestParam("email") String email,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("currentCTC") String currentCTC,
            @RequestParam("expectedCTC") String expectedCTC,
            @RequestParam("noticePeriod") String noticePeriod,
            @RequestParam("resume") MultipartFile resume,
            @RequestParam(value = "portfolioLink", required = false) String portfolioLink) {

        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        if (contactRepository.existsByEmail(email)) {
            return ResponseEntity.status(409).body("Email already exists in the database");
        }

        byte[] resumeBytes = null;
        try {
            // Convert resume to byte array for storage
            resumeBytes = resume.getBytes();
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to process the resume file. Please try again.");
        }

        User jobApplication = new User();
        jobApplication.setName(fullName);
        jobApplication.setEmail(email);
        jobApplication.setContact(phoneNumber);
        jobApplication.setCurrentCTC(currentCTC);
        jobApplication.setExpectedCTC(expectedCTC);
        jobApplication.setNoticePeriod(noticePeriod);
        jobApplication.setResume(resumeBytes);
        jobApplication.setPortfolioLink(portfolioLink);

        // Save to database
        contactRepository.save(jobApplication);

        return ResponseEntity.ok("Job application submitted successfully");
    }
    @GetMapping("/job-application/resume/{id}")
    public ResponseEntity<byte[]> getResume(@PathVariable("id") String userId) {
        Optional<User> userOptional = contactRepository.findById(userId);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            byte[] resumeData = user.getResume();

            if (resumeData != null) {
                return ResponseEntity.ok()
                        .header("Content-Disposition", "attachment; filename=resume.pdf")
                        .body(resumeData);
            } else {
                return ResponseEntity.status(404).body(null);
            }
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }

}

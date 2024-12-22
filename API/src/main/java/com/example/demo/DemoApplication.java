package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;

import java.util.Optional;
import java.util.Scanner;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner run(ContactRepository contactRepository) {
        return args -> {
            try (Scanner scanner = new Scanner(System.in)) {
                System.out.println("Welcome to the contact management system!");

                while (true) {
                    System.out.println("\nChoose an option:");
                    System.out.println("1. Add Contact");
                    System.out.println("2. View All Contacts");
                    System.out.println("3. Update Contact");
                    System.out.println("4. Delete Contact");
                    System.out.println("5. Exit");

                    int choice = getValidChoice(scanner);

                    switch (choice) {
                        case 1:
                            addContact(scanner, contactRepository);
                            break;

                        case 2:
                            viewAllContacts(contactRepository);
                            break;

                        case 3:
                            updateContact(scanner, contactRepository);
                            break;

                        case 4:
                            deleteContact(scanner, contactRepository);
                            break;

                        case 5:
                            System.out.println("Exiting... Goodbye!");
                            return;

                        default:
                            System.out.println("Invalid choice, please try again.");
                    }
                }
            }
        };
    }

    private int getValidChoice(Scanner scanner) {
        while (true) {
            try {
                int choice = scanner.nextInt();
                scanner.nextLine(); // consume newline
                if (choice < 1 || choice > 5) {
                    System.out.println("Invalid option. Please choose between 1 and 5.");
                } else {
                    return choice;
                }
            } catch (Exception e) {
                System.out.println("Invalid input. Please enter a number between 1 and 5.");
                scanner.nextLine(); 
            }
        }
    }

    private void addContact(Scanner scanner, ContactRepository contactRepository) {
        System.out.println("Enter Name:");
        String name = scanner.nextLine();
        System.out.println("Enter Contact Number:");
        String contact = scanner.nextLine();
        System.out.println("Enter Address:");
        String address = scanner.nextLine();
        System.out.println("Enter Courses:");
        String courses = scanner.nextLine();

        Contact newContact = new Contact();
        newContact.setName(name);
        newContact.setContact(contact);
        newContact.setAddress(address);
        newContact.setCourses(courses);

        contactRepository.save(newContact);
        System.out.println("Contact Added!");
    }

    private void viewAllContacts(ContactRepository contactRepository) {
        System.out.println("All Contacts:");
        contactRepository.findAll().forEach(contact -> System.out.println(contact));
    }

    private void updateContact(Scanner scanner, ContactRepository contactRepository) {
        System.out.println("Enter Contact ID to Update:");
        Long idToUpdate = getValidId(scanner);

        Optional<Contact> contactToUpdate = contactRepository.findById(idToUpdate);
        if (contactToUpdate.isPresent()) {
            Contact contact = contactToUpdate.get();

            System.out.println("Enter new Name (Leave blank to keep current value: " + contact.getName() + "):");
            String newName = scanner.nextLine();
            if (!newName.trim().isEmpty()) {
                contact.setName(newName);
            }

            System.out.println("Enter new Contact Number (Leave blank to keep current value: " + contact.getContact() + "):");
            String newContact = scanner.nextLine();
            if (!newContact.trim().isEmpty()) {
                contact.setContact(newContact);
            }

            System.out.println("Enter new Address (Leave blank to keep current value: " + contact.getAddress() + "):");
            String newAddress = scanner.nextLine();
            if (!newAddress.trim().isEmpty()) {
                contact.setAddress(newAddress);
            }

            System.out.println("Enter new Courses (Leave blank to keep current value: " + contact.getCourses() + "):");
            String newCourses = scanner.nextLine();
            if (!newCourses.trim().isEmpty()) {
                contact.setCourses(newCourses);
            }

            contactRepository.save(contact);
            System.out.println("Contact Updated!");
        } else {
            System.out.println("Contact not found!");
        }
    }

    private void deleteContact(Scanner scanner, ContactRepository contactRepository) {
        System.out.println("Enter Contact ID to Delete:");
        Long idToDelete = getValidId(scanner);

        if (contactRepository.existsById(idToDelete)) {
            contactRepository.deleteById(idToDelete);
            System.out.println("Contact Deleted!");
        } else {
            System.out.println("Contact not found!");
        }
    }

    private Long getValidId(Scanner scanner) {
        while (true) {
            try {
                Long id = scanner.nextLong();
                scanner.nextLine(); // consume newline
                return id;
            } catch (Exception e) {
                System.out.println("Invalid ID. Please enter a valid number.");
                scanner.nextLine(); // consume invalid input
            }
        }
    }

        @Configuration
    public static class WebConfig implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**") 
                    .allowedOrigins("http://localhost:3000") 
                    .allowedMethods("GET", "POST", "PUT", "DELETE") 
                    .allowCredentials(true);
        }
    }
}

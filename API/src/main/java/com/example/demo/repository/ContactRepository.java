package com.example.demo.repository;

import com.example.demo.entity.Contact;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
	
	Optional<Contact> findByNameAndContactAndAddress(String name, String contact, String address);
	}
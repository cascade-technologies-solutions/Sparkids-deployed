//package com.example.demo.service;
//
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        // Here, you would fetch the user from a database based on the username.
//        // For demonstration, we're using a hardcoded user.
//        if ("admin".equals(username)) {
//            return User.withUsername("admin")
//                    .password("{noop}password") // Noop is for plaintext passwords, use BCrypt for real applications
//                    .authorities("USER")
//                    .build();
//        } else {
//            throw new UsernameNotFoundException("User not found: " + username);
//        }
//    }
//}

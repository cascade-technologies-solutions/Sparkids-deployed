	package com.example.demo.security;
	
	import io.jsonwebtoken.*;
	import io.jsonwebtoken.security.Keys;
	import org.springframework.stereotype.Component;
	
	import java.security.Key;
	import java.util.Date;
	
	@Component
	public class JwtUtil {
	
	    private final Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512); // Secure key
	    private final long jwtExpirationMs = 3600000; // 1 hour
	
	    public String generateToken(String username) {
	        return Jwts.builder()
	                .setSubject(username)
	                .setIssuedAt(new Date())
	                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
	                .signWith(secretKey)
	                .compact();
	    }
	
	    public boolean validateToken(String token) {
	        try {
	            Jwts.parserBuilder() // Updated method for parsing
	                    .setSigningKey(secretKey) // Use the secure key
	                    .build()
	                    .parseClaimsJws(token);
	            return true;
	        } catch (JwtException | IllegalArgumentException e) {
	            return false;
	        }
	    }
	
	    public String getUsernameFromToken(String token) {
	        return Jwts.parserBuilder() // Updated method for parsing
	                .setSigningKey(secretKey)
	                .build()
	                .parseClaimsJws(token)
	                .getBody()
	                .getSubject();
	    }
	}

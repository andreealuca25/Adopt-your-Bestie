package com.adopt.your.bestie.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationRestController {

    @GetMapping("/api/data")
    public ResponseEntity<String> getData() {
        // Fetch data from a data source (e.g., database)
        String data = "Hello from Spring Boot!";
        return ResponseEntity.ok(data);
    }
}

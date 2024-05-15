package com.adopt.your.bestie.server.controller;
import com.adopt.your.bestie.server.email.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/adopt")
    public ResponseEntity<?> sendAdoptionEmail(@RequestParam String to, @RequestParam String subject, @RequestParam String body) {
        return emailService.sendAdoptionRequestEmail(to, subject, body);
    }

    @PostMapping("/contact")
    public ResponseEntity<?> sendContactUsEmail(@RequestParam String to, @RequestParam String subject, @RequestParam String body) {
        return emailService.sendContactOnHoldEmail(to, subject, body);
    }
}

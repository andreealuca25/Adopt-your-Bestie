package com.adopt.your.bestie.server.controller;
import com.adopt.your.bestie.server.email.EmailService;
import com.adopt.your.bestie.server.model.FoundPet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PostMapping(value = "/foundPet", consumes = "multipart/form-data")
    public ResponseEntity<?> sendFoundPetEmail(
            @RequestParam String to,
            @RequestParam String subject,
            @RequestPart("body") FoundPet body,
            @RequestPart(value = "attachment", required = false) MultipartFile attachment) {

        return emailService.sendFoundPetEmail(to, subject, body, attachment);
    }

}

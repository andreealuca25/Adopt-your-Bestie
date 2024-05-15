package com.adopt.your.bestie.server.email;
import com.adopt.your.bestie.server.model.ApiResponse;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public ResponseEntity<ApiResponse> sendAdoptionRequestEmail(String to, String subject, String body) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText("<html><body style='font-family: Arial, sans-serif;'>" +
                    "<h1 style='color: #333;'>Your Adoption Request</h1>" +
                    "<p style='color: #555;'>Here are the details of your request:</p>" +
                    "<p style='border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;'>" + body + "</p>" +
                    "<p>Thank you for your request. We will get back to you soon!</p>" +
                    "</body></html>", true);


            javaMailSender.send(message);
            ApiResponse successResponse = new ApiResponse("Email sent", 200);
            return ResponseEntity.ok(successResponse);
        } catch (MessagingException e) {
            ApiResponse errorResponse = new ApiResponse("Failed to send email: " + e.getMessage(), 500);
            return ResponseEntity.status(500).body(errorResponse);
        }
    }
}
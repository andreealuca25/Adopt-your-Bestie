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
            helper.setText("<html><body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>" +
                    "<div style='max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.15);'>" +
                    "<h1 style='color: #333; text-align: center;'>Your Adoption Request</h1>" +
                    "<p style='color: #555; font-size: 16px;'>Thank you for your interest in adopting a pet from us. Here are the details of your request:</p>" +
                    "<p style='border-left: 4px solid #4CAF50; background-color: #f9f9f9; padding: 10px; font-size: 16px; margin-top: 10px;'>" + body + "</p>" +
                    "<p style='color: #555; font-size: 16px;'>We will review your request and get back to you as soon as possible.</p>" +
                    "<p style='text-align: center; margin-top: 20px; font-size: 16px; color: #777;'>Best regards,<br>Adoption Team</p>" +
                    "</div>" +
                    "</body></html>", true);

            javaMailSender.send(message);
            ApiResponse successResponse = new ApiResponse("Email sent", 200);
            return ResponseEntity.ok(successResponse);
        } catch (MessagingException e) {
            ApiResponse errorResponse = new ApiResponse("Failed to send email: " + e.getMessage(), 500);
            return ResponseEntity.status(500).body(errorResponse);
        }
    }


    public ResponseEntity<ApiResponse> sendContactOnHoldEmail(String to, String subject, String body) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText("<html><body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>" +
                    "<div style='max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>" +
                    "<h1 style='color: #333; text-align: center;'>Contact Request Received</h1>" +
                    "<p style='color: #555; font-size: 16px;'>Here are the details of your contact request:</p>" +
                    "<p style='border-left: 4px solid #4CAF50; background-color: #f9f9f9; padding: 10px; font-size: 16px; margin-top: 10px;'>"+ body + "</p>" +
                    "<p style='color: #555; font-size: 16px;'>Thank you for reaching out. We value your inquiry and will respond promptly.</p>" +
                    "<p style='text-align: center; margin-top: 20px; font-size: 16px; color: #777;'>Warm regards,<br>AdoptYourBestie Team</p>" +
                    "</div>" +
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
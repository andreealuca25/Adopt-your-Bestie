package com.adopt.your.bestie.server.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.time.LocalDate;
import java.time.LocalTime;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FoundPet {
    private String petType;
    private String name;
    private String foundLocation;
    private String coordinates;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate foundDate;

    @JsonFormat(pattern = "HH:mm")
    private LocalTime foundHour;
    private String distinctiveFeatures;
    private MultipartFile attachment;


    public static String generateGoogleMapsLink(String location) throws UnsupportedEncodingException {
        String encodedLocation = URLEncoder.encode(location, "UTF-8");
        String googleMapsLink = "https://www.google.com/maps/search/?api=1&query=" + encodedLocation;
        return "<p><strong>Found Location:</strong> <a href=\"" + googleMapsLink + "\" target=\"_blank\">Click here to view on Google Maps</a></p>";
    }
    
    public String toEmailContent() {
        try {
            return "<p><strong>Pet Type:</strong> " + petType + "</p>" +
                    "<p><strong>Your Name:</strong> " + name + "</p>" +
                    "<p><strong>Found Location:</strong> " + generateGoogleMapsLink(foundLocation) + "</p>" +
                    "<p><strong>Coordinates:</strong> " + coordinates + "</p>" +
                    "<p><strong>Found Date:</strong> " + foundDate + "</p>" +
                    "<p><strong>Found Hour:</strong> " + foundHour + "</p>" +
                    "<p><strong>Distinctive Features:</strong> " + distinctiveFeatures + "</p>";
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }
}
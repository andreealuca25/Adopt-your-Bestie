package com.adopt.your.bestie.server.database.review;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "reviews")
@Getter
@Setter
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String personAndPetDetails;
    private String description;
    private int score;

    public Review() {
    }

    public Review(String personAndPetDetails, String description, int score) {
        this.personAndPetDetails = personAndPetDetails;
        this.description = description;
        this.score = score;
    }
}

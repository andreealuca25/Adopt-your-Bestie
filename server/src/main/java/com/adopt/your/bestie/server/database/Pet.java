package com.adopt.your.bestie.server.database;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "pets")
@Getter
@Setter
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String petType;
    private String breed;
    private String gender;
    private String age;
    private String icon;
    private String description;

    public Pet() {
    }

    public Pet(String name, String petType, String breed, String gender, String age, String icon, String description) {
        this.name = name;
        this.petType = petType;
        this.breed = breed;
        this.gender = gender;
        this.age = age;
        this.icon = icon;
        this.description = description;
    }
}

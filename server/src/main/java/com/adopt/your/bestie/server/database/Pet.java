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
    private String type;
    private String sex;
    private Integer years;

    public Pet() {
    }

    public Pet(String name, String type, String sex, Integer years) {
        this.name = name;
        this.type = type;
        this.sex = sex;
        this.years = years;
    }
}

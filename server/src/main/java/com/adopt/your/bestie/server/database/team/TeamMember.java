package com.adopt.your.bestie.server.database.team;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "teamMembers")
@Getter
@Setter
public class TeamMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String role;
    private String icon;
    private String description;

    public TeamMember() {
    }

    public TeamMember(String name, String role, String icon, String description) {
        this.name = name;
        this.role = role;
        this.icon = icon;
        this.description = description;
    }
}
package com.adopt.your.bestie.server.database.team;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import com.adopt.your.bestie.server.util.ObjectIdSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;


@Document("teamMembers")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TeamMember {

    @Id
    @JsonSerialize(using = ObjectIdSerializer.class)
    private ObjectId id;

    private String name;
    private String role;
    private String icon;
    private String description;

}
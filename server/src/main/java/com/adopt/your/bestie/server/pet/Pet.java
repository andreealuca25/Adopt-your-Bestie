package com.adopt.your.bestie.server.database.pet;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import com.adopt.your.bestie.server.util.ObjectIdSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Document("pets")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Pet {

    @Id
    @JsonSerialize(using = ObjectIdSerializer.class)
    private ObjectId id;

    private String name;
    private String petType;
    private String breed;
    private String gender;
    private String age;
    private String icon;
    private String description;

}

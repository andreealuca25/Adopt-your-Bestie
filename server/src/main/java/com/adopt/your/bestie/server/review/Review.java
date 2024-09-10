package com.adopt.your.bestie.server.database.review;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import com.adopt.your.bestie.server.util.ObjectIdSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Document("reviews")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Review {

    @Id
    @JsonSerialize(using = ObjectIdSerializer.class)
    private ObjectId id;

    private String personAndPetDetails;
    private String description;
    private int score;
}

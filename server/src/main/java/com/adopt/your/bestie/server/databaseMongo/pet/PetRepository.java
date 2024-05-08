package com.adopt.your.bestie.server.databaseMongo.pet;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PetRepository extends MongoRepository<Pet, ObjectId> {
    // Define custom queries if needed
}

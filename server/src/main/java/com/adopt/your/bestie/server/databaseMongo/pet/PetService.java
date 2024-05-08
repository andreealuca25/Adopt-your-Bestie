package com.adopt.your.bestie.server.databaseMongo.pet;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {
    private final PetRepository petRepository;

    @Autowired
    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }


    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    public Pet getPetById(ObjectId id) {
        return petRepository.findById(id).orElse(null);
    }

    public Pet createPet(Pet pet) {
        return petRepository.save(pet);
    }

    public Pet updatePet(ObjectId id, Pet pet) {
        Pet existingPet = petRepository.findById(id).orElse(null);
        if (existingPet != null) {
            existingPet.setName(pet.getName());
            existingPet.setPetType(pet.getPetType());
            existingPet.setBreed(pet.getBreed());
            existingPet.setGender(pet.getGender());
            existingPet.setAge(pet.getAge());
            existingPet.setIcon(pet.getIcon());
            existingPet.setDescription(pet.getDescription());
            return petRepository.save(existingPet);
        } else {
            return null;
        }
    }

    public void deletePet(ObjectId id) {
        petRepository.deleteById(id);
    }
}
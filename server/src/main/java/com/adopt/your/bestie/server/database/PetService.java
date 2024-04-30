package com.adopt.your.bestie.server.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    public Pet getPetById(Long id) {
        return petRepository.findById(id).orElse(null);
    }

    public Pet createPet(Pet pet) {
        return petRepository.save(pet);
    }

    public Pet updatePet(Long id, Pet pet) {
        Pet existingPet = petRepository.findById(id).orElse(null);
        if (existingPet != null) {
            existingPet.setType(pet.getType());
            existingPet.setName(pet.getName());
            existingPet.setSex(pet.getSex());
            existingPet.setYears(pet.getYears());
            return petRepository.save(existingPet);
        } else {
            return null;
        }
    }

    public void deletePet(Long id) {
        petRepository.deleteById(id);
    }
}
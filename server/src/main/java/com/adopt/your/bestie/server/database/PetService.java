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

    public void deletePet(Long id) {
        petRepository.deleteById(id);
    }
}
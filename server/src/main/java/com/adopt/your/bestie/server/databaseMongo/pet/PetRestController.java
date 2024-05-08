package com.adopt.your.bestie.server.databaseMongo.pet;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetRestController {

    @Autowired
    private PetService petService;

    @GetMapping("")
    public List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @GetMapping("/{id}")
    public Pet getPetById(@PathVariable String id) {
        return petService.getPetById(new ObjectId(id));
    }

    @PostMapping("/add")
    public Pet createPet(@RequestBody Pet pet) {
        return petService.createPet(pet);
    }

    @PutMapping("/{id}")
    public Pet updatePet(@PathVariable String id, @RequestBody Pet pet) {
        return petService.updatePet(new ObjectId(id), pet);
    }

    @DeleteMapping("/{id}")
    public void deletePet(@PathVariable String id) {
        petService.deletePet(new ObjectId(id));
    }
}

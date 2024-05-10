import React, { useState, useEffect } from "react";
import PetBadge from "./PetBadge";
import { petTypes } from "../../utils/pets";
import axios from "axios";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [filter, setFilter] = useState({
    breed: "",
    gender: "",
    age: "",
    petType: "",
  });

  const [loading, setLoading] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      axios
        .get("http://localhost:8080/pets")
        .then((response) => {
          setPets(response.data);
          console.log(response.data);
          setFilteredPets(response.data);
          setLoading(false);
          setShowErrorMessage(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
          setShowErrorMessage(true);
        });
    };

    fetchPets();

    return () => {};
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const setPetType = (type) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      petType: type,
    }));
  };

  useEffect(() => {
    const filtered = pets.filter((pet) => {
      return (
        (!filter.breed ||
          pet.breed.toLowerCase().includes(filter.breed.toLowerCase())) &&
        (!filter.gender ||
          pet.gender.toLowerCase() === filter.gender.toLowerCase()) &&
        (!filter.age || pet.age === filter.age) &&
        (!filter.petType ||
          pet.petType.toLowerCase() === filter.petType.toLowerCase())
      );
    });

    setFilteredPets(filtered);
  }, [filter, pets]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-10">
      <div className="flex gap-8 mb-8">
        <div className="flex flex-col gap-2 justify-center">
          {petTypes.map((petType, key) => (
            <button
              key={key}
              onClick={() => setPetType(petType)}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-md transition-colors"
            >
              {petType !== "" ? petType + "s" : "All"}
            </button>
          ))}
        </div>

        <div className="w-full max-w-3xl p-8 bg-white shadow-md rounded-lg">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="breed"
              >
                Breed:
              </label>
              <input
                id="breed"
                name="breed"
                value={filter.breed}
                onChange={handleFilterChange}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="gender"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={filter.gender}
                onChange={handleFilterChange}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="age"
              >
                Age:
              </label>
              <select
                id="age"
                name="age"
                value={filter.age}
                onChange={handleFilterChange}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Any</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
              </select>
            </div>

            <div className="flex flex-col"></div>
            <button
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              onClick={() => {
                setFilter({ breed: "", gender: "", age: "", petType: "" });
              }}
            >
              Reset
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
            {!loading ? (
              filteredPets.map((pet, index) => (
                <PetBadge pet={pet} key={index} />
              ))
            ) : (
              <div className="col-span-full flex justify-center">
                <p className="text-purple-700 text-xl text-center">
                  Loading...
                </p>
              </div>
            )}
            {showErrorMessage && (
              <div className="col-span-full flex justify-center">
                <p className="text-purple-700 text-xl text-center">
                  There are no results available at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pets;

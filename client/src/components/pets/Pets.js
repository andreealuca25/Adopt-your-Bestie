import { useState, useEffect, useCallback, useMemo } from "react";
import PetBadge from "./PetBadge";
import { petTypes } from "../../utils/pets";
import axios from "axios";

const Pets = () => {
  const [pets, setPets] = useState([]);
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
      try {
        const response = await axios.get("http://localhost:8080/pets");
        setPets(response.data);
        setLoading(false);
        setShowErrorMessage(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
        setShowErrorMessage(true);
      }
    };

    fetchPets();
  }, []);

  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  }, []);

  const setPetType = useCallback((type) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      petType: type,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilter({ breed: "", gender: "", age: "", petType: "" });
  }, []);

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
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
  }, [filter, pets]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col justify-center gap-2 p-4 bg-white shadow-md rounded-lg">
          {petTypes.map((petType, key) => (
            <button
              key={key}
              onClick={() => setPetType(petType)}
              className="font-bold py-2 px-4 text-sm text-white bg-purple-600 hover:bg-purple-700 rounded-md transition duration-200"
            >
              {petType !== "" ? petType + "s" : "All"}
            </button>
          ))}
        </div>

        <div className="w-full max-w-5xl p-4 bg-white shadow-md rounded-lg">
          <div className="grid grid-cols-4 gap-4 mb-4 items-end">
            <div className="flex flex-col col-span-1">
              <label
                className="text-xs font-medium text-gray-700"
                htmlFor="breed"
              >
                Breed:
              </label>
              <input
                id="breed"
                name="breed"
                value={filter.breed}
                onChange={handleFilterChange}
                className="px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm"
              />
            </div>

            <div className="flex flex-col col-span-1">
              <label
                className="text-xs font-medium text-gray-700"
                htmlFor="gender"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={filter.gender}
                onChange={handleFilterChange}
                className="px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm"
              >
                <option value="">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="flex flex-col col-span-1">
              <label
                className="text-xs font-medium text-gray-700"
                htmlFor="age"
              >
                Age:
              </label>
              <select
                id="age"
                name="age"
                value={filter.age}
                onChange={handleFilterChange}
                className="px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm"
              >
                <option value="">Any</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
              </select>
            </div>

            <button
              className="px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm col-span-1 bg-purple-500 text-white hover:bg-purple-600 transition duration-200"
              onClick={resetFilters}
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

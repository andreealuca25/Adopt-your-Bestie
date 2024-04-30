import React from "react";

const PetBadge = ({ pet }) => {
  const handleAdoptMe = () => {
    //TODO: open adoption form
    alert("You want to adopt " + pet.name);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <img
        src={pet.icon}
        alt={pet.name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h4 class="text-lg font-medium">{pet.name}</h4>
      <p class="text-sm text-gray-600">
        {pet.breed} - {pet.gender} - {pet.age}
      </p>
      <p class="text-sm text-gray-700 mt-2">{pet.description}</p>

      <div className="flex justify-center w-full mt-4">
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
          onClick={handleAdoptMe}
        >
          Adopt me
        </button>
      </div>
    </div>
  );
};

export default PetBadge;

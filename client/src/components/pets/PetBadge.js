import { Link } from "react-router-dom";
const PetBadge = ({ pet }) => {
  const handleAdoptMe = () => {
    console.log("Adopt");
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center">
      <img
        src={pet.icon}
        alt={pet.name}
        className="w-20 h-20 rounded-full object-cover mb-2"
      />
      <h4 className="text-md font-medium">{pet.name}</h4>
      <p className="text-xs text-gray-600">
        {pet.breed} - {pet.gender} - {pet.age}
      </p>
      <p className="text-xs text-gray-700 mt-1">{pet.description}</p>

      <div className="flex justify-center w-full mt-2">
        <Link
          to={"/pet/adopt/" + pet.id}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-full transition-colors text-sm"
          onClick={handleAdoptMe}
        >
          Adopt me
        </Link>
      </div>
    </div>
  );
};

export default PetBadge;

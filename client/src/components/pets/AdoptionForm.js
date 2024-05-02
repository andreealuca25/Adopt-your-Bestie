import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { pets } from "../../utils/pets";
const AdoptionForm = () => {
  const { petId } = useParams();

  const pet = pets[petId];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: validate
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        I want to adopt {pet.name}
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name:
        </label>
        <input
          type="text"
          className="w-full mb-4 border border-gray-300 rounded-lg p-2"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email:
        </label>
        <input
          type="email"
          className="w-full mb-4 border border-gray-300 rounded-lg p-2"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label classame="block text-sm font-medium text-gray-700 mb-1">
          Address:
        </label>
        <textarea
          className="w-full mb-4 border border-gray-300 rounded-lg p-2"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message:
        </label>
        <textarea
          className="w-full mb-4 border border-gray-300 rounded-lg p-2"
          placeholder={"Your message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="flex justify-center w-full mt-4">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdoptionForm;

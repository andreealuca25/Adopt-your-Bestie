import React, { useState } from "react";

const LeaveAReview = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    personAndPetDetails: "",
    description: "",
    score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: validate and send to server
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-lg font-semibold mb-6">Leave a Review</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-8 bg-white shadow-md rounded-lg grid gap-4"
      >
        <div className="mb-4">
          <label
            htmlFor="personAndPetDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Person and Pet Details
          </label>
          <input
            type="text"
            id="personAndPetDetails"
            name="personAndPetDetails"
            required
            value={formData.personAndPetDetails}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., David and Luna (1 year old, Cat)"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Review Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Describe your experience"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="score"
            className="block text-sm font-medium text-gray-700"
          >
            Score (1-5)
          </label>
          <input
            type="number"
            id="score"
            name="score"
            required
            min="1"
            max="5"
            value={formData.score}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveAReview;

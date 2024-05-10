import React, { useState } from "react";
import { useParams } from "react-router-dom";

const FoundPetForm = () => {
  const { geoPosition } = useParams();
  const [formData, setFormData] = useState({
    petType: "",
    ownerName: "",
    contactInfo: "",
    foundLocation: geoPosition || "",
    foundDate: new Date().toISOString().split("T")[0],
    foundHour: new Date().toTimeString().split(" ")[0].slice(0, 5),
    distinctiveFeatures: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: validate form data and send it to the server
    const formDataCopy = { ...formData };
    formDataCopy.attachment = formData.attachment?.name;
    console.log(formDataCopy);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-12">
      <h2 className="text-lg font-semibold mb-6"> Report a Found Pet</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-8 bg-white shadow-lg rounded-lg grid grid-cols-2 gap-6"
      >
        <div>
          <label
            htmlFor="petType"
            className="block text-sm font-medium text-gray-700"
          >
            Type of Pet
          </label>
          <input
            type="text"
            id="petType"
            name="petType"
            required
            value={formData.petType}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="ownerName"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            required
            value={formData.ownerName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="contactInfo"
            className="block text-sm font-medium text-gray-700"
          >
            Your Contact Information
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            required
            value={formData.contactInfo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="foundLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Found Location
          </label>
          <input
            type="text"
            id="foundLocation"
            name="foundLocation"
            value={formData.foundLocation}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="foundDate"
            className="block text-sm font-medium text-gray-700"
          >
            Found Date
          </label>
          <input
            type="date"
            id="foundDate"
            name="foundDate"
            value={formData.foundDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="foundHour"
            className="block text-sm font-medium text-gray-700"
          >
            Found Hour
          </label>
          <input
            type="time"
            id="foundHour"
            name="foundHour"
            value={formData.foundHour}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="distinctiveFeatures"
            className="block text-sm font-medium text-gray-700"
          >
            Distinctive Features
          </label>
          <textarea
            id="distinctiveFeatures"
            name="distinctiveFeatures"
            value={formData.distinctiveFeatures}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Describe any notable features"
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="attachment"
            className="block text-sm font-medium text-gray-700"
          >
            Upload a Photo
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoundPetForm;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SubmitErrorPage from "../common/SubmitErrorPage";
import SuccessPage from "../common/SuccessPage";

const AdoptionForm = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [requestStatus, setRequestStatus] = useState({
    error: false,
    success: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/pets/${petId}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        //TODO: add error message
      });
  }, [petId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormDataValid = () => {
    return (
      formData.name.trim() && formData.email.trim() && formData.message.trim()
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormDataValid()) {
      setRequestStatus({ success: false, error: true });
      return;
    }

    const url = new URL("http://localhost:8080/adopt");
    const params = {
      to: formData.email,
      subject: `Adoption Form - ${formData.name} for ${pet.name}`,
      body: formData.message,
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setRequestStatus({ success: true, error: false });
    } catch (error) {
      console.error("Error:", error);
      setRequestStatus({ success: false, error: true });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
      {requestStatus.error ? (
        <SubmitErrorPage typeOfData="adoption form" />
      ) : requestStatus.success ? (
        <SuccessPage
          message="Your adoption request has been sent successfully!"
          redirectLink="/pets"
          redirectMessage="See other pets"
        />
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            I want to adopt {pet.name || "this pet"}
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              className="w-full mb-4 border border-gray-300 rounded-lg p-2"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="w-full mb-4 border border-gray-300 rounded-lg p-2"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message:
            </label>
            <textarea
              name="message"
              className="w-full mb-4 border border-gray-300 rounded-lg p-2"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
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
        </>
      )}
    </div>
  );
};

export default AdoptionForm;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SubmitErrorPage from "../common/SubmitErrorPage";
import SuccessPage from "../common/SuccessPage";
const FoundPetForm = () => {
  const { geoPosition } = useParams();
  const [formData, setFormData] = useState({
    petType: "",
    name: "",
    email: "",
    foundLocation: "",
    coordinates: geoPosition || "",
    foundDate: new Date().toISOString().split("T")[0],
    foundHour: new Date().toTimeString().split(" ")[0].slice(0, 5),
    distinctiveFeatures: "",
    attachment: null,
  });

  const [requestStatus, setRequestStatus] = useState({
    error: false,
    success: false,
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

  const isFormDataValid = () => {
    //TODO: add validation
    return (
      !formData.petType ||
      !formData.name ||
      !formData.foundLocation ||
      !formData.email ||
      !formData.foundDate ||
      !formData.foundHour
    );
  };
  const reverseGeocode = async (lat, lon) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
    );
    const data = await response.json();
    if (data && data.address) {
      const { road, house_number, city, town, village, state, country } =
        data.address;
      return `${house_number ? house_number + " " : ""}${
        road ? road + ", " : ""
      }${city || town || village || ""}${state ? ", " + state : ""}${
        country ? ", " + country : ""
      }`;
    } else {
      return "";
    }
  };
  useEffect(() => {
    const fetchAddress = async () => {
      const arrayCoordinates = geoPosition.split(",");
      const address = await reverseGeocode(
        arrayCoordinates[0],
        arrayCoordinates[1]
      );
      setFormData((prevData) => ({
        ...prevData,
        foundLocation: address,
      }));
    };
    fetchAddress();
  }, [geoPosition]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormDataValid) return;

    const formDataToSend = new FormData();
    formDataToSend.append("to", formData.email);
    formDataToSend.append("subject", "Found Pet Report");
    formDataToSend.append(
      "body",
      new Blob(
        [
          JSON.stringify({
            petType: formData.petType,
            name: formData.name,
            foundLocation: formData.foundLocation,
            coordinates: formData.coordinates,
            foundDate: formData.foundDate,
            foundHour: formData.foundHour,
            distinctiveFeatures: formData.distinctiveFeatures,
          }),
        ],
        { type: "application/json" }
      )
    );

    if (formData.attachment) {
      formDataToSend.append("attachment", formData.attachment);
    }

    fetch("http://localhost:8080/foundPet", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setRequestStatus({ success: true, error: false });
      })
      .catch((error) => {
        console.error("Error:", error);
        setRequestStatus({ success: false, error: true });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-12">
      {requestStatus.error ? (
        <SubmitErrorPage typeOfData="found pet report" />
      ) : requestStatus.success ? (
        <SuccessPage
          message="
Your request has been sent successfully. We will get in touch with you via email!"
          redirectLink="/"
          redirectMessage="Go to the Homepage"
        />
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-6">Report a Found Pet</h2>

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
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email" // Corrected to type "email"
                id="email"
                name="email"
                required
                value={formData.email}
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
                required
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
                required
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
                required
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
        </>
      )}
    </div>
  );
};

export default FoundPetForm;

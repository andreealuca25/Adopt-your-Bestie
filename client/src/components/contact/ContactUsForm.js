import { useState } from "react";
import SubmitErrorPage from "../common/SubmitErrorPage";
import SuccessPage from "../common/SuccessPage";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [requestStatus, setRequestStatus] = useState({
    error: false,
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
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

    const url = new URL("http://localhost:8080/contact");
    const params = {
      to: formData.email,
      subject: `Contact Form - ${formData.name}`,
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
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-lg font-semibold mb-6">Contact Us</h2>

      {requestStatus.error ? (
        <SubmitErrorPage typeOfData="contact form" />
      ) : requestStatus.success ? (
        <SuccessPage
          message="Your message has been sent successfully!"
          redirectLink="/"
          redirectMessage="Go to the Homepage"
        />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl p-8 bg-white shadow-md rounded-lg grid gap-4"
        >
          <div className="mb-4">
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

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Type your message here"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUsForm;

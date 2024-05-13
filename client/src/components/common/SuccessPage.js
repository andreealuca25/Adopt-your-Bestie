import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = ({
  typeOfData = "request",
  redirectLink = "/",
  redirectMessage = "Go to the Homepage",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-800">
      <p className="mb-6 text-lg">
        Your {typeOfData} has been submitted successfully!
      </p>
      <Link
        to={redirectLink}
        className="px-6 py-3 bg-yellow-500 text-white rounded-md"
      >
        {redirectMessage}
      </Link>
    </div>
  );
};

export default SuccessPage;

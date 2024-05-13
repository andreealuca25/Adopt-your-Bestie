import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="mb-6 text-lg">
        The page you are looking for does not exist. Please check the URL or
        return to the homepage.
      </p>
      <Link to="/" className="px-6 py-3 bg-yellow-500 text-white rounded-md">
        Go to the Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;

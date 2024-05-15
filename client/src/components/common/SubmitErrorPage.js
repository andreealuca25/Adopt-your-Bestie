import { Link } from "react-router-dom";

const SubmitErrorPage = ({ typeOfData = "request" }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-800">
      <p className="mb-6 text-lg">
        There has been a problem with submitting your {typeOfData}. Please try
        again later.
      </p>
      <Link to="/" className="px-6 py-3 bg-yellow-500 text-white rounded-md">
        Go to the Homepage
      </Link>
    </div>
  );
};

export default SubmitErrorPage;

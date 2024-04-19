import React from "react";
import { Link } from "react-router-dom";
const DonateButton = () => {
  return (
    <Link
      to={"/donate"}
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
    >
      Donate
    </Link>
  );
};
export default DonateButton;

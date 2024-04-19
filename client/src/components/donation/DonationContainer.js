import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import DonationForm from "./DonationForm";
const DonationContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-6">
        <DonationForm />
        <Footer />
      </div>
    </div>
  );
};

export default DonationContainer;

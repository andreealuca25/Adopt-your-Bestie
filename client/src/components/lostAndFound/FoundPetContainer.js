import React from "react";
import FoundPetForm from "./FoundPetForm";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";

const LostAndFoundFormContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-6">
        <FoundPetForm />
        <Footer />
      </div>
    </div>
  );
};

export default LostAndFoundFormContainer;

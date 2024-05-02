import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import AdoptionForm from "./AdoptionForm";
const AdoptionFormContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-32">
        <AdoptionForm />
        <Footer />
      </div>
    </div>
  );
};

export default AdoptionFormContainer;

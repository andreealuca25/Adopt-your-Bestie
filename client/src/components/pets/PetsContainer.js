import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import PetsGallery from "./PetsGallery";
const PetsContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-32">
        <PetsGallery />
        <Footer />
      </div>
    </div>
  );
};

export default PetsContainer;

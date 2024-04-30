import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import Pets from "./Pets";
const PetsContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-10">
        <Pets />
        <Footer />
      </div>
    </div>
  );
};

export default PetsContainer;

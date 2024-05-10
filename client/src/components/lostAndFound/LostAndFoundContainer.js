import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import LostAndFoundMap from "./LostAndFoundMap";
import FoundPetInstructions from "./FoundPetInstructions";

const LostAndFoundContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <div className="flex items-center">
          <FoundPetInstructions />
          <LostAndFoundMap />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LostAndFoundContainer;

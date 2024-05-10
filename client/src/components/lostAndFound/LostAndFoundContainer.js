import React from "react";
import LostAndFoundMap from "./LostAndFoundMap";
import FoundPetInstructions from "./FoundPetInstructions";
import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";

const LostAndFoundContainer = () => {
  return (
    <NavBarFooterWrapper topPadding="pt-20">
      <div className="flex items-center">
        <FoundPetInstructions />
        <LostAndFoundMap />
      </div>
    </NavBarFooterWrapper>
  );
};

export default LostAndFoundContainer;

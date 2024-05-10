import React from "react";
import FoundPetForm from "./FoundPetForm";
import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";

const LostAndFoundFormContainer = () => {
  return (
    <NavBarFooterWrapper topPadding="pt-6">
      <FoundPetForm />
    </NavBarFooterWrapper>
  );
};

export default LostAndFoundFormContainer;

import React from "react";
import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";
import Reviews from "./Reviews";

const ReviewsContainer = () => {
  return (
    <NavBarFooterWrapper topPadding="pt-16">
      <Reviews />
    </NavBarFooterWrapper>
  );
};

export default ReviewsContainer;

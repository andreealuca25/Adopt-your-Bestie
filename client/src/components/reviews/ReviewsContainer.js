import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import Reviews from "./Reviews";

const ReviewsContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-32">
        <Reviews />
        <Footer />
      </div>
    </div>
  );
};

export default ReviewsContainer;

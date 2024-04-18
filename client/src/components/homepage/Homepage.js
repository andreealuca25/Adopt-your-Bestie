import React from "react";
import MainMenu from "./Header";
import Banner from "./Banner";
import PetsGallery from "./PetsGallery";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <MainMenu />
      <Banner />
      <PetsGallery />
      <Footer />
    </div>
  );
};

export default Homepage;

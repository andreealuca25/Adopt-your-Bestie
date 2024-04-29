import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import AboutUs from "./AboutUs";
const AboutUsContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsContainer;

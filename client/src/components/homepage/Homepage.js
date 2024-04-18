import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-6">
        <Banner />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

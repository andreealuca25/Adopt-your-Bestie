import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";

const NavBarFooterWrapper = ({ children, topPadding = "pt-32" }) => {
  return (
    <div>
      <NavBar />
      <div className={topPadding}>{children}</div>
      <Footer />
    </div>
  );
};

export default NavBarFooterWrapper;

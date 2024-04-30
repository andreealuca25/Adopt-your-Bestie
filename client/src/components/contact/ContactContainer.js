import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import ContactUsForm from "./ContactUsForm";
const ContactContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <ContactUsForm />
        <Footer />
      </div>
    </div>
  );
};

export default ContactContainer;

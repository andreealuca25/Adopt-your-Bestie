import React from "react";
import ContactUsForm from "./ContactUsForm";
import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";
const ContactContainer = () => {
  return (
    <NavBarFooterWrapper topPadding="pt-20">
      <ContactUsForm />
    </NavBarFooterWrapper>
  );
};

export default ContactContainer;

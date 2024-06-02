import React from "react";
import NavBar from "../homepage/NavBar";
import Footer from "../homepage/Footer";
import DonationForm from "./DonationForm";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


export default function DonationContainer(){
  const stripePromise = loadStripe('pk_live_51PHreUJoSBaYIuuhyF2usHOPiSPQ1YkdXOFjkzFjwbEtGA2gj1rxzVxsKkUK2IvpFSruFoszynVEmfGwc5jdfpVE00FgIgViDg');
  return (
<<<<<<< Updated upstream
    <div>
      <NavBar />
      <div className="pt-6">
        <DonationForm />
        <Footer />
      </div>
    </div>
=======
    <NavBarFooterWrapper topPadding="pt-6">
      <Elements stripe={stripePromise}>
        <DonationForm />
      </Elements>
    </NavBarFooterWrapper>
>>>>>>> Stashed changes
  );
};

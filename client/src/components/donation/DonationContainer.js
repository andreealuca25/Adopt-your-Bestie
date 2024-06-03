import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";
import DonationForm from "./DonationForm";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


export default function DonationContainer(){
  const stripePromise = loadStripe('pk_live_51PHreUJoSBaYIuuhyF2usHOPiSPQ1YkdXOFjkzFjwbEtGA2gj1rxzVxsKkUK2IvpFSruFoszynVEmfGwc5jdfpVE00FgIgViDg');
  return (
<<<<<<< HEAD
    <NavBarFooterWrapper topPadding="pt-6">
      <DonationForm />
    </NavBarFooterWrapper>
=======
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
>>>>>>> client_BMF
  );
};

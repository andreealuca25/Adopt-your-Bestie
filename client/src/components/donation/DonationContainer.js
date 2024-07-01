import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";
import DonationForm from "./DonationForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function DonationContainer() {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
  return (
    <NavBarFooterWrapper topPadding="pt-6">
      <Elements stripe={stripePromise}>
        <DonationForm />
      </Elements>
    </NavBarFooterWrapper>
  );
}

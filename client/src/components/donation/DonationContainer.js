import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";
import DonationForm from "./DonationForm";
const DonationContainer = () => {
  return (
    <NavBarFooterWrapper topPadding="pt-6">
      <DonationForm />
    </NavBarFooterWrapper>
  );
};

export default DonationContainer;

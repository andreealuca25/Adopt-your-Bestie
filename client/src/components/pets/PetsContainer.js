import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";
import Pets from "./Pets";
const PetsContainer = () => {
  return (
    <NavBarFooterWrapper topPadding="pt-16">
      <Pets />
    </NavBarFooterWrapper>
  );
};

export default PetsContainer;

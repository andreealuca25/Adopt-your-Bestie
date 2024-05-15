import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";
import Pets from "./Pets";
const PetsContainer = () => {
  return (
    <NavBarFooterWrapper topPadding="pt-10">
      <Pets />
    </NavBarFooterWrapper>
  );
};

export default PetsContainer;

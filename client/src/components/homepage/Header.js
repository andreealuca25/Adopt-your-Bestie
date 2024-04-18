import React from "react";
import Title from "./Title";
import MainMenu from "./MainMenu";
import DonateButton from "./DonateButton";
const Header = () => {
  return (
    <div className="flex flex-row">
      <Title />
      <MainMenu />
      <DonateButton />
    </div>
  );
};

export default Header;

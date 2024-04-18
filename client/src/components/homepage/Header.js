import React from "react";
import Title from "./Title";
import MainMenu from "./MainMenu";
import DonateButton from "./DonateButton";

const Header = () => {
  return (
    <header className="bg-gray-100 py-2 px-3">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Title />
        <MainMenu />
        <DonateButton />
      </div>
    </header>
  );
};

export default Header;

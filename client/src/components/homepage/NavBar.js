import React from "react";
import Title from "./Title";
import MainMenu from "./MainMenu";
import DonateButton from "./DonateButton";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 py-2 px-3 z-50">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Title />
        <MainMenu />
        <DonateButton />
      </div>
    </header>
  );
};

export default NavBar;

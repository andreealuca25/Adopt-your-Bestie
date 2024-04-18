import React from "react";

const MainMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-2">
        <li>
          <a
            href="#aboutUs"
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            About us
          </a>
        </li>
        <li>
          <a
            href="#pets"
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Pets
          </a>
        </li>
        <li>
          <a
            href="#lostAndFound"
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Lost & Found
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Reviews
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;

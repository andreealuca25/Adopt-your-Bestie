import React from "react";
import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-2">
        <li>
          <Link
            to={"/"}
            className="text-sm font-bold text-purple-600 bold hover:text-gray-800 transition-colors"
          >
            Homepage
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to={"/pets"}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Pets
          </Link>
        </li>
        <li>
          <Link
            to={"/lostAndFound"}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Lost & Found
          </Link>
        </li>
        <li>
          <Link
            to={"/reviews"}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;

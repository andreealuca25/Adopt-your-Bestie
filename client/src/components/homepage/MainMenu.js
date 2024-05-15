import { NavLink } from "react-router-dom";
const MainMenu = () => {
  const activeStyle =
    "text-sm font-bold text-purple-500 bold hover:text-purple-600 transition-colors";
  const defaultStyle =
    "text-sm font-bold text-gray-600 hover:text-gray-800 transition-colors";
  return (
    <nav>
      <ul className="flex space-x-2">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/pets"}
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            Pets
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/lostAndFound"}
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            Lost & Found
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/reviews"}
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;

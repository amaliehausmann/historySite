import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";

export function NavBar({ theme }) {
  return (
    <nav className={`${style.navStyling} ${style[theme]}`}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLinkActive}` : style.navLink
            }
            to={"/byDate"}
          >
            BY DATE
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLinkActive}` : style.navLink
            }
            to={"/"}
          >
            TODAY
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLinkActive}` : style.navLink
            }
            to={"/about"}
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "./images/logo.png";
import user from "./images/user.png";
import menu_butt from "./images/menu.png";
import close_menu from "./images/close_hambugger.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="Nav-top">
        <ul>
          <li>
            <NavLink to="/">
              <img src={logo} alt="logo" />
              NFT Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink to="/market">Marketplace</NavLink>
          </li>
          <li>
            <NavLink to="/rankings">Rankings</NavLink>
          </li>
          <li>
            <NavLink to="./wallet">Connect a wallet</NavLink>
          </li>
          <li>
            <NavLink to="/account">
              <button>
                <img src={user} alt="user" /> Sign Up
              </button>
            </NavLink>
          </li>
          <li>
            <img
              src={menu ? close_menu : menu_butt}
              alt="menu"
              onClick={handleClick}
            />
          </li>
        </ul>
      </div>
      <div
        className="Nav-bottom"
        style={menu ? { marginLeft: "0" } : { marginLeft: "-100vw" }}
      >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/market">Marketplace</NavLink>
          </li>
          <li>
            <NavLink to="/rankings">Rankings</NavLink>
          </li>
          <li>
            <NavLink to="./wallet">Connect a wallet</NavLink>
          </li>
          <li>
            <NavLink to="/account">
              <button>
                <img src={user} alt="user" /> Sign Up
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

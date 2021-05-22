import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserImage from "../../assets/images/wlcca339.bmp";
import "./Header.scss";

const Header = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  };

  return (
    <header className={"Header"}>
      <div className={"Header-Inner"}>
        <NavLink to="/" className={"Header-LogoContainer"}>
          <h2 className={"Logo"}>YummyInTummy</h2>
        </NavLink>
        <div className={"Header-Hamburger"}>
          <div className={"Header-HamburgerLine"}></div>
          <div className={"Header-HamburgerLine"}></div>
          <div className={"Header-HamburgerLine"}></div>
        </div>
        <nav className={"Header-Nav"}>
          {!loggedIn ? (
            <NavLink onClick={handleLogin} className={"Header-NavItem"} to="/">
              Login
            </NavLink>
          ) : (
            <div className={"LoggedUser"}>
              <div className={"User"}>
                <img className={"User-Image"} src={UserImage} />
                <p className={"User-Name"}>Lorena</p>
              </div>
              <NavLink
                onClick={handleLogout}
                className={"Header-NavItem"}
                to="/"
              >
                Logout
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
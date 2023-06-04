import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { headerStore } from "../../store/headerStore";
import { authStore } from "../../store/authStore";
import useOutsideClick from "../UseOutsideClick";

const HamburgerMenu = () => {
  const { logOut } = authStore();

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const { locations } = headerStore();

  const toggleHamburgerMenu = (e) => {
    e.stopPropagation();
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const handleOutsideClick = () => {
    setShowHamburgerMenu(false);
  };

  const hamburgerMenuRef = useOutsideClick(handleOutsideClick, ["click"]);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div ref={hamburgerMenuRef} className="main_container">
      <button
        className="hover:bg-activeGrayColor relative z-40"
        onClick={toggleHamburgerMenu}
      >
        {showHamburgerMenu ? (
          <RxCross2 className="hamburgericon" />
        ) : (
          <RxHamburgerMenu className="hamburgericon" />
        )}
      </button>
      <div
        className={`${showHamburgerMenu ? "  active" : " inactive"}  hamburger`}
      >
        <div
          className="py-1 flexdiv col sm:text-4xl text-3xl "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {locations.map((location, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "bg-thirdColor text-secondaryText"
                    : "hover:bg-activeGrayColor"
                } w-36 rounded-sm `
              }
              to={location.url}
              onClick={toggleHamburgerMenu}
            >
              {location.label}
            </NavLink>
          ))}
          <button
            onClick={handleLogOut}
            className="w-36 rounded-sm  hover:bg-activeGrayColor"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

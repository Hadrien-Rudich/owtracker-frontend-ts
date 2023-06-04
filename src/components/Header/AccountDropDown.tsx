import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { FaRegUser } from "react-icons/fa";

const AccountDropDown = () => {
  const { logOut } = authStore();
  const [showAccountDropDown, setShowAccountDropDown] = useState(false);

  const toggleAccountDropdown = (e) => {
    e.stopPropagation();
    setShowAccountDropDown(!showAccountDropDown);
  };

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div
      onMouseLeave={toggleAccountDropdown}  
      className="AccountDropDown_container relative z-40"
    >
      <button
        onMouseEnter={toggleAccountDropdown}    
        className={`${
          showAccountDropDown
            ? "bg-activeColor"
            : "bg-mainColor hover:bg-activeColor hover:shadow-lg"
        }  accounticon flexdiv duration-[800ms]`}
      >
        <FaRegUser className="h-10 w-10 drop-shadow-lg" />
      </button>
      <div
      className="relative">
        <ul
          className={`${
            showAccountDropDown ? "active" : "inactive"
          }  accountdropdown flexdiv col gap-2`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "accountdropdownoption active p-2"
                  : "accountdropdownoption inactive p-2"
              }
              to="/account"
            >
              Account
            </NavLink>
          </li>
          <li>
            <button
              className="accountdropdownoption inactive"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountDropDown;

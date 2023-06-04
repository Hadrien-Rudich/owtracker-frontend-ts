import React from "react";
import { NavLink } from "react-router-dom";
import { headerStore } from "../../store/headerStore";

const Tabs = () => {
  const { locations } = headerStore();

  return (

    <div className="md:flex hidden">
    {locations.map((location, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            isActive
              ? "headertab active"
              : "headertab inactive "
          } 
          to={location.url}
        >
          {location.label}
        </NavLink>
      ))}
      </div>
 
  );
};

export default Tabs;

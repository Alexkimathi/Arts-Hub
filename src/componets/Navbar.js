import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">
        <NavLink to={"/allarts"} exact="true">
          Art-Hub
        </NavLink>
      </div>
      <ul>
        <NavLink to={"/allarts"} exact="true">
          AllArts
        </NavLink>
        <NavLink to={"/newartsform"} exact="true">
          NewArts
        </NavLink>
      
      </ul>
    </nav>
  );
}
export default Navbar;

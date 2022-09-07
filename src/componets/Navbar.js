import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">
<<<<<<< HEAD
        <NavLink to={"/"} exact="true">
=======
        <NavLink to={"/allarts"} exact="true">
>>>>>>> 1a0bbb9660070e89a4ae91a15faec06101948e5f
          ArtCalleryWebApp
        </NavLink>
      </div>
      <ul>
        <NavLink to={"/allarts"} exact="true">
          AllArts
        </NavLink>
        <NavLink to={"/allarts"} exact="true">
          NewArts
        </NavLink>
<<<<<<< HEAD
=======
      
>>>>>>> 1a0bbb9660070e89a4ae91a15faec06101948e5f
      </ul>
    </nav>
  );
}
export default Navbar;

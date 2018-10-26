import React, from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Cover</h3>
        <nav class="nav nav-masthead justify-content-center">
          <NavLink to="/" exact={true} className="nav-link">
            Pagrindinis
          </NavLink>
          <NavLink to="/feed" className="nav-link">
            Feed
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

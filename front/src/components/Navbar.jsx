import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="masthead mb-auto padding-top text-center margin-bottom--big">
      <div className="inner">
        <h3 className="masthead-brand">CarBooking</h3>
        <nav className="nav nav-masthead justify-content-center">
          <NavLink to="/" exact={true} className="nav-link">
            Pagrindinis
          </NavLink>
          <NavLink to="/feed" className="nav-link">
            Feed
          </NavLink>
        </nav>
        <div className="clearfix" />
      </div>
    </header>
  );
};

export default Navbar;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge rounded-pill bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;

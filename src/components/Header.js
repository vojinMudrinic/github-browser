import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <h3 className="logo">Github</h3>
      <Link to="/search">
        <li>Search</li>
      </Link>
      <Link to="/">
        <li>Home</li>
      </Link>
    </div>
  );
}

export default Header;

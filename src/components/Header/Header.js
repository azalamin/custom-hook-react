import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <Link to={"/home"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Sign UP</Link>
    </nav>
  );
};

export default Header;

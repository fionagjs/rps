// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ score, logo, path }) => {
  return (
    <div className="header">
      <Link to={path}>
        <img src={logo} alt="Logo" ></img>
      </Link>
      <div className="score-box">
        <span>score</span>
        <div className="score">{score}</div>
      </div>
    </div>
  );
};

export default Header;

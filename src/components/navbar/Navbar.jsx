import { useState } from "react";

import "./navbar.css";

import { Link } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="container">
        <h1 style={{ marginLeft: "1rem", cursor: "pointer" }}>
          <Link style={{ color: "#00d8ff" }} to="/defi">
            Defi
          </Link>
        </h1>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item">
            <Link to="/defi">Platform</Link>
          </li>
          <li className="nav-item">
            <Link to="/defi/developers">Developers</Link>
          </li>
          <li className="nav-item">
            <Link to="/defi/community">Community</Link>
          </li>
          <li className="nav-item">
            <Link to="/defi/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/defi/signup" className="btn">
              Use Defi
            </Link>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <AiOutlineClose className="icon" />
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

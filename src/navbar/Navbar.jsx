import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { Box, Button } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar shadow" onClick={(e) => e.stopPropagation()}>
        <div className="container-fluid">
          <div className="nav-logo">
            <img
              src="./images/logo.png"
              alt="logo"
              className="logo img-responsive"
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Services"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/Clientele"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Clientele
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/Projects"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Career"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
            <li>
              {" "}
              <a href="new.pdf" download="new.pdf" className="nav-links btnn">
                Get Brochure
              </a>
            </li>
          </ul>
          <div className="nav-icon mx-end" onClick={handleClick}>
            {click ? (
              <CloseOutlinedIcon sx={{ fontSize: 40 }} />
            ) : (
              <MenuOutlinedIcon sx={{ fontSize: 40 }} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

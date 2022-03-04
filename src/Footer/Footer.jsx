import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  AiFillEnvironment,
  AiFillMail,
  AiFillPhone,
  AiFillHome,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="Footer_section mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="Col-md-4 col-lg-4 col-12">
              <div className="Footer_logo">
                <img src="images/logo.png" alt="Footer logo" />
                <p>
                  indusAirCon was established in 1990 by John Britto and Zat
                  Maxwell in Newyork, United States. John and Zat continue to
                  manage the company today and take pride in providing a family
                  environment for all of our employees. Both owners are very
                  hands-on in all aspects.
                  <br/> 
                  <br/>
                  <NavLink to={"/About"} className="btnn">
                   Read More
                  </NavLink>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <h3>USEFULL LINKS</h3>
              <ul className="Footer_list">
                <NavLink to={"/"} className="nav_link">
                  <li>FAQ</li>
                </NavLink>
                <NavLink to={"/"} className="nav_link">
                  <li>About indusAircon</li>
                </NavLink>
                <NavLink to={"/"} className="nav_link">
                  <li>terms of Use</li>
                </NavLink>
                <NavLink to={"/"} className="nav_link">
                  <li>Privacy Policy</li>
                </NavLink>
                <NavLink to={"/"} className="nav_link">
                  <li>News & Articles</li>
                </NavLink>
                <NavLink to={"/"} className="nav_link">
                  <li>Latest blog</li>
                </NavLink>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <h3>CONTACT DETAILS</h3>
              <div className="Footer_content">
                <h6>
                  <AiFillEnvironment /> Address:
                </h6>
                <p>113A , Maharanibagh, New Delhi 110014</p>
                <h6 className="mt-3">
                  <AiFillPhone /> Phone No:
                </h6>
                <a href="tel:+91-8509354490">+91-8509354490 </a> ,
                <span>
                  <a href="tel:+91-7042886086"> +91-7042886086 </a>
                </span>
                <span>
                  <a href="tel:+91-8092157817"> +91-8092157817 </a>
                </span>
                <h6 className="mt-3">
                  <AiFillMail /> Email:
                </h6>
                <a href="mailto:basharkhanrif9322@gmail.com">indusaircon@gmail.com</a>
                <h6 className="mt-3">
                  <AiFillHome /> Office Hrs:
                </h6>
                <p>Mon-Satday: 9am to 8pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

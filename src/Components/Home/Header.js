import React from "react";
import "./Home.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Header = () => {

  return (
    <>
      <section className="header_section my-5">
        <div className="container">
          <div className="row">
            <h1 className="my-3">About Us</h1>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="ingsection">
                <img
                  src="../images/header.png"
                  className="w-100"
                  alt="AboutImg"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="content mx-end">
                <h2>Who We Are</h2>
                <p>
                IndusAircon is a unique and an innovative compnay
                comprising expert professionals sharing a common goal
                and setting higher standard to maximize the benifit of all
                clients and stakeholder
                </p>
                <h2>What We Do</h2>
                <p>We Poviding following services realetd to
                  HVAC ( heating ventilation & Air conditioning</p>
                <ul className="services_about">
                    <li><ArrowRightAltIcon/> Designing</li>
                    <li><ArrowRightAltIcon/> installation</li>
                    <li><ArrowRightAltIcon/> Maintenance</li>
                    <li><ArrowRightAltIcon/> Comissioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

import React from "react";
import { FcAssistant } from "react-icons/fc";
import { AiFillCheckSquare } from "react-icons/ai";
import "./Home.css";
const ChooseServices = () => {
  return (
    <>
      <section className="Choose_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="main_content">
                <div className="C_content">
                  <h1>Why you should choose our services</h1>
                  <p>
                  We have a team of highly Trained and Experienced
                    Instalation and Services technicians. Using
                    Computerized Design, Estimating and Scheduling
                    Technology
                  </p>
                </div>
                <div className="Quality_content">
                  <p>
                    <AiFillCheckSquare className="check_icons" /> Quality
                    Production
                  </p>
                  <p className="giveMarhin">
                    <AiFillCheckSquare className="check_icons" /> Affordable
                    Cost
                  </p>
                </div>
                <div className="Icons_withContent my-3 shadow bg-white p-3">
                  <FcAssistant className="user_ions" />
                  <div className="iocn_content mx-3">
                    <h3> We are the professional</h3>
                    <p>
                    We belive in
                    keeping our words at fullest and view our work with
                    reality instead of put it before the rose tinted glasses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="ingsection">
                <img
                  className="Professional_images img-responsive w-100"
                  src="../images/2.png"
                  alt="services_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseServices;

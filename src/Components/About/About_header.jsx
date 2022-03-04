import React from "react";
import "./About.css";
import {
  AiOutlineRise,
  AiOutlineSliders,
  AiOutlineWeibo,
  AiTwotoneSliders,
  AiOutlineUnorderedList,
  AiOutlineHistory,
} from "react-icons/ai";

const About_header = () => {
  return (
    <>
      <section className="About_header_section">
        <div className="container">
          <h1>KNOW ALL ABOUT AIR MAKER</h1>
          <div className="row my-3">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="about_card ">
                <div className="About_icons">
                  <AiOutlineRise className="icons shadow" />
                </div>
                <div className="About_content">
                  <h3>About</h3>
                  <p>
                    projects in the field of HEATING, VENTILATION &
                    AIR-CONDITIONING and Textile Industries. Air Maker was
                    established in 2015 and has been executed various projects
                    all over in north India.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="about_card team_card">
                <div className="About_icons">
                  <AiOutlineSliders className="icons shadow" />
                </div>
                <div className="About_content">
                  <h3>Our Vision</h3>
                  <p>
                  To be the most respected, trusted and admirable
                  company providing full value to its custumer. We belive in
                  keeping our words at fullest and view our work with
                  reality instead of put it before the rose tinted glasses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="about_card team_card">
                <div className="About_icons">
                  <AiOutlineWeibo className="icons shadow" />
                </div>
                <div className="About_content">
                  <h3>Our Mission</h3>
                  <p>
                  IndusAircon is a unique and an innovative compnay
                  comprising expert professionals sharing a common goal
                  and setting higher standard to maximize the benifit of all
                  clients and stakeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* our values  */}
          <h2 className="mt-5">OUR VALUES</h2>
          <div className="row my-3">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="about_card team_card">
                <div className="About_icons">
                  <AiOutlineUnorderedList className="icons shadow" />
                </div>
                <div className="About_content">
                  <h3>Superior Services</h3>
                  <p>
                    We place our customers at the center of our activities and
                    our quest to satisfy their professional needs drives
                    everything we do
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="about_card team_card">
                <div className="About_icons">
                  <AiOutlineHistory className="icons shadow" />
                </div>
                <div className="About_content">
                  <h3>Teamwork</h3>
                  <p>
                    Our biggest and most important resource is our people and we
                    put together the diversity of our skills to achieve success
                    and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="about_card team_card">
                <div className="About_icons">
                  <AiTwotoneSliders className="icons shadow" />
                </div>
                <div className="About_content">
                  <h3>Innovation</h3>
                  <p>
                    We continuously seek new ways to add value to our
                    stakeholders’ business, be they customers, employee or
                    suppliers. We believe in win-win relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_header;

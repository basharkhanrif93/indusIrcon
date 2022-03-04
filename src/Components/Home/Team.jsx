import React from "react";
import "./Home.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Team = () => {
  return (
    <>
      <section className="team_section">
        <div className="container">
          <h1>Meet The Expert People</h1>
          <div className="row my-3">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="team_card">
                <div className="team_img">
                  <img
                    src="./images/bittu.jpg"
                    alt="team_img"
                  />
                </div>
                <div className="team_content">
                  <h3>Bashar khan</h3>
                  <p>Developer</p>
                </div>
                <hr />
                <div className="team_icons">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillFacebook />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillTwitterSquare />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="team_card">
                <div className="team_img">
                  <img
                    src="https://wp.kodesolution.live/2021/business/colek/wp-content/uploads/2021/06/staff1.jpg"
                    alt="team_img"
                  />
                </div>
                <div className="team_content">
                  <h3>Sylvia Acevedo</h3>
                  <p>Repair Man</p>
                </div>
                <hr />
                <div className="team_icons">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillFacebook />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillTwitterSquare />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="team_card">
                <div className="team_img">
                  <img
                    src="https://wp.kodesolution.live/2021/business/colek/wp-content/uploads/2021/06/staff4.jpg"
                    alt="team_img"
                  />
                </div>
                <div className="team_content">
                  <h3>Jacob Cross</h3>
                  <p>Repair Man</p>
                </div>
                <hr />
                <div className="team_icons">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillFacebook />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillTwitterSquare />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="team_card">
                <div className="team_img">
                  <img
                    src="https://wp.kodesolution.live/2021/business/colek/wp-content/uploads/2021/06/staff6.jpg"
                    alt="team_img"
                  />
                </div>
                <div className="team_content">
                  <h3>Polard Andrew</h3>
                  <p>Repair Man</p>
                </div>
                <hr />
                <div className="team_icons">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillFacebook />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillTwitterSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

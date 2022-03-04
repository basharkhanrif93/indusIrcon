import React, { useRef } from 'react';
import "./Contact.css";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineGooglePlus,
} from "react-icons/ai";

const Contact_header = () => {
    // const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7sithib', 'template_lu82t0p', e.target, 'user_lV88wJPOLnNo3jFNz0YdI')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              toast.success("Query Submitted !!")
          }, (error) => {
              console.log(error.text);
              toast.error("Error")
          });
      }
  return (
    <>
      <section className="contact_header_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12 add_img mt-5">
              <div className="getintouch">
              <p>
                We appreciate your comments and suggestions. For more
                information on our products, please fill out and submit the form
                below.We work hard to provide you with the best customer service
                in the market.
              </p>
              <h3 className="mt-4 text-left w-100">Follow us</h3>
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
                    <AiFillYoutube />
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

                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="icons_link"
                  >
                    <AiOutlineGooglePlus />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-12">
              <form onSubmit={sendEmail} className="mt-3">
                <h1 className="my-3">Get In Touch</h1>
                <div className="mb-3">
                  <label className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your Name"
                    name='name'
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Your Email"
                    name='email'
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Mobile
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Your Mobile Number"
                    name='mobile'
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                  Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput3"
                    placeholder="Subject"
                    name='subject'
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="form-label"
                  >
                    Messege
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Write Your Messege Here !!"
                    name='message'
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button className='btnn' type='submit'><AiOutlineSend /> Send Query</button>
              </form>
              
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
};

export default Contact_header;

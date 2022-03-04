import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css";

const responsive = {
  0: { items: 1 },
  700: { items: 2 },
  1024: { items: 5 },
};

const ProCrousel = () => {
  const clientsection = [
    {
      id: 10,
      img: "http://airmaker.in/images/client/trident.jpg",
    },
    {
      id: 11,
      img: "http://airmaker.in/images/client/ncc.jpg",
    },
    {
      id: 12,
      img: "http://airmaker.in/images/client/ginni.jpg",
    },
    {
      id: 13,
      img: "http://airmaker.in/images/client/lt.png",
    },
    {
      id: 14,
      img: "http://airmaker.in/images/client/tt.jpg",
    },
    {
      id: 15,
      img: "http://airmaker.in/images/client/sathia.png",
    },
  ];
  return (
    <>
      <div className="Client_section">
        <div className="container">
          <div className="row">
            <AliceCarousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              autoPlayInterval={1500}
              disableButtonsControls={true}
              mouseTracking={true}
            >
              {clientsection.map((data) => {
                return (
                  <>
                    <div className="item">
                      <div className="OurClient">
                        <img
                          key={data.id}
                          src={data.img}
                          alt="company_logo"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </AliceCarousel>
          </div>
        </div>
      </div>
      {/* --Advertise section-- */}
      {/* <div className="adv_section">
        <div className="container">
          <div className="row">
            <h1>Time for a New System?</h1>
            <p>
              Call an Air Supply today for a quote on your new home comfort
              system.
            </p>
            <div className="utton_group">
              <NavLink to="/contact" className={"btn "}>
                <span>Click here</span>
              </NavLink>
              <NavLink to="/contact" className={"btn btnoutline mx-3"}>
                <span>Go back</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProCrousel;

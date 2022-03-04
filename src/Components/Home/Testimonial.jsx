import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="Testimonial_section">
        <div className="container">
          <h1 className="my-3">Customer Reviews</h1>
          <div className="row my-3">
            <div className="col-md-10 col-12 mx-auto">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="main_testimonial_card">
                      <div className="user_image">
                        <img
                          src="https://wp.kodesolution.live/2021/business/colek/wp-content/uploads/2021/06/staff6.jpg"
                          alt="team_img"
                        />
                      </div>
                      <div className="User_content">
                        <p>
                          "No hard sell of additional services. I’d definitely
                          use again. Highly recommend this companty and the
                          crew. I am a very satisfied with the performance of
                          the AC unit and continued service from them."
                        </p>
                        <h6>Charles D</h6>
                        <small className="text-muted">CEO Aircon</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="main_testimonial_card">
                      <div className="user_image">
                        <img
                          src="https://wp.kodesolution.live/2021/business/colek/wp-content/uploads/2021/06/staff4.jpg"
                          alt="team_img"
                        />
                      </div>
                      <div className="User_content">
                        <p>
                          "Just to let you know your crew the best company that I’ve ever had the pleasure of working with! They were extremely professional, very polite, and the work was exceptional. The manner and speed they did this job was remarkable. Me
													and my family really can’t recommend this company highly enough."
                        </p>
                        <h6>Jim Dey</h6>
                        <small className="text-muted">CEO Aircon</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="main_testimonial_card">
                      <div className="user_image">
                        <img
                          src="https://wp.kodesolution.live/2021/business/colek/wp-content/uploads/2021/06/staff1.jpg"
                          alt="team_img"
                        />
                      </div>
                      <div className="User_content">
                        <p>
                          "Very professional and competent. Servicer performed the work promptly and shared his finding afterwards. No hard sell of additional services. I’d definitely use again. Highly recommend this companty and the crew. I am a very satisfied
													with the performance of the AC unit and continued service from them."
                        </p>
                        <h6>Arthur L</h6>
                        <small className="text-muted">CEO Aircon</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

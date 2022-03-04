import React from "react";

const Counter = () => {
  return (
    <>
      <section className="counter mt-5">
        <div className="container">
          <div className="row shadow p-3">
            <div className="col-lg-3 col-md-3 col-12 text-center">
              <h2>210+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="col-lg-3 col-md-3 col-12 text-center">
              <h2>302+</h2>
              <p>Project Completed</p>
            </div>
            <div className="col-lg-3 col-md-3 col-12 text-center">
              <h2>129+</h2>
              <p>Win Award</p>
            </div>
            <div className="col-lg-3 col-md-3 col-12 text-center">
              <h2>60+</h2>
              <p>Team member</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;

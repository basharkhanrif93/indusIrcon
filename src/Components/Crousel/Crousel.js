import React from 'react';
import './Crousel.css';
const Crousel = () => {
    const a = "http://airsupply-html.themerex.net/images/slide3.jpg"
    const b = "http://st.ourhtmldemo.com/new/Aircare/images/slides/1.jpg"
    let fontstyle = {
      fontSize:'4rem',
    }
  return(
    <>
    <header className='header_sec'>
      <div className='container-fluid'>
       <div className='row'>
       <div className='heade_content'>
       <h1 className='mt-5' style={fontstyle}>Welcome to IndusAircon</h1>
       <p>To Be The Most Respected, Trusted And Admirable Company </p>
       <a href='/' className='btnn'>Get started</a>
       </div>
       </div>
      </div>
    </header>
   {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={a} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={b} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={a} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
    </>
  )
};

export default Crousel;

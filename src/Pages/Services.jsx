import React from 'react';
import Services from '../Components/Home/Services'
import ProCrousel from '../Components/Home/ProCrousel'
import './Pages.css';

export default function Servicess() {
  
  return(
      <>
      <div className='only_mob'>
      </div>
      <Services className="servise"/>
      <section className='servivess_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-lg-4 col-12'>
              <h1>Our Clients</h1>
              <p>
              Our clients, like our people are our most treasured assets. Our clients are the life-source of our business. We work closely with a wide range of clients from different sectors and regions across public sector, private sector and local and national.
              </p>
            </div>
            <div className='col-md-8 col-lg-8 col-12'>
            <ProCrousel/>
          </div>
          </div>
        </div>
      </section>
      </>
  )
}

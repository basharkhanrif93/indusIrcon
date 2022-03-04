import React from 'react';
import Crousel from '../Components/Crousel/Crousel';
import Header from '../Components/Home/Header';
import Services from '../Components/Home/Services';
import ChooseServices from '../Components/Home/ChooseServices';
import ProCrousel from '../Components/Home/ProCrousel';
import Testimonial from '../Components/Home/Testimonial';
import Team from '../Components/Home/Team';
import Counter from '../Components/Home/Counter';

export default function Home() {
  return(
      <>
      <Crousel/>
      <Header/>
      <Services/>
      <ChooseServices/>
      <ProCrousel/>
      <Team/>
      <Counter/>
      <Testimonial/>
      </>
  )
};

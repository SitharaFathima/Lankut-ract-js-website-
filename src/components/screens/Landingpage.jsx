import React from 'react';

// components
import Header from './includes/Header';
import Spotlight from './pages/Spotlight';
import Product from './pages/Product';
import Finance from './pages/Finance';
import Mobile from './pages/Mobile';
import Testimonials from './pages/Testimonials';
import Footer from './includes/Footer';

function Landingpage() {
  return (
    <>
        <Header />
        <Spotlight />
        <Product />
        <Finance /> 
        <Mobile />
        <Testimonials />
        <Footer />
    </>
  )
}

export default Landingpage


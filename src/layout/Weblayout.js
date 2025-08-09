import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'

import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/lib/animate/animate.min.css';
import '../assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/importfiles.css';

 
function Weblayout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>     
     
  )
}

export default Weblayout
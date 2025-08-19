import React from 'react';

import Header from '../component/Header'
import Footer from '../component/Footer'

import '../assets/css/bootstrap.min.css';
import '../assets/style.css';
import '../assets/importfiles.css';


function Weblayout({ children }) {
  return (
    <>

      <Header />
      {children}
      <Footer />

    </>

  )
}

export default Weblayout
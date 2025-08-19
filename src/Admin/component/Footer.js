import * as React from 'react';
import '../assets/admin.css';
import { FaTint, FaSignOutAlt, FaUser, FaShoppingCart, FaBox, FaTags, FaPalette, FaTruck, FaReceipt, FaHome, FaList, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopyright } from 'react-icons/fa';


function Footer(){
    return (
            <>
    <footer className="admin-footer bg-gradient-ocean position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <FaTint className="text-white me-2" />
              <span className="text-white small">
                <FaCopyright className="me-1" /> {new Date().getFullYear()} Water Store Admin
              </span>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-icons d-flex justify-content-md-end justify-content-start mt-2 mt-md-0">
              <a href="#" className="text-white me-3 social-icon"><FaFacebook /></a>
              <a href="#" className="text-white me-3 social-icon"><FaTwitter /></a>
              <a href="#" className="text-white me-3 social-icon"><FaInstagram /></a>
              <a href="#" className="text-white social-icon"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-shape-top"></div>
    </footer>

            </>
    )
}

export default Footer;
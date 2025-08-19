import * as React from 'react';
import { Link, useLocation } from 'react-router';
import '../assets/admin.css';
import { FaTint, FaSignOutAlt, FaUser, FaShoppingCart, FaBox, FaTags, FaPalette, FaTruck, FaReceipt, FaHome, FaList, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopyright } from 'react-icons/fa';

function Header() {
  const location = useLocation();
  
  const logout = async (e) => {
    try {
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("userdata");
      window.location.href = '/login';
    } catch (e) {
      console.log(e);
    }
  };

  // Helper function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Enhanced Admin Header */}
      <header className="admin-header bg-gradient-ocean position-relative">
        {/* Water Droplet Decorations */}
        <div className="water-decoration top-left">
          <FaTint />
        </div>
        <div className="water-decoration top-right">
          <FaTint />
        </div>
        <div className="water-decoration bottom-left">
          <FaTint />
        </div>
        <div className="water-decoration bottom-right">
          <FaTint />
        </div>
        
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="admin-logo me-3">
                  <FaTint className="text-white" />
                </div>
                <div>
                  <h1 className="text-white mb-0">Water Store Admin</h1>
                  <p className="text-white-50 mb-0">Management Dashboard</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <div className="admin-user-info">
                <span className="text-white me-3">Welcome, Admin</span>
                <button onClick={logout} className="btn btn-outline-light btn-sm">
                  <FaSignOutAlt className="me-1" /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="wave-shape"></div>
      </header>

      {/* Admin Navigation - Matching Header Gradient */}
      <nav className="admin-nav py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="admin-menu d-flex flex-wrap list-unstyled mb-0">
                <li className="admin-menu-item">
                  <Link to={"/admin/dashboard"} className={`admin-menu-link ${isActive('/admin/dashboard')}`}>
                    <FaHome className="me-1" /> Dashboard
                  </Link>
                </li>
                <li className="admin-menu-item">
                  <Link to={"/admin/user"} className={`admin-menu-link ${isActive('/admin/user')}`}>
                    <FaUser className="me-1" /> Users
                  </Link>
                </li>
                <li className="admin-menu-item">
                  <Link to={"/admin/categories"} className={`admin-menu-link ${isActive('/admin/categories')}`}>
                    <FaList className="me-1" /> Categories
                  </Link>
                </li>
                <li className="admin-menu-item">
                  <Link to={"/admin/brands"} className={`admin-menu-link ${isActive('/admin/brands')}`}>
                    <FaTags className="me-1" /> Brands
                  </Link>
                </li>
                <li className="admin-menu-item">
                  <Link to={"/admin/colour"} className={`admin-menu-link ${isActive('/admin/colour')}`}>
                    <FaPalette className="me-1" /> Colors
                  </Link>
                </li>
                <li className="admin-menu-item">
                  <Link to={"/admin/product"} className={`admin-menu-link ${isActive('/admin/product')}`}>
                    <FaBox className="me-1" /> Products
                  </Link>
                </li>
                <li className="admin-menu-item">
                  <Link to={"/admin/coupon"} className={`admin-menu-link ${isActive('/admin/coupon')}`}>
                    <FaTags className="me-1" /> Coupons
                  </Link>
                </li>
                <li className="admin-menu-item">
                  <Link to={"/admin/orders"} className={`admin-menu-link ${isActive('/admin/orders')}`}>
                    <FaReceipt className="me-1" /> Orders
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
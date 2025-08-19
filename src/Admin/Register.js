import React, { useEffect, useState } from 'react';
import axios from './component/axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './assets/register.css'
import { FaTint, FaUser, FaEnvelope, FaPhone, FaLock, FaKey, FaArrowRight, FaSignInAlt } from 'react-icons/fa';

function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (e.target.password.value !== e.target.rpassword.value) {
      alert("Passwords do not match");
      return false;
    }
    
    setIsLoading(true);
    
    let datas = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact_no: e.target.contact_no.value,
      password: e.target.password.value
    };
    
    const formData = new FormData();
    for (const property in datas) {
      formData.append(property, datas[property]);
    }
   
    try {
      let response = await axios.post('register.php', formData);
      if (response.data.error == 0) {
        navigate('/login');
      } else {
        alert(response.data.message);
      }
    } catch (e) {
      console.log(e);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      {/* Header Section */}
      <section className="page-header bg-gradient-ocean">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center">
                <div className="header-icon me-3">
                  <FaTint className="text-white" />
                </div>
                <div>
                  <h1 className="text-white mb-0">Create Account</h1>
                  <p className="text-white-50 mb-0">Join the Water Store community</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-md-end bg-transparent mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Register</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="wave-shape"></div>
      </section>

      {/* Register Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg overflow-hidden">
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-4">
                    <div className="mb-3">
                      <FaTint className="text-primary" style={{ fontSize: '3rem' }} />
                    </div>
                    <h3 className="fw-bold">Create Your Account</h3>
                    <p className="text-muted">Fill in the details to get started</p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0">
                            <FaUser className="text-primary" />
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6 mb-4">
                        <label htmlFor="contact_no" className="form-label">Contact Number</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0">
                            <FaPhone className="text-primary" />
                          </span>
                          <input
                            type="tel"
                            className="form-control border-start-0"
                            id="contact_no"
                            name="contact_no"
                            placeholder="+880 1234 567890"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaEnvelope className="text-primary" />
                        </span>
                        <input
                          type="email"
                          className="form-control border-start-0"
                          id="email"
                          name="email"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0">
                            <FaLock className="text-primary" />
                          </span>
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control border-start-0"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                          />
                          <button 
                            className="btn btn-outline-secondary border-start-0" 
                            type="button"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? "Hide" : "Show"}
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-md-6 mb-4">
                        <label htmlFor="rpassword" className="form-label">Confirm Password</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0">
                            <FaKey className="text-primary" />
                          </span>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="form-control border-start-0"
                            id="rpassword"
                            name="rpassword"
                            placeholder="Confirm your password"
                            required
                          />
                          <button 
                            className="btn btn-outline-secondary border-start-0" 
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                          >
                            {showConfirmPassword ? "Hide" : "Show"}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="d-grid mb-4">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Creating Account...
                          </>
                        ) : (
                          <>
                            Create Account <FaArrowRight className="ms-2" />
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div className="text-center">
                      <p className="mb-0">Already have an account? <Link to="/login" className="text-primary">Sign In</Link></p>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-muted mb-0">© {new Date().getFullYear()} Water Store. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
import React, { useEffect, useState } from 'react';
import axios from './component/axios';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router';
import './assets/login.css';
import { FaTint, FaEnvelope, FaLock, FaUser, FaArrowRight } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    let datas = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    
    const formData = new FormData();
    for (const property in datas) {
      formData.append(property, datas[property]);
    }
    
    try {
      let response = await axios.post('login.php', formData);
      if (response.data.jwt) {
        sessionStorage.setItem("access_token", response.data.jwt);
        sessionStorage.setItem("userdata", response.data.datas);
        window.location.href = '/admin/dashboard';
      } else {
        console.log(response.data);
        alert(response.data.message);
      }
    } catch (e) {
      console.log(e);
      alert('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                  <h1 className="text-white mb-0">Admin Login</h1>
                  <p className="text-white-50 mb-0">Access your Water Store dashboard</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-md-end bg-transparent mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Login</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="wave-shape"></div>
      </section>

      {/* Login Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg overflow-hidden">
                <div className="row g-0">
                  {/* Left Side - Image */}
                  <div className="col-lg-5 d-none d-lg-flex">
                    <div className="bg-primary h-100 d-flex align-items-center justify-content-center p-4">
                      <div className="text-center text-white">
                        <div className="mb-4">
                          <FaTint className="water-icon" />
                        </div>
                        <h2 className="mb-3">Water Store Admin</h2>
                        <p className="mb-4">Manage your water store inventory, orders, and customers with ease.</p>

                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Form */}
                  <div className="col-lg-7">
                    <div className="p-4 p-md-5">
                      <div className="text-center mb-4">
                        <h3 className="fw-bold">Welcome Back!</h3>
                        <p className="text-muted">Sign in to your admin account</p>
                      </div>
                      
                      <form onSubmit={handleSubmit}>
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
                        
                        <div className="mb-4">
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
                        
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                              Remember me
                            </label>
                          </div>
                          <Link to="/forgot-password" className="text-primary">Forgot password?</Link>
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
                                Signing In...
                              </>
                            ) : (
                              <>
                                Sign In <FaArrowRight className="ms-2" />
                              </>
                            )}
                          </button>
                        </div>
                        
                        <div className="text-center">
                          <p className="mb-0">Don't have an account? <Link to="/register" className="text-primary">Register here</Link></p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-muted mb-0">© {new Date().getFullYear()} Water Store Admin. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
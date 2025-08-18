import * as React from 'react';
import Weblayout from '../layout/Weblayout'


function Service() {
  return (
      <Weblayout>

            
        <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h4 className="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" className="input-group-text btn border p-3"><i className="fa fa-search text-white"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          
        <div className="container-fluid service bg-light overflow-hidden py-5">
            <div className="container py-5">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                    <h4 className="text-uppercase text-primary">Our Service</h4>
                    <h1 className="display-3 text-capitalize mb-3">Protect Your Family with Best Water</h1>
                </div>
                <div className="row gx-0 gy-4 align-items-center">
                    <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="service-item rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="service-content text-end">
                                            <a href="#" className="h4 d-inline-block mb-3">Residential Waters</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                        <div className="ps-4">
                                            <div className="service-btn"><i className="fas fa-hand-holding-water text-white fa-2x"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="service-content text-end">
                                            <a href="#" className="h4 d-inline-block mb-3">Commercial Waters</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                        <div className="ps-4">
                                            <div className="service-btn"><i className="fas fa-dumpster-fire text-white fa-2x"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item rounded p-4 mb-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="service-content text-end">
                                            <a href="#" className="h4 d-inline-block mb-3">Filtration Plants</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                        <div className="ps-4">
                                            <div className="service-btn"><i className="fas fa-filter text-white fa-2x"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="bg-transparent">
                            <img src="assets/img/water.png" className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="service-item rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="pe-4">
                                            <div className="service-btn"><i className="fas fa-assistive-listening-systems text-white fa-2x"></i></div>
                                        </div>
                                        <div className="service-content">
                                            <a href="#" className="h4 d-inline-block mb-3">Water Softening</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="pe-4">
                                            <div className="service-btn"><i className="fas fa-recycle text-white fa-2x"></i></div>
                                        </div>
                                        <div className="service-content">
                                            <a href="#" className="h4 d-inline-block mb-3">Market Research</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item rounded p-4 mb-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="pe-4">
                                            <div className="service-btn"><i className="fas fa-project-diagram text-white fa-2x"></i></div>
                                        </div>
                                        <div className="service-content">
                                            <a href="#" className="h4 d-inline-block mb-3">Project Planning</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          
        <div className="container-fluid counter py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="counter-item">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-thumbs-up fa-3x text-white"></i>
                            </div>
                            <h4 className="text-white my-4">Happy Clients</h4>
                            <div className="counter-counting">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">456</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="counter-item">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-truck fa-3x text-white"></i>
                            </div>
                            <h4 className="text-white my-4">Transport</h4>
                            <div className="counter-counting">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">513</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="counter-item">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-users fa-3x text-white"></i>
                            </div>
                            <h4 className="text-white my-4">Employees</h4>
                            <div className="counter-counting">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">53</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="counter-item">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-heart fa-3x text-white"></i>
                            </div>
                            <h4 className="text-white my-4">Years Experiance</h4>
                            <div className="counter-counting">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">17</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                    <h4 className="text-uppercase text-primary">Testimonials</h4>
                    <h1 className="display-3 text-capitalize mb-3">Our clients reviews.</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">
                    <div className="testimonial-item text-center p-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.
                        </p>
                        <div className="d-flex justify-content-center mb-4">
                              <img src="assets/img/testimonial-1.jpg" className="img-fluid border border-4 border-primary" style={{ width: "100px", height: "100px", borderRadius: "50px" }} alt=""/>
                        </div>
                        <div className="d-block">
                            <h4 className="text-dark">Client Name</h4>
                            <p className="m-0 pb-3">Profession</p>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center p-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.
                        </p>
                        <div className="d-flex justify-content-center mb-4">
                              <img src="assets/img/testimonial-2.jpg" className="img-fluid border border-4 border-primary" style={{ width: "100px", height: "100px", borderRadius: "50px" }} alt=""/>
                        </div>
                        <div className="d-block">
                            <h4 className="text-dark">Client Name</h4>
                            <p className="m-0 pb-3">Profession</p>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center p-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.
                        </p>
                        <div className="d-flex justify-content-center mb-4">
                              <img src="assets/img/testimonial-3.jpg" className="img-fluid border border-4 border-primary" style={{ width: "100px", height: "100px", borderRadius: "50px" }} alt=""/>
                        </div>
                        <div className="d-block">
                            <h4 className="text-dark">Client Name</h4>
                            <p className="m-0 pb-3">Profession</p>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center p-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.
                        </p>
                        <div className="d-flex justify-content-center mb-4">
                              <img src="assets/img/testimonial-3.jpg" className="img-fluid border border-4 border-primary" style={{ width: "100px", height: "100px", borderRadius: "50px" }} alt=""/>
                        </div>
                        <div className="d-block">
                            <h4 className="text-dark">Client Name</h4>
                            <p className="m-0 pb-3">Profession</p>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



      </Weblayout>       

  );
}

export default Service;

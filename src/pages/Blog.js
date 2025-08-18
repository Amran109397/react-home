import * as React from 'react';
import Weblayout from '../layout/Weblayout'

function Blog() {
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

          
        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                    <h4 className="text-uppercase text-primary">Our Blog</h4>
                    <h1 className="display-3 text-capitalize mb-3">Latest Blog & News</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-1.jpg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1"></i> Jan 12 2025</div>
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-2.jpg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1"></i> Jan 12 2025</div>
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-3.jpg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1"></i> Jan 12 2025</div>
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</Weblayout>      

  );
}

export default Blog;

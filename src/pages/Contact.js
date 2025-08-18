import * as React from 'react';
import Weblayout from '../layout/Weblayout'

function Contact() {
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
          

        <div className="container-fluid contact bg-light py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 h-100 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
                            <h4 className="text-uppercase text-primary">Let’s Connect</h4>
                            <h1 className="display-3 text-capitalize mb-3">Send Your Message</h1>
                            <p className="mb-0">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        </div>
                        <form>
                            <div className="row g-4">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control border-0" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="phone" className="form-control border-0" id="phone" placeholder="Phone"/>
                                        <label for="phone">Your Phone</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                          <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: "175px" }}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="d-inline-flex rounded bg-white w-100 p-4">
                                    <i className="fas fa-map-marker-alt fa-2x text-secondary me-4"></i>
                                    <div>
                                        <h4>Address</h4>
                                        <p className="mb-0">123 North tower New York, USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="d-inline-flex rounded bg-white w-100 p-4">
                                    <i className="fas fa-envelope fa-2x text-secondary me-4"></i>
                                    <div>
                                        <h4>Mail Us</h4>
                                        <p className="mb-0">info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="d-inline-flex rounded bg-white w-100 p-4">
                                    <i className="fa fa-phone-alt fa-2x text-secondary me-4"></i>
                                    <div>
                                        <h4>Telephone</h4>
                                        <p className="mb-0">(+012) 3456 7890 123</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="h-100 overflow-hidden">
                                    <iframe className="w-100 rounded" style={{height: "400px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



      </Weblayout>       

  );
}

export default Contact;

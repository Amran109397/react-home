import * as React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

function Header() {

    const { totalUniqueItems } = useCart();

    const pagesDropdownItems = [
        { name: "Our Feature", path: "/Feature" },
        { name: "Our Product", path: "/Our Product" },
        { name: "Our Team", path: "/Our Team" },
        { name: "Testimonial", path: "/Testimonial" },
        { name: "404 Page", path: "/404 Page" }
    ];

    return (
        <>
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="text-primary"><i className="fas fa-hand-holding-water me-3"></i>Acuas</h1>
                        {/* <!-- <img src="assets/img/logo.png" alt="Logo"> --> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">


                            <Link to="/home" className="nav-item nav-link">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/Service" className="nav-item nav-link">Service</Link>
                            <Link to="/Blog" className="nav-item nav-link">Blog</Link>
                            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                            <div className="nav-item dropdown">
                                <Link to="/pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Pages </Link>
                                <div className="dropdown-menu m-0">
                                    {pagesDropdownItems.map((item, index) => (
                                        <Link to={item.path} className="dropdown-item" key={index}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-xl-flex me-3">
                            <div className="d-flex flex-column pe-3 border-end border-primary">
                                <span className="text-body">Get Free Delivery</span>
                                <a href="tel:+4733378901"><span className="text-primary">Free: + 0123 456 7890</span></a>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle me-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                        <a href="" className="btn btn-primary rounded-pill d-inline-flex flex-shrink-0 py-2 px-4">Order Now</a>
                        <Link to={'/cart'} className="btn btn-primary rounded-pill d-inline-flex flex-shrink-0 py-2 px-4">
                            {totalUniqueItems}
                        </Link>
                    </div>
                </nav>


                <div className="carousel-header">
                    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img src="assets/img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                                <div className="carousel-caption-1">
                                    <div className="carousel-caption-1-content" style={{ maxWidth: "900px" }}>
                                        <h4 className="text-white text-uppercase fw-bold mb-4 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{ animationDelay: "1s", letterSpacing: "3px" }} >Importance life</h4>
                                        <h1 className="display-2 text-capitalize text-white mb-4 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.3s" style={{ animationDelay: "1.3s" }}>Always Want Safe Water For Healthy Life</h1>
                                        <p className="mb-5 fs-5 text-white fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.5s" style={{ animationDelay: "1.5s" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                        <div className="carousel-caption-1-content-btn fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.7s" style={{ animationDelay: "1.7s" }}>
                                            <a className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2" href="#">Order Now</a>
                                            <a className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2" href="#">Free Estimate</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
                                <div className="carousel-caption-2">
                                    <div className="carousel-caption-2-content" style={{ maxWidth: "900px" }}>
                                        <h4 className="text-white text-uppercase fw-bold mb-4 fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{ animationDelay: "1s", letterSpacing: "3px" }}>Importance life</h4>
                                        <h1 className="display-2 text-capitalize text-white mb-4 fadeInRight animated" data-animation="fadeInRight" data-delay="1.3s" style={{ animationDelay: "1.3s" }}>Always Want Safe Water For Healthy Life</h1>
                                        <p className="mb-5 fs-5 text-white fadeInRight animated" data-animation="fadeInRight" data-delay="1.5s" style={{ animationDelay: "1.5s" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                        <div className="carousel-caption-2-content-btn fadeInRight animated" data-animation="fadeInRight" data-delay="1.7s" style={{ animationDelay: "1.7s" }}>
                                            <a className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2" href="#">Order Now</a>
                                            <a className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2" href="#">Free Estimate</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon btn btn-primary fadeInLeft animated" aria-hidden="true" data-animation="fadeInLeft" data-delay="1.1s" style={{ animationDelay: "1.3s" }}> <i className="fa fa-angle-left fa-3x"></i></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon btn btn-primary fadeInRight animated" aria-hidden="true" data-animation="fadeInLeft" data-delay="1.1s" style={{ animationDelay: "1.3s" }}><i className="fa fa-angle-right fa-3x"></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Header;
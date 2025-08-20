import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
import { useCart } from "react-use-cart";


function Home() {
    const { addItem } = useCart();

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async (e) => {
        let feat = await axios.get(`front_api/products.php?query_type=featured&limit=5`)
        setFeatured(feat.data);
    }


    return (
        <>



            <div class="container-fluid position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" class="navbar-brand p-0">
                        <h1 class="text-primary"><i class="fas fa-hand-holding-water me-3"></i>Acuas</h1>

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a href="index.html" class="nav-item nav-link">Home</a>
                            <a href="about.html" class="nav-item nav-link">About</a>
                            <a href="service.html" class="nav-item nav-link">Service</a>
                            <a href="blog.html" class="nav-item nav-link">Blog</a>
                            <div class="nav-item dropdown active">
                                <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0">
                                    <a href="feature.html" class="dropdown-item">Our Feature</a>
                                    <a href="product.html" class="dropdown-item active">Our Product</a>
                                    <a href="team.html" class="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <div class="d-none d-xl-flex me-3">
                            <div class="d-flex flex-column pe-3 border-end border-primary">
                                <span class="text-body">Get Free Delivery</span>
                                <a href="tel:+4733378901"><span class="text-primary">Free: + 0123 456 7890</span></a>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle me-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search"></i></button>
                        <a href="" class="btn btn-primary rounded-pill d-inline-flex flex-shrink-0 py-2 px-4">Order Now</a>
                    </div>
                </nav>


                <div class="container-fluid bg-breadcrumb">
                    <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
                        <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Products</h4>
                        <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item active text-primary">Product</li>
                        </ol>
                    </div>
                </div>

            </div>

            <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content rounded-0">
                        <div class="modal-header">
                            <h4 class="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex align-items-center">
                            <div class="input-group w-75 mx-auto d-flex">
                                <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                                    <span id="search-icon-1" class="input-group-text btn border p-3"><i class="fa fa-search text-white"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid product py-5">
                <div class="container py-5">
                    <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 class="text-uppercase text-primary">Our Products</h4>
                        <h1 class="display-3 text-capitalize mb-3">We Deliver Best Quality Bottle Packs.</h1>
                    </div>
                    <div class="row g-4 justify-content-center">
                        <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="product-item">
                                <img src="img/product-3.png" class="img-fluid w-100 rounded-top" alt="Image"/>
                                    <div class="product-content bg-light text-center rounded-bottom p-4">
                                        <p>2L 1 Bottle</p>
                                        <a href="#" class="h4 d-inline-block mb-3">Mineral Water Bottle</a>
                                        <p class="fs-4 text-primary mb-3">$35:00</p>
                                        <a href="#" class="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="product-item">
                                <img src="img/product-2.png" class="img-fluid w-100 rounded-top" alt="Image"/>
                                    <div class="product-content bg-light text-center rounded-bottom p-4">
                                        <p>4L 2 Bottles</p>
                                        <a href="#" class="h4 d-inline-block mb-3">RO Water Bottle</a>
                                        <p class="fs-4 text-primary mb-3">$70:00</p>
                                        <a href="#" class="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="product-item">
                                <img src="img/product-1.png" class="img-fluid w-100 rounded-top" alt="Image"/>
                                    <div class="product-content bg-light text-center rounded-bottom p-4">
                                        <p>6L 3 Bottles</p>
                                        <a href="#" class="h4 d-inline-block mb-3">UV Water Bottle</a>
                                        <p class="fs-4 text-primary mb-3">$100:00</p>
                                        <a href="#" class="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div class="container py-5">
                    <div class="row g-5 mb-5 align-items-center">
                        <div class="col-lg-7">
                            <div class="position-relative mx-auto">
                                <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Email address to Subscribe"/>
                                    <button type="button" class="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="d-flex align-items-center justify-content-center justify-content-lg-end">
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row g-5">
                        <div class="col-md-6 col-lg-6 col-xl-3">
                            <div class="footer-item d-flex flex-column">
                                <div class="footer-item">
                                    <h3 class="text-white mb-4"><i class="fas fa-hand-holding-water text-primary me-3"></i>Acuas</h3>
                                    <p class="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                                </div>
                                <div class="position-relative">
                                    <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"/>
                                        <button type="button" class="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3">
                            <div class="footer-item d-flex flex-column">
                                <h4 class="text-white mb-4">About Us</h4>
                                <a href="#"><i class="fas fa-angle-right me-2"></i> Why Choose Us</a>
                                <a href="#"><i class="fas fa-angle-right me-2"></i> Free Water Bottles</a>
                                <a href="#"><i class="fas fa-angle-right me-2"></i> Water Dispensers</a>
                                <a href="#"><i class="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
                                <a href="#"><i class="fas fa-angle-right me-2"></i> Contact us</a>
                                <a href="#"><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3">
                            <div class="footer-item d-flex flex-column">
                                <h4 class="text-white mb-4">Business Hours</h4>
                                <div class="mb-3">
                                    <h6 class="text-muted mb-0">Mon - Friday:</h6>
                                    <p class="text-white mb-0">09.00 am to 07.00 pm</p>
                                </div>
                                <div class="mb-3">
                                    <h6 class="text-muted mb-0">Saturday:</h6>
                                    <p class="text-white mb-0">10.00 am to 05.00 pm</p>
                                </div>
                                <div class="mb-3">
                                    <h6 class="text-muted mb-0">Vacation:</h6>
                                    <p class="text-white mb-0">All Sunday is our vacation</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3">
                            <div class="footer-item d-flex flex-column">
                                <h4 class="text-white mb-4">Contact Info</h4>
                                <a href="#"><i class="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
                                <a href="mailto:info@example.com"><i class="fas fa-envelope me-2"></i> info@example.com</a>
                                <a href="mailto:info@example.com"><i class="fas fa-envelope me-2"></i> info@example.com</a>
                                <a href="tel:+012 345 67890"><i class="fas fa-phone me-2"></i> +012 345 67890</a>
                                <a href="tel:+012 345 67890" class="mb-3"><i class="fas fa-print me-2"></i> +012 345 67890</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid copyright py-4">
                <div class="container">
                    <div class="row g-4 align-items-center">
                        <div class="col-md-6 text-center text-md-start mb-md-0">
                            <span class="text-body"><a href="#" class="border-bottom text-white"><i class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                        </div>
                        <div class="col-md-6 text-center text-md-end text-body">

                           <a class="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a>  <a class="border-bottom text-white" href="https://themewagon.com">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" class="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>   

        </>

    );
}

export default Home;

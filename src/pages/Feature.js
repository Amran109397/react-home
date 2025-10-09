import * as React from 'react';
import Weblayout from '../layout/Weblayout'


function Feature() {
    return (
        <Weblayout>



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

            <div class="container-fluid feature bg-light py-5">
                <div class="container py-5">
                    <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                        <h4 class="text-uppercase text-primary">Our Feature</h4>
                        <h1 class="display-3 text-capitalize mb-3">A Trusted Name In Bottled Water Industry</h1>
                    </div>
                    <div class="row g-4">
                        <div class=" col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="feature-item p-4">
                                <div class="feature-icon mb-3"><i class="fas fa-hand-holding-water text-white fa-3x"></i></div>
                                <a href="#" class="h4 mb-3">Quality Check</a>
                                <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                                <a href="#" class="btn text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="feature-item p-4">
                                <div class="feature-icon mb-3"><i class="fas fa-filter text-white fa-3x"></i></div>
                                <a href="#" class="h4 mb-3">5 Steps Filtration</a>
                                <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                                <a href="#" class="btn text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="feature-item p-4">
                                <div class="feature-icon mb-3"><i class="fas fa-recycle text-white fa-3x"></i></div>
                                <a href="#" class="h4 mb-3">Composition</a>
                                <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                                <a href="#" class="btn text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div class="feature-item p-4">
                                <div class="feature-icon mb-3"><i class="fas fa-microscope text-white fa-3x"></i></div>
                                <a href="#" class="h4 mb-3">Lab Control</a>
                                <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                                <a href="#" class="btn text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Weblayout>

    );
}

export default Feature;

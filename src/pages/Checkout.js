import * as React from 'react';
import Weblayout from '../layout/Weblayout';
import { useCart } from "react-use-cart";
import axios from '../Admin/component/axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCity, FaArrowLeft, FaCheck } from 'react-icons/fa';

function Checkout() {
    const {
        isEmpty,
        items,
        emptyCart,
        cartTotal,
        metadata 
    } = useCart();
    
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formErrors, setFormErrors] = React.useState({});
    const [shippingSameAsBilling, setShippingSameAsBilling] = React.useState(true);
    
    const validateForm = (formData) => {
        const errors = {};
        
        if (!formData.customer_name.trim()) {
            errors.customer_name = "Name is required";
        }
        
        if (!formData.customer_contact.trim()) {
            errors.customer_contact = "Phone number is required";
        } else if (!/^[0-9]{10,15}$/.test(formData.customer_contact.replace(/\s/g, ''))) {
            errors.customer_contact = "Please enter a valid phone number";
        }
        
        if (!formData.customer_email.trim()) {
            errors.customer_email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customer_email)) {
            errors.customer_email = "Please enter a valid email address";
        }
        
        if (!formData.billing_address.trim()) {
            errors.billing_address = "Billing address is required";
        }
        
        if (!shippingSameAsBilling && !formData.shipping_address.trim()) {
            errors.shipping_address = "Shipping address is required";
        }
        
        return errors;
    };
    
    const saveCheckout = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Collect form data
            const formData = {
                customer_name: e.target.customer_name.value,
                customer_contact: e.target.customer_contact.value,
                customer_email: e.target.customer_email.value,
                billing_address: e.target.billing_address.value,
                billing_city: e.target.billing_city.value,
                shipping_address: shippingSameAsBilling ? e.target.billing_address.value : e.target.shipping_address.value,
                shipping_city: shippingSameAsBilling ? e.target.billing_city.value : e.target.shipping_city.value,
                sub_total: cartTotal,
                discount: metadata.discount ?? 0,
                grand_total: cartTotal - (metadata.discount ?? 0),
                cart_details: JSON.stringify(items)
            };
            
            // Validate form
            const errors = validateForm(formData);
            if (Object.keys(errors).length > 0) {
                setFormErrors(errors);
                setIsSubmitting(false);
                return;
            }
            
            // Create FormData for submission
            const formPayload = new FormData();
            for (const property in formData) {
                formPayload.append(property, formData[property]);
            }
            
            // Make API request
            const response = await axios.post(`front_api/checkout.php`, formPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            // Handle response
            if (response.data && response.data.error === 1) {
                alert(`Error: ${response.data.message || 'Unknown error occurred'}`);
            } else {
                // Success - navigate to invoice page with order data
                const orderData = {
                    ...formData,
                    order_id: response.data.order_id || Date.now(), // Use server order_id or generate one
                    order_date: new Date().toLocaleDateString(),
                    items: items
                };
                
                // Save order data to localStorage for invoice page
                localStorage.setItem('lastOrder', JSON.stringify(orderData));
                
                // Empty cart and navigate to invoice
                emptyCart();
                navigate('/invoice');
            }
        } catch (error) {
            console.error("Checkout error:", error);
            alert('An error occurred while processing your order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    // Helper function to format price
    const formatPrice = (price) => {
        const numPrice = parseFloat(price);
        return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
    };
    
    return (
        <>
            {/* Page Header */}
            <section className="page-header bg-gradient-water">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="text-white">Checkout</h1>
                            <p className="text-white-50 mb-0">Complete your water purchase</p>
                        </div>
                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-md-end bg-transparent mb-0">
                                    <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/cart" className="text-white">Cart</Link></li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Checkout</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Checkout Section */}
            <section className="py-5">
                <div className="container">
                    {isEmpty ? (
                        <div className="text-center py-5">
                            <div className="mb-4">
                                <i className="fas fa-shopping-cart text-muted" style={{ fontSize: '5rem' }}></i>
                            </div>
                            <h3 className="mb-3">Your cart is empty</h3>
                            <p className="text-muted mb-4">You need to add products to your cart before checkout.</p>
                            <Link to="/" className="btn btn-primary btn-lg">
                                <FaArrowLeft className="me-2" /> Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-header bg-white py-3">
                                        <h5 className="mb-0">Billing & Shipping Information</h5>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={saveCheckout}>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Full Name <span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <FaUser className="text-primary" />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className={`form-control border-start-0 ${formErrors.customer_name ? 'is-invalid' : ''}`}
                                                            id="customer_name"
                                                            name="customer_name"
                                                            placeholder="Your full name"
                                                            required
                                                        />
                                                    </div>
                                                    {formErrors.customer_name && <div className="invalid-feedback">{formErrors.customer_name}</div>}
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <FaPhone className="text-primary" />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className={`form-control border-start-0 ${formErrors.customer_contact ? 'is-invalid' : ''}`}
                                                            id="customer_contact"
                                                            name="customer_contact"
                                                            placeholder="Your phone number"
                                                            required
                                                        />
                                                    </div>
                                                    {formErrors.customer_contact && <div className="invalid-feedback">{formErrors.customer_contact}</div>}
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <label className="form-label">Email Address <span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <FaEnvelope className="text-primary" />
                                                        </span>
                                                        <input
                                                            type="email"
                                                            className={`form-control border-start-0 ${formErrors.customer_email ? 'is-invalid' : ''}`}
                                                            id="customer_email"
                                                            name="customer_email"
                                                            placeholder="Your email address"
                                                            required
                                                        />
                                                    </div>
                                                    {formErrors.customer_email && <div className="invalid-feedback">{formErrors.customer_email}</div>}
                                                </div>
                                                
                                                <div className="col-12">
                                                    <h5 className="mt-4 mb-3">Billing Address</h5>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <label className="form-label">Address <span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <FaMapMarkerAlt className="text-primary" />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className={`form-control border-start-0 ${formErrors.billing_address ? 'is-invalid' : ''}`}
                                                            id="billing_address"
                                                            name="billing_address"
                                                            placeholder="Your billing address"
                                                            required
                                                        />
                                                    </div>
                                                    {formErrors.billing_address && <div className="invalid-feedback">{formErrors.billing_address}</div>}
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <label className="form-label">City <span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <FaCity className="text-primary" />
                                                        </span>
                                                        <select className="form-control border-start-0" name="billing_city" required>
                                                            <option value="">Select City</option>
                                                            <option value="1">Dhaka</option>
                                                            <option value="2">Chattogram</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-check mt-4">
                                                        <input 
                                                            className="form-check-input" 
                                                            type="checkbox" 
                                                            id="shippingSame" 
                                                            checked={shippingSameAsBilling}
                                                            onChange={(e) => setShippingSameAsBilling(e.target.checked)}
                                                        />
                                                        <label className="form-check-label" htmlFor="shippingSame">
                                                            Shipping address is the same as billing address
                                                        </label>
                                                    </div>
                                                </div>
                                                
                                                {!shippingSameAsBilling && (
                                                    <>
                                                        <div className="col-12">
                                                            <h5 className="mt-4 mb-3">Shipping Address</h5>
                                                        </div>
                                                        
                                                        <div className="col-12">
                                                            <label className="form-label">Address <span className="text-danger">*</span></label>
                                                            <div className="input-group">
                                                                <span className="input-group-text bg-light border-end-0">
                                                                    <FaMapMarkerAlt className="text-primary" />
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className={`form-control border-start-0 ${formErrors.shipping_address ? 'is-invalid' : ''}`}
                                                                    id="shipping_address"
                                                                    name="shipping_address"
                                                                    placeholder="Your shipping address"
                                                                    required
                                                                />
                                                            </div>
                                                            {formErrors.shipping_address && <div className="invalid-feedback">{formErrors.shipping_address}</div>}
                                                        </div>
                                                        
                                                        <div className="col-md-6">
                                                            <label className="form-label">City <span className="text-danger">*</span></label>
                                                            <div className="input-group">
                                                                <span className="input-group-text bg-light border-end-0">
                                                                    <FaCity className="text-primary" />
                                                                </span>
                                                                <select className="form-control border-start-0" name="shipping_city" required>
                                                                    <option value="">Select City</option>
                                                                    <option value="1">Dhaka</option>
                                                                    <option value="2">Chattogram</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                                
                                                <div className="col-12 mt-4">
                                                    <div className="d-flex justify-content-between">
                                                        <Link to="/cart" className="btn btn-outline-secondary">
                                                            <FaArrowLeft className="me-2" /> Return to Cart
                                                        </Link>
                                                        <button 
                                                            type="submit" 
                                                            className="btn btn-primary btn-lg"
                                                            disabled={isSubmitting}
                                                        >
                                                            {isSubmitting ? (
                                                                <>
                                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                                    Processing...
                                                                </>
                                                            ) : (
                                                                <>
                                                                    Place Order <FaCheck className="ms-2" />
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Order Summary */}
                            <div className="col-lg-4">
                                <div className="card border-0 shadow-sm sticky-top" style={{ top: '100px' }}>
                                    <div className="card-header bg-white py-3">
                                        <h5 className="mb-0">Order Summary</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <h6 className="mb-3">Products</h6>
                                            {items.map((item) => (
                                                <div key={item.id} className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                                    <div>
                                                        <div className="fw-bold">{item.name}</div>
                                                        <div className="text-muted small">Qty: {item.quantity}</div>
                                                    </div>
                                                    <div>${formatPrice(item.itemTotal)}</div>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Subtotal</span>
                                                <span>${formatPrice(cartTotal)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Discount</span>
                                                <span className="text-success">-${formatPrice(metadata.discount ?? 0)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Shipping</span>
                                                <span className="text-success">Free</span>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between fw-bold">
                                                <span>Total</span>
                                                <span>${formatPrice(cartTotal - (metadata.discount ?? 0))}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 text-center">
                                            <p className="text-muted small mb-0">Secure checkout guaranteed</p>
                                            <div className="mt-2 d-flex justify-content-center">
                                                <div className="px-2">
                                                    <i className="fab fa-cc-visa text-muted" style={{ fontSize: '1.5rem' }}></i>
                                                </div>
                                                <div className="px-2">
                                                    <i className="fab fa-cc-mastercard text-muted" style={{ fontSize: '1.5rem' }}></i>
                                                </div>
                                                <div className="px-2">
                                                    <i className="fab fa-cc-amex text-muted" style={{ fontSize: '1.5rem' }}></i>
                                                </div>
                                                <div className="px-2">
                                                    <i className="fab fa-cc-paypal text-muted" style={{ fontSize: '1.5rem' }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Checkout;
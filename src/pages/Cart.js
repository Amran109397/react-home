import * as React from 'react';
import Weblayout from '../layout/Weblayout';
import { useCart } from "react-use-cart";
import axios from '../Admin/component/axios';
import { Link, useLocation } from 'react-router';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaTag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Cart() {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        setCartMetadata,
        metadata
    } = useCart();
    
    const [discount, setDiscount] = React.useState(metadata.discount ?? 0);
    const [couponMessage, setCouponMessage] = React.useState('');
    const [isApplying, setIsApplying] = React.useState(false);
    
    const checkCoupon = async () => {
        let code = document.getElementById('coupon_code').value;
        if (!code) {
            setCouponMessage('Please enter a coupon code');
            return;
        }
        
        setIsApplying(true);
        try {
            let res = await axios.get(`front_api/coupon_check.php?code=${code}`);
            if (res.data) {
                if (res.data?.amount) {
                    let dis = cartTotal * (parseFloat(res.data?.amount) / 100);
                    setDiscount(dis);
                    setCartMetadata({ discount: dis });
                    setCouponMessage(`Coupon applied! You saved ${res.data.amount}%`);
                }
            } else {
                setCouponMessage('Invalid coupon code');
            }
        } catch (error) {
            setCouponMessage('Error applying coupon');
        } finally {
            setIsApplying(false);
        }
    }
    
    const handleRemoveItem = (id) => {
        removeItem(id);
    }
    
    // Helper function to format price
    const formatPrice = (price) => {
        const numPrice = parseFloat(price);
        return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
    };
    
    return (
        <>
            {/* Page Header */}
            <section className="page-header bg-gradient-water text-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="text-dark">Your Shopping Cart</h1>
                            <p className="text-white-50 mb-0">Review your selected water products</p>
                        </div>
                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-md-end bg-transparent mb-0">
                                    <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Cart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Cart Section */}
            <section className="py-5">
                <div className="container">
                    {isEmpty ? (
                        <div className="text-center py-5">
                            <div className="mb-4">
                                <FaShoppingCart className="text-muted" style={{ fontSize: '5rem' }} />
                            </div>
                            <h3 className="mb-3">Your cart is empty</h3>
                            <p className="text-muted mb-4">Looks like you haven't added any water products to your cart yet.</p>
                            <Link to="/" className="btn btn-primary btn-lg">
                                <FaArrowLeft className="me-2" /> Start Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-header bg-white py-3">
                                        <h5 className="mb-0 d-flex align-items-center">
                                            <FaShoppingCart className="me-2 text-primary" />
                                            Cart Items ({items.length})
                                        </h5>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table table-hover mb-0">
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th scope="col" className="border-0 py-3">Product</th>
                                                        <th scope="col" className="border-0 py-3">Price</th>
                                                        <th scope="col" className="border-0 py-3 text-center">Quantity</th>
                                                        <th scope="col" className="border-0 py-3 text-end">Total</th>
                                                        <th scope="col" className="border-0 py-3 text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {items.map((item, key) => (
                                                        <tr key={key}>
                                                            <td className="py-4">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-3">
                                                                        <img 
                                                                            src={`${process.env.REACT_APP_API_URL}${item.image}`} 
                                                                            alt={item.name} 
                                                                            className="img-fluid rounded" 
                                                                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <h6 className="mb-1">{item.name}</h6>
                                                                        <p className="text-muted small mb-0">{item.description || 'Pure drinking water'}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="py-4">
                                                                <h6 className="mb-0">${formatPrice(item.price)}</h6>
                                                            </td>
                                                            <td className="py-4">
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    <button 
                                                                        onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                                                                        className="btn btn-sm btn-outline-secondary rounded-circle"
                                                                        style={{ width: '32px', height: '32px' }}
                                                                        disabled={item.quantity <= 1}
                                                                    >
                                                                        <FaMinus size={10} />
                                                                    </button>
                                                                    <span className="mx-3 fw-bold">{item.quantity}</span>
                                                                    <button 
                                                                        onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                                                                        className="btn btn-sm btn-outline-secondary rounded-circle"
                                                                        style={{ width: '32px', height: '32px' }}
                                                                    >
                                                                        <FaPlus size={10} />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 text-end">
                                                                <h6 className="mb-0">${formatPrice(item.itemTotal)}</h6>
                                                            </td>
                                                            <td className="py-4 text-center">
                                                                <button 
                                                                    onClick={() => handleRemoveItem(item.id)}
                                                                    className="btn btn-sm btn-outline-danger rounded-circle"
                                                                    style={{ width: '32px', height: '32px' }}
                                                                    title="Remove item"
                                                                >
                                                                    <FaTrash size={12} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Coupon Section */}
                                <div className="card border-0 shadow-sm mt-4">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-end-0">
                                                        <FaTag className="text-primary" />
                                                    </span>
                                                    <input 
                                                        id="coupon_code" 
                                                        type="text" 
                                                        className="form-control border-start-0" 
                                                        placeholder="Enter coupon code" 
                                                    />
                                                </div>
                                                {couponMessage && (
                                                    <div className={`mt-2 small ${couponMessage.includes('applied') ? 'text-success' : 'text-danger'}`}>
                                                        {couponMessage}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-md-4 mt-3 mt-md-0 text-md-end">
                                                <button 
                                                    onClick={checkCoupon} 
                                                    className="btn btn-primary w-100 w-md-auto"
                                                    disabled={isApplying}
                                                >
                                                    {isApplying ? 'Applying...' : 'Apply Coupon'}
                                                </button>
                                            </div>
                                        </div>
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
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Subtotal</span>
                                                <span>${formatPrice(cartTotal)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Discount</span>
                                                <span className="text-success">-${formatPrice(discount)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Shipping</span>
                                                <span className="text-success">Free</span>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between fw-bold">
                                                <span>Total</span>
                                                <span>${formatPrice(cartTotal - discount)}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="d-grid gap-2">
                                            <Link to="/checkout" className="btn btn-primary btn-lg">
                                                Proceed to Checkout <FaArrowRight className="ms-2" />
                                            </Link>
                                            <Link to="/" className="btn btn-outline-secondary">
                                                <FaArrowLeft className="me-2" /> Continue Shopping
                                            </Link>
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
            
            {/* Trust Badges Section */}
            <section className="py-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6 mb-3 mb-md-0 text-center">
                            <div className="d-flex flex-column align-items-center">
                                <div className="bg-white rounded-circle p-3 mb-2 shadow-sm">
                                    <i className="fas fa-shipping-fast text-primary" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <h6 className="mb-0">Free Shipping</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3 mb-md-0 text-center">
                            <div className="d-flex flex-column align-items-center">
                                <div className="bg-white rounded-circle p-3 mb-2 shadow-sm">
                                    <i className="fas fa-shield-alt text-primary" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <h6 className="mb-0">Secure Payment</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3 mb-md-0 text-center">
                            <div className="d-flex flex-column align-items-center">
                                <div className="bg-white rounded-circle p-3 mb-2 shadow-sm">
                                    <i className="fas fa-undo text-primary" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <h6 className="mb-0">Easy Returns</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 text-center">
                            <div className="d-flex flex-column align-items-center">
                                <div className="bg-white rounded-circle p-3 mb-2 shadow-sm">
                                    <i className="fas fa-headset text-primary" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <h6 className="mb-0">24/7 Support</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
import * as React from 'react';
import Weblayout from '../layout/Weblayout';
import { Link } from 'react-router-dom';
import { FaHome, FaPrint, FaDownload, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaCheckCircle } from 'react-icons/fa';

function Invoice() {
    const [orderData, setOrderData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        // Get order data from localStorage
        const savedOrder = localStorage.getItem('lastOrder');
        if (savedOrder) {
            setOrderData(JSON.parse(savedOrder));
        }
        setLoading(false);
    }, []);
    
    // Helper function to format price
    const formatPrice = (price) => {
        const numPrice = parseFloat(price);
        return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
    };
    
    // Function to handle print
    const handlePrint = () => {
        window.print();
    };
    
    // Function to handle download
    const handleDownload = () => {
        alert('Invoice download feature would be implemented here');
    };
    
    if (loading) {
        return (
            <Weblayout>
                <div className="container py-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </Weblayout>
        );
    }
    
    if (!orderData) {
        return (
            <Weblayout>
                <section className="py-5">
                    <div className="container text-center">
                        <div className="mb-4">
                            <FaCheckCircle className="text-success" style={{ fontSize: '5rem' }} />
                        </div>
                        <h2 className="mb-3">Order Confirmed</h2>
                        <p className="text-muted mb-4">Thank you for your purchase! Your order has been successfully placed.</p>
                        <Link to="/" className="btn btn-primary">
                            <FaHome className="me-2" /> Back to Home
                        </Link>
                    </div>
                </section>
            </Weblayout>
        );
    }
    
    return (
        <Weblayout>
            {/* Page Header */}
            <section className="page-header bg-gradient-water">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="text-white">Invoice</h1>
                            <p className="text-white-50 mb-0">Order #{orderData.order_id}</p>
                        </div>
                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-md-end bg-transparent mb-0">
                                    <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Invoice</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Invoice Section */}
            <section className="py-5">
                <div className="container">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">Invoice #{orderData.order_id}</h4>
                            <div>
                                <button className="btn btn-outline-secondary btn-sm me-2" onClick={handlePrint}>
                                    <FaPrint className="me-1" /> Print
                                </button>
                                <button className="btn btn-outline-primary btn-sm" onClick={handleDownload}>
                                    <FaDownload className="me-1" /> Download
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h5 className="mb-3">Water Store</h5>
                                    <p className="mb-1">123 Water Street</p>
                                    <p className="mb-1">Dhaka, Bangladesh</p>
                                    <p className="mb-1">Phone: +880 1234 567890</p>
                                    <p>Email: info@waterstore.com</p>
                                </div>
                                <div className="col-md-6 text-md-end">
                                    <h5 className="mb-3">Invoice To</h5>
                                    <p className="mb-1"><strong>{orderData.customer_name}</strong></p>
                                    <p className="mb-1">{orderData.billing_address}</p>
                                    <p className="mb-1">{orderData.billing_city === '1' ? 'Dhaka' : 'Chattogram'}</p>
                                    <p className="mb-1">{orderData.customer_email}</p>
                                    <p className="mb-1">{orderData.customer_contact}</p>
                                </div>
                            </div>
                            
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <p><strong>Order Date:</strong> {orderData.order_date}</p>
                                </div>
                                <div className="col-md-6 text-md-end">
                                    <p><strong>Payment Method:</strong> Cash on Delivery</p>
                                </div>
                            </div>
                            
                            <div className="table-responsive mb-4">
                                <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderData.items.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>${formatPrice(item.price)}</td>
                                                <td>{item.quantity}</td>
                                                <td>${formatPrice(item.itemTotal)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h5 className="mb-3">Shipping Information</h5>
                                            <p className="mb-1"><strong>Address:</strong> {orderData.shipping_address}</p>
                                            <p className="mb-1"><strong>City:</strong> {orderData.shipping_city === '1' ? 'Dhaka' : 'Chattogram'}</p>
                                            <p className="mb-0"><strong>Delivery Method:</strong> Standard Delivery</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h5 className="mb-3">Payment Summary</h5>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Subtotal:</span>
                                                <span>${formatPrice(orderData.sub_total)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Discount:</span>
                                                <span className="text-success">-${formatPrice(orderData.discount)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Shipping:</span>
                                                <span className="text-success">Free</span>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between fw-bold">
                                                <span>Total:</span>
                                                <span>${formatPrice(orderData.grand_total)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4 text-center">
                                <p className="mb-0">Thank you for your business!</p>
                                <p className="text-muted small">If you have any questions about this invoice, please contact us.</p>
                            </div>
                        </div>
                        <div className="card-footer bg-white py-3 text-center">
                            <Link to="/" className="btn btn-primary">
                                <FaHome className="me-2" /> Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Weblayout>
    );
}

export default Invoice;
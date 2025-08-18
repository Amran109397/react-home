import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { CartProvider, useCart } from "react-use-cart";

import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Feature from './pages/Feature';

import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Invoice from './pages/Invoice';

/* admin route */
import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Protected from './component/protected';
import Categories from './Admin/Categories';
import Brand from './Admin/Brand';
import Colour from './Admin/Colour';
import Product from './Admin/Product';
import Coupon from './Admin/Coupon';
import Orders from './Admin/Orders';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    /* if you want, user will be logged in until they logout*/
    //return localStorage.getItem("access_token") || false;
    /* if you want, user will be logged when they close the browser*/
    return sessionStorage.getItem("access_token") || false;
  });

  return (
    <>
      <CartProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/Invoice' element={<Invoice />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Admin route */}
          <Route path={"/admin/dashboard"} element={
            <Protected isSignedIn={isSignedIn} >
              <Dashboard />
            </Protected>
          } />
          <Route path={"/admin/user"} element={
            <Protected isSignedIn={isSignedIn} >
              <Users />
            </Protected>
          } />
          <Route path={"/admin/categories"} element={
            <Protected isSignedIn={isSignedIn} >
              <Categories />
            </Protected>
          } />
          <Route path={"/admin/brands"} element={
            <Protected isSignedIn={isSignedIn} >
              <Brand />
            </Protected>
          } />
          <Route path={"/admin/colour"} element={
            <Protected isSignedIn={isSignedIn} >
              <Colour />
            </Protected>
          } />
          <Route path={"/admin/product"} element={
            <Protected isSignedIn={isSignedIn} >
              <Product />
            </Protected>
          } />
          <Route path={"/admin/coupon"} element={
            <Protected isSignedIn={isSignedIn} >
              <Coupon />
            </Protected>
          } />
          <Route path={"/admin/orders"} element={
            <Protected isSignedIn={isSignedIn} >
              <Orders />
            </Protected>
          } />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
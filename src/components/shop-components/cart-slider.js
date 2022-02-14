import React from 'react';
import { Link } from 'react-router-dom';

const CartSlider = (props) => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  const active = props.user?.active ? props.user.active : false;
  const approved = props.user?.approved ? props.user.approved : false;
  const token = localStorage.getItem('access-token');

  const isAuthenticated = () => {
    const ACCESS_TOKEN = localStorage.getItem('access-token');
    const REFRESH_TOKEN = localStorage.getItem('refresh-token');

    return ACCESS_TOKEN && REFRESH_TOKEN ? true : false;
  };

  const cartItem = (item) => {
    return (
      <div className="mini-cart-item clearfix">
        <div className="mini-cart-img go-top">
          <Link to="/product-details">
            <img src={publicUrl + 'assets/img/product/1.png'} alt="Image" />
          </Link>
          <span className="mini-cart-item-delete">
            <i className="icon-cancel" />
          </span>
        </div>
        <div className="mini-cart-info go-top">
          <h6>
            <Link to="/product-details">Wheel Bearing Retainer</Link>
          </h6>
          <span className="mini-cart-quantity">1 x $65.00</span>
        </div>
      </div>
    );
  };

  return (
    <div
      id="ltn__utilize-cart-menu"
      className="ltn__utilize ltn__utilize-cart-menu"
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <span className="ltn__utilize-menu-title">Cart</span>
          <button className="ltn__utilize-close">×</button>
        </div>
        <div className="mini-cart-product-area ltn__scrollbar">
          {isAuthenticated() && approved && active && cartItem()}
        </div>
        <div className="mini-cart-footer">
          {isAuthenticated() && approved && active && (
            <div>
              <div className="mini-cart-sub-total">
                <h5>
                  Subtotal: <span>$310.00</span>
                </h5>
              </div>
              <div className="btn-wrapper go-top">
                <Link to="/cart" className="theme-btn-1 btn btn-effect-1">
                  View Cart
                </Link>
                <Link to="/cart" className="theme-btn-2 btn btn-effect-2">
                  Checkout
                </Link>
              </div>
              <p>Free Shipping on All Orders Over $100!</p>
            </div>
          )}
          {!isAuthenticated() && (
            <div className="pt-200">
              <p>Login with your account to view your cart items.</p>
              <div className="btn-wrapper go-top">
                <Link to="/login" className="theme-btn-1 btn btn-effect-1">
                  Sign In
                </Link>
              </div>
            </div>
          )}
          <div className="pt-200">
            {token && (
              <div>
                {isAuthenticated && !approved && (
                  <p>Your Identity Verification is pending.</p>
                )}
                {isAuthenticated && !active && (
                  <p>Please activate your email.</p>
                )}
                {isAuthenticated && (!approved || !active) && (
                  <div className="btn-wrapper go-top">
                    <Link
                      to="/my-account"
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      My Account
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;

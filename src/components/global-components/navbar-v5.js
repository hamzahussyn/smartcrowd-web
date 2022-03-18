import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import CartSlider from '../shop-components/cart-slider';
import { BsWallet2 } from 'react-icons/bs';
import { getCartContents } from '../../actions/cart';

const NavbarV5 = (props) => {
  let publicUrl = process.env.PUBLIC_URL + '/';

  const [cart, setCart] = useState({
    cartItems: new Array(),
    cartItemsCount: 0,
    cartNetTotal: 0.0,
  });

  useEffect(() => {
    if (Object.keys(props.user).length) {
      getCartContents(props.user.id).then((response) => {
        console.log(response.data.CartItems);
        setCart({
          cartItems: response.data.CartItems,
          cartItemsCount: response.data.CartItems.length,
          cartNetTotal: response.data.NetTotal,
        });
      });
    }
  }, [props.user]);

  return (
    <div>
      {/* HEADER AREA START (header-3) */}
      <header className="ltn__header-area ltn__header-3 section-bg-6---">
        <div
          className="ltn__header-top-area section-bg-6 top-area-color-white---"
          style={{ backgroundColor: '#070986' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>{props.header}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-middle-area start */}
        <div className="ltn__header-middle-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo">
                  <Link to="/">
                    <img
                      src={publicUrl + 'assets/img/logo-new.png'}
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col header-contact-serarch-column d-none d-xl-block">
                <div className="header-contact-search">
                  {/* header-feature-item */}
                  {/* <div className="header-feature-item">
                      <div className="header-feature-icon">
                        <i className="icon-phone" />
                      </div>
                      <div className="header-feature-info">
                        <h6>Phone</h6>
                        <p>
                          <a href="tel:0123456789">+0123-456-789</a>
                        </p>
                      </div>
                    </div> */}
                  {/* header-search-2 */}
                  {/* <div className="header-search-2">
                      <form id="#123" method="get">
                        <input
                          type="text"
                          name="search"
                          defaultValue=""
                          placeholder="Search here..."
                        />
                        <button type="submit">
                          <span>
                            <i className="icon-search" />
                          </span>
                        </button>
                      </form>
                    </div> */}
                </div>
              </div>
              <div className="col">
                {/* header-options */}
                <div className="ltn__header-options">
                  <ul>
                    <li className="d-none">{/* ltn__currency-menu */}</li>
                    <li className="d-none">
                      {/* header-search-1 */}
                      <div className="header-search-wrap">
                        <div className="header-search-1">
                          <div className="search-icon">
                            <i className="icon-search  for-search-show" />
                            <i className="icon-cancel  for-search-close" />
                          </div>
                        </div>
                        <div className="header-search-1-form">
                          <form id="#" method="get" action="#">
                            <input
                              type="text"
                              name="search"
                              defaultValue=""
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <span>
                                <i className="icon-search" />
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>

                    <li className="">
                      {/* user-menu */}
                      <div className="ltn__drop-menu user-menu">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="icon-user" />
                            </a>
                            <ul>
                              {!Object.keys(props.user).length && (
                                <li>
                                  <Link to="/login">Sign in</Link>
                                </li>
                              )}
                              {!Object.keys(props.user).length && (
                                <li>
                                  <Link to="/register">Register</Link>
                                </li>
                              )}
                              <li>
                                <Link to="/my-account">My Account</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      {/* mini-cart 2 */}
                      <div className="mini-cart-icon mini-cart-icon-2">
                        <a
                          href="#ltn__utilize-cart-menu"
                          className="ltn__utilize-toggle"
                        >
                          <span className="mini-cart-icon">
                            <i className="icon-shopping-cart" />
                            <sup>{cart.cartItemsCount}</sup>
                          </span>
                          <h6>
                            <span>Your Cart</span>{' '}
                            <span className="ltn__secondary-color">
                              ${cart.cartNetTotal}
                            </span>
                          </h6>
                        </a>
                      </div>
                    </li>
                    <li>
                      {/* Mobile Menu Button */}
                      <div className="mobile-menu-toggle d-lg-none">
                        <a
                          href="#ltn__utilize-mobile-menu"
                          className="ltn__utilize-toggle"
                        >
                          <svg viewBox="0 0 800 600">
                            <path
                              d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                              id="top"
                            />
                            <path d="M300,320 L540,320" id="middle" />
                            <path
                              d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                              id="bottom"
                              transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                            />
                          </svg>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-middle-area end */}
        {/* header-bottom-area start */}
        <div className="header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white ltn__primary-bg---- menu-color-white---- d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col header-menu-column justify-content-center">
                <div className="sticky-logo">
                  <div className="site-logo">
                    <Link to="/">
                      <img
                        src={publicUrl + 'assets/img/logo.png'}
                        alt="Logo"
                        style={{ width: '35%' }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-menu header-menu-2">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className="">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/marketplace">Marketplace</Link>
                        </li>
                        <li>
                          <Link to="/team">Team</Link>
                        </li>
                        <li>
                          <Link to="/faq">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header-bottom-area end */}
      </header>
      {/* HEADER AREA END */}
      {/* Utilize Cart Menu Start */}

      <CartSlider user={props.user} cart={cart} />

      {/* Utilize Cart Menu End */}

      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img src={publicUrl + 'assets/img/logo.png'} alt="Logo" />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <Link to="/my-account" title="My Account">
                  <span className="utilize-btn-icon">
                    <i className="far fa-user" />
                  </span>
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/my-account" title="My Account">
                  <span className="utilize-btn-icon">
                    <BsWallet2 />
                  </span>
                  Wallet
                </Link>
              </li>
              <li>
                <Link to="/cart" title="Shoping Cart">
                  <span className="utilize-btn-icon">
                    <i className="fas fa-shopping-cart" />
                    <sup>{cart.cartItemsCount}</sup>
                  </span>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarV5;

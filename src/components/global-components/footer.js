import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + '/';
    const minscript = document.createElement('script');
    minscript.async = true;
    minscript.src = publicUrl + 'assets/js/main.js';

    document.body.appendChild(minscript);

    $('.go-top')
      .find('a')
      .on('click', function () {
        $('.quarter-overlay').fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $('.quarter-overlay').fadeOut(300);
        }, 800);
      });

    $(document).on('click', '.theme-btn-1 ', function () {
      $('div').removeClass('modal-backdrop');
      $('div').removeClass('show');
      $('div').removeClass('fade');
      $('body').attr('style', '');
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imgattr = 'Footer logo';

    return (
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-1 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img
                        src={publicUrl + 'assets/img/smart-crowd-icon.png'}
                        alt="Logo"
                        style={{ width: '' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img
                        src={publicUrl + 'assets/img/name-smart-crowd.png'}
                        alt="Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <p style={{fontSize: '10px'}}>
                  This information is not an offer to invest in any token, Fund
                  or other opportunity and is provided for information only.
                  Performance results are shown net of all fees, costs, and
                  expenses associated with the token. Should an investor choose
                  to redeem a token through RealT or on a secondary market,
                  other processing fees may be assessed that are not factored
                  into the returns presented. Past performance does not
                  guarantee future results. Returns are calculated based on the
                  rental payments distributed throughout the year and the
                  appreciation in value of the underlying property. The
                  appreciation in value is based on the difference between
                  purchase price and annual property reappraisals. Individual
                  investor returns may vary based on the timing of their
                  investments and redemptions. This site is operated by
                  RealToken Inc., which is not a registered broker-dealer or
                  investment advisor. RealToken Inc. does not give investment
                  advice, endorsement, analysis or recommendations with respect
                  to any securities. Nothing on this website should be construed
                  as an offer to sell, solicitation of an offer to buy or a
                  recommendation for any security by RealToken Inc. or any third
                  party. You are solely responsible for determining whether any
                  investment, investment strategy, security or related
                  transaction is appropriate for you based on your personal
                  investment objectives, financial circumstances and risk
                  tolerance. You should consult with licensed legal
                  professionals and investment advisors for any legal, tax,
                  insurance or investment advice. All securities listed here are
                  being offered by, and all information included on this site is
                  the responsibility of, the applicable issuer of such
                  securities. RealToken Inc. does not guarantee any investment
                  performance, outcome or return of capital for any investment
                  opportunity posted on this site. By accessing this site and
                  any pages thereof, you agree to be bound by the Terms of
                  Service and Privacy Policy. Please view our general disclaimer
                  and accessibility statement as well.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img
                        src={publicUrl + 'assets/img/logo-2.png'}
                        alt="Logo"
                      />
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing.
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-placeholder" />
                        </div>
                        <div className="footer-address-info">
                          <p>Brooklyn, New York, United States</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-call" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="tel:+0123-456789">+0123-456789</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-mail" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="mailto:example@example.com">
                              example@example.com
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <Social />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/blog-grid">Blog</Link>
                      </li>
                      <li>
                        <Link to="/shop">All Products</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/about">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/shop">Promotional Offers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Customer Care</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/my-account">My account</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link to="/add-listing">Add listing</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          <i className="fas fa-location-arrow" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <h5 className="mt-30">We Accept</h5>
                  <img
                    src={publicUrl + 'assets/img/icons/payment-4.png'}
                    alt="Payment Image"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <Copyright />
      </footer>
    );
  }
}

export default Footer_v1;

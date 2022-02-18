import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { uploadDocs } from '../../actions/kyc';
import KYCComponent from '../my-account-components/kyc';
import {IoWallet} from 'react-icons/io5';

const MyAccountComponent = (props) => {
  const { user } = props;

  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div className="liton__wishlist-area pb-100 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* PRODUCT TAB AREA START */}
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="ltn__tab-menu-list mb-50">
                      <div className="nav">
                        <a
                          className="active show"
                          data-bs-toggle="tab"
                          href="#liton_tab_1_1"
                        >
                          Dashboard <i className="fas fa-home" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_tab_1_2">
                          Orders <i className="fas fa-file-alt" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_tab_1_5">
                          Account Details <i className="fas fa-user" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_tab_1_6">
                          Identity Verification{' '}
                          <i className="fas fa-address-card" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_tab_1_5">
                          Email Verification <i className="fas fa-at" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_tab_1_5">
                          Smart Crowd Wallet <IoWallet/>
                        </a>
                        <Link className="go-top" to="/login">
                          Logout <i className="fas fa-sign-out-alt" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="liton_tab_1_1"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            Hello <strong>{user?.firstname}</strong> (not{' '}
                            <strong>{user?.firstname}</strong>?{' '}
                            <small>
                              <a href="login-register.html">Log out</a>
                            </small>{' '}
                            )
                          </p>
                          <p>
                            From your account dashboard you can view your{' '}
                            <span>recent orders</span>, manage your{' '}
                            <span>shipping and billing addresses</span>, and{' '}
                            <span>edit your password and account details</span>.
                          </p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_2">
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Total</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Jun 22, 2019</td>
                                  <td>Pending</td>
                                  <td>$3000</td>
                                  <td>
                                    <a href="cart.html">View</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Nov 22, 2019</td>
                                  <td>Approved</td>
                                  <td>$200</td>
                                  <td>
                                    <a href="cart.html">View</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Jan 12, 2020</td>
                                  <td>On Hold</td>
                                  <td>$990</td>
                                  <td>
                                    <a href="cart.html">View</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_5">
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            The following addresses will be used on the checkout
                            page by default.
                          </p>
                          <div className="ltn__form-box">
                            <form method="GET">
                              <div className="row mb-50">
                                <div className="col-md-6">
                                  <label>First name:</label>
                                  <input type="text" name="ltn__name" />
                                </div>
                                <div className="col-md-6">
                                  <label>Last name:</label>
                                  <input type="text" name="ltn__lastname" />
                                </div>
                                <div className="col-md-6">
                                  <label>Display Name:</label>
                                  <input
                                    type="text"
                                    name="ltn__lastname"
                                    placeholder="Ethan"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label>Display Email:</label>
                                  <input
                                    type="email"
                                    name="ltn__lastname"
                                    placeholder="example@example.com"
                                  />
                                </div>
                              </div>
                              <fieldset>
                                <legend>Password change</legend>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label>
                                      Current password (leave blank to leave
                                      unchanged):
                                    </label>
                                    <input type="password" name="ltn__name" />
                                    <label>
                                      New password (leave blank to leave
                                      unchanged):
                                    </label>
                                    <input
                                      type="password"
                                      name="ltn__lastname"
                                    />
                                    <label>Confirm new password:</label>
                                    <input
                                      type="password"
                                      name="ltn__lastname"
                                    />
                                  </div>
                                </div>
                              </fieldset>
                              <div className="btn-wrapper">
                                <button
                                  type="submit"
                                  className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      {/* IDENTITY VERIFICATION */}
                      <KYCComponent user={props.user} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRODUCT TAB AREA END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountComponent;

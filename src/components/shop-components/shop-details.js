import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import AddToCart from '../property-details-components/addToCart';
import PopularProperties from '../property-details-components/popular';

class ShopDetails extends Component {
  render() {
    const { property, user } = this.props;
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="ltn__shop-details-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-category">
                      <Link to="#">Featured</Link>
                    </li>
                    <li className="ltn__blog-category">
                      <Link className="bg-orange" to="#">
                        For Rent
                      </Link>
                    </li>
                    <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt" />
                      May 19, 2021
                    </li>
                    {/* <li>
                      <Link to="#">
                        <i className="far fa-comments" />
                        35 Comments
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <h1>{property?.name}</h1>
                <label>
                  <span className="ltn__secondary-color">
                    <i className="flaticon-pin" />
                  </span>{' '}
                  {property?.city}, {property?.country}
                </label>
                <h4 className="title-2">Description</h4>
                <p>
                  Massa tempor nec feugiat nisl pretium. Egestas fringilla
                  phasellus faucibus scelerisque eleifend donec Porta nibh
                  venenatis cras sed felis eget velit aliquet. Neque volutpat ac
                  tincidunt vitae semper quis lectus. Turpis in eu mi bibendum
                  neque egestas congue quisque. Sed elementum tempus egestas sed
                  sed risus pretium quam. Dignissim sodales ut eu sem. Nibh
                  mauris cursus mattis molestee iaculis at erat pellentesque. Id
                  interdum velit laoreet id donec ultrices tincidunt.
                </p>
                <p>
                  To the left is the modern kitchen with central island, leading
                  through to the unique breakfast family room which feature
                  glass walls and doors out onto the garden and access to the
                  separate utility room.
                </p>

                {/* DETAILS */}
                <h4 className="title-2">Property Detail</h4>
                <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                  <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                    <div className="nav">
                      <a data-bs-toggle="tab" href="#liton_tab_3_1">
                        Highlights
                      </a>
                      <a data-bs-toggle="tab" href="#liton_tab_3_2">
                        Financials
                      </a>
                      <a data-bs-toggle="tab" href="#liton_tab_3_3">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade" id="liton_tab_3_1">
                    <div className="ltn__apartments-tab-content-inner">
                      <div className="property-detail-info-list section-bg-8 clearfix mb-60">
                        <ul>
                          <li>
                            <label>Expected Income: </label>{' '}
                            <span>
                              {property?.Financials?.expectedIncomePercentage} %
                            </span>
                          </li>
                          <li>
                            <label>Token Price: </label>{' '}
                            <span>$ {property?.Unit?.priceUsd}</span>
                          </li>
                          <li>
                            <label>Total Tokens :</label>{' '}
                            <span>{property?.Unit?.unitsQuantity}</span>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <label>Property type: </label>{' '}
                            <span>{property?.Description?.propertyType}</span>
                          </li>
                          <li>
                            <label>Construction Year: </label>{' '}
                            <span>
                              {property?.Description?.constructionYear}
                            </span>
                          </li>
                          <li>
                            <label>Bedrooms: </label>{' '}
                            <span>{property?.Description?.bedroom}</span>
                          </li>
                          <li>
                            <label>Bathrooms: </label>{' '}
                            <span>{property?.Description?.bathroom}</span>
                          </li>
                          <li>
                            <label>Rental Type: </label>{' '}
                            <span>{property?.Description?.rentalType}</span>
                          </li>
                          <li>
                            <label>Section 8: </label>{' '}
                            <span>{property?.Description?.section8}</span>
                          </li>
                          <li>
                            <label>Property Status:</label>{' '}
                            <span>For Sale</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_3_2">
                    <div className="ltn__apartments-tab-content-inner">
                      <div className="property-detail-info-list section-bg-8 clearfix mb-60">
                        <ul>
                          <li>
                            <label>Gross Rent / year: </label>{' '}
                            <span>
                              $ {property?.Financials?.grossRentPerYear}
                            </span>
                          </li>
                          <li>
                            <label>Gross Rent / month: </label>{' '}
                            <span>
                              $ {property?.Financials?.grossRentPerMonth}
                            </span>
                          </li>
                          <li>
                            <label>Gross Rent / month: </label>{' '}
                            <span>$ {property?.Financials?.monthlyCost}</span>
                          </li>
                          <ul>
                            <label>Property Management</label>
                            <li>
                              <label>Property Management: </label>{' '}
                              <span>
                                ${' '}
                                {
                                  property?.Financials
                                    ?.propertyManagementCharges
                                }
                              </span>
                            </li>
                            <li>
                              <label>Smart Crowd Management: </label>{' '}
                              <span>
                                $ {property?.Financials?.platformCharges}
                              </span>
                            </li>
                            <li>
                              <label>Maintenance Expenses: </label>{' '}
                              <span>
                                $ {property?.Financials?.maintenanceCharges}
                              </span>
                            </li>
                            <li>
                              <label>Property Taxes: </label>{' '}
                              <span>
                                $ {property?.Financials?.propertyTaxCharges}
                              </span>
                            </li>
                            <li>
                              <label>Insurance: </label>{' '}
                              <span>
                                $ {property?.Financials?.insuranceCharges}
                              </span>
                            </li>
                            <li>
                              <label>Utilities: </label>{' '}
                              <span>
                                $ {property?.Financials?.utilityCharges}
                              </span>
                            </li>
                            <li>
                              <label>Net Rent / year: </label>{' '}
                              <span>
                                $ {property?.Financials?.netRentPerMonth}
                              </span>
                            </li>
                            <li>
                              <label>Net Rent / year: </label>{' '}
                              <span>
                                $ {property?.Financials?.netNetPerYear}
                              </span>
                            </li>
                          </ul>
                          <ul>
                            <label>Total Investment</label>
                            <li>
                              <label>Underlying Asset Price: </label>
                              <span>
                                $ {property?.Financials?.assetPriceInvestment}
                              </span>
                            </li>
                            <li>
                              <label>Smart Crowd Listing Fee (10%): </label>
                              <span>
                                ${' '}
                                {
                                  property?.Financials
                                    ?.platformListingFeeInvestment
                                }
                              </span>
                            </li>
                            <li>
                              <label>Initial Maintainence Reserve: </label>
                              <span>
                                ${' '}
                                {
                                  property?.Financials
                                    ?.initialMaintenanceReserveInvestment
                                }
                              </span>
                            </li>
                            <li>
                              <label>Smart Crowd Listing Fee (10%): </label>
                              <span>
                                ${' '}
                                {
                                  property?.Financials
                                    ?.platformListingFeeInvestment
                                }
                              </span>
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_3_3">
                    <div className="ltn__apartments-tab-content-inner">
                      <div className="property-detail-info-list section-bg-8 clearfix mb-60">
                        <ul>
                          <li>
                            <label>Lot Size: </label>{' '}
                            <span>{property?.Description?.lotSize}</span>
                          </li>
                          <li>
                            <label>Construction Type: </label>{' '}
                            <span>
                              {property?.Description?.constructionType}
                            </span>
                          </li>
                          <li>
                            <label>Foundation: </label>{' '}
                            <span>{property?.Description?.foundation}</span>
                          </li>
                          <li>
                            <label>Roof Type: </label>{' '}
                            <span>{property?.Description?.roofType}</span>
                          </li>
                          <li>
                            <label>Parking: </label>{' '}
                            <span>{property?.Description?.parking}</span>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <label>Interior Size: </label>
                            <span>{property?.Description?.interiorSize}</span>
                          </li>
                          <li>
                            <label>Heating: </label>
                            <span>{property?.Description?.heating}</span>
                          </li>
                          <li>
                            <label>Cooling: </label>
                            <span>{property?.Description?.cooling}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <h4 className="title-2">From Our Gallery</h4>
                <div className="ltn__property-details-gallery mb-30">
                  <div className="row">
                    <div className="col-md-6">
                      <a
                        href={publicUrl + 'assets/img/others/14.jpg'}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={publicUrl + 'assets/img/others/14.jpg'}
                          alt="Image"
                        />
                      </a>
                      <a
                        href={publicUrl + 'assets/img/others/15.jpg'}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={publicUrl + 'assets/img/others/15.jpg'}
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        href={publicUrl + 'assets/img/others/16.jpg'}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={publicUrl + 'assets/img/others/16.jpg'}
                          alt="Image"
                        />
                      </a>
                    </div>
                  </div>
                </div> */}

                <h4 className="title-2">Location</h4>
                <div className="property-details-google-map mb-60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                {/* ADD TO CART */}
                <AddToCart property={property} userId={user?.id}/>
                
                {/* Popular Product Widget */}
                <PopularProperties/>

                {/* Social Media Widget */}
                <div className="widget ltn__social-media-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Follow us
                  </h4>
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

                {/* Banner Widget */}
                <div className="widget ltn__banner-widget d-none go-top">
                  <Link to="/shop">
                    <img src={publicUrl + 'assets/img/banner/2.jpg'} alt="#" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const PopularProperties = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div className="widget ltn__popular-product-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border-2">
        Popular Properties
      </h4>
      <div className="row ltn__popular-product-widget-active slick-arrow-1">
        {/* ltn__product-item */}
        <div className="col-12">
          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
            <div className="product-img go-top">
              <Link to="/shop">
                <img src={publicUrl + 'assets/img/product-3/6.jpg'} alt="#" />
              </Link>
              <div className="real-estate-agent">
                <div className="agent-img">
                  <Link to="/team-details">
                    <img
                      src={publicUrl + 'assets/img/blog/author.jpg'}
                      alt="#"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-info">
              <div className="product-price">
                <span>
                  $349,00<label>/Month</label>
                </span>
              </div>
              <h2 className="product-title">
                <Link to="/shop">New Apartment Nice View</Link>
              </h2>
              <div className="product-img-location">
                <ul>
                  <li>
                    <Link to="/shop">
                      <i className="flaticon-pin" /> Belmont Gardens, Chicago
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                <li>
                  <span>3 </span>
                  Bedrooms
                </li>
                <li>
                  <span>2 </span>
                  Bathrooms
                </li>
                <li>
                  <span>3450 </span>
                  square Ft
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-12">
          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
            <div className="product-img">
              <a href="product-details.html">
                <img src={publicUrl + 'assets/img/product-3/4.jpg'} alt="#" />
              </a>
              <div className="real-estate-agent">
                <div className="agent-img">
                  <Link to="/team-details">
                    <img
                      src={publicUrl + 'assets/img/blog/author.jpg'}
                      alt="#"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-info">
              <div className="product-price">
                <span>
                  $349,00<label>/Month</label>
                </span>
              </div>
              <h2 className="product-title">
                <a href="product-details.html">New Apartment Nice View</a>
              </h2>
              <div className="product-img-location">
                <ul>
                  <li>
                    <a href="product-details.html">
                      <i className="flaticon-pin" /> Belmont Gardens, Chicago
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                <li>
                  <span>3 </span>
                  Bedrooms
                </li>
                <li>
                  <span>2 </span>
                  Bathrooms
                </li>
                <li>
                  <span>3450 </span>
                  square Ft
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ltn__product-item */}
        <div className="col-12">
          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
            <div className="product-img">
              <a href="product-details.html">
                <img src={publicUrl + 'assets/img/product-3/5.jpg'} alt="#" />
              </a>
              <div className="real-estate-agent">
                <div className="agent-img">
                  <Link to="/team-details">
                    <img
                      src={publicUrl + 'assets/img/blog/author.jpg'}
                      alt="#"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-info">
              <div className="product-price">
                <span>
                  $349,00<label>/Month</label>
                </span>
              </div>
              <h2 className="product-title">
                <a href="product-details.html">New Apartment Nice View</a>
              </h2>
              <div className="product-img-location">
                <ul>
                  <li>
                    <a href="product-details.html">
                      <i className="flaticon-pin" /> Belmont Gardens, Chicago
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                <li>
                  <span>3 </span>
                  Bedrooms
                </li>
                <li>
                  <span>2 </span>
                  Bathrooms
                </li>
                <li>
                  <span>3450 </span>
                  square Ft
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default PopularProperties;

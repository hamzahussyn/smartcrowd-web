import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const {id, badge, city, imageCount, expectedIncomePerMonth, minimumInvestment, name, } = props;

  let publicUrl = process.env.PUBLIC_URL + '/';
  return (
    <div className="col-lg-12">
      <div className="ltn__product-item ltn__product-item-4 text-center---">
        <div className="product-img go-top">
          <Link to={`/property/${id}`}>
            <img src={require(`../../sample-images/thumbnails/property_${id}.jpeg`)} alt="#" />
          </Link>
          <div className="product-badge">
            <ul>
              <li className="sale-badge bg-green">For Rent</li>
            </ul>
          </div>
          <div className="product-img-location-gallery">
            <div className="product-img-location">
              <ul>
                <li>
                  <Link to="/contact">
                    <i className="flaticon-pin" /> {city}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product-img-gallery go-top">
              <ul>
                <li>
                  <Link to={`/property/${id}`}>
                    <i className="fas fa-camera" /> 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-price">
            <span>
              ${minimumInvestment}<label>-Minimum Investment</label>
            </span>
          </div>
          <h2 className="product-title go-top">
            <Link to={`/property/${id}`}>{name}</Link>
          </h2>
          {/* <div className="product-description">
            <p>
              Beautiful Huge 1 Family House In Heart Of <br />
              Westbury. Newly Renovated With New Wood
            </p>
          </div> */}
          {/* <ul className="ltn__list-item-2 ltn__list-item-2-before">
            <li>
              <span>
                3 <i className="flaticon-bed" />
              </span>
              Bedrooms
            </li>
            <li>
              <span>
                2 <i className="flaticon-clean" />
              </span>
              Bathrooms
            </li>
            <li>
              <span>
                3450{' '}
                <i className="flaticon-square-shape-design-interface-tool-symbol" />
              </span>
              square Ft
            </li>
          </ul> */}
        </div>
        <div className="product-info-bottom">
          <div className="real-estate-agent">
            <div className="agent-img go-top">
              <Link to="/team-details">
                <img src={publicUrl + 'assets/img/blog/author.jpg'} alt="#" />
              </Link>
            </div>
            <div className="agent-brief go-top">
              <h6>
                <Link to="/team-details">William Seklo</Link>
              </h6>
              <small>Estate Agents</small>
            </div>
          </div>
          <div className="product-hover-action">
            <ul>
              <li>
                <a
                  href="#"
                  title="Quick View"
                  data-bs-toggle="modal"
                  data-bs-target="#quick_view_modal"
                >
                  <i className="flaticon-expand" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Wishlist"
                  data-bs-toggle="modal"
                  data-bs-target="#liton_wishlist_modal"
                >
                  <i className="flaticon-heart-1" />
                </a>
              </li>
              <li>
                <span className="go-top">
                  <Link to={`property/${id}`} title="Product Details">
                    <i className="flaticon-add" />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

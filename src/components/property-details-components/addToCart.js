import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { addTokensToCart } from '../../actions/cart';

const AddToCart = (props) => {
  const { property, userId } = props;

  const [numberOfTokens, setNumberOfTokens] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const authenticated = userId ? true : false;

  const handleAddToCart = () => {
    setError('');
    setFeedback('');

    const units = parseInt(numberOfTokens);

    if (isNaN(numberOfTokens) && isNaN(units)) {
      setError('Enter a number.');
      return;
    }

    if (units > property?.Unit?.unitsRemaining || units < 0) {
      setError('The Tokens must be in range.');
      return;
    }

    let requestBody = new Object();

    requestBody.id = userId;
    requestBody.units = units;
    requestBody.propertyId = property.id;

    addTokensToCart(requestBody).then((response) =>
      setFeedback(response?.Message)
    );

    return;
  };

  return (
    <div className="widget ltn__author-widget">
      <div className="ltn__author-widget-inner text-center">
        <img
          src={require(`../../sample-images/thumbnails/property_${2}.jpeg`)}
          alt="Image"
        />
        <h4>{property?.name}</h4>
        <br />
        <h6>Total Tokens: {property?.Unit?.unitsQuantity}</h6>
        <h6>Total Tokens Left: {property?.Unit?.unitsRemaining}</h6>
        <small>Minimum Investment: ${property?.Unit?.priceUsd}</small>
        <p>
          You can invest with as much amount as you want, even with the minimum
          price of the token.
        </p>
        {authenticated ? (
          <div className="row">
            <div className="col-md-12">
              <label>Add tokens to your cart:</label>
              <input
                type="number"
                name="ltn__name"
                placeholder="Enter here"
                onChange={(event) => setNumberOfTokens(event.target.value)}
              />
            </div>
          </div>
        ) : null}
      </div>
      {authenticated ? (
        <div className="btn-wrapper">
          <button
            className="btn theme-btn-1 btn-effect-1 text-uppercase col-md-12"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <div>
          <Link
            to="/login"
            className="btn-wrapper col-md-12 theme-btn-1 btn btn-effect-1"
          >
            Sign in
          </Link>
          <p>Sign in to add tokens to your cart.</p>
        </div>
      )}
      {feedback.length > 0 && <p>{feedback}</p>}
      {error.length > 0 && <p>{error}</p>}
    </div>
  );
};

export default AddToCart;

import React, { useEffect } from 'react';
import MarketplaceProductCard from './marketplace-product';

import '../../pages/marketplace/style.css';

const MarketplaceListing = (props) => {
  const { listing } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 header-top">
          <div className="section-title-area ltn__section-title-2--- text-center">
            {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
              Properties
            </h6> */}
            <h1 className="section-title">Featured Listings</h1>
            <p>
              For the first time, investors around the globe can buy into the US
              real estate market through fully-compliant, fractional, tokenized
              ownership. Powered by blockchain.
            </p>
          </div>
        </div>
      </div>
      {listing &&
        listing.map((property, index) => (
          <MarketplaceProductCard
            key={index}
            id={property.id}
            name={property.name}
            city={property.city}
            minimumInvestment={property.Unit.priceUsd}
          />
        ))}
    </div>
  );
};

export default MarketplaceListing;

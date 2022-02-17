import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import property_one from '../../sample-images/property_1.jpg';
import property_two from '../../sample-images/property_2.jpg';
import property_three from '../../sample-images/property_3.jpg';
import property_four from '../../sample-images/property_4.jpeg';

const ProductSlider = (props) => {
  //const { images } = props;
  const propertyImagesArray = [
    property_one,
    property_two,
    property_three,
    property_four,
  ];

  const renderSliderImage = () => {
    return propertyImagesArray
      ? propertyImagesArray.map((image, index) => (
          <div className="col-lg-12" key={index}>
            <div className="ltn__img-slide-item-4">
              <a href={image} data-rel="lightcase:myCollection">
                <img src={image} alt="Image" className='product-slider-image' />
              </a>
            </div>
          </div>
        ))
      : '';
  };

  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div className="ltn__img-slider-area mb-90">
      <div className="container-fluid">
        <div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
          {renderSliderImage()}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;

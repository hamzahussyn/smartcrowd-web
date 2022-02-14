import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <div className="ltn__slide-item">
        <div className="ltn__slide-item-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 align-self-center">
                <div className="slide-item-info">
                  <div className="slide-item-info-inner">
                    {/* <h5 className="slide-sub-title white-color--- animated">
                      <span>
                        <i className="fas fa-home" />
                      </span>{' '}
                      Real Estate Agency
                    </h5> */}
                    <h1 className="slide-title animated " style={{color: '#2c3783'}}>
                      Fractional <br/> real estate investing
                    </h1>
                    <div className="slide-brief animated">
                      <p>
                        For the first time, investors around the globe can buy
                        into the US real estate market through fully-compliant,
                        fractional, tokenized ownership. Powered by blockchain.
                      </p>
                    </div>
                    <div className="btn-wrapper animated ">
                      <Link
                        to="/about"
                        className="theme-btn-1 btn btn-effect-1 go-top"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div>
                  <img
                    src={publicUrl + '/assets/img/banner/home-banner.jpg'}
                    alt="#"
                  />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;

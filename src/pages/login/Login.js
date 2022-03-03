import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Footer from '../../components/global-components/footer';
import NavbarV5 from '../../components/global-components/navbar-v5';
import PageHeader from '../../components/global-components/page-header';
import { Navigate } from 'react-router-dom';
import getConfig from '../../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [errors, setErrors] = useState({});
  const [requestError, setRequestError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  let publicUrl = process.env.PUBLIC_URL + '/';

  const handleChange = (event, setter) => {
    if (event.target.type === 'text') {
      setSubmitClicked(false);
      setter(event.target.value);
    } else if (event.target.type === 'checkbox') {
      setSubmitClicked(false);
      setter((prev) => !prev);
    }
  };

  const displayErrors = () => {
    let errorsLength = 0;

    if (!/\S+@\S+\.\S+/.test(email)) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, email: 'Email is required.' };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, email: '' };
      });
    }
    if (password.length < 8) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, password: 'Password must be 8 characters at least.' };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, password: '' };
      });
    }

    return errorsLength;
  };

  const handleFormSubmit = () => {
    let errorsLength = displayErrors();

    if (errorsLength === 0) {
      axios({
        method: 'POST',
        url: 'https://smart-crowd-api.herokuapp.com/api/auth/login',
        data: {
          email,
          password,
        },
      })
        .then((response) => {
          let accessToken = response.data.included[0].attributes.token;
          let refreshToken = response.data.included[1].attributes.token;

          localStorage.setItem('access-token', accessToken);
          localStorage.setItem('refresh-token', refreshToken);

          setLoginSuccess(true);
          Promise.resolve(response);
        })
        .catch((error) => {
          setRequestError(error.response.data.errors[0].title);

          Promise.reject(error);
        });
    }
  };

  return (
    <div>
      <NavbarV5
        header={
          'Register your account with Smart Crowd to own tokenized property'
        }
        user={{}}
      />
      {/* <PageHeader headertitle="Sign In" subheader="sign in" /> */}

      <div className="ltn__login-area pb-65 pt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Sign In <br />
                  To Your Account
                </h1>
                <p>
                  Sign in to your account to buy fractionalized property on{' '}
                  <br />
                  Smart Crowd.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="account-login-inner">
                <div className="ltn__form-box contact-form-box">
                  {submitClicked && errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                  <input
                    type="text"
                    name="email"
                    placeholder="Email*"
                    onChange={(event) => {
                      handleChange(event, setEmail);
                    }}
                  />

                  {submitClicked && errors.password && (
                    <p className="error-message">{errors.password}</p>
                  )}
                  <input
                    className="password-input"
                    type="text"
                    name="password"
                    placeholder="Password*"
                    onChange={(event) => {
                      handleChange(event, setPassword);
                    }}
                  />

                  {submitClicked && requestError && (
                    <p className="error-message">{requestError}</p>
                  )}
                  <div className="btn-wrapper mt-0">
                    <button
                      className="theme-btn-1 btn btn-block"
                      type="submit"
                      onClick={(e) => {
                        setSubmitClicked((prev) => true);
                        handleFormSubmit();
                      }}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="go-to-btn mt-20">
                    <a href={`${getConfig().FRONTEND_URL}/forget-password`}>
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlistget personalised recommendations{' '}
                  <br />
                  check out more quickly track your orders register
                </p>
                <div className="btn-wrapper go-top">
                  <Link to="/register" className="theme-btn-1 btn black-btn">
                    CREATE ACCOUNT
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {loginSuccess && (<Navigate to='/'/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

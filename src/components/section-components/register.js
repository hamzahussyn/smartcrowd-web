import React, { Component, useState, useEffect } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const RegisterComponent = (props) => {
  let [email, setEmail] = useState('');
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [isUSCitizen, setIsUSCitizen] = useState(false);
  let [agreeTermsAndConditions, setAgreeTermsAndConditions] = useState(false);
  let [submitClicked, setSubmitClicked] = useState(false);

  const handleChange = (event, setter) => {
    if (event.target.type === 'text') {
      setter(event.target.value);
    } else if (event.target.type === 'checkbox') {
      setter((prev) => !prev);
    }
  };

  const handleClick = (event) => {
    console.log({
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      isUSCitizen,
      agreeTermsAndConditions,
    });
  };

  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">
                Register <br />
                Your Account
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Sit aliquid, Non distinctio vel iste.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <form action="#" className="ltn__form-box contact-form-box">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  onChange={(event) => handleChange(event, setFirstName)}
                />

                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={(event) => handleChange(event, setLastName)}
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  onChange={(event) => handleChange(event, setEmail)}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  onChange={(event) => handleChange(event, setPassword)}
                />

                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password*"
                  onChange={(event) => handleChange(event, setConfirmPassword)}
                />

                <label className="checkbox-inline">
                  <input
                    type="checkbox"
                    defaultValue
                    onChange={(event) => handleChange(event, setIsUSCitizen)}
                  />{' '}
                  &nbsp; Are you a resident of US or its territories?
                </label>
                <label className="checkbox-inline">
                  <input
                    type="checkbox"
                    defaultValue
                    onChange={(event) =>
                      handleChange(event, setAgreeTermsAndConditions)
                    }
                  />{' '}
                  &nbsp; By clicking "create account", I consent to the privacy
                  policy.
                </label>
                <div className="btn-wrapper">
                  <button
                    className="theme-btn-1 btn reverse-color btn-block"
                    onClick={(e) => {
                      handleClick(e);
                    }}
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
                <button
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  Create
                </button>
              </form>

              <div className="by-agree text-center">
                <p>By creating an account, you agree to our:</p>
                <p>
                  <a href="#">
                    TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                    POLICY
                  </a>
                </p>
                <div className="go-to-btn mt-50">
                  <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;

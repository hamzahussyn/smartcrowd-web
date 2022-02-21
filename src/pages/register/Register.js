import React, { useEffect, useState } from 'react';
import Footer from '../../components/global-components/footer';
import NavbarV5 from '../../components/global-components/navbar-v5';
import PageHeader from '../../components/global-components/page-header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Register = () => {
  let [email, setEmail] = useState('');
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [isUSCitizen, setIsUSCitizen] = useState(false);
  let [agreeTermsAndConditions, setAgreeTermsAndConditions] = useState(false);
  let [submitClicked, setSubmitClicked] = useState(false);
  let [registrationSuccess, setRegistrationSuccess] = useState(false);
  let [errors, setErrors] = useState({});

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

    if (firstName.length === 0) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, firstName: 'First Name is required.' };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, firstName: '' };
      });
    }
    if (lastName.length === 0) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, lastName: 'Last Name is required.' };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, lastName: '' };
      });
    }
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
    if (password !== confirmPassword) {
      errorsLength += 1;
      setErrors((prev) => {
        return {
          ...prev,
          confirmPassword: 'Confirmed password does not match.',
        };
      });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          confirmPassword: '',
        };
      });
    }
    if (!agreeTermsAndConditions) {
      errorsLength += 1;
      setErrors((prev) => {
        return {
          ...prev,
          agreeTermsAndConditions:
            'To register you will have to agree with our terms and conditions.',
        };
      });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          agreeTermsAndConditions: '',
        };
      });
    }

    return errorsLength;
  };

  const handleFormSubmit = () => {
    let errorsLength = displayErrors();

    if (errorsLength === 0) {
      axios({
        method: 'POST',
        url: 'https://smart-crowd-api.herokuapp.com/api/auth/register',
        data: {
          email: email,
          firstName: firstName,
          lastName: lastName,
          isUsCitizen: isUSCitizen,
          password: password,
        },
      })
        .then((response) => {
          console.log(response);
          let accessToken = response.data.included[0].attributes.token;
          let refreshToken = response.data.included[1].attributes.token;

          localStorage.setItem('access-token', accessToken);
          localStorage.setItem('refresh-token', refreshToken);

          setRegistrationSuccess(true);

          Promise.resolve(response);
        })
        .catch((error) => {
          Promise.reject(error);
        });
    }
  };

  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div>
      <NavbarV5
        header={
          'Register your account with Smart Crowd to own tokenized property'
        }
        user={{}}
      />
      {/* <PageHeader headertitle="Sign Up" subheader="register" /> */}

      <div className="ltn__login-area pb-100 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">Register Your Account</h1>
                <p>
                  Create an account to buy fractionalized property on Smart
                  Crowd.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="account-login-inner">
                <div className="ltn__form-box contact-form-box">
                  {submitClicked && errors.firstName && (
                    <p className="error-message">{errors.firstName}</p>
                  )}
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name*"
                    onChange={(event) => handleChange(event, setFirstName)}
                  />

                  {submitClicked && errors.lastName && (
                    <p className="error-message">{errors.lastName}</p>
                  )}
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name*"
                    onChange={(event) => handleChange(event, setLastName)}
                  />

                  {submitClicked && errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                  <input
                    type="text"
                    name="email"
                    placeholder="Email*"
                    onChange={(event) => handleChange(event, setEmail)}
                  />

                  {submitClicked && errors.password && (
                    <p className="error-message">{errors.password}</p>
                  )}
                  <input
                    className="password-input"
                    type="text"
                    name="password"
                    placeholder="Password*"
                    onChange={(event) => handleChange(event, setPassword)}
                  />

                  {submitClicked && errors.confirmPassword && (
                    <p className="error-message">{errors.confirmPassword}</p>
                  )}
                  <input
                    className="password-input"
                    type="text"
                    name="confirmpassword"
                    placeholder="Confirm Password*"
                    onChange={(event) =>
                      handleChange(event, setConfirmPassword)
                    }
                  />

                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      defaultValue
                      onChange={(event) => handleChange(event, setIsUSCitizen)}
                    />{' '}
                    &nbsp; Are you a resident of US or its territories?
                  </label>

                  {submitClicked && errors.agreeTermsAndConditions && (
                    <p className="error-message">
                      {errors.agreeTermsAndConditions}
                    </p>
                  )}
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      defaultValue
                      onChange={(event) =>
                        handleChange(event, setAgreeTermsAndConditions)
                      }
                    />{' '}
                    &nbsp; By clicking "create account", I consent to the
                    privacy policy.
                  </label>

                  <div className="btn-wrapper">
                    <button
                      className="theme-btn-1 btn reverse-color btn-block"
                      onClick={(e) => {
                        setSubmitClicked((prev) => true);
                        handleFormSubmit();
                      }}
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                </div>

                <div className="by-agree text-center">
                  <p>By creating an account, you agree to our:</p>
                  <p>
                    <a href="#">
                      TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                      POLICY
                    </a>
                  </p>
                  <div className="go-to-btn mt-50">
                    <a href="http://localhost:3000/login">
                      ALREADY HAVE AN ACCOUNT ?
                    </a>
                    <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {registrationSuccess && (<Redirect to='/'/>)}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;

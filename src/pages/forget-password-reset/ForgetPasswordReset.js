import React, { useEffect, useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import Footer from '../../components/global-components/footer';
import NavbarV5 from '../../components/global-components/navbar-v5';
import {
  getCurrentUser,
  resetPassword,
  validateForgetPasswordLink,
} from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';

const ForgetPasswordReset = (props) => {
  const [queryParams, setQueryParams] = useSearchParams();

  const [currentUser, setCurrentUser] = useState({});
  const [navHeader, setNavHeader] = useState('');
  const [link, setLink] = useState(null);
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [errors, setErrors] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
    validateForgetPasswordLink(queryParams.get('id')).then((response) =>
      setLink(response)
    );
  }, []);

  const handleChange = (event, setter) => {
    setSubmitClicked(false);

    if (event.target.type === 'text') {
      setter(event.target.value);
    } else if (event.target.type === 'checkbox') {
      setter((prev) => !prev);
    }
  };

  const displayErrors = () => {
    let errorsLength = 0;

    if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    ) {
      errorsLength += 1;
      setErrors(true);
    }

    return errorsLength;
  };

  const handleFormSubmit = () => {
    let errorsLength = displayErrors();

    if (errorsLength === 0) {
      let requestBody = new Object();
      requestBody.password = password;

      resetPassword(queryParams.get('id'), requestBody).then((response) => {
        setPasswordReset(true);
      });
    }
  };

  return (
    <div>
      <NavbarV5 header={navHeader} user={currentUser} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <div className="ltn__form-box contact-form-box">
                {!link?.validLink && (
                  <div>
                    <p>
                      The link you followed does not seem to exist anymore.
                      <br />
                      Maybe it expired.
                    </p>
                  </div>
                )}
                {link?.validLink && !passwordReset && (
                  <div>
                    <label>Enter your new password</label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Password*"
                      onChange={(event) => handleChange(event, setPassword)}
                    />
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        onClick={(e) => {
                          setSubmitClicked(true);
                          handleFormSubmit();
                        }}
                      >
                        Reset Password
                      </button>
                      {errors && (
                        <div className="error-message mt-3">
                          <p className="error-message">
                            Password must include:{' '}
                          </p>
                          <ul>
                            <li>At least 8 characters</li>
                            <li>At least 1 symbol</li>
                            <li>At least 1 uppercase letter</li>
                            <li>At least 1 numeric character</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {link && passwordReset && (
                  <div>
                    <p>Your password has been successfully reset.<br/> <Link to='/login'>Click here to login with your new password.</Link></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ForgetPasswordReset;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../../components/global-components/footer';
import NavbarV5 from '../../components/global-components/navbar-v5';
import { getCurrentUser, submitForgetPasswordEmail } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';

const ForgetPassword = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [navHeader, setNavHeader] = useState('');
  const [email, setEmail] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
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

    if (!/\S+@\S+\.\S+/.test(email)) {
      errorsLength += 1;
      setErrors(true);
    }

    return errorsLength;
  };

  const handleFormSubmit = () => {
    let errorsLength = displayErrors();

    if (errorsLength === 0) {
      let requestBody = new Object();
      requestBody.email = email;

      submitForgetPasswordEmail(requestBody).then((response) => {
        setFeedback(response);
        setEmailSubmitted(true);
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
                {!emailSubmitted && (
                  <div>
                    <label>Enter your new email address.</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email*"
                      onChange={(event) => handleChange(event, setEmail)}
                    />
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        onClick={(e) => {
                          setSubmitClicked(true);
                          handleFormSubmit();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                    {errors && submitClicked && (
                      <div>
                        <p className="error-message mt-2">
                          Please enter a valid email address.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {emailSubmitted && (
              <div>
                <p>{feedback}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;

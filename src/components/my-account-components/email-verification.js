import React, { useEffect, useState } from 'react';
import {
  completeEmailVerificationRequest,
  createEmailVerificationRequest,
} from '../../actions/user';

const EmailVerificationComponent = (props) => {
  const [code, setCode] = useState('');
  const [linkClicked, setLinkClicked] = useState(false);
  const [error, setError] = useState('');
  const [userState, setUserState] = useState({});

  useEffect(() => {
    if (props.user) {
      setUserState(props.user);
    }
  }, [props.user]);

  const handleResendClick = (event) => {
    createEmailVerificationRequest().then((response) => {
      setLinkClicked(true);
    });
  };

  const handleCodeInput = (event) => {
    setError('');
    let { value } = event.target;
    setCode(value);
  };

  const handleVerify = (event) => {
    if (code.length < 6 || code.length > 6 || !parseInt(code)) {
      setError(
        'The code must be equal to 6 digits and should only contain numbers.'
      );
      return;
    }

    let requestBody = new Object();
    requestBody.verificationCode = code;
    completeEmailVerificationRequest(requestBody).then((response) => {
      if (!response.apiresponse) {
        setError(response.Message);
      } else {
        setUserState((prev) => {
          return { ...prev, active: true };
        });
      }
    });
  };

  return (
    <div className="tab-pane fade" id="liton_tab_1_7">
      <div className="ltn__myaccount-tab-content-inner">
        <h4>Email Verification</h4>
        {!userState.active ? (
          <div>
            <p>
              We have sent you a six digit code to the email address you
              registered with. If you don't find the email in your inbox, please
              check your spam folder.
            </p>
            <div className="ltn__form-box">
              <div className="row">
                <div className="col-md-4">
                  <label>Verification Code:</label>
                  <input type="text" name="code" onChange={handleCodeInput} />
                </div>
                <div className="btn-wrapper col-md-4">
                  <button
                    type="submit"
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    onClick={handleVerify}
                  >
                    Verify
                  </button>
                </div>
              </div>
              {error.length > 0 && (
                <div className="row">
                  <p className="error-message">{error}</p>
                </div>
              )}
              <div className="row mt-2">
                {linkClicked ? (
                  <span>New verification Code sent successfully!</span>
                ) : (
                  <span
                    className="cart-product-remove"
                    onClick={handleResendClick}
                  >
                    Click here to resend verification code.
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="ltn__myaccount-tab-content-inner">
            <p>Your email address has been verified.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationComponent;

import React from 'react';

const AccountDetailsComponent = (props) => {
  const { user } = props;

  return (
    <div className="tab-pane fade" id="liton_tab_1_5">
      <div className="ltn__myaccount-tab-content-inner">
        <h4>Account Details</h4>
        <h6 className="mt-5">Info</h6>
        <div className="row">
          <p>
            <span>
              <strong>First Name: </strong>
            </span>
            {user.firstname}
          </p>
        </div>
        <div className="row">
          <p>
            <span>
              <strong>Last Name: </strong>
            </span>
            {user.lastname}
          </p>
        </div>
        <div className="row">
          <p>
            <span>
              <strong>Email Address: </strong>
            </span>
            {user.email}
          </p>
        </div>
        <div className="row">
          <p>
            <span>
              <strong>Resident of US: </strong>
            </span>
            {user.usUsCitizen ? 'Yes' : 'No'}
          </p>
        </div>

        <h6 className="mt-3">Verification</h6>
        <div className="row">
          <p>
            <span>
              <strong>Identity: </strong>
            </span>
            {user.approved ? <i>Verified</i> : <i>UnVerified</i>}
          </p>
        </div>
        <div className="row">
          <p>
            <span>
              <strong>Email: </strong>
            </span>
            {user.active ? <i>Verified</i> : <i>UnVerified</i>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsComponent;

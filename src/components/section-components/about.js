import React from 'react';

const About = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div>
      <div
        style={{ height: 'auto', backgroundColor: '#2c3783', lineHeight: 'normal' }}
        className="mb-100"
      >
        {/* Header Content */}
        <div className="container-fluid">
          <div className="row" style={{ margin: '10px' }}>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <h6
                style={{
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: '600',
                  fontStyle: 'normal',
                  paddingTop: '60px',
                }}
              >
                Permissionless, compliant, and first-of-its-kind
              </h6>
              <div className="col-lg-2"></div>
            </div>
          </div>
          <div className="row" style={{ margin: '10px' }}>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <p
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  paddingTop: '10px',
                  paddingBottom: '60px',
                }}
              >
                RealToken provides investors with a simple, intelligent, and
                user-friendly method to buy into fractional, tokenized
                properties, leveraging the U.S. legal system and the
                permissionless, unrestricted token issuance of Ethereum.
                <br></br> Investing with RealT means low maintenance property
                ownership, access to cash flows related to the property (e.g.,
                rent), and frictionless ownership transactions via RealTokens.
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      {/* Icon Description Content */}

      <div className="container-fluid">
        <div className="row">
          <div className="section-title-area ltn__section-title-2--- text-center">
            <h1 className="section-title" style={{ color: '#2c3783' }}>
              Grow a global, digital real estate portfolio
            </h1>
          </div>
        </div>

        <div className="row" style={{lineHeight: 'normal'}}>
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-1">
                <img
                  src={
                    publicUrl + 'assets/img/about-icons/investments-icon.png'
                  }
                  alt="Banner Image"
                />
              </div>
              <div className="col-lg-4">
                <h5>Unique Tokens</h5>
                <p>
                  Ownership of each property is distributed across a finite
                  number of representative tokens. Based on token share, owners
                  can collect revenue from rent, and vote on property decisions.
                </p>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-1">
                <img
                  src={
                    publicUrl +
                    'assets/img/about-icons/property-managed-icon.png'
                  }
                  alt="Banner Image"
                />
              </div>
              <div className="col-lg-4">
                <h5>Property Managed</h5>
                <p>
                  Each RealT property has a property management company managing
                  the property on RealToken owners behalf. The property
                  management company sources tenants, collects rent, and manages
                  repairs, so the diverse group of RealToken owners don’t have
                  to.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-1">
                <img
                  src={publicUrl + 'assets/img/about-icons/llc-owned-icon.png'}
                  alt="Banner Image"
                />
              </div>
              <div className="col-lg-4">
                <h5>LLC Owned</h5>
                <p>
                  Real estate can’t directly be tokenized, but legal entities
                  can. Each property is owned by a Limited Liability Corporation
                  (LLC). Each LLC is tokenized to specific RealTokens and made
                  available for purchase.
                </p>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-1">
                <img
                  src={
                    publicUrl + 'assets/img/about-icons/investments-icon.png'
                  }
                  alt="Banner Image"
                />
              </div>
              <div className="col-lg-4">
                <h5>Weekly Rent Payments</h5>
                <p>
                  With blockchains, we no longer need to wait 30 days to receive
                  a bank transfer. Owning property with RealT allows you to
                  collect rent every week. Rent is paid using a US-Dollar
                  stablecoin, sent to your xDai or Ethereum wallet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

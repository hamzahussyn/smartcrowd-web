import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { uploadDocs } from '../../actions/kyc';
import { COUNTRIES } from '../../constants/countries';

const KYCComponent = (props) => {
  const kycImages = props.user?.kycImages ? props.user.kycImages : false;
  const verifiedUser = props.user?.approved ? props.user?.approved : false;
  const [kycDocuments, setKycDocuments] = useState({
    kycFront: null,
    kycBack: null,
  });
  const [documentsUploaded, setDocumentsUploaded] = useState(false);
  const [documentsType, setDocumentsType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(documentsType)
  }, [documentsType ])

  const onFileChange = (event) => {
    let file = event.target.files[0];
    let key = event.target.name;

    setKycDocuments((prev) => {
      return { ...prev, [key]: file };
    });
  };

  const handleKycDocUpload = async (event) => {
    setLoading(true);

    if (kycDocuments.kycBack === null || kycDocuments.kycFront === null) {
      setLoading(false);
      return;
    }

    const KycFrontFormData = new FormData();
    const KycBackFormData = new FormData();

    KycFrontFormData.append('kycFront', kycDocuments.kycFront);
    KycBackFormData.append('kycBack', kycDocuments.kycBack);

    let response = await uploadDocs(KycFrontFormData, KycBackFormData);

    setDocumentsUploaded(response);
    setLoading(false);
  };

  return (
    <div className="tab-pane fade" id="liton_tab_1_6">
      <h4>Identity Verification Documents</h4>
      {!documentsUploaded && !kycImages && (
        <div>
          <p>
            Upload the front side and the back side of your national
            identitification documents.
            <br />
            The images can be of entensions .png, .jpg, and .jpeg.
          </p>

          <div className="row">
            <div className="col-lg-6">
              <div className="input-item">
                <label>
                  <b>Type of Document</b>
                </label>
                <select className="nice-select" onChange={(e)=>{setDocumentsType(e.target.value)}} value={documentsType}>
                  <option>None</option>
                  <option value="id">Govt Issued ID</option>
                  <option value="id">Drivers Liscence</option>
                  <option value="id">Passport</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-item">
                <label>
                  <b>Country of origin</b>
                </label>
                <select onChange={(e)=>console.log(e.target)}>
                  <option value="none">None</option>
                  {COUNTRIES.map((country, index) => (
                    <option value={country.code} key={index}>{country.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <h6>1. Front Side</h6>
          <input
            type="file"
            id="myFile"
            name="kycFront"
            className="btn theme-btn-3 mb-10"
            onChange={onFileChange}
          />
          <h6>2. Back Side</h6>
          <input
            type="file"
            id="myFile"
            name="kycBack"
            className="btn theme-btn-3 mb-10"
            onChange={onFileChange}
          />
          <br />
          <div className="btn-wrapper">
            <button
              className="theme-btn-1 btn reverse-color btn-block"
              onClick={handleKycDocUpload}
            >
              Submit Documents
            </button>
          </div>
          <br />
          <ClipLoader color={'black'} loading={loading} size={50} />
          {loading && <p>Uploading files..</p>}
        </div>
      )}
      {(documentsUploaded || kycImages) && (
        <div className="ltn__myaccount-tab-content-inner">
          <p>Your documents were successfully uploaded for verification.</p>
        </div>
      )}
      {verifiedUser && (
        <div className="ltn__myaccount-tab-content-inner">
          <br />
          <p>
            <strong>Status: </strong>Your identity has been verified by our
            verification service.
          </p>
        </div>
      )}
    </div>
  );
};

export default KYCComponent;

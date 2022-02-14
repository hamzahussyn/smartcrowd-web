import axios from 'axios';

export const uploadDocs = async (KycFrontFormData, KycBackFormData) => {
  const token = localStorage.getItem('access-token');

  let [kycFrontUpload, kycBackUpload] = await Promise.all([
    axios({
      url: 'https://smart-crowd-api.herokuapp.com/api/users/add-kyc-front',
      method: 'POST',
      headers: {
        'x-access-token': token,
      },
      data: KycFrontFormData,
    }),
    axios({
      url: 'https://smart-crowd-api.herokuapp.com/api/users/add-kyc-back',
      method: 'POST',
      headers: {
        'x-access-token': token,
      },
      data: KycBackFormData,
    }),
  ]);

  if (kycFrontUpload.data.apiresponse && kycBackUpload.data.apiresponse) {
    return true;
  }

  return false;
};

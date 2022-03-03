import axios from 'axios';
import getConfig from '../config';

export const uploadDocs = async (KycFrontFormData, KycBackFormData) => {
  const token = localStorage.getItem('access-token');

  let [kycFrontUpload, kycBackUpload] = await Promise.all([
    axios({
      url: `${getConfig().BACKEND_URL}/users/add-kyc-front`,
      method: 'POST',
      headers: {
        'x-access-token': token,
      },
      data: KycFrontFormData,
    }),
    axios({
      url: `${getConfig().BACKEND_URL}/users/add-kyc-back`,
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

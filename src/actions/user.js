import axios from 'axios';
import getConfig from '../config';

export const getCurrentUser = () => {
  const token = localStorage.getItem('access-token');

  if (!token) {
    return new Promise((resolve, reject) => {
      resolve({});
      return {};
    });
  }

  return axios({
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
    url: `${getConfig().BACKEND_URL}/auth/me`,
  })
    .then((response) => {
      Promise.resolve(response);
      return response.data.data;
    })
    .catch((error) => {
      Promise.reject(error);
      return error.response.data.errors[0].title;
    });
};

export const createEmailVerificationRequest = () => {
  const token = localStorage.getItem('access-token');

  if (!token) {
    return new Promise((resolve, reject) => {
      resolve({});
      return {};
    });
  }

  return axios({
    url: `${getConfig().BACKEND_URL}/auth/create-email-verification-request`,
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  })
    .then((response) => {
      Promise.resolve(response);
      return response.data;
    })
    .catch((error) => {
      Promise.reject(error);
      return error.response.data.errors[0].title;
    });
};

export const completeEmailVerificationRequest = (body) => {
  const token = localStorage.getItem('access-token');

  if (!token) {
    return new Promise((resolve, reject) => {
      resolve({});
      return {};
    });
  }

  return axios({
    url: `${getConfig().BACKEND_URL}/auth/complete-email-verification-request`,
    method: 'PATCH',
    headers: {
      'x-access-token': token,
    },
    data: { ...body },
  })
    .then((response) => {
      Promise.resolve(response);
      return response?.data;
    })
    .catch((error) => {
      Promise.reject(error);
      return error.response.data;
    });
};

export const validateForgetPasswordLink = (token) => {
  return axios({
    url: `${
      getConfig().BACKEND_URL
    }/auth/valid-forget-password-link?token=${token}`,
    method: 'GET',
  })
    .then((response) => {
      Promise.resolve(response);
      return response.data;
    })
    .catch((error) => {
      Promise.reject(error);
      if (error.response.data.errors[0]) {
        return {
          validLink: false,
          Message: error.response.data.errors[0].title,
        };
      }
    });
};

export const resetPassword = (token, body) => {
  return axios({
    url: `${getConfig().BACKEND_URL}/auth/reset-password`,
    method: 'PATCH',
    headers: {
      'x-access-token': token,
    },
    data: body,
  })
    .then((response) => {
      Promise.resolve(response);
      return response.data;
    })
    .catch((error) => {
      Promise.reject(error);
      return error.response.data;
    });
};

export const submitForgetPasswordEmail = (body) => {
  return axios({
    url: `${getConfig().BACKEND_URL}/auth/forget-password`,
    method: 'POST',
    data: body,
  })
    .then((response) => {
      Promise.resolve(response);
      return response.data.Message;
    })
    .catch((error) => {
      return error.response.data;
    });
};

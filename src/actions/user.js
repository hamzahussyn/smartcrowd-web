import axios from 'axios';

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
    url: 'https://smart-crowd-api.herokuapp.com/api/auth/me',
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
    url: `https://smart-crowd-api.herokuapp.com/api/auth/create-email-verification-request`,
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
    url: `https://smart-crowd-api.herokuapp.com/api/auth/complete-email-verification-request`,
    method: 'PATCH',
    headers: {
      'x-access-token': token,
    },
    data: {...body}
  })
    .then((response) => {
      Promise.resolve(response);
      return response?.data;
    })
    .catch((error) => {
      Promise.reject(error);
      return error.response.data;
    });
}

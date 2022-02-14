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

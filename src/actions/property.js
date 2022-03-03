import axios from 'axios';
import getConfig from '../config';

export const getPropertyListing = () => {
  const token = localStorage.getItem('access-token') || '';

  return axios({
    url: `${getConfig().BACKEND_URL}/property/`,
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  }).then((response) => {
    Promise.resolve(response);
    return response.data;
  });
};

export const getPropertyWithId = (id) => {
  const token = localStorage.getItem('access-token') || '';
  console.log(process.env);
  return axios({
    url: `${getConfig().BACKEND_URL}/property/${id}/get-details`,
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

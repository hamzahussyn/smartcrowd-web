import axios from 'axios';
import getConfig from '../config';

export const addTokensToCart = (body) => {
  const token = localStorage.getItem('access-token') || '';

  return axios({
    url: `${getConfig().BACKEND_URL}/cart/add`,
    method: 'POST',
    headers: {
      'x-access-token': token,
    },
    data: { ...body },
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

export const getCartContents = (id) => {
  const token = localStorage.getItem('access-token') || '';

  if (!token.length) {
    return new Promise((resolve, reject) => {
      let temp = new Object();
      resolve(temp);
      return temp;
    });
  }

  return axios({
    url: `${getConfig().BACKEND_URL}/users/${id}/get-cart`,
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

export const removeItemFromCart = (body) => {
  const token = localStorage.getItem('access-token') || '';

  if (!token.length) {
    return new Promise((resolve, reject) => {
      let temp = new Object();
      resolve(temp);
      return temp;
    });
  }

  return axios({
    url: `${getConfig().BACKEND_URL}/cart/remove`,
    method: 'DELETE',
    headers: {
      'x-access-token': token,
    },
    data: { ...body },
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

export const updateCartItems = async (body) => {
  const token = localStorage.getItem('access-token') || '';

  if (!token.length) {
    return new Promise((resolve, reject) => {
      let temp = new Object();
      resolve(temp);
      return temp;
    });
  }

  let updateRequestArray = new Array();

  for(let i=0 ; i<body.length ; i++){
    updateRequestArray.push(
      axios({
        url: `${getConfig().BACKEND_URL}/cart/edit`,
        method: 'PATCH',
        headers: {
          'x-access-token': token
        },
        data: {...body[i]}
      })
    );
  };

  const response = await Promise.all(updateRequestArray);
  if(response.length){
    return true;
  }
};

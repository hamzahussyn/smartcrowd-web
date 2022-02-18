import axios from 'axios';

export const addTokensToCart = async (body) => {
  const token = localStorage.getItem('access-token') || '';

  let addToCart = await axios({
    url: 'https://smart-crowd-api.herokuapp.com/api/cart/add',
    method: 'POST',
    headers: {
      'x-access-token': token
    },
    data: {...body}
  });

  console.log(addToCart.data);
}
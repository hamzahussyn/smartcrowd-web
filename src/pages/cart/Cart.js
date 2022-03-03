import React, { useEffect, useState } from 'react';
import Navbar from '../../components/global-components/navbar-v5';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import Cart from '../../components/shop-components/cart';
import AuthenticatedUser from '../../hoc/authenticated-user';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';
import { Navigate } from 'react-router-dom';
import { getCartContents } from '../../actions/cart';

const CartComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [navHeader, setNavHeader] = useState('');
  const [cart, setCart] = useState({
    cartItems: new Array(),
    cartItemsCount: 0,
    cartNetTotal: 0.0,
  });

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(currentUser).length) {
      getCartContents(currentUser.id).then((response) => {
        setCart({
          cartItems: response.data.CartItems,
          cartItemsCount: response.data.CartItems.length,
          cartNetTotal: response.data.NetTotal,
        });
      });
    }
  }, [currentUser]);

  return (
    <div>
      <Navbar header={navHeader} user={currentUser} />
      <PageHeader headertitle="Cart" customclass="mb-0" />

      <Cart cart={cart}/>
      <Footer />
    </div>
  );
};

export default AuthenticatedUser(CartComponent);

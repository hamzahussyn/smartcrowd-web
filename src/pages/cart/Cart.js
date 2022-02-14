import React, { useEffect, useState } from 'react';
import Navbar from '../../components/global-components/navbar-v5';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import Cart from '../../components/shop-components/cart';
import AuthenticatedUser from '../../hoc/authenticated-user';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const CartComponent = () => {
  let [currentUser, setCurrentUser] = useState([]);
  let [navHeader, setNavHeader] = useState('');

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
  }, []);

  const restrictedVerification = () =>
    !currentUser.active && !currentUser.approved ? <Redirect to="/" /> : '';

  return (
    <div>
      {restrictedVerification()}

      <Navbar header={navHeader} user={setCurrentUser} />
      <PageHeader headertitle="Cart" customclass="mb-0" />

      <Cart />
      <Footer />
    </div>
  );
};

export default AuthenticatedUser(CartComponent);

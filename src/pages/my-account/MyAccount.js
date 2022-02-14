import React, { useEffect, useState } from 'react';
import Footer from '../../components/global-components/footer';
import Navbar from '../../components/global-components/navbar-v5';
import MyAccountComponent from '../../components/shop-components/my-account';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';
import AuthenticatedUser from '../../hoc/authenticated-user';

const MyAccount = () => {
  let [currentUser, setCurrentUser] = useState([]);
  let [navHeader, setNavHeader] = useState('');

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
  }, []);

  return (
    <div>
      <Navbar header={navHeader} user={currentUser} />
      <MyAccountComponent user={currentUser}/>
      <Footer/>
    </div>
  )
}

export default AuthenticatedUser(MyAccount);
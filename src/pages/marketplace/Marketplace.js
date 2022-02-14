import React, { useEffect, useState } from 'react';
import Footer from '../../components/global-components/footer';
import Navbar from '../../components/global-components/navbar';
import NavbarV5 from '../../components/global-components/navbar-v5';
import MarketplaceListing from '../../components/section-components/marketplace-listing';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';

const Marketplace = () => {
  let [currentUser, setCurrentUser] = useState([]);
  let [navHeader, setNavHeader] = useState('');

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <NavbarV5 header={navHeader} user={currentUser}/>
      <MarketplaceListing />
      <Footer />
    </div>
  );
};

export default Marketplace;

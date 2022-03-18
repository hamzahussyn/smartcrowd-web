import React, { useEffect, useState } from 'react';
import Footer from '../../components/global-components/footer';
import PageHeader from '../../components/global-components/page-header';
import Navbar from '../../components/global-components/navbar';
import NavbarV5 from '../../components/global-components/navbar-v5';
import MarketplaceListing from '../../components/section-components/marketplace-listing';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';
import { getPropertyListing } from '../../actions/property';

const Marketplace = () => {
  const [propertyListing, setPropertyListing] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [navHeader, setNavHeader] = useState('');

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });

    getPropertyListing().then((response) =>
      setPropertyListing([...response.data])
    );
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <NavbarV5 header={navHeader} user={currentUser} />
      <PageHeader headertitle="Marketplace" customclass="mb-0" />
      <MarketplaceListing listing={propertyListing}/>
      <Footer />
    </div>
  );
};

export default Marketplace;

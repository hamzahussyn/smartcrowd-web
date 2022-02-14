import React, { useEffect, useState } from 'react';
import Navbar from '../../components/global-components/navbar-v5';
import PageHeader from '../../components/global-components/page-header';
import ProductSlider from '../../components/shop-components/product-slider-v1';
import ProductDetails from '../../components/shop-components/shop-details';
import Footer from '../../components/global-components/footer';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';
import { getPropertyWithId } from '../../actions/property';

const PropertyDetails = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [navHeader, setNavHeader] = useState('');
  const [propertyData, setPropertyData] = useState({});

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
    getPropertyWithId(2).then((response) => {
      setPropertyData(response.data);
      console.log(response.data);
    });
  }, []);

  // useEffect(() => {
  //   getPropertyWithId(2).then((response) => {
  //     console.log(response);
  //     setPropertyData(response);
  //   });
  // }, [propertyData]);

  return (
    <div>
      <Navbar header={navHeader} user={currentUser} />
      <PageHeader headertitle="Property Details" customclass="mb-0" />
      <ProductSlider images={propertyData?.Images} />
      <ProductDetails property={propertyData}/>
      <Footer />
    </div>
  );
};

export default PropertyDetails;

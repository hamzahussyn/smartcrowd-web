import React, { useEffect, useState } from 'react';
import Navbar from '../../components/global-components/navbar-v5';
import PageHeader from '../../components/global-components/page-header';
import ProductSlider from '../../components/shop-components/product-slider-v1';
import ProductDetails from '../../components/shop-components/shop-details';
import Footer from '../../components/global-components/footer';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';
import { getPropertyWithId } from '../../actions/property';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getCartContents } from '../../actions/cart';

const PropertyDetails = (props) => {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState([]);
  const [navHeader, setNavHeader] = useState('');
  const [propertyData, setPropertyData] = useState({});

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
    getPropertyWithId(id).then((response) => {
      setPropertyData(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar header={navHeader} user={currentUser} />
      <PageHeader headertitle="Property Details" customclass="mb-0" />
      <ProductSlider images={propertyData?.Images} id={id}/>
      <ProductDetails property={propertyData} user={currentUser}/>
      <Footer />
    </div>
  );
};

export default PropertyDetails;

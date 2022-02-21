import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../../components/section-components/banner';
import ProSlider from '../../components/section-components/product-slider-v1';
import Testimonial from '../../components/section-components/testimonial-v1';
import BlogSlider from '../../components/blog-components/blog-slider-v1';
import Footer from '../../components/global-components/footer';
import FaqV1 from '../../components/section-components/faq-v1';
import About from '../../components/section-components/about';
import NavbarV5 from '../../components/global-components/navbar-v5';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';

const Home = () => {
  const [propertyListing, setPropertyListing] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const [navHeader, setNavHeader] = useState('');

  const getPropertyListing = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://smart-crowd-api.herokuapp.com/api/property/',
      });

      setPropertyListing([...response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });

    getPropertyListing();
  }, []);

  return (
    <div>
      <NavbarV5 header={navHeader} user={currentUser} />
      <Banner />
      <ProSlider listing={propertyListing} />
      <About />
      <FaqV1 />
      <Testimonial />
      <BlogSlider customClass="section-subtitle-2" />
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default Home;

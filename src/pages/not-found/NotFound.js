import React from 'react';
import Footer_v1 from '../../components/global-components/footer';
import Navbar from '../../components/global-components/navbar';
import NavbarV5 from '../../components/global-components/navbar-v5';
import Page_header from '../../components/global-components/page-header';
import Error from '../../components/section-components/error';

const NotFound = () => {
  return (
    <div>
      <NavbarV5/>
      <Error />
      <Footer_v1 />
    </div>
  );
};

export default NotFound;

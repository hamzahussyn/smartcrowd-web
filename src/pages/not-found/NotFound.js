import React, {useState, useEffect} from 'react';
import Footer_v1 from '../../components/global-components/footer';
import Navbar from '../../components/global-components/navbar';
import NavbarV5 from '../../components/global-components/navbar-v5';
import Page_header from '../../components/global-components/page-header';
import Error from '../../components/section-components/error';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';

const NotFound = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [navHeader, setNavHeader] = useState('');

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
  }, []);

  return (
    <div>
      <NavbarV5 header={navHeader} user={currentUser} />
      <Error />
      <Footer_v1 />
    </div>
  );
};

export default NotFound;

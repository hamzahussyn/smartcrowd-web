import React, { useEffect, useState } from 'react';
import Navbar from '../../components/global-components/navbar-v5';
import PageHeader from '../../components/global-components/page-header';
import TeamComponent from '../../components/section-components/team-v1';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import Footer from '../../components/global-components/footer';
import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';

const Team = () => {
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
      <PageHeader headertitle="Team" subheader="Co-Founders" />
      <TeamComponent />
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default Team;

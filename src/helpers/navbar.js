export const setNavbarTitle = (user, setCurrentUser, setNavHeader) => {
  if (Object.keys(user).length) {
    setCurrentUser({ ...user });

    if (!user.approved) {
      setNavHeader((prev) => prev + 'KYC status: Pending ');
    }
    if (!user.active) {
      setNavHeader((prev) => prev + '-- Email Verification status: Pending');
    }
    if (user.approved && user.active) {
      setNavHeader('Buy fractionalized property with Smart Crowd');
    }
  } else {
    setCurrentUser({});
    setNavHeader(
      'Register your account with Smart Crowd to own tokenized property'
    );
  }
};

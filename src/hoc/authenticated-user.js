import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

const AuthenticatedUser = (WrappedComponent) => {
  return class AuthenticatedUserComponent extends Component {
    isAuthenticated() {
      let accessToken = localStorage.getItem('access-token');
      let refreshToken = localStorage.getItem('refresh-token');

      return accessToken && refreshToken ? true : false;
    }

    render() {
      return (
        <div>
          {this.isAuthenticated() === true ? (
            <WrappedComponent {...this.props} />
          ) : (
            <Navigate to="/login" />
          )}
        </div>
      );
    }
  };
}

export default AuthenticatedUser;

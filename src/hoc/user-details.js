import React, { Component } from 'react';

const UserDetails = (WrappedComponent) => {
  return class UserDetailsComponent extends Component{
    getUserVerificationDetails(){

    }

    render(){
      return (
        <div>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}
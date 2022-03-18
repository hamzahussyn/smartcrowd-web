import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

//New Imports
import Home from './pages/home/Home';
import Marketplace from './pages/marketplace/Marketplace';
import Team from './pages/team/Team';
import PropertyDetails from './pages/property-details/PropertyDetails';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import MyAccount from './pages/my-account/MyAccount';
import NotFound from './pages/not-found/NotFound';
import ForgetPassword from './pages/forget-password/ForgetPassword';
import ForgetPasswordReset from './pages/forget-password-reset/ForgetPasswordReset';
import { getCurrentUser } from './actions/user';
import Faq from './pages/faq/Faq';


const TestComponent = () => {
  useEffect(() => {
    getCurrentUser().then((res) => console.log(res));
  }, [])
  return (<div>hi</div>);
}

class Root extends Component {
  render() {
    return (
      <Router forceRefresh>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/marketplace" element={<Marketplace/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/property/:id" element={<PropertyDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/test" element={<TestComponent/>}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          <Route path="/forget-password/reset" element={<ForgetPasswordReset/>}/>
          <Route element={<NotFound/>} />
        </Routes>
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));

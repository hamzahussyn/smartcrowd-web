import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
import { getCurrentUser } from './actions/user';


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
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/marketplace" component={Marketplace}/>
          <Route path="/team" component={Team}/>
          <Route path="/property/:id" component={PropertyDetails}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/my-account" component={MyAccount}/>
          <Route path="/test" component={TestComponent}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('smart-crowd'));

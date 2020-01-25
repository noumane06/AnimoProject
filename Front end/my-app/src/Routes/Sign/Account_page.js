import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';

import signin from './Signin/Compenents/signin';
import signup from './Signup/Compenents/signup';
import './CSS/account_mobile.css';

class Account_page extends React.Component {
    render() { 
        return ( 
          <Router>
          <div >
            <a href="/">
            <img src={
              require('../../res/Logo/animo iluustration icon.svg')}
              width="40%"  
              alt="animo's logo orange version"
              className="Animo_logo_orange_2" 
              />
            </a>
            <Switch>
              <Route  path="/account/signin" component={signin} />
              <Redirect exact from='/account/' to="/account/signin" />
              <Route path="/account/signup" component={signup} />
            </Switch>

          </div> 
          </Router>
            
         );
    }
}
 
export default Account_page;
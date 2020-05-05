import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import signin from './Signin/Components/signin';
import signup from './Signup/Components/signup';


class Account_page extends React.Component {
    render() { 
        return ( 
      
          <div >
            <a href="/">
            <img src={
              require('../../../res/Logo/animo iluustration icon.svg')}
              width="40%"  
              alt="animo's logo orange version"
              className="Animo_logo_orange_2" 
              />
            </a>
              <Route  path="/account/signin" component={signin} />
              <Redirect exact from='/account/' to="/account/signin" />
              <Route path="/account/signup" component={signup} />

          </div> 
          
            
         );
    }
}
 
export default Account_page;
import React from 'react';
import { Route,Switch, Redirect } from 'react-router-dom';

import signin from './Signin/SignInRoute';
import signup from './Signup/SignUpRoute';


class Account_page extends React.Component {
    render() { 
        return ( 
      
          <div >
            
              <Switch>
              <Route path="/account/signup" component={signup} />
              <Route path="/account/signin" component={signin} />
              <Redirect exact from='/account' to="/account/signin" />
              </Switch>
              
              

          </div> 
          
            
         );
    }
}
 
export default Account_page;
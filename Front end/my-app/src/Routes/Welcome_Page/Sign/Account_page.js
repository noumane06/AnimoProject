import React from 'react';
import { Route, N, Switch, Redirect } from 'react-router-dom';

import signin from './Signin/Components/signin';
import signup from './Signup/Components/signup';


class Account_page extends React.Component {
    render() { 
        return ( 
      
          <div >
            
            <img src={
              require('../../../res/Logo/animo iluustration icon.svg')}
              alt="animo's logo orange version"
              className="Animo_logo_orange_2" 
              onClick={()=>{window.location.replace("/")}}
              />
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
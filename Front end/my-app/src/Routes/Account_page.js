import React from 'react';
import {Switch,  Route  } from 'react-router-dom';

import signin from '../Components/signin';
import signup from '../Components/signup';
import '../CSS/account/account_mobile.css';

class Account_page extends React.Component {
    render() { 
        return ( 
            <div >
            <a href="/">
            <img src={
              require('../res/Logo/animo iluustration icon.svg')}
              width="40%"  
              alt="animo's logo orange version"
              className="Animo_logo_orange_2" 
              />
            </a>
            <Switch>
              <Route  path="/account/signin" component={signin} />
              <Route path="/account/signup" component={signup} />
            </Switch>

            </div>
         );
    }
}
 
export default Account_page;
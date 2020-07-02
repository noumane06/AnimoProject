
// Modules import

import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

// Internal files and components 

import Landing_page from './Landing/Landing_page';
import Account_page from './Sign/Account_page';
import Not_found from '../404notfound/404not_found';
import firebase from './Sign/Signup/Components/firebasetest';


// ************* Router between the info page and sign page ****************

class Welcome_container extends React.Component {
  render() { 
    return (
      <BrowserRouter>
          <Switch>
            <Route default exact path="/" component={Landing_page}/>
            <Route path="/account" component={Account_page}/>
          <Route path="/fireb" component={firebase}/>
            <Route path="*" component={Not_found}/>
          </Switch>
      </BrowserRouter>
       
      );
  }
}

export default Welcome_container ;

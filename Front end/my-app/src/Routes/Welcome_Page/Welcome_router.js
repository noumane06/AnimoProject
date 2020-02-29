
// Modules import

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// Internal files and components 

import Landing_page from './Landing/Landing_page';
import Account_page from './Sign/Account_page';


// ************* Router between the info page and sign page ****************

class Welcome_container extends React.Component {
  render() { 
    return (
      <Router>
            <meta name="theme-color" content="#FF4123" />
            <Route exact path="/" component={Landing_page}/>
            <Route path="/account" component={Account_page}/>
      </Router>
       
      );
  }
}

export default Welcome_container ;

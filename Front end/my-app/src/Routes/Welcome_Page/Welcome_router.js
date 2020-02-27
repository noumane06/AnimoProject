
// dependecies

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// Internal files and compenents 

import Landing_page from './Landing/Landing_page';
import Account_page from './Sign/Account_page';


// *****************************

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


// dependecies

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Internal files and compenents 

import Landing_page from './Routes/Landing/Landing_page';
import Account_page from './Routes/Sign/Account_page';
import animo_Container from './Routes/Animo/animo';

// *****************************

class Container extends React.Component {

  render() { 
    return (
      <Router>
        
            <meta name="theme-color" content="#FF4123" />
            {/* <Route  path="/Landing" component={Landing_page}/> */}
            {/* <Route path="/account" component={Account_page}/> */}
            <Route path="/" component={animo_Container}/>

      </Router>
       
      );
  }
}


ReactDOM.render(<Container/>,document.getElementById('root'));

// Modules imports

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// Internal files and components 

import Main_router from './router';


// *****************************

class Container extends React.Component {

  render() { 
    return (
      <Router>
        
            <meta name="theme-color" content="#FF4123" />
            <Route path="/" component={Main_router}/>

      </Router>
       
      );
  }
}


ReactDOM.render(<Container/>,document.getElementById('root'));
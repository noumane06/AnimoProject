
// dependecies

import React from 'react';
import ReactDOM from 'react-dom';
import {Route ,  Redirect , BrowserRouter as Router} from 'react-router-dom';

// Internal files and compenents 

import Landing_page from './Routes/Landing_page';
import Account_page from './Routes/Account_page';

// *****************************

class Container extends React.Component {

  render() { 
    return (
        <Router>
            
            <Route default exact path="/" component={Landing_page}/>
            <Route path="/account/" component={Account_page}/>
        </Router>      
      );
  }
}


ReactDOM.render(<Container/>,document.getElementById('root'));
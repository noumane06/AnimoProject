
// dependecies

import React from 'react';
import ReactDOM from 'react-dom';
import {Route  , BrowserRouter as Router} from 'react-router-dom';

// Internal files and compenents 

import Landing_page from './Routes/Landing/Landing_page';
import Account_page from './Routes/Account/Account_page';
import Home_page from './Routes/Home/Home_page/Home_page';
import Home_profileCont from './Routes/Home/Home_after_signup/Home_profileCont';
// *****************************

class Container extends React.Component {

  render() { 
    return (
        <Router>
            <meta name="theme-color" content="#FF4123" />
            <Route default exact path="/" component={Landing_page}/>
            <Route path="/account/" component={Account_page}/>
            <Route path="/home/" component={Home_page}/>
            <Route path="/profile_conf/" component={Home_profileCont} />
        </Router>
      );
  }
}


ReactDOM.render(<Container/>,document.getElementById('root'));
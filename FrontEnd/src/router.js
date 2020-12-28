// Modules import 

import React from 'react';
import {Route  , BrowserRouter ,Switch } from 'react-router-dom';
import './Components/scss/Antd.scss'
// components import 
import Account_page from './Routes/Welcome_Page/Sign/Account_page';
import Landing_page from './Routes/Welcome_Page/Landing/Landing_page';
import AnimoContainer from './Routes/Animo/animo';

// *****************************

const Main_router = () => {
       
      return (
        <BrowserRouter>
          <Switch>
            {/* Landing page when not signed in */}
            <Route exact path="/Landing" component={Landing_page} />
            {/* SignIn / up*/}
            <Route path="/account" component={Account_page} />
            {/* home route render the home page */}
            <Route default path="/">
              <AnimoContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      );
};


export default Main_router ;
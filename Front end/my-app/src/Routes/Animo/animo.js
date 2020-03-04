
// Modules import 

import React from 'react';
import {Route } from 'react-router-dom';

// Internal files and compenents 

import Home from './Home_page/Home_page';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/Sidebar';
import Notif from './Notification/notification'
// *****************************

class AnimoContainer extends React.Component {

  render() { 
    return (
        <div>
            <SideBar/>
          <div className="Content">
            <Header value="HOME"/>
            <hr style={{border : '0.5px solid #dddddd'}}/>
            
            <Route default exact path="/" component={Home}/>
            <Route default exact path="/home" component={Home}/>
            <Route path="/notification" component={Notif}/>
          </div>
        </div>
        
      );
  }
}

export default AnimoContainer ;

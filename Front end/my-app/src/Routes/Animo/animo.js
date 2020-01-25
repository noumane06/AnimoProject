
// dependecies

import React from 'react';
import ReactDOM from 'react-dom';
import {Route  , BrowserRouter as Router} from 'react-router-dom';

// Internal files and compenents 

import Home from './Home_page/Home_page';
import Header from './Compenents/Header/Header';
import Navbar from './Compenents/SideBar/Sidebar';
import Notif from './Notification/notification'
// *****************************

class animo_Container extends React.Component {

  render() { 
    return (
        <div>
          <Navbar/>
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

export default animo_Container ;

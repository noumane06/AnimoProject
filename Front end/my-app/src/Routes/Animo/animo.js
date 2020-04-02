
// Modules import 

import React from 'react';
import {Route  , BrowserRouter ,Switch } from 'react-router-dom';

// Internal files and compenents 

import Home from './Home_page/Home_page';
import Notif from './Notification/notification';
import Not_found from '../404notfound/404not_found';
import Side_bar from './Components/SideBar/Sidebar';
import Header from './Components/Header/Header';
// *****************************

class AnimoContainer extends React.Component {

  render() { 
    return (
            <BrowserRouter>
                
             
                  <Switch>
                  
                  {/* default route render the home page  */}
                    <Route default exact path="/">
                    <div className="Content"> 
                        <Side_bar/>
                        <Home/>
                    </div>
                    </Route>
                    {/* home route render the home page */}
                    <Route default  path="/home">
                    <div className="Content"> 
                        <Side_bar/>
                        <Home/>
                    </div>
                    </Route>

                    {/* notification route render the notification page  */}

                    <Route path="/notification" component={Notif}>
                    <div className="Content"> 
                        <Side_bar/>
                        <Header/>
                        <hr style={{border : '0.5px solid #dddddd'}}/>
                        <Notif/>
                    </div>
                    </Route>
                    <Route path ="*" component={Not_found}/>
                  
                    {/* <Route default exact path="/" component={Home}/> */}
                    
                  </Switch>
             
            </BrowserRouter>
      );
  }
}

export default AnimoContainer ;

 

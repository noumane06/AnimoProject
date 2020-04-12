
// Modules import 

import React from 'react';
import {Route  , BrowserRouter ,Switch } from 'react-router-dom';

// routes  import
import Home from './Home_page/Home_page';
import Notif from './Notification/notification';
import Not_found from '../404notfound/404not_found';

// components import 
import SideBar from './Components/SideBar/Sidebar';
import Header from './Components/Header/Header';
import CreateOffer from './Create_offer/createIndex';

// *****************************

class AnimoContainer extends React.Component {

  render() { 
    return (
            <BrowserRouter>
                
             
                  <Switch>
                  
                  {/* default route render the home page  */}
                    <Route default exact path="/">
                    <div className="Content"> 
                        <SideBar/>
                        <Home/>
                    </div>
                    </Route>
                    {/* home route render the home page */}
                    <Route default  path="/home">
                    <div className="Content"> 
                        <SideBar/>
                        <Home/>
                    </div>
                    </Route>

                    {/* notification route render the notification page  */}

                    <Route path="/notification" component={Notif}>
                    <div className="Content"> 
                        <SideBar/>
                        <Header/>
                        <hr style={{border : '0.5px solid #dddddd'}}/>
                        <Notif/>
                    </div>
                    </Route>
                    <Route path="/createoffer" component={Notif}>
                        <CreateOffer/>
                    </Route>
                    <Route path ="*" component={Not_found}/>
                  
                    {/* <Route default exact path="/" component={Home}/> */}
                    
                  </Switch>
             
            </BrowserRouter>
      );
  }
}

export default AnimoContainer ;

 

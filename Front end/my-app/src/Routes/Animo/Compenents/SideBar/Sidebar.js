import React from 'react';
//import jwt from 'jsonwebtoken';
// Navbar buttons 

import Home from './Compenents/home_butt';
import Notif from './Compenents/notif_butt';
import Explore from './Compenents/explore_butt';
import Profile from './Compenents/profile_butt';
import Settings from './Compenents/settings_butt';

// ---------------------------------------------
import './CSS/Sidebar.css';
import {NavLink} from "react-router-dom";
function Side_bar() {

             return ( 

            <div className="SideNav">
                <img src={
                require('../../../../res/Logo/animo iluustration icon.svg')}
                alt="animo's logo orange version"
                width = "100px"
                className="animo_home_logo" 
                />
            {/* ------------ Nav container  : -------------------------------------- */}
                <div className="Nav_Container">
                    
                    <NavLink exact  to='/home' activeClassName="active" className={window.location.pathname == "/" ? "active" : ""}><Home/></NavLink>    

                    <NavLink to='/notification' activeClassName="active" ><Notif/></NavLink>
                  
                    <NavLink to='/explore' activeClassName="active" ><Explore/></NavLink>
              
                    <NavLink to='/profile' activeClassName="active"  ><Profile/></NavLink>

                    <NavLink to='/settings' activeClassName="active" ><Settings/></NavLink>

                    <div className="CreateOffers">
                        <a id='createOffer' href=''>
                             Create offer
                        </a>
                    </div>
                </div>
                
                
                
            {/* ------------ End of nav container  : -------------------------------------- */}
                
            </div>
            
         );   
}
 
export default Side_bar;    



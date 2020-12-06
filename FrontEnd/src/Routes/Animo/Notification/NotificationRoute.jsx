// Dependencies ---------------

import React from 'react';

// Components -----------------

import SideBar from '../Components/SideBar/Sidebar';
import Notification from './Components/notification';


// Render ---
const HomeRoute = ()=>{
    

    return(
            <div  className="Content" >
                <SideBar/>
                <Notification/>
            </div>    
    );
    
}
export default HomeRoute ;
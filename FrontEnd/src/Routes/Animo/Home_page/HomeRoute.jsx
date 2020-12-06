// Dependencies ---------------

import React from 'react';


// Components -----------------

import SideBar from '../Components/SideBar/Sidebar';
import Home from './Components/MainContainer/Components/Home_page';


// Render ---
const HomeRoute = ()=>{

    return(
            <div  className="Content" >
                <SideBar/>
                <Home/>
            </div>    
    );
    
}
export default HomeRoute ;
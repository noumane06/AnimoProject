// Dependencies ---------------

import React from 'react';


// Components -----------------

import Home from './Components/MainContainer/Components/Home_page';


// Render ---
const HomeRoute = ({userId})=>{

    return(
            <div  className="Content" >
                <Home userId={userId}/>
            </div>    
    );
    
}
export default HomeRoute ;
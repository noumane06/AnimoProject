// Modules import 

import React  from 'react';
import { disableBodyScroll  } from 'body-scroll-lock';

//import jwt from 'jsonwebtoken'

// internal files and components
import Presentation from './Components/presentation';
import Navbar from './Components/navbar';
import './CSS/main.scss'


// *************** Container for the illustrations and the getting started button ****************

const Landing_page = ()=>{

    return ( 
        
            <div>
                    <div className="Container">
                        <title>Welcome | Animo</title>
                        <img id="bg" src={require('../../../res/Background-illust/Web 1920 – 3.png') } alt="background illustration"/>
                        <Navbar />
                        <Presentation />
                        {disableBodyScroll()}
                    </div>
            </div>
        );
}
 
export default Landing_page ;
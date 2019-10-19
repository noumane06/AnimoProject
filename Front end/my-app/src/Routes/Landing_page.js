// dependecies 
import React from 'react';
import { disableBodyScroll  } from 'body-scroll-lock';
// FIles import 
import Presentation from '../Components/presentation';
import Navbar from '../Components/navbar';
import '../CSS/Landing_Page/main.css'

class Landing_page extends React.Component {
    render() { 
        return (  
            <div className="Container">
            <img id="bg" src={require('../res/Background-illust/Animo – 1.png')}/>
                <Navbar />
                <Presentation />
                {disableBodyScroll()}
            </div>
        );
    }
}
 
export default Landing_page ;
import React from 'react';
//import jwt from 'jsonwebtoken';

import './CSS/navbar.css';
class Navbar extends React.Component {

    
    componentDidMount()
    {
        function classToggle() {
            const navs = document.querySelectorAll('.Navbar__Items')
            
            navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
        }
          
          document.querySelector('.Navbar__Link-toggle')
            .addEventListener('click', classToggle);
    }
    render() { 
             return ( 

            <div class="Navbar">
                <img src={
                require('../../../../../res/Logo/animo iluustration icon.svg')}
                alt="animo's logo orange version"
                width = "100px"
                className="animo_home_logo" 
                />
                <div class="Navbar__Link-toggle">
                        <i class="fa fa-bars"></i>
                 </div>
                <nav class="Navbar__Items">
                    
                    <a class="Navbar__Link active">
                        <i className="fa fa-home" ></i>  Home
                    </a>
                    
                    <a class="Navbar__Link">
                        <i class="fa fa-bell-o"></i> Notifications
                    </a>
    
                </nav>
                <nav className='Navbar__Items Navbar__Items--right '>
                    <div class="wrap">
                            <input type="text" class="searchTerm" placeholder="Search animo"/>
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                    </div>
                    <div class="Navbar__Link Create_offers">
                        <a id='createOffer' href=''>
                            Create offer
                        </a>
                    </div>
                    <span class="dot Navbar__Link "></span>

                </nav>
            </div>
         );
        }
       
}
 
export default Navbar;    
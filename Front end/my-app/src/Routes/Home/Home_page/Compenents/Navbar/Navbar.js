import React from 'react';
//import jwt from 'jsonwebtoken';

import './CSS/navbar.css';
class Navbar extends React.Component {

    render() { 
             return ( 

            <div className="SideNav">
                <img src={
                require('../../../../../res/Logo/animo iluustration icon.svg')}
                alt="animo's logo orange version"
                width = "100px"
                className="animo_home_logo" 
                />
            {/* ------------ Nav container  : -------------------------------------- */}
                <div className="Nav_Container">

                {/* ------------ Home div  : -------------------------------------- */}

                    <a href="">
                        <div className="Navlink active">
                            <div className="home_icon">
                                <svg 
                                    className="fa_home"
                                    style = {{fill : 'currentColor'}}
                                    width="24px"
                                    height="22.35px" viewBox="0 0 24 22.35" >
                                    <path d="M23.6,10.1l-3.64-3.64v-4.2c0-0.76-0.62-1.38-1.38-1.38c-0.76,0-1.37,0.62-1.37,1.38v1.45L14.5,1c-1.34-1.34-3.67-1.34-5,0
                                            L0.4,10.1c-0.54,0.54-0.54,1.41,0,1.95c0.54,0.54,1.41,0.54,1.95,0l9.09-9.09c0.3-0.29,0.82-0.29,1.11,0l9.1,9.1
                                            c0.27,0.27,0.62,0.4,0.97,0.4c0.35,0,0.7-0.13,0.97-0.4C24.13,11.51,24.13,10.64,23.6,10.1z M12.48,5.56
                                            c-0.26-0.26-0.69-0.26-0.96,0l-8,8c-0.13,0.13-0.2,0.3-0.2,0.48v5.83c0,1.37,1.11,2.48,2.48,2.48h3.96v-6.13h4.47v6.13h3.96
                                            c1.37,0,2.48-1.11,2.48-2.48v-5.83c0-0.18-0.07-0.35-0.2-0.48L12.48,5.56z"/>
                                </svg>
                            </div>
                            <div className="legend">
                                <span>Home</span>
                            </div>
                        </div>
                    </a>    

                {/* ------------------  Notification  div  : ---------------------------- */}

                    <a href="">
                        <div className="Navlink">
                            <div className="home_icon">
                                <svg className="not_ico"
                                    style = {{fill : 'currentColor'}}
                                    width="20px"
                                    height="24px" viewBox="0 0 20 24" space="preserve">
                                    <path id="svg" d="M19.93,20.24l-1.72-2.86C17.42,16.06,17,14.55,17,13.01V10.5c0-3.16-2.11-5.84-5-6.7V2c0-1.1-0.9-2-2-2S8,0.9,8,2V3.8
                                            c-2.89,0.86-5,3.54-5,6.7v2.51c0,1.54-0.42,3.05-1.21,4.37l-1.72,2.86c-0.09,0.16-0.1,0.35-0.01,0.5C0.15,20.9,0.32,21,0.5,21h19
                                            c0.18,0,0.35-0.1,0.43-0.25C20.02,20.59,20.02,20.4,19.93,20.24z M6.85,22c0.56,1.18,1.76,2,3.15,2s2.59-0.82,3.15-2H6.85z"/>
                                </svg>
                            </div>
        
                            <div className="legend">
                                <span>Notifications</span>
                            </div>
                        </div>
                    
                    </a>
        
                </div>
            {/* ------------ End of nav container  : -------------------------------------- */}


                <div className="CreateOffers">
                        <a id='createOffer' href=''>
                            Create offer
                        </a>
                </div>

                {/* <div class="wrap">
                            <input type="text" class="searchTerm" placeholder="Search animo"/>
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                    </div>*/}
            </div>
            
         );
        }
       
}
 
export default Navbar;    



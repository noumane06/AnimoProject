// Modules import 

import React , {useEffect , useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

// internal files and components
import Home from './Compenents/home_butt';
import Notif from './Compenents/notif_butt';
import Explore from './Compenents/explore_butt';
import Profile from './Compenents/profile_butt';
import Settings from './Compenents/settings_butt';
import './CSS/Sidebar.scss';

// ---------------------------------------------


function Side_bar() {
            const [usrInfo , setUserInfo] = useState({});
            const [imgLoading , setImgLoading] = useState(true);
            
            useEffect(()=>{
                const Url = "/users/Myprofile";
                axios.get(Url,{withCredentials : true}).then(res=>{
                    setUserInfo(res.data.result);
                }).catch(err=>console.log(err));
            },[])
            const handleLoading = ()=>{
                setImgLoading(false)
            }
             return ( 
            
            <div className="SideNav">
            <svg 
                width="120" height="31.512" viewBox="0 0 150 31.512"  
                className="animo_home_logo">
                <path xmlns="http://www.w3.org/2000/svg" d="M668.61,354.41a14.93,14.93,0,0,1,5.4,1.68,14.74,14.74,0,0,1,4.34,3.48,16.4,16.4,0,0,1,2.88,4.8,15.57,15.57,0,0,1,1.06,5.68v11.5a4,4,0,0,1-1.28,3,4.05,4.05,0,0,1-6.46-.84,2.65,2.65,0,0,0-.58.3l-.52.3a16.26,16.26,0,0,1-3.14,1.1,15.32,15.32,0,0,1-3.52.38,14.52,14.52,0,0,1-8.56-2.64,16.08,16.08,0,0,1-5.62-6.78,18.86,18.86,0,0,1-1-3.06,14.76,14.76,0,0,1,0-6.48,17.09,17.09,0,0,1,1-3.06,16,16,0,0,1,5.62-6.82,14.71,14.71,0,0,1,8.56-2.6h.92A6.55,6.55,0,0,1,668.61,354.41Zm-1.8,23a7.21,7.21,0,0,0,5.06-2.08,7.37,7.37,0,0,0,1.54-2.3,7.29,7.29,0,0,0,.58-2.9,6.9,6.9,0,0,0-.58-2.76,7.73,7.73,0,0,0-1.56-2.34,7.43,7.43,0,0,0-2.3-1.6,6.78,6.78,0,0,0-2.72-.58,6.46,6.46,0,0,0-2.68.58,7.48,7.48,0,0,0-2.28,1.6,7.73,7.73,0,0,0-1.56,2.34,6.9,6.9,0,0,0-.58,2.76,6.73,6.73,0,0,0,.6,2.82,7.53,7.53,0,0,0,1.6,2.3,8.24,8.24,0,0,0,2.28,1.56A6,6,0,0,0,666.81,377.37Zm34-23a15.77,15.77,0,0,1,5.94,1.14,15.37,15.37,0,0,1,5,3.18,15.83,15.83,0,0,1,3.42,4.84,14.24,14.24,0,0,1,1.3,6v12a4.05,4.05,0,0,1-1.2,2.92,4.17,4.17,0,0,1-2.94,1.3,4.32,4.32,0,0,1-3-1.14,3.73,3.73,0,0,1-1.26-2.9v-11.7a7.37,7.37,0,0,0-.54-2.82A6.74,6.74,0,0,0,706,365a8.15,8.15,0,0,0-2.32-1.56,7.17,7.17,0,0,0-2.86-.58,6.6,6.6,0,0,0-2.7.56,7.58,7.58,0,0,0-2.26,1.46,6.87,6.87,0,0,0-2.12,4.92v11.82a4.41,4.41,0,0,1-4.3,4.26,4.4,4.4,0,0,1-3-1.18,3.75,3.75,0,0,1-1.3-2.88V370.11a16.56,16.56,0,0,1,1.26-6.12,15.92,15.92,0,0,1,3.29-5,15.19,15.19,0,0,1,4.94-3.38A15.8,15.8,0,0,1,700.8,354.39Zm19.1,1.12a4.08,4.08,0,0,0-1.4,2.8v23.56a4.6,4.6,0,0,0,1.46,2.94,4.28,4.28,0,0,0,2.92,1,4.5,4.5,0,0,0,3.06-1.3,4.06,4.06,0,0,0,1.13-2.92v-23a4.77,4.77,0,0,0-1.29-3,3.84,3.84,0,0,0-2.9-1.24A4.62,4.62,0,0,0,719.9,355.51Zm20.71-1.12a11.85,11.85,0,0,1,3.82.62,11,11,0,0,1,3.44,1.92,11.3,11.3,0,0,1,7.34-2.54,11.62,11.62,0,0,1,4.42.88,12.13,12.13,0,0,1,3.73,2.38,11.58,11.58,0,0,1,2.56,3.58,10.38,10.38,0,0,1,.94,4.42v16.28a3.57,3.57,0,0,1-1.32,2.74,4.42,4.42,0,0,1-3,1.18,4.38,4.38,0,0,1-4.26-4.24v-15.8a2.69,2.69,0,0,0-.86-2,3,3,0,0,0-2.16-.84,3.15,3.15,0,0,0-2,.74,2.58,2.58,0,0,0-.94,2.14v15.8a4,4,0,0,1-1.28,3,4.25,4.25,0,0,1-3,1.24,4.4,4.4,0,0,1-3-1.14,3.53,3.53,0,0,1-1.32-2.78V365.85a2.9,2.9,0,0,0-1-2.14,3.06,3.06,0,0,0-2.06-.82,3,3,0,0,0-2.16.86,3.1,3.1,0,0,0-1,2.18V382a4.26,4.26,0,0,1-4.26,3.84,4.24,4.24,0,0,1-3.08-1.24,4.66,4.66,0,0,1-1-1.36,3.25,3.25,0,0,1-.3-1.62v-16a10.28,10.28,0,0,1,.92-4.32,11.57,11.57,0,0,1,6.18-6A11.27,11.27,0,0,1,740.61,354.39Zm60.64,4.78a4.74,4.74,0,0,0-8.43-3,15.67,15.67,0,0,0-14.62,0,4.73,4.73,0,1,0-6.62,6.66,15.71,15.71,0,1,0,29.65,7.28,15.44,15.44,0,0,0-1.79-7.28A4.57,4.57,0,0,0,801.25,359.17ZM785.5,378a7.84,7.84,0,1,1,7.88-7.8A7.81,7.81,0,0,1,785.5,378Z" transform="translate(-651.25 -354.33)" style={{'fill':'#ff4123'}}/>
            </svg>
        
            {/* ------------ Nav container  : -------------------------------------- */}
                <div className="Nav_Container">
                    
                    <NavLink exact  to='/home' activeClassName="active" className={window.location.pathname === "/" ? "active" : ""}>

                    <Home/></NavLink>    

                    <NavLink to='/notification' activeClassName="active" ><Notif/></NavLink>
                  
                    <NavLink to='/explore' activeClassName="active" ><Explore/></NavLink>
              
                    <NavLink to='/profile' activeClassName="active"  ><Profile imgLoading={imgLoading} usrInfo={usrInfo} handleLoading={handleLoading} /></NavLink>

                    <NavLink to='/settings' activeClassName="active" ><Settings/></NavLink>

                    <div className="CreateOffers">
                        <a id='createOffer' href='/createoffer'>
                        Créer offre
                        </a>
                    </div>
                </div>
                
            {/* ------------ End of nav container  : -------------------------------------- */}
                <footer className="footer">
                    
                    <div>
                        <a href="/home">Propos</a>·
                        <a href="/home">Contact</a>·
                        <a href="/home">FAQ</a>·
                        <a href="/home">Conditions generales</a>·
                        <a href="/home">Confidentialité</a><br/>
                        <strong>Animo © 2020 · Production de <a href="https://web.facebook.com/noumane.agouzil/" target="_blank" rel="noopener noreferrer">Noumane Agouzil</a> </strong>
                    </div>
                </footer>
            </div>
            
         );   
}
 
export default Side_bar;    



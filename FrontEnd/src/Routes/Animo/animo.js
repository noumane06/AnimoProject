
// Modules import 

import React, { useEffect, useState } from 'react';
import {Route  , Redirect ,Switch } from 'react-router-dom';
import axios from 'axios';
// components import 
import CreateOffer from './Create_offer/createIndex';
import Notification from './Notification/Notification';
import Home from './Home_page/HomeRoute';
import Splash from '../../Components/Splash';
import SideBar from './Components/SideBar/Sidebar';
// *****************************

const AnimoContainer = ()=> {

    const [loading, setLoading] = useState(true);
    const [userId,setUserId] = useState("");
    const [className , setClassName] = useState("SplashContainer");
    useEffect(() => {
        axios
        .get("/users/checkCoockie", { withCredentials: true })
        .then((res) => {
            setUserId(res.data.userId);
            setClassName("SplashContainer trans");
            setTimeout(() => {
                setLoading(false);
            }, 500);
        })
        .catch((err) => {
            const location = window.location.href ;
            if (window.location.pathname === "/") {
                window.location.assign("/Landing");
            }else
            {
                window.location.assign(`/account/signin?returnTo=${location}`);
            }
            
        });
    }, []);

    return (
            <>
            {loading &&(
            <Splash propsclass={className} />
            )}
            {!loading &&(
                <>
                    {window.location.pathname !== "/createoffer" &&(<SideBar/>)}
                    <Switch>
                    <Redirect exact from='/' to="/home" />
                    
                    <Route  path="/home">
                        <Home userId={userId}/>
                    </Route>
                    {/* notification route render the notification page  */}

                    <Route path="/notification" >
                        <Notification/>
                    </Route>

                    <Route path="/createoffer">
                        <CreateOffer userId={userId}/>
                    </Route>
                    {/* <Route path ="*" component={Not_found}/> */}
                  
                    {/* <Route default exact path="/" component={Home}/> */}
                    
                  </Switch>
                </>
                
            )}
            </>
            
      );
 
}

export default AnimoContainer ;

 

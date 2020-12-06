
// Modules import 

import React, { useEffect, useState } from 'react';
import {Route  , Redirect ,Switch } from 'react-router-dom';
import axios from 'axios';
// components import 
import CreateOffer from './Create_offer/createIndex';
import Notification from './Notification/NotificationRoute';
import Home from './Home_page/HomeRoute';
import Splash from '../../Components/Splash';

// *****************************

const AnimoContainer = ()=> {

    const [loading, setLoading] = useState(true);
    const [className , setClassName] = useState("SplashContainer");
    useEffect(() => {
        axios
        .get("/users/checkCoockie", { withCredentials: true })
        .then(() => {
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
                <Switch>
                    <Redirect exact from='/' to="/home" />
                    <Route  path="/home">
                        <Home/>
                    </Route>
                    {/* notification route render the notification page  */}

                    <Route path="/notification" >
                        <Notification/>
                    </Route>

                    <Route path="/createoffer">
                        <CreateOffer/>
                    </Route>
                    {/* <Route path ="*" component={Not_found}/> */}
                  
                    {/* <Route default exact path="/" component={Home}/> */}
                    
                  </Switch>
            )}
            </>
            
      );
 
}

export default AnimoContainer ;

 

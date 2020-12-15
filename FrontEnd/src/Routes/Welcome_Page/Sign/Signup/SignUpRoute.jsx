// Dependencies ---------------

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie' ;

// Components -----------------
import SignUp from './signup';
import animationData from './animations/redirect.json';
import '../CSS/Redirect.scss';
// Render ---
const SignUpRoute = ()=>{
    
    const [signedIn, setSignedIn] = useState("");
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };
    useEffect(() => {
        axios
        .get("/users/checkCoockie", { withCredentials: true })
        .then(() => {
            setSignedIn("true");
            setTimeout(() => {
                window.location.assign("/home")
            }, 3000);

        })
        .catch((err) => {
            setSignedIn("false");   
        });
    }, []);
    return(
            <div>
                {signedIn === "false" &&(
                    <div className="RedirectContainer">
                        <div className="split TextPart signin">
                            <SignUp/>
                        </div>
                        <div className="split AnimationPart">
                                
                        </div>
                    </div>
                )}
                {signedIn === "true" &&(
                    <div>
                        <title>Nous saluons le retour! - Animo</title>
                        <div className="RedirectContainer" >
                            <div className="split TextPart">
                                <img src={
                                     require('../../../../res/Logo/animo iluustration icon.svg')}
                                     alt="animo's logo orange version"
                                     className="Animo_logo_redirect" 
                                     onClick={()=>{window.location.replace("/")}}
                                />
                                <div className="text">
                                    <h1>Welcome back!</h1>
                                    <p>You are already logged in and will be redirected back to Animo shortly.</p>
                                    <p>If you are not redirected automatically, follow this <a href="/home">link</a>.</p>
                                </div>
                            </div>
                            <div className="split AnimationPart">
                                
                            </div>
                        </div>
                        
                    </div>
                    
                )}

            </div>    
    );
    
}
export default SignUpRoute ;
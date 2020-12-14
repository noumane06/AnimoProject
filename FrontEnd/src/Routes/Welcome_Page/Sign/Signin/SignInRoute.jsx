// Dependencies ---------------

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie' ;

// Components -----------------
import SignIn from './Components/signin'
import animationData from '../Signup/animations/redirect.json';
import '../CSS/Redirect.scss';
// Render ---
const SignInRoute = ()=>{
    
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
                            <SignIn/>
                        </div>
                        <div className="split AnimationPart">
                                
                        </div>
                    </div>
                )}
                {signedIn === "true" &&(
                    <div>
                       <title>Nous saluons le retour! - Animo</title>
                        <div className="RedirectContainer" >
                            <div className="split TextPart red">
                                <img src={
                                     require('../../../../res/Logo/animo iluustration icon.svg')}
                                     alt="animo's logo orange version"
                                     className="Animo_logo_redirect" 
                                     onClick={()=>{window.location.replace("/")}}
                                />
                                <div className="text">
                                    <h1>Nous saluons le retour!</h1>
                                    <p>Vous êtes déjà connecté et serez bientôt redirigé vers Animo.</p>
                                    <p>Si vous n'êtes pas redirigé automatiquement, suivez ce  <a href="/home">lien</a>.</p>
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
export default SignInRoute ;
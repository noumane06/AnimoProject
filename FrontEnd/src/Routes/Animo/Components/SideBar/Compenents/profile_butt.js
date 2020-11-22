import React from 'react';
import jwt from 'jsonwebtoken';

class Prof extends React.Component {

    render() { 
            
            const token = window.localStorage.getItem("Tokens");
            var decoded = jwt.decode(token, "secret", function (userId) {
                console.log(userId);
            })
            const profile_img = decoded.Usrimg;
             return ( 
            
                <div className="Navlink">
                <div className="icon_container">
                    <img 
                        src={profile_img}
                        className="prof_icon"
                        width="25"
                        alt="profile"
                        height="25px" viewBox="0 0 20 24" >
                    </img>
                </div>

                <div className="legend">
                    <span>Profile</span>
                </div>
            </div>
         );
        }
       
}

export default Prof;    
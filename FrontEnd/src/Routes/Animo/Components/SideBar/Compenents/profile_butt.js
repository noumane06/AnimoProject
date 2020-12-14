import React from 'react';

const Prof = ({imgLoading,usrInfo,handleLoading})=>{
        
            
             return ( 
            
                <div className="Navlink">
                <div className="icon_container">
                    <img 
                        src={usrInfo.img}
                        className="prof_icon"
                        width="25"
                        style={imgLoading ?{display : "none"} : {}}
                        alt="profile"
                        height="25px" viewBox="0 0 20 24" 
                        onLoad={handleLoading}
                        />
                    <div className="prof_icon" style={imgLoading ?{width : 25 , height : 25 , backgroundColor : "#8080802e"} : {display : "none"}}></div>
                </div>

                <div className="legend">
                    <span>Profile</span>
                </div>
            </div>
         );
       
}

export default Prof;    
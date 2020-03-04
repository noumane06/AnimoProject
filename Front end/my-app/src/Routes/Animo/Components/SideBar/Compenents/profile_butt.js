import React from 'react';

class Prof extends React.Component {

    render() { 
            const profile_img = "https://img1.looper.com/img/gallery/why-charlie-hunnam-was-never-the-same-after-sons-of-anarchy/intro-1563918329.jpg";
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
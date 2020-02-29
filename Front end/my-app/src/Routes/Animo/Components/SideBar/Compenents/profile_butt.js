import React from 'react';

class Prof extends React.Component {

    render() { 
             return ( 
            
                <div className="Navlink">
                <div className="icon_container">
                    <img 
                        src={require('../../../../../res/Background-illust/705680.jpg')}
                        className="prof_icon"
                        width="20px"
                        height="23px" viewBox="0 0 20 24" >
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
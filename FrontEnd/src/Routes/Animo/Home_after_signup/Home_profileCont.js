// Modules import 

import React from 'react';
//import jwt from 'jsonwebtoken';

// internal files and components

import './CSS/Profile_conf.scss';

class Account_page extends React.Component {
    
    render() { 
        
             return ( 
            <div> 
                 <title>Home | animo</title>
                 <h1 className="message">Continue the configuration of your profile</h1>
                 <h2 className="username">{this.state.username}</h2>
                 <button onClick={this.handleSkip} className="skip"> SKIP</button>
            </div>
         );
        }
}
 
export default Account_page;
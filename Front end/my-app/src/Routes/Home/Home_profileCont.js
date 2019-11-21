import React from 'react';
import jwt from 'jsonwebtoken'
import '../../CSS/Profile/Profile_conf.css';

class Account_page extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email : '',
            userId : '',
            username : '',
            error : null 
        };
        this.handleSkip = this.handleSkip.bind(this) ;
    }
    componentDidMount()
    {
        const token = window.localStorage.getItem("Tokens");
        try {
              var decoded = jwt.verify(token,'secret');
        this.setState({
            email : decoded.email ,
            userId : decoded.userId , 
            username : decoded.username
        });
        } catch (error) {
            this.setState({
                error : error
            });
        } 
    }
    handleSkip()
    {
        window.location.replace("/home");
    }
    render() { 
        if (this.state.error !== null) {
            window.location.replace("/account/signin");
        }else
        {
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
}
 
export default Account_page;
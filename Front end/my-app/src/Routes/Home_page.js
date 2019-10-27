import React from 'react';
import jwt from 'jsonwebtoken'
import Axios from 'axios';

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
        this.handleLogout = this.handleLogout.bind(this);
        this.hadnledelete = this.hadnledelete.bind(this);
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
    handleLogout()
    {
        localStorage.removeItem("Tokens");
        window.location.replace("/account/signin");
    }
    hadnledelete()
    {   
        
        Axios.delete('/users/'+this.state.userId)
          .then(response => console.log(response))
          .catch(err => console.log(err));
    }
    render() { 
        if (this.state.error !== null) {
            window.location.replace("/account/signin");
        }else
        {
             return ( 
            <div> 
                 <title>Home | animo</title>
                 <h1>Welcome home {this.state.username}</h1>
                 <h2>Your email : {this.state.email}</h2>
                 <h3>Your userId : {this.state.userId}</h3>
                 <button onClick={this.handleLogout}> Logout</button>
                 <button onClick={this.hadnledelete}> Delete account</button>
            </div>
         );
        }
       
    }
}
 
export default Account_page;
import React from 'react';
import jwt from 'jsonwebtoken'

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
    render() { 
        if (this.state.error !== null) {
            return <h1>Token expired</h1>
        }else
        {
             return ( 
            <div> 
                 <title>Home | animo</title>
                 <h1>Welcome home {this.state.username}</h1>
                 <h2>Your email : {this.state.email}</h2>
                 <h3>Your userId : {this.state.userId}</h3>
            </div>
         );
        }
       
    }
}
 
export default Account_page;
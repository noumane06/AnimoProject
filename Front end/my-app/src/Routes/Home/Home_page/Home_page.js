// Dependencies *********************
import React from 'react';
import jwt from 'jsonwebtoken';
// **********************************


import Navbar from './Compenents/Navbar/Navbar';
import Profile_popup from './Compenents/Profile_popup';
import Post_container from './Compenents/Post_container/Post_container';
import Header from './Compenents/Header/Header';

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
    }
    UNSAFE_componentWillMount()
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
    render() /*{ 
        if (this.state.error !== null) {
            window.location.replace("/account/signin?ref=sign_first");
        }else*/
        {
             return ( 
            <div> 
                <Header/>
                <hr style={{border : '0.5px solid #dddddd'}}/>
                <Navbar/>
                <Post_container/>
                <Profile_popup/>
            </div>
         );
        }
       
    //}
}
 
export default Account_page;    
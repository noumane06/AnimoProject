// Modules import 

import React from 'react';
//import jwt from 'jsonwebtoken';
import { Provider } from 'mobx-react';

// internal files and components

import postsStore from '../../../Stores/ModelStore';
import MainContainer from './Components/MainContainer/MainContainer';


class Account_page extends React.Component {
    /*constructor(props)
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
    }*/
    render() /*{ 
        if (this.state.error !== null) {
            window.location.replace("/account/signin?ref=sign_first");
        }else*/
        {
             return (
                <Provider postsStore={postsStore}>         
                    <MainContainer/>
                </Provider>
            
         );
        }
       
    //}
}
 
export default Account_page;    
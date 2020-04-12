// Modules import 

import React from 'react';
//import jwt from 'jsonwebtoken';
import { Provider } from 'mobx-react';
import {Route } from 'react-router-dom';
// internal files and components

import postsStore from '../../../Stores/ModelStore';
import MainContainer from './Components/MainContainer/MainContainer';

import FullPost from './Components/MainContainer/Components/FullPost/FullPost';
import Header from '../Components/Header/Header';


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
                {/* Render the maincontainer of the home page */}
                <Route exact path="/">
                    <Header/>
                    <hr style={{border : '0.5px solid #dddddd'}}/>
                    <MainContainer/>
                </Route>
                <Route exact path="/home">
                    <Header/>
                    <hr style={{border : '0.5px solid #dddddd'}}/>
                    <MainContainer/>
                </Route>
                {/* Render a fullpost page (onclick) */}
                <Route exact path="/home/test">
                    <Header config="test"/> 
                    <hr style={{border : '0.5px solid #dddddd'}}/>
                    <FullPost/>
                </Route>
                </Provider>
            
         );
        }
       
    //}
}
 
export default Account_page;    
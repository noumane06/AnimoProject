// Modules import 

import React, {useEffect } from 'react';
//import jwt from 'jsonwebtoken';
import { Provider } from 'mobx-react';
import {Route } from 'react-router-dom';
// internal files and components

import postsStore from '../../../Stores/ModelStore';
import MainContainer from './Components/MainContainer/MainContainer';

import FullPost from './Components/MainContainer/Components/FullPost/FullPost';
import Header from '../Components/Header/Header';


const Account_page = () =>
{
   
             const str = "Acceuil" ;
             return (
                <Provider postsStore={postsStore}>
                {/* Render the maincontainer of the home page */}
                <Route exact path="/">
                    <Header route={str}/>
                    <MainContainer/>
                </Route>
                <Route exact path="/home">
                    <Header route={str}/>
                    <MainContainer/>
                </Route>
                {/* Render a fullpost page (onclick) */}
                <Route exact path="/home/:postId">
                    <Header config="test"/> 
                    <FullPost/>
                </Route>
                </Provider>    
         );
}
 
export default Account_page;    
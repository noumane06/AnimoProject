// Modules import
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import {inject , observer} from 'mobx-react'; 

// Internal files import
import './CSS/header.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Header  = inject(
    'postsStore'
)(
    observer((props)=>
    {
        const [post, setImage] = useState({});
        const {postsStore} = props;
        useEffect(() => {
            let id = window.location.href.split("/");
            const get = postsStore.getPost(id[4]);
            get.then(res => {
                setImage(res);
            }).catch(err => console.log(err));
        },[]);
        var Title = "" ;
        if (props.config !== "test") {
                Title = props.route ;
            }else
            {
                var title = post.Title;
                Title = title ;
            }
        
        
        const handleSignout = () =>{
           window.localStorage.clear();
           window.location.replace("/account/signin");
        }
        
         return (
        <div className="Header">
                 <title>{ Title} - Animo</title>
                 
            <div className="Page_title">
                
                { props.config === "test" ?
                <Link to='/home' className="arrowBack">
                    <svg viewBox="0 0 24 24" width="24px" height="24px">
                        <g>
                            <path d="M 20 11 H 7.414 l 4.293 -4.293 c 0.39 -0.39
                                     0.39 -1.023 0 -1.414 s -1.023 -0.39 -1.414 0 l -6 6 
                                     c -0.39 0.39 -0.39 1.023 0 1.414 l 6 6 c 0.195 0.195 
                                     0.45 0.293 0.707 0.293 s 0.512 -0.098 0.707 -0.293 c 
                                     0.39 -0.39 0.39 -1.023 0 -1.414 L 7.414 13 H 20 c 0.553
                                     0 1 -0.447 1 -1 s -0.447 -1 -1 -1 Z">
                            </path>
                        </g>
                    </svg>
                </Link> : ''}
                     
                        {props.config !== "test" &&(
                            <h2 className="Title">{props.route}</h2>
                        )}
                        {props.config === "test" &&(
                            <h2 className="Title">Publication</h2>
                        )}
                     
            </div>
            <div className="rightPart">
                <div className="wrap">
                    <input type="text" className="searchTerm" placeholder="Search animo"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                </div>
                <div className="singoutContainer">
                    <button className="signout" onClick={handleSignout} >Sign out</button>
                 </div>
            </div>
                
        </div>  
        
     ); 
})
);


export default Header;    
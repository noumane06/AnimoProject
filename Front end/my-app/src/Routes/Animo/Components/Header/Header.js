// Modules import
import React, { useState, useEffect } from 'react';
import {useLocation , Link} from "react-router-dom";
import {inject , observer} from 'mobx-react'; 
import Loader from "react-loader-spinner";

// Internal files import
import './CSS/header.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Header  = inject(
    'postsStore'
)(
    observer((props)=>
    {
        const [post, setImage] = useState({});
        const [loading , setLoad] = useState(true);
        const {postsStore} = props;
        useEffect(() => {
            let id = window.location.href.split("/");
            const get = postsStore.getPost(id[4]);
            get.then(res => {
                setImage(res);
                setLoad(false);
            }).catch(err => console.log(err));
        },[]);

        
        let location = useLocation();
        let Title = location.pathname.split("/");
        if (props.config !== "test") {
                if (Title[1] === "") {
                    Title[1] = "home";
                    setLoad(false);
                    } 
            }else
            {
                var title = post.Title;
                Title[1] = title ;
            }
        
        
        const handleSignout = () =>{
           window.localStorage.clear();
           window.location.replace("/account/signin");
        }
        
         return (
        <div className="Header">
                 <title>{Title[1] !== undefined && (
                     Title[1].toUpperCase()
                 )} - Animo</title>
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
                     <h2 className={!loading ? "Title" : "hidden"}>
                        {Title[1]!== undefined &&(
                            Title[1].toUpperCase()
                        )}
                     </h2>
                {loading && (
                    <Loader type="ThreeDots" color="#1665D8" height={30} width={30} className="Title loader"/>
                )}
            </div>
            
                 <div className="singoutContainer">
                    <button className="signout" onClick={handleSignout} >Sign out</button>
            </div>
            <div className="wrap">
                <input type="text" className="searchTerm" placeholder="Search animo"/>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
            </div>
        </div>  
        
     ); 
})
);


export default Header;    
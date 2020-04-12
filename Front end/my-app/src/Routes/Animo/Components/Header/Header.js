// Modules import
import React from 'react';
import {useLocation , Link} from "react-router-dom";
import {inject , observer} from 'mobx-react'; 
// Internal files import
import './CSS/header.scss';

const Header  = inject(
    'postsStore'
)(
    observer((props)=>
    {
        const {postsStore} = props;
        const title = postsStore.posts[0].title ;
        let location = useLocation();
        let Title = location.pathname.split("/");
        if (props.config !== "test") {
           if (Title[1] === "") {
            Title[1] = "home";
            } 
        }else
        {
            Title[1] = title ;
        }
        
         return (
        <div className="Header">
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
                <h2 className="Title">{Title[1].toUpperCase()}</h2>
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
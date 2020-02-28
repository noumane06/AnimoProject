import React from 'react';

import './CSS/header.css';
class Header extends React.Component {

    render() { 
             return ( 
            <div className="Header">
                <div className="Page_title">
                    <h2>{this.props.value}</h2>
                </div>
                <div class="wrap">
                    <input type="text" class="searchTerm" placeholder="Search animo"/>
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                </div>
            </div>
            
         );
        }
       
}

export default Header;    
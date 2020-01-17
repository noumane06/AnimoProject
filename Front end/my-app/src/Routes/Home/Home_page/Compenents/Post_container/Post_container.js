import React from 'react';
import Post from './Compenents/post'

import './CSS/posts.css';
class Post_container extends React.Component {

    render() { 
             return ( 
            <div>
                <h2 className="time">Last 24 hours</h2>
                <div className="post_container">
                    <title>(18) Home | Animo</title> 
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>  
            
            
         );
        }
       
}
 
export default Post_container;    
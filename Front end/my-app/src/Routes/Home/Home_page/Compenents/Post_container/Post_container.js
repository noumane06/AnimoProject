import React from 'react';
import Post from './Compenents/post'

import './CSS/posts.css';
class Post_container extends React.Component {

    render() { 
             return ( 
                 
            <div className="post_container">
                <title>(18) Home | Animo</title> 
                <Post/>
            </div>
            
         );
        }
       
}
 
export default Post_container;    
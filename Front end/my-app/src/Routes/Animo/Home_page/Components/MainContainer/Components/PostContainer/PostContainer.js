// Modules import 

import React from 'react';
// Internal files and compenents 
import Post from "./Components/post";
function PostContainer(props) {
  
      return ( 
        <div className="post_container">
                {
                    props.posts.map(post =>(
                        <Post key={post.id} post ={post}/>              
                    ))
                }
        </div>
       );
}

export default PostContainer;  
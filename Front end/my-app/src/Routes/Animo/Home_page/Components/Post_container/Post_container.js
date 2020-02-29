import React from 'react';
import Post from './Components/post'
import {observer , inject } from 'mobx-react';
//************************************* */

import './CSS/posts.scss';

@inject('postsStore')
@observer
class Post_container extends React.Component {

    render() { 
            const {postsStore} = this.props ;
             return ( 
            <div>
                <h2 className="time">Last 24 hours </h2>
                <div className="post_container">
                {
                    postsStore.posts.map(post =>( 
                        <Post key={post.id} post ={post}/>              
                    ))
                }
                </div>
            </div>  
            
            
         );
        }
       
}
 
export default Post_container;    
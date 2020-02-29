// Modules import 

import React from 'react';

// internal files and componenets 

import Stars from './stars'
class Post extends React.Component {

    render() { 
             const {post} = this.props ;

             return ( 
                <div class="Post"> 
                        <div className="Profile">
                            
                            <span className="dot">
                                <img src={post.usrImg} alt="profile"  className="prof" />
                            </span>
                            <div className="name">{post.usrPost}</div>
                            <div className="post_time">17 min ago.</div>
                        </div>
                        <div className="Thumbnail_container">
                                <img src={post.img} alt="puppies" width="100%" className="Thumbnail_img"/>
                        </div>
                        <h2>{post.title}</h2>
                        <div className="infos">
                            <div className="description">{post.descr}</div><br/>
                            <div className="Interaction_user">
                                <div className="ratings">
                                    <Stars size= {post.stars}/>
                                 </div>
                                <div className="bookmark"> save <i className="fa fa-bookmark-o"></i></div>
                            </div>
                        </div>
                        <hr/>
                        <div className="price_infos">
                            <div className="status_type">{post.postType}</div>
                            <div className="price">MAD {post.price}</div>
                        </div>
                   
                </div>
         );
        }
       
}
 
export default Post;    
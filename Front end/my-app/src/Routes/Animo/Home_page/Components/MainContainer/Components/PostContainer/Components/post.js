// Modules import 

import React from 'react';
import { Skeleton } from 'antd';  
import  {Link} from 'react-router-dom'; 
import { observer, inject } from 'mobx-react'; 
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// internal files and componenets 

import Stars from './stars';

@inject('postsStore')
@observer
class Post extends React.Component {
    render() { 
             const {post} = this.props ;
             const { postsStore } = this.props;
             const date = new Date(post.publishDate);
             const h = date.getHours() ;
             const m = date.getMinutes()
             return (
                 <Link to={`/home/${post._id}`} className="LinkContainer">
                    <div className="Post" > 
                         <Skeleton loading={postsStore.loadingState} active avatar paragraph={{ rows: 0 }}>
                            <div className="Profile">
                                <span className="dot">
                                     <img src={post.Usrimg} alt="profile"  className="prof" />
                                     {/* <Loader
                                            type="Puff"
                                            color="#00BFFF"
                                            height={40}
                                            width={40}
                                            timeout={3000} //3 secs
                                            className="prof"
                                        /> */}
                                     
                                </span>
                                 <div className="name">{post.firstname} {post.lastname}</div>
                                 <div className="post_time">
                                     <i className="fas fa-clock" style={{ 'margin-right': '3px' }}></i>
                                     {h}:{m < 10 ? '0' : ''}{m}</div>
                            </div>
                        </Skeleton>
                        <Skeleton loading={postsStore.loadingState} active title ={false}  paragraph={{ rows: 7 }}>
                            <div className="Thumbnail_container">
                                    <img src={post.imageData[0]} alt="puppies" width="100%" className="Thumbnail_img"/>
                            </div>
                            <h2>{post.Title}</h2>
                            <div className="infos">
                                 <div className="description">{post.Describtion.substr(0, 150)}<br/>
                                <i onClick={this.handleClick} >See more ...</i>
                                </div><br/>
                            
                                <div className="Interaction_user">
                                    <div className="ratings">
                                        <Stars key={post._id} size= {post.stars}/>
                                    </div>
                                    <div className="bookmark"> save <i className="fas fa-bookmark"></i></div>
                                </div>
                                <hr style={{border : '0.5px solid #dddddd' }}/>
                            </div>
                            
                            <div className="price_infos">
                                <div className="status_type">{post.PostType}</div>
                                <div className="price">MAD {post.Price}</div>
                            </div>
                        </Skeleton>
                    </div>
                 </Link> 
                
         );
        }
       
}
 
export default Post;    
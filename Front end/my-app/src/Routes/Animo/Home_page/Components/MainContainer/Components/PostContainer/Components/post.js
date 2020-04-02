// Modules import 

import React from 'react';
import { Skeleton } from 'antd';  
import  {Link} from 'react-router-dom';  
//import "antd/dist/antd.css";
// internal files and componenets 

import Stars from './stars';
class Post extends React.Component {
    
    state = {
        loading: false
      };

    
      componentDidMount = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 3000);
      };

    render() { 
             const {post} = this.props ; 
             return (
                 <Link to='/home/test' className="LinkContainer">
                    <div className="Post" > 
                        <Skeleton loading={this.state.loading} active avatar paragraph={{ rows: 0 }}>
                            <div className="Profile">
                                <span className="dot">
                                    <img src={post.usrImg} alt="profile"  className="prof" />
                                </span>
                                <div className="name">{post.usrPost}</div>
                                <div className="post_time">17 min ago.</div>
                            </div>
                        </Skeleton>
                        <Skeleton loading={this.state.loading} active title ={false}  paragraph={{ rows: 7 }}>
                            <div className="Thumbnail_container">
                                    <img src={post.img} alt="puppies" width="100%" className="Thumbnail_img"/>
                            </div>
                            <h2>{post.title}</h2>
                            <div className="infos">
                                <div className="description">{post.descr}<br/>
                                <i onClick={this.handleClick} >See more ...</i>
                                </div><br/>
                            
                                <div className="Interaction_user">
                                    <div className="ratings">
                                        <Stars key={post.id} size= {post.stars}/>
                                    </div>
                                    <div className="bookmark"> save <i className="fa fa-bookmark-o"></i></div>
                                </div>
                                <hr style={{border : '0.5px solid #dddddd' }}/>
                            </div>
                            
                            <div className="price_infos">
                                <div className="status_type">{post.postType}</div>
                                <div className="price">MAD {post.price}</div>
                            </div>
                        </Skeleton>
                    </div>
                 </Link> 
                
         );
        }
       
}
 
export default Post;    
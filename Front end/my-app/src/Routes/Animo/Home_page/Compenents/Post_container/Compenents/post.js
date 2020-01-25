import React from 'react';
class Post extends React.Component {

    render() { 
             return ( 
                <div class="Post"> 
                        <div className="Profile">
                            <span className="dot"></span>
                            <div className="name">Noumane agouzil</div>
                            <div className="post_time">17 min ago.</div>
                        </div>
                        <div className="Thumbnail_container">
                            <div className="Thumbnail_img"></div>
                        </div>
                        <h2>Labrador for sell</h2>
                        <div className="infos">
                            <div className="description">
                            navigable address as the href value. 
                            If you cannot provide a valid href, but still need the element to resemble a link,
                            use a button and change it with 
                            </div><br/>
                            <div className="Interaction_user">
                                <div className="ratings">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i> 4.85
                                 </div>
                                <div className="bookmark"> save <i className="fa fa-bookmark-o"></i></div>
                            </div>
                        </div>
                        <hr/>
                        <div className="price_infos">
                            <div className="status_type">Selling offer</div>
                            <div className="price">MAD 180</div>
                        </div>
                   
                </div>
         );
        }
       
}
 
export default Post;    
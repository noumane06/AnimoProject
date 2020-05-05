// Modules import 

import React from 'react';
import { Carousel } from 'antd';

// internal files and components 
import '../../../CSS/carousel.scss'
// Begin ** 
const ThumbnailContainer  =  ({post})=>{

            return(
                <div className="ThumbnailContainer">
                     <h2 className="Post_type">{post.PostType}</h2> 
                     <Carousel  effect="scrollx" >
                               {post.imageData !== undefined && (post.imageData.map(img => (
                                   <img src={img} alt="puppies" width="100%" key={img} className="img" /> 
                                )))} 
                    </Carousel>
                </div>
            );
}

export default ThumbnailContainer ;

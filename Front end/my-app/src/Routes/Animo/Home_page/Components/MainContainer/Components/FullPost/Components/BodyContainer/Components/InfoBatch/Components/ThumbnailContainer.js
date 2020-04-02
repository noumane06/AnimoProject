// Modules import 

import React from 'react';
import {inject , observer} from 'mobx-react'; 

// internal files and components 

// Begin ** 
const ThumbnailContainer  = inject(
    'postsStore'
)(
    observer(
        ({postsStore})=>{
            var post = postsStore.posts ;
            return(
                <div className="ThumbnailContainer">
                     <h2 className="Post_type">{post[0].postType}</h2>
                     <div className="Images_container" >
                         <div className="Img_Column">
                            <img src={post[0].img} alt="puppies" width="100%" className="img img1" />
                            <img src={post[1].img} alt="puppies" width="100%" className="img img2" />
                         </div>
                         <div className="Img_Column">
                            <img src={post[2].img} alt="puppies" width="100%" className="img img3" />
                            <img src={post[3].img} alt="puppies" width="100%" className="img img4" />
                         </div>

                     </div>
                </div>
            );
        }
    )
); 

export default ThumbnailContainer ;

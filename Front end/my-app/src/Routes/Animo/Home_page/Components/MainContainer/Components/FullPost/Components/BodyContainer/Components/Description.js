// Modules import 

import React from 'react';
import {inject , observer} from 'mobx-react'; 

// internal files and components 

// Begin ** 
const Description  = inject(
    'postsStore'
)(
    observer(
        ({postsStore})=>{
            var post = postsStore.posts[0] ;
            return(
                <div className="DescriptionContainer">
                    <h2 className="title">Description :</h2>
                    <div className="Description">
                        <p>
                            {post.descr}
                        </p>
                            
                    </div>
                </div>
            );
        }
    )
); 

export default Description ;

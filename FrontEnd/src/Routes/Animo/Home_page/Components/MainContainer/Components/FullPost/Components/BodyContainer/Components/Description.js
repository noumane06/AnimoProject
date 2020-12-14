// Modules import 

import React from 'react';

// internal files and components 

// Begin ** 
const Description  = ({post})=>{
            
            
            return(
               
                    <div className="DescriptionContainer">
                    <h2 className="title">{post.Title.charAt(0).toUpperCase() + post.Title.slice(1)}</h2>
                    <div className="Description">
                        <p>
                            {post.Describtion}
                        </p>
                            
                    </div>
                </div>
               
            );
}

export default Description ;

// Modules import 

import React from 'react';

// internal files and components 

// Begin ** 
const Description  = ({post})=>{
            
            
            return(
                <div className="DescriptionContainer">
                    <h2 className="title">Description :</h2>
                    <div className="Description">
                        <p>
                            {post.Describtion}
                        </p>
                            
                    </div>
                </div>
            );
}

export default Description ;

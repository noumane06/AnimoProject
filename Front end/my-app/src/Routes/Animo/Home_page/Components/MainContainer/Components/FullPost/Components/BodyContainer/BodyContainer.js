// Modules import 

import React from 'react';

// internal files and components 
import InfoBatch from './Components/InfoBatch/InfoBatch';
import Description from './Components/Description';
// Begin ** 

const BodyContainer = ({ post }) =>
{
            return(
                <div className="BodyContainer">
                    <InfoBatch post={post}/>
                    <Description post={post}/>
                </div>
            );
};

export default BodyContainer ;

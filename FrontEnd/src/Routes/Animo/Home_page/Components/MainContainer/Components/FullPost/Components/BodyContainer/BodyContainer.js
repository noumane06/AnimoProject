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
                    {/* <h2>Hello world</h2> */}
                    <InfoBatch post={post}/>
                    <br/>
                    <Description post={post}/>
                </div>
            );
};

export default BodyContainer ;

// Modules import 

import React from 'react';

// internal files and components 
import InfoBatch from './Components/InfoBatch/InfoBatch';
import Description from './Components/Description';
// Begin ** 

const BodyContainer = () =>
{
            return(
                <div className="BodyContainer">
                    <InfoBatch/>
                    <Description/>
                </div>
            );
};

export default BodyContainer ;

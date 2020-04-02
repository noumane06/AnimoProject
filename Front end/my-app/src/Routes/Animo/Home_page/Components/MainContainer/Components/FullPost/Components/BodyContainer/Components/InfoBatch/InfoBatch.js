// Modules import 

import React from 'react';

// internal files and components 
import ThumbnailContainer from './Components/ThumbnailContainer';
import AnimalInfo from './Components/AnimalInfo';
// Begin ** 
const InfoBatch = () =>
{
    return(
            <div className="infobatch">
               <ThumbnailContainer/>
               <AnimalInfo/>
            </div>
    );
}

export default InfoBatch ;

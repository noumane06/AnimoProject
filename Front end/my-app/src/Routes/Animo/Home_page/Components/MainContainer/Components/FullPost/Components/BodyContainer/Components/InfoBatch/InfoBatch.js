// Modules import 

import React from 'react';

// internal files and components 
import ThumbnailContainer from './Components/ThumbnailContainer';
import AnimalInfo from './Components/AnimalInfo';
// Begin ** 
const InfoBatch = ({post}) =>
{
    return(
            <div className="infobatch">
               <ThumbnailContainer post={post}/>
               <AnimalInfo post={post}/>
            </div>
    );
}

export default InfoBatch ;

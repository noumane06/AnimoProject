// Modules import 

import React from 'react';


// internal files and components 
import './CSS/FullPost.scss';
import HeadContainer from './Components/HeadContainer';
import BodyContainer from './Components/BodyContainer/BodyContainer';
import FooterContainer from './Components/FooterContainer/FooterContainer';

// Begin ** 
const FullPost = () =>
{
    return(
            <div className="FullPostContainer">
                <HeadContainer/>
                 <BodyContainer/>
                {/*<FooterContainer/> */}
            </div>
    );
}

export default FullPost ;

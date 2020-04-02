// Modules import 

import React from 'react';
import {inject , observer} from 'mobx-react'; 

// internal files and components 

// Begin ** 
const AnimalInfo  = inject(
    'postsStore'
)(
    observer(
        ({postsStore})=>{
            var post = postsStore.posts[0] ;
            return(
                <div className="AnimalInfo">
                   <h2 className="AnimalInfo_title">Animals Info :</h2>
                   <div className="InfosContainer">
                            test
                   </div>
                </div>
            );
        }
    )
); 

export default AnimalInfo ;

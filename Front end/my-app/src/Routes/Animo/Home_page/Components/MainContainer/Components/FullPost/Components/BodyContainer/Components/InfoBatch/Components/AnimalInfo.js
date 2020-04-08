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
            var animalsInfo = postsStore.posts[0].animalsInfo ;
            return(
                <div className="AnimalInfo">
                   <h2 className="title">Animals Info :</h2>
                   <div className="InfosContainer">
                            <div className="row petName">
                                <div className="Heading">Pet Name </div>
                            <div className="property">{animalsInfo.Name}</div>
                            </div>
                            <hr style={{ border: '0.5px solid #dddddd' }} />
                            <div className="row Age">
                                <div className="Heading">Age </div>
                            <div className="property">{animalsInfo.Age}</div>
                            </div>
                            <hr style={{ border: '0.5px solid #dddddd' }} />
                            <div className="row Species">
                                <div className="Heading">Species</div>
                            <div className="property">{animalsInfo.Species}</div>
                            </div>
                            <hr style={{ border: '0.5px solid #dddddd' }} />
                            <div className="row Race">
                                <div className="Heading">Race </div>
                            <div className="property">{animalsInfo.Race}</div>
                            </div>
                            <hr style={{ border: '0.5px solid #dddddd' }} />
                            <div className="row MedicalHistory">
                                <div className="Heading">Medical History</div>
                            <div className="property">{animalsInfo.Medical_History}</div>
                            </div>

                   </div>
                </div>
            );
        }
    )
); 

export default AnimalInfo ;

// Modules import 

import React, { useState, useEffect } from 'react';
import {inject , observer} from 'mobx-react'; 

// internal files and components 

// Begin ** 
const AnimalInfo  = ({post})=>{
            
            return(
                <div className="AnimalInfo">
                   <h2 className="title">Animals Info :</h2>
                   <div className="InfosContainer">
                            <div className="row petName">
                                <div className="Heading">Pet Name </div>
                            <div className="property">{post.PetName}</div>
                            </div>
                            <hr style={{ border: '0.5px solid #dddddd' }} />
                            <div className="row Age">
                                <div className="Heading">Age </div>
                            <div className="property">{post.Age}</div>
                            </div>
                            <hr style={{ border: '0.5px solid #dddddd' }} />
                            <div className="row Species">
                                <div className="Heading">Species</div>
                            <div className="property">{post.Species}</div>
                            </div>
                            <hr style={{ border: '0.5px solid #dddddd' }} />
                            <div className="row Race">
                                <div className="Heading">Race </div>
                            <div className="property">{post.Race}</div>
                            </div>
                            <hr style={{ border: '0.5px solid #dddddd' }} />
                            <div className="row MedicalHistory">
                                <div className="Heading">Medical History</div>
                            <div className="property">{post.MedicalHistory}</div>
                            </div>

                   </div>
                </div>
            );
}

export default AnimalInfo ;

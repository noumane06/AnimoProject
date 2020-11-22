// Modules import 

import React from 'react'; 

// internal files and components 

// Begin ** 
const AnimalInfo  = ({post})=>{
            
            return(
                <div className="AnimalInfo">
                   <h2 className="title">Animals Info :</h2>
                   <div className="InfosContainer">
                            <div className="row petName">
                                <div className="Heading">Nom d'animal domestique </div>
                            <div className="property">{post.PetName}</div>
                            </div>
                            <hr style={{ border: '0.5px solid rgb(221 221 221 / 25%)' }} />
                            <div className="row Age">
                                <div className="Heading">Âge </div>
                            <div className="property">{post.Age}</div>
                            </div>
                            <hr style={{ border: '0.5px solid rgb(221 221 221 / 25%)' }} />
                            <div className="row Species">
                                <div className="Heading">Espèce</div>
                            <div className="property">{post.Species}</div>
                            </div>
                            <hr style={{ border: '0.5px solid rgb(221 221 221 / 25%)' }} />
                            <div className="row Race">
                                <div className="Heading">Race </div>
                            <div className="property">{post.Race}</div>
                            </div>
                            <hr style={{ border: '0.5px solid rgb(221 221 221 / 25%)' }} />
                            <div className="row MedicalHistory">
                                <div className="Heading">Antécédents médicaux</div>
                            <div className="property">{post.MedicalHistory}</div>
                            </div>

                   </div>
                </div>
            );
}

export default AnimalInfo ;

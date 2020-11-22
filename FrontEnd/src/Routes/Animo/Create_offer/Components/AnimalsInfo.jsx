import React from 'react';
const AnimalsInfo = ({state,handleChange,species})=>
{
    return(
        <div className="row2">
            <fieldset>
                <legend>Informations sur votre animal</legend>
                <div className="line1">
                    <label className="left">Nom d'animal domestique</label>
                    <div className="right">
                        <input name="PetName" className={state.PetNameStatus ? "Select" : "Select invalid"} value={state.data.PetName} type="text" placeholder="Comment appelez-vous votre animal de compagnie?" onChange={handleChange} /><br />
                        {!state.PetNameStatus && (
                            <span className="errorText">
                                <i className="fa fa-exclamation-circle"></i>
                                <span >Entrez le nom de votre animal!</span>
                            </span>
                        )}
                    </div>
                    
                </div>
                <div className="line1">
                    <label className="left">Âge</label>
                    <div className="right">
                        <input name="Age" className={state.AgeStatus ? "Select" : "Select invalid"} value={state.data.Age} type="text" onChange={handleChange} placeholder="L'âge de votre animal" /><br />
                        {!state.AgeStatus && (
                            <span className="errorText">
                                <i className="fa fa-exclamation-circle"></i>
                                <span>Entrez l'âge de votre animal</span>
                            </span>
                        )}
                    </div>
                    
                </div>
                <div className="line1">
                    <label className="left">Espèce</label>
                    <select className="Select right se" name="Species" onChange={handleChange} value={state.data.Species}>
                        {species.map(item => {
                            return (<option value={item} key={item} >{item}</option>)
                        })}
                    </select>
                </div>
                <div className="line1">
                    <label className="left">Race</label>
                    <div className="right">
                        <input name="Race" className={state.RaceStatus ? "Select" : "Select invalid"} value={state.data.Race} type="text" onChange={handleChange} placeholder="Race de votre animal de compagnie"  /><br/>
                        {!state.RaceStatus && (
                            <span className="errorText">
                                <i className="fa fa-exclamation-circle"></i>
                                <span>Entrez la race de votre animal</span>
                            </span>
                        )}
                    </div>
                    
                </div>
                <div className="line1">
                    <label className="left">Antécédents médicaux</label>
                    <textarea name="MedicalHistory" rows="5" value={state.data.MedicalHistory} className="Select right" onChange={handleChange} type="text" placeholder="Laissez vide si vous n'y avez pas accès" style={{ resize: "none" }} />
                </div>
            
            </fieldset>
        </div>
    )
}
export default AnimalsInfo ;
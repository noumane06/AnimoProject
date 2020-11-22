import React from 'react';

const Step2 = ({state,handleChange})=>{
    return(
        <div className="row1">
            {/* Title */}
            <div className="title content-child">
                <label>Titre </label><br />
                <input name="Title" className={state.TitleStatus ? "Select" : "Select invalid"} value={state.data.Title} type="text" maxLength="50" placeholder="Insérez votre titre" onChange={handleChange} /><span style={{fontSize : '12px' , color : "rgb(24 144 255)",fontWeight : "bold"}}>{state.data.Title.length}/50</span><br />
                {!state.TitleStatus && (
                    <span className="errorText">
                        <i className="fa fa-exclamation-circle"></i>
                        <span>Entrez le titre de votre annonce</span>
                    </span>
                )}
            </div>

            {/* Price */}

            {(state.data.PostType === 'Offer' || state.data.PostType === 'Offre' ) && state.data.TransactionType === 'Sell' && (
                <div className="price content-child">
                    <label>Prix </label><br />
                    <input name="Price" className="Select"  value={state.data.Price} type="number" onChange={handleChange} placeholder="Price"  />
                </div>
            )}
            {(state.data.PostType === 'Offer' || state.data.PostType === 'Offre' ) && (state.data.TransactionType === 'Petsit' || state.data.TransactionType === "Garde d'animaux") && (
                <div className="price content-child">
                    <label>Durée </label><br />
                    <input name="Duration" className="Select"  value={state.data.Duration} type="text"  onChange={handleChange} placeholder="Combien de temps prévoyez-vous de laisser votre animal de compagnie?"  />
                </div>
            )}
            <div className="description content-child">
                <label>Description </label><br />
                <textarea name="Describtion" rows="5" value={state.data.Describtion} className={state.DescribtionStatus ? "Select" : "Select invalid"} type="text" placeholder="Décrivez quelles sont vos intentions" onChange={handleChange} style={{ resize: "none" }} maxLength="300"/>
                <span style={{fontSize : '12px' , color : "rgb(24 144 255)",fontWeight : "bold"}}>{state.data.Describtion.length}/300</span>
                <br />
                {!state.DescribtionStatus && (
                    <span className="errorText">
                        <i className="fa fa-exclamation-circle"></i>
                        <span>Vous devez fournir une description</span>
                    </span>
                )}
            </div>
        </div>
    )

       
}
export default Step2 ;
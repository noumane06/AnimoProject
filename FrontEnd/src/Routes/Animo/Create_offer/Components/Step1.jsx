import React from 'react';

const Step1 = ({state , postType , handleChange , transaction , city})=>{
    return(
        <div className="containerOff">
            {/* Post type  */}
            <div className="row1">
                <div className="PostType content-child">
                    <label>Type d'annonce</label><br />
                    <select value={state.data.PostType} className="Select se" name="PostType" onChange={handleChange}>
                        {postType.map(item => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>
                </div>

                {/* Transaction Type */}
                <div className="transaction content-child">
                    <label>Type de transaction </label><br />

                    <select className="Select se" name="TransactionType" value={state.data.TransactionType} onChange={handleChange} >
                        {
                            transaction.map(item => (
                                <option value={item} key={item} >{item}</option>
                            ))
                        }
                        {state.data.PostType === 'Demande' && (

                            <option value="Buy" key="7570" >Acheter</option>

                        )}
                        {(state.data.PostType === 'Offer' || state.data.PostType === 'Offre' ) && (
                            <option value="Sell" key="1524">Vendre</option>
                        )}

                    </select>
                </div>

                {/* city */}
                <div className="city content-child">
                    <label>Ville </label><br />
                    <select className="Select se" name="City" onChange={handleChange} value={state.data.City}>
                        <option value="casablanca">Casablanca</option>
                        <option value="rabat">Rabat</option>
                        <option value="settat">Settat</option>
                        <option value="marrakesh">Marrakesh</option>
                        <option value="tanger">Tanger</option>
                        <option value="agadir">Agadir</option>
                        <option value="fes">Fes</option>
                        <option disabled>──────────────</option>
                        {city.map(item => {
                            return (<option value={item} key={item} >{item}</option>)
                        })}
                    </select>
                </div>
            </div>

            <div className="SectorRow">
                {/* Sector */}
                <div className="sector content-child">
                    <label>Sécteur </label><br />
                    <input className={state.SectorStatus ? "Select" : "Select invalid"} name="Sector" id="sector" type="text" value={state.data.Sector} placeholder="Votre adresse" onChange={handleChange}  /><br/>
                    {!state.SectorStatus && (
                        <span className="errorText">
                            <i className="fa fa-exclamation-circle"></i>
                            Entrez votre sécteur !
                        </span>
                    )}
                </div>
            </div>

        </div>

    )
}
export default Step1 ;
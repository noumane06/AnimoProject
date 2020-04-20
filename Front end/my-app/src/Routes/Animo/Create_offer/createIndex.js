
// Modules import

import React from 'react' ;
import { Steps } from 'antd';

// internal files and components

import DarkHeader from './Components/Dark_header';
import './Css/CreateOffer.scss';
import { Link } from 'react-router-dom';
// *************************************************************

const { Step } = Steps;

const steps = [
    {
        title: 'Essentials'
    },
    {
        title: 'Describe your post'
    },
    {
        title: 'Finishing Up'
    },
];
const city = [];
const postType = ["Demande","Offer"];
const transaction = ["Petsit","Adobt"];
const species = ["freshwater fish", "cats", "dogs", "birds", "hamsters", "Guinea Pigs", "Rabbits", "Chinchillas","horses","reptiles"];
// CreateOffer component *************************
class CreateOffer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                current: 0,
                PostType : 'Demande',
                City : 'Casablanca' ,
                Sector : '' ,
                TransactionType: '',
                Title : '',
                Price : '',
                Duration :'',
                Describtion : '',
                PetName :'',
                Age:'',
                Species:'freshwater fish',
                Race : '',
                MedicalHistory : ''

        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    next() {
        if (this.state.current === 0) {
            var e = document.getElementsByName("TransactionType");
            var s = e[0].selectedIndex;
            this.setState({ TransactionType: e[0].options[s].text}) ;
        }
        const current = this.state.current + 1;
        this.setState({ current });
        
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    } 
    handleChange(event) {
        let { name , value } = event.target;
        this.setState({
                [name] : value 
            });
    }
   
    render() {
        let i = 0 ; 
            const { current } = this.state;
            return (
                <div className="creatOffer">
                    <DarkHeader />
                    <div className="offerContainer">
                        <Steps current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <div className="steps-content">
                            {steps[current].title === 'Essentials' && (
                                <div className="containerOff">
                                    {/* Post type  */}
                                    <div className="row1">
                                        <div className="PostType content-child">
                                            <label>Post Type </label><br />
                                            <select value={this.state.PostType} className="Select se" name="PostType" onChange={this.handleChange}>
                                                {postType.map(item => (
                                                    <option value={item} key={item}>{item}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Transaction Type */}
                                        <div className="transaction content-child">
                                            <label>Transaction Type </label><br />

                                            <select className="Select se" name="TransactionType" value={this.state.TransactionType} onChange={this.handleChange} required>
                                                {this.state.PostType === 'Demande' && (

                                                    <option value="Buy" key="7570" >Buy</option>

                                                )}
                                                {this.state.PostType === 'Offer' && (
                                                    <option value="Sell" key="1524">Sell</option>
                                                )}
                                                {
                                                    transaction.map(item => (
                                                        <option value={item} key={item} >{item}</option>
                                                    ))
                                                }


                                            </select>
                                        </div>

                                        {/* city */}
                                        <div className="city content-child">
                                            <label>City </label><br />
                                            <select className="Select se" name="City" onChange={this.handleChange} value={this.state.City}>
                                                <option value="casablanca">Casablanca</option>
                                                <option value="rabat">Rabat</option>
                                                <option value="settat">Settat</option>
                                                <option value="marrakesh">Marrakesh</option>
                                                <option value="tanger">Tanger</option>
                                                <option value="agadir">Agadir</option>
                                                <option value="fes">Fes</option>
                                                <option disabled>──────────────</option>
                                                {city.map(item => {
                                                    i++;
                                                    return (<option value={item} key={i} >{item}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row2">
                                        {/* Sector */}
                                        <div className="sector content-child">
                                            <label>Sector </label><br />
                                            <input className="Select" name="Sector" type="text" value={this.state.Sector} placeholder="Your adress goes here" onChange={this.handleChange} required />
                                        </div>
                                    </div>

                                </div>


                            )}
                            {steps[current].title === 'Describe your post' && (
                                <div className="containerOff">
                                    <div className="row1">
                                        {/* Title */}
                                        <div className="title content-child">
                                            <label>Title </label><br />
                                            <input name="Title" className="Select" value={this.state.Title} type="text" placeholder="Insert your title" onChange={this.handleChange} required />
                                        </div>

                                        {/* Price */}

                                        {this.state.PostType === 'Offer' && this.state.TransactionType === 'Sell' && (
                                            <div className="price content-child">
                                                <label>Price </label><br />
                                                <input name="Price" className="Select" value={this.state.Price} type="number" onChange={this.handleChange} placeholder="Price" required />
                                            </div>
                                        )}
                                        {this.state.PostType === 'Offer' && this.state.TransactionType === 'Petsit' && (
                                            <div className="price content-child">
                                                <label>Duration </label><br />
                                                <input name="Duration" className="Select" value={this.state.Duration} type="text"  onChange={this.handleChange} placeholder="How long you're planning to leave your pet ?" required />
                                            </div>
                                        )}
                                        <div className="description content-child">
                                            <label>Description </label><br />
                                            <textarea name="Describtion" rows="5" value={this.state.Describtion} className="Select" type="text" placeholder="Describe what your intentions" onChange={this.handleChange} style={{resize : "none"}}/>

                                        </div>
                                    </div>
                                    <div className="row2">
                                        <fieldset>
                                            <legend>Your pet's Info</legend>
                                            <div className="line1">
                                                <label className="left">Pet name</label>
                                                <input name="PetName" className="Select right" value={this.state.PetName} type="text" placeholder="What do you call your pet ?" onChange={this.handleChange} required />
                                            </div>
                                            <div className="line1">
                                                <label className="left">Age</label>
                                                <input name="Age" className="Select right" value={this.state.Age} type="text" placeholder="Your pet age" onChange={this.handleChange} required />
                                            </div>
                                            <div className="line1">
                                                <label className="left">Species</label>
                                                <select className="Select right se" name="Species" onChange={this.handleChange} value={this.state.Species}>
                                                    {species.map(item => {
                                                        i++;
                                                        return (<option value={item} key={i} >{item}</option>)
                                                    })}
                                                </select>
                                            </div>
                                            <div className="line1">
                                                <label className="left">Race</label>
                                                <input name="Race" className="Select right" value={this.state.Race} type="text" onChange={this.handleChange} placeholder="What do you call your pet ?" required />
                                            </div>
                                            <div className="line1">
                                                <label className="left">Medical History</label>
                                                <textarea name="MedicalHistory" rows="5" value={this.state.MedicalHistory} className="Select right" onChange={this.handleChange} type="text" placeholder="Leave empty if you don't have acces to it " style={{ resize: "none" }} />
                                            </div>
                                            
                                 
                                        </fieldset>
                                    </div>
                                    
                            
                                </div>
                            )}
                            {steps[current].title === 'Finishing Up' && (
                                <div>
                                    {steps[current].content}
                                </div>
                            )}
                        </div>
                        <div className="steps-action">

                            {current === 0 && (
                                <Link to="/">
                                    <button className="back">
                                        Cancel
                                    </button>
                                </Link>
                            )}
                            {current > 0 && (
                                <button className="back" onClick={() => this.prev()}>
                                    Back
                                </button>
                            )}


                            {current < steps.length - 1 && (
                                <button type="submit" className="Next" onClick={() => this.next()}>
                                    Next
                                </button>
                            )}
                            {current === steps.length - 1 && (
                                <button className="Next" onClick={() => console.log(this.state)}>
                                    Done
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ); 
    }
}
// end of creatOfferComponent ******************** 
// Splash Component

function Splash(props) {
    return(
        <div className={props.propsclass} style={{opacity : props.opacity}}>
            <svg className="logo-center-xy" viewBox="0 0 631.96 631.96">
                <path d="M1180,648.68C1180,821.89,1037.89,964,863.32,964,690.11,964,548,821.89,548,648.68,548,474.11,690.11,332,863.32,332,1037.89,332,1180,474.11,1180,648.68Zm-158.33,0A157.67,157.67,0,0,0,863.32,490.35c-86.6,0-157,70.37-157,158.33,0,86.6,70.37,157,157,157C951.28,805.65,1021.65,735.28,1021.65,648.68Z" transform="translate(-548.02 -332.02)" style={{ fill: "#f2f2f2" }} />
                <circle cx="95.16" cy="95.16" r="95.16" style={{ fill: "#f2f2f2" }} />
                <circle cx="536.8" cy="95.16" r="95.16" style={{ fill: "#f2f2f2" }} />
            </svg>
        </div>  
    );
}

// end of splaash of Component ******************

// -----------------------------------------------------------------
// Main component to export 

class Offer extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            loading : true ,
            className: "SplashContainer"
        }
    }

    UNSAFE_componentWillMount() {
        (async () => {
            const where = encodeURIComponent(JSON.stringify({
                "country": {
                    "__type": "Pointer",
                    "className": "Continentscountriescities_Country",
                    "objectId": "Smz1hTRSIU"
                }
            }));
            const response = await fetch(
                `https://parseapi.back4app.com/classes/Continentscountriescities_City?count=1&limit=245&order=name&where=${where}`,
                {
                    headers: {
                        'X-Parse-Application-Id': 'OcifqiPUm9SniyL9ZDQ91FWnIx2PRrsWgEeA8xk5', // This is your app's application id
                        'X-Parse-REST-API-Key': '3Umol62oJENk9axhcjbgcDYrfhbLEaLBoCEjMyeO', // This is your app's REST API key
                    }
                }
            );
            const data = await response.json(); // Here you have the data that you need
            data.results.map(item => city.push(item.name));
            this.setState({ className: "SplashContainer trans"});
            setTimeout(() => {
                this.setState({ loading: false });  
            }, 500);
        })();
    }
    render() {
        let theChild = undefined;
        if (!this.state.loading) {
            theChild = <CreateOffer/>
        } else {
            theChild = <Splash  propsclass={this.state.className}/>
        }
        return ( 
            <div>
                {theChild}
            </div>
         );
    }
}
 
// ----------------------------------------------

export default Offer;
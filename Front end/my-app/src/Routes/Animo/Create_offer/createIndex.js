
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
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];
const city = [];
const sector = [];
const postType = ["Demande","offer"];
const demandeTransaction = ["buy","petsit","adobt"];
const offerTransaction = ["sell","petsit","adopt"];
class CreateOffer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            valuePost: 'Demande',
            loading : true 
        };
        this.handleChange = this.handleChange.bind(this);

    }
    UNSAFE_componentWillMount()
    {
        (async () => {
            const where = encodeURIComponent(JSON.stringify({
                "country": {
                    "__type": "Pointer",
                    "className": "Continentscountriescities_Country",
                    "objectId": "Smz1hTRSIU"
                }
            }));
            const response = await fetch(
                `https://parseapi.back4app.com/classes/Continentscountriescities_City?count=1&limit=10&order=name&where=${where}`,
                {
                    headers: {
                        'X-Parse-Application-Id': 'OcifqiPUm9SniyL9ZDQ91FWnIx2PRrsWgEeA8xk5', // This is your app's application id
                        'X-Parse-REST-API-Key': '3Umol62oJENk9axhcjbgcDYrfhbLEaLBoCEjMyeO', // This is your app's REST API key
                    }
                }
            );
            const data = await response.json(); // Here you have the data that you need
            
            data.results.map(item =>city.push(item.name));
            
            this.setState({ loading: false });
        })();
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    } 
    handleChange(event) {
        this.setState({ valuePost : event.target.value });
    }  
    
    render() { 
        if(!this.state.loading)
        {
            const { current } = this.state;
            return (
                <div>
                    <DarkHeader />
                    <div className="offerContainer">
                        <Steps current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <div className="steps-content">
                            {steps[current].title === 'First' && (
                                <div>
                                    {/* Post type  */}
                                    <div className="PostType">
                                        <label>Post Type </label>
                                        <select value={this.state.valuePost} id="PostType" name="PostType" onChange={this.handleChange}>
                                            {postType.map(item => (
                                                <option value={item} key={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Transaction Type */}
                                    <div className="transaction">
                                        <label>Transaction Type </label>
                                        <select id="transaction" name="city">
                                            {this.state.valuePost === 'Demande' && (
                                                demandeTransaction.map(item => (
                                                    <option value={item} key={item} >{item}</option>
                                                ))
                                            )}
                                            {this.state.valuePost === 'offer' && (
                                                offerTransaction.map(item => (
                                                    <option value={item} key={item} >{item}</option>
                                                ))
                                            )}

                                        </select>
                                    </div>

                                    {/* city */}
                                    <div className="city">
                                        <label>City </label>
                                        <select id="city" name="city">
                                            {city.map(item => (
                                                <option value={item} key={item} >{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* Sector */}
                                    <div className="sector">
                                        <label>Sector </label>
                                        <select id="sector" name="sector">
                                            {sector.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>


                            )}
                            {steps[current].title === 'Second' && (
                                <div>
                                    {steps[current].content}
                                </div>
                            )}
                            {steps[current].title === 'Last' && (
                                <div>
                                    {steps[current].content}
                                </div>
                            )}
                        </div>
                        <div className="steps-action">

                            {current === 0 && (
                                <Link to="/">
                                    <button className="back">
                                        Back
                                </button>
                                </Link>
                            )}
                            {current > 0 && (
                                <button className="back" onClick={() => this.prev()}>
                                    Back
                                </button>
                            )}


                            {current < steps.length - 1 && (
                                <button className="Next" onClick={() => this.next()}>
                                    Next
                                </button>
                            )}
                            {current === steps.length - 1 && (
                                <button className="Next" onClick={() => alert('Processing complete!')}>
                                    Done
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            );
        }else
        {
            return(null);
        }
        
    }
}
 
export default CreateOffer;

// Modules import

import React from 'react' ;
import { Steps } from 'antd';
import { storage } from './firebase-config';
import axios from "axios";
import { Spin } from 'antd';
import Error from './Components/ErrorSvg';
import jwt from 'jsonwebtoken';
// internal files and components

import DarkHeader from './Components/Dark_header';
import './Css/CreateOffer.scss';
import { Link } from 'react-router-dom';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Css/upload.scss';

// Preview base64 function 

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
// --------------------------

// Firebase url upload function 

function firebaseUrl(file) {
    return new Promise((resolve,reject)=>{
        let currentImageName = "firebase-image-" + Date.now();
        let uploadImage = storage.ref(`images/${currentImageName}`).put(file);

        uploadImage.on('state_changed',
            (snapshot) => { },
            (error) => {
                reject(error);
            },
            () => {
                storage.ref('images').child(currentImageName).getDownloadURL().then(url => {
                    resolve(url);
                })
            })
    })
}
// -------------------------------------------------------------
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
const species = [ "cats", "dogs", "birds","freshwater fish", "hamsters", "Guinea Pigs", "Rabbits", "Chinchillas","horses","reptiles"];
const usrid = () =>{
    const token = window.localStorage.getItem("Tokens");
    var decoded = jwt.decode(token, "secret", function (userId) {
        console.log(userId);
    })
    return decoded
}


// CreateOffer component *************************
class CreateOffer extends React.Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
        this.state = {
          data: {
            Sector: "",
            UsrId : "",
            Usrimg: "",
            firstname: "",
            lastname: "",
            PostType: "Demande",
            City: "Casablanca",
            TransactionType: "Petsit",
            Title: "",
            Price: "",
            Duration: "",
            Describtion: "",
            PetName: "",
            Age: "",
            Species: "freshwater fish",
            Race: "",
            MedicalHistory: "",
            imageData: []
            
          },
          err : false ,
          postDone : false,
          loading : false ,
          doneStatus : false ,
          current: 0,
          SectorStatus: true,
          TitleStatus: true,
          DescribtionStatus: true,
          PetNameStatus: true,
          AgeStatus: true,
          RaceStatus: true,
          previewVisible: false,
          previewImage: '',
          previewTitle: '',
          fileList: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }
    UNSAFE_componentWillMount() {
        var decoded = usrid();
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                UsrId: decoded.userId,
                Usrimg: decoded.Usrimg,
                firstname: decoded.firstname,
                lastname: decoded.lastname
            }
        }));
        
        
    }
    next() {
        
        let checker = false ;
        if (this.state.current === 0 && this.state.data.Sector ==="") {
            this.setState({
                SectorStatus : false 
            });
           checker = true ;
        }
        if (this.state.current === 1) {
            
            if (this.state.data.Title ==="") {
                this.setState({
                    TitleStatus: false
                });
                
                checker = true ; 
            }
            if (this.state.data.Describtion === "") {
                this.setState({
                    DescribtionStatus: false
                });
                checker = true; 

            }
            if (this.state.data.PetName ==="") {
                this.setState({
                    PetNameStatus: false
                });
                checker = true; 

            }
            if (this.state.data.Age ==="") {
                this.setState({
                    AgeStatus: false
                });
                checker = true; 

            }
            if (this.state.data.Race ==="") {
                this.setState({
                    RaceStatus: false
                });
                checker = true; 
            }
        }
        if (!checker) {
            const current = this.state.current + 1;
            this.setState({ current });
        }
        console.log(this.state);
    }
    
    done = async () => {
        const token = window.localStorage.getItem("Tokens");
        this.setState({loading  : true , doneStatus : true});
        for await (let fileList of this.state.fileList){
            const file = await firebaseUrl(fileList.originFileObj);

            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    imageData: [...prevState.data.imageData, file]
                }
            }));
        }
        axios.post("http://localhost:9000/posts/", this.state.data ,{
            headers: {'Authorization': `Basic ${token}`}
            })
             .then((data) => {
                 console.log(data);
                 this.setState({ postDone: true });
                 setTimeout(() => {
                     window.location.href = "/home";
                 }, 3000);
             })
             .catch((err) => {
                 console.log("error during upload", err);
                 this.setState({ err : true});
             })
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    handleChange(event) {
        let { name , value } = event.target;
        this.setState(prevState => ({
            data : {
                ...prevState.data ,
                [name] : value
            }
        }));
        if (event.target.className === "Select invalid") {
          const test = name + "Status";

          this.setState({
            [test]: true,
          });
        }
    }
     // upload stuff 
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChanges = ({ fileList }) => {
        this.setState({ fileList });
    };

    // tricking the upload that we're using an upload url

    handleaction = ({file , onSuccess}) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    }
    // ----------------------------------------------------------------

    // -----------------------------------------------------------------------
    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        let i = 0 ; 
            const { current } = this.state;
            return (
                
                <div className="creatOffer">
                    <title>Create Your Offer | animo</title>
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
                                            <select value={this.state.data.PostType} className="Select se" name="PostType" onChange={this.handleChange}>
                                                {postType.map(item => (
                                                    <option value={item} key={item}>{item}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Transaction Type */}
                                        <div className="transaction content-child">
                                            <label>Transaction Type </label><br />

                                            <select className="Select se" name="TransactionType" value={this.state.data.TransactionType} onChange={this.handleChange} >
                                                {
                                                    transaction.map(item => (
                                                        <option value={item} key={item} >{item}</option>
                                                    ))
                                                }
                                                {this.state.data.PostType === 'Demande' && (

                                                    <option value="Buy" key="7570" >Buy</option>

                                                )}
                                                {this.state.data.PostType === 'Offer' && (
                                                    <option value="Sell" key="1524">Sell</option>
                                                )}

                                            </select>
                                        </div>

                                        {/* city */}
                                        <div className="city content-child">
                                            <label>City </label><br />
                                            <select className="Select se" name="City" onChange={this.handleChange} value={this.state.data.City}>
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

                                    <div className="SectorRow">
                                        {/* Sector */}
                                        <div className="sector content-child">
                                            <label>Sector </label><br />
                                            <input className={this.state.SectorStatus ? "Select" : "Select invalid"} name="Sector" id="sector" type="text" value={this.state.data.Sector} placeholder="Your adress goes here" onChange={this.handleChange}  /><br/>
                                            {!this.state.SectorStatus && (
                                                <span className="errorText">
                                                    <i className="fa fa-exclamation-circle"></i>
                                                    Enter your sector !
                                                </span>
                                            )}
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
                                            <input name="Title" className={this.state.TitleStatus ? "Select" : "Select invalid"} value={this.state.data.Title} type="text" placeholder="Insert your title" onChange={this.handleChange} /><br />
                                            {!this.state.TitleStatus && (
                                                <span className="errorText">
                                                    <i className="fa fa-exclamation-circle"></i>
                                                    <span>Enter the title of your publication</span>
                                                </span>
                                            )}
                                        </div>

                                        {/* Price */}

                                        {this.state.data.PostType === 'Offer' && this.state.data.TransactionType === 'Sell' && (
                                            <div className="price content-child">
                                                <label>Price </label><br />
                                                <input name="Price" className="Select"  value={this.state.data.Price} type="number" onChange={this.handleChange} placeholder="Price"  />
                                            </div>
                                        )}
                                        {this.state.data.PostType === 'Offer' && this.state.data.TransactionType === 'Petsit' && (
                                            <div className="price content-child">
                                                <label>Duration </label><br />
                                                <input name="Duration" className="Select"  value={this.state.data.Duration} type="text"  onChange={this.handleChange} placeholder="How long you're planning to leave your pet ?"  />
                                            </div>
                                        )}
                                        <div className="description content-child">
                                            <label>Description </label><br />
                                            <textarea name="Describtion" rows="5" value={this.state.data.Describtion} className={this.state.DescribtionStatus ? "Select" : "Select invalid"} type="text" placeholder="Describe what your intentions" onChange={this.handleChange} style={{ resize: "none" }} /><br />
                                            {!this.state.DescribtionStatus && (
                                                <span className="errorText">
                                                    <i className="fa fa-exclamation-circle"></i>
                                                    <span>You must provide a description</span>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row2">
                                        <fieldset>
                                            <legend>Your pet's Info</legend>
                                            <div className="line1">
                                                <label className="left">Pet name</label>
                                                <div className="right">
                                                    <input name="PetName" className={this.state.PetNameStatus ? "Select" : "Select invalid"} value={this.state.data.PetName} type="text" placeholder="What do you call your pet ?" onChange={this.handleChange} /><br />
                                                    {!this.state.PetNameStatus && (
                                                        <span className="errorText">
                                                            <i className="fa fa-exclamation-circle"></i>
                                                            <span >Enter your pet name !</span>
                                                        </span>
                                                    )}
                                                </div>
                                                
                                            </div>
                                            <div className="line1">
                                                <label className="left">Age</label>
                                                <div className="right">
                                                    <input name="Age" className={this.state.AgeStatus ? "Select" : "Select invalid"} value={this.state.data.Age} type="text" onChange={this.handleChange} placeholder="Your pets age" /><br />
                                                    {!this.state.AgeStatus && (
                                                        <span className="errorText">
                                                            <i className="fa fa-exclamation-circle"></i>
                                                            <span>Enter your pet's age</span>
                                                        </span>
                                                    )}
                                                </div>
                                                
                                            </div>
                                            <div className="line1">
                                                <label className="left">Species</label>
                                                <select className="Select right se" name="Species" onChange={this.handleChange} value={this.state.data.Species}>
                                                    {species.map(item => {
                                                        i++;
                                                        return (<option value={item} key={i} >{item}</option>)
                                                    })}
                                                </select>
                                            </div>
                                            <div className="line1">
                                                <label className="left">Race</label>
                                                <div className="right">
                                                    <input name="Race" className={this.state.RaceStatus ? "Select" : "Select invalid"} value={this.state.data.Race} type="text" onChange={this.handleChange} placeholder="What do you call your pet ?"  /><br/>
                                                    {!this.state.RaceStatus && (
                                                        <span className="errorText">
                                                            <i className="fa fa-exclamation-circle"></i>
                                                            <span>Enter your pet's race</span>
                                                        </span>
                                                    )}
                                                </div>
                                                
                                            </div>
                                            <div className="line1">
                                                <label className="left">Medical History</label>
                                                <textarea name="MedicalHistory" rows="5" value={this.state.data.MedicalHistory} className="Select right" onChange={this.handleChange} type="text" placeholder="Leave empty if you don't have acces to it " style={{ resize: "none" }} />
                                            </div>
                                        
                                        </fieldset>
                                    </div>
                                    
                            
                                </div>
                            )}
                            {steps[current].title === 'Finishing Up' && !this.state.loading && !this.state.err &&  (
                                
                                <div className="ImgStep">
                                    <h2>Upload Your Images</h2>
                                    <p>(6 Pictures max)</p>
                                    <div className="clearfix">
                                        <Upload
                                            customRequest = {this.handleaction}
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={this.handlePreview}
                                            onChange={this.handleChanges}
                                            multiple = {true}
                                            accept="image/*"
                                        >
                                            {fileList.length >= 6 ? null : uploadButton}
                                        </Upload>
                                        <Modal
                                            visible={previewVisible}
                                            title={previewTitle}
                                            footer={null}
                                            onCancel={this.handleCancel}
                                        >
                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                        </Modal>
                                    </div>
                                    
                                </div>
                            )}
                            {steps[current].title === 'Finishing Up' && this.state.loading && (
                                    <div>
                                    {this.state.postDone && !this.state.err && (
                                        <div className="Loading">
                                        <h2>Post created successfully</h2>
                                        <h3>You'll be redirected to the home page soon .</h3>
                                        <svg className="Spin" viewBox="0 0 367.805 367.805" height="60px" width="60px">
                                            <g>
                                                <path style={{ fill: "#3BB54A" }} d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902   S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z" />
                                                <polygon style={{ fill: "#fafafa" }} points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801    256.001,103.968  " />
                                            </g>

                                        </svg>
                                        </div>
                                        
                                    )}
                                    {!this.state.postDone && !this.state.err &&(
                                        <div className="Loading">
                                            <h2>Uploading ...</h2>
                                            <Spin className="Spin" size="large" />
                                        </div>
                                    )}
                                    {!this.state.postDone && this.state.err && (
                                        <div className="Loading">
                                            <h2 style={{ color: "#f46275"}}>An error occured durring upload.</h2>
                                            <h3 style={{ color: "#f46275" }}>Please Try again Later</h3>
                                            <Error/><br/><br/>
                                            <a className="Retry" href="/home">Go back home</a>
                                        </div>
                                    )}
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
                            {current === steps.length - 1  && (
                                <button className="Next" disabled={this.state.fileList.length === 0 || this.state.doneStatus ? true : false} onClick={() => this.done()}>
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
            <title>Create Your Offer | animo</title>
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


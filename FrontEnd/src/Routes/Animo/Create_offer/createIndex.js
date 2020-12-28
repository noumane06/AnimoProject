
// Components ------------------------
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import AnimalsInfo from './Components/AnimalsInfo';
import postsStore from '../../../Stores/ModelStore'
import Post from '../Home_page/Components/MainContainer/Components/PostContainer/Components/post';
import Error from './Components/ErrorSvg';
import Cities from './Data/Cities';
import DarkHeader from './Components/Dark_header';
import { storage } from './firebase-config';
// ----------------------------------------------

// Modules import

import React from 'react' ;
import { Steps } from 'antd';
import { Provider } from 'mobx-react';
import axios from "axios";
import { Spin } from 'antd';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


// Css files
import './Css/CreateOffer.scss';
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
                    const data = [url, currentImageName]
                    resolve(data);
                })
            })
    })
}
// -------------------------------------------------------------
// *************************************************************

const { Step } = Steps;

const steps = [
    {
        id : 1 ,
        title: 'Essentielles'
    },
    { 
        id : 2 ,
        title: 'Décrivez votre annonce'
    },
    {
        id : 3 ,
        title: 'Dernières touches'
    },
];
const postType = ["Demande","Offre"];
const transaction = ["Garde d'animaux","Adoption"];
const species = [ "Chats", "Chiens", "Oiseaux","Poisson d'eau douce", "Hamsters", "Lapins", "Chinchillas","Les chevaux","reptiles"];



// CreateOffer component *************************
class CreateOffer extends React.Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
        this.state = {
          data: {
            Sector: "",
            UsrId : "",
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
            imageData: [],
            ImageName : []
            
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
        postsStore.storingtoStores();
    }
    next() {
        
        console.log(this.state.data);
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
            if (this.state.data.PostType === 'Offer' || this.state.data.PostType === 'Offre') {
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
            
        }
        if (!checker) {
            const current = this.state.current + 1;
            this.setState({ current });
        }
    }
    
    done = async () => {
        this.setState({loading  : true , doneStatus : true});
        if (this.state.data.PostType === 'Offer' || this.state.data.PostType === 'Offre' ) {
            
            for await (let fileList of this.state.fileList){
                var file = [];
                file = await firebaseUrl(fileList.originFileObj);

                this.setState(prevState => ({
                    data: {
                        ...prevState.data,
                        imageData: [...prevState.data.imageData, file[0]],
                        ImageName: [...prevState.data.ImageName, file[1]]
                    }
                }));
            }
        }
        
        axios.post("/posts/", this.state.data ,{withCredentials : true})
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
                <div className="ant-upload-text">Télécharger</div>
            </div>
        );
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

                        {/* Step one ------------------------------ */}
                        {/* --------------------------------------- */}

                            {steps[current].id === 1 && (
                                <Step1 state={this.state} postType={postType} handleChange={this.handleChange} transaction={transaction} city={Cities}    />

                            )}

                        {/* Step two ------------------------------- */}
                        {/* ---------------------------------------- */}

                            {steps[current].id === 2  && (
                                <div className="containerOff">
                                    <Step2 state={this.state} handleChange={this.handleChange}/>
                                    
                                    {(this.state.data.PostType === 'Offer' || this.state.data.PostType === 'Offre' ) && (
                                        <AnimalsInfo state={this.state} handleChange={this.handleChange} species={species} />
                                    )}
                            
                                </div>
                                
                            )}

                        {/* Step three ----------------------------- */}
                        {/* ---------------------------------------- */}

                            {steps[current].id === 3  && !this.state.loading && !this.state.err && (
                                <>
                                {(this.state.data.PostType === 'Offer' || this.state.data.PostType === 'Offre' ) && (
                                
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
                                {this.state.data.PostType === 'Demande' && (
                                
                                    <div className="PreviewPost">
                                        <Provider postsStore={postsStore} >
                                            <h1>Aperçu de l'annonce</h1>
                                            <Post  post={this.state.data} apercu={true} userId={this.props.userId}/>   
                                        </Provider>
                                    </div>
                                )}
                                </>
                            )}
                            {steps[current].id === 3  && this.state.loading && (
                                    <div>
                                        {/* Success ----------------------------- */}
                                        {/* ---------------------------------------- */}

                                        {this.state.postDone && !this.state.err && (
                                            <div className="Loading">
                                            <h2>Annonce créée avec succès</h2>
                                            <h3>Vous serez bientôt redirigé vers la page d'accueil.</h3>
                                            <svg className="Spin" viewBox="0 0 367.805 367.805" height="60px" width="60px">
                                                <g>
                                                    <path style={{ fill: "#3BB54A" }} d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902   S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z" />
                                                    <polygon style={{ fill: "#fafafa" }} points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801    256.001,103.968  " />
                                                </g>

                                            </svg>
                                            </div>
                                            
                                        )}
                                        {/* Loading ----------------------------- */}
                                        {/* ---------------------------------------- */}

                                        {(!this.state.postDone && !this.state.err) &&(
                                            <div className="Loading">
                                                <h2>Chargement ...</h2>
                                                <Spin className="Spin" size="large" />
                                            </div>
                                        )}
                                        {/* Error ----------------------------- */}
                                        {/* ---------------------------------------- */}

                                        {!this.state.postDone && this.state.err && (
                                            <div className="Loading">
                                                <h2 style={{ color: "#f46275"}}>Une erreur s'est produite lors du téléchargement.</h2>
                                                <h3 style={{ color: "#f46275" }}>Veuillez réessayer plus tard</h3>
                                                <Error/><br/><br/>
                                                <a className="Retry" href="/home">Aller à la page d'accueil</a>
                                            </div>
                                        )}
                                </div>
                            )}
                        </div>
                        <div className="steps-action">

                            {current === 0 && (
                                    <button className="back" onClick={()=> window.location.assign("/home")}>
                                    Annuler
                                    </button>
                            )}
                            {current > 0 && (
                                
                                <button className="back" onClick={() => this.prev()}>
                                Retour
                                </button>
                            )}


                            {current < steps.length - 1 &&(
                                <button type="submit" className="Next" onClick={() => this.next()}>
                                Suivant
                                </button>
                            )}
                            
                            {current === steps.length - 1  && (this.state.data.PostType === 'Offer' || this.state.data.PostType === 'Offre' ) && (
                                <button className="Next" disabled={this.state.fileList.length === 0 || this.state.doneStatus ? true : false} onClick={() => this.done()}>
                                    Terminé
                                </button>
                            )}
                            {current === steps.length - 1  && this.state.data.PostType === 'Demande' && (
                                <button className="Next" disabled={this.state.doneStatus ? true : false} onClick={() => this.done()}>
                                    Terminé
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

// end of splaash of Component ******************

// -----------------------------------------------------------------
// Main component to export 

const Offer = ({userId})=>{
    let theChild = <CreateOffer userId={userId}/>
    return ( 
        <div>
            <title>Créez votre offre | animo</title>
            {theChild}
        </div>
     );
}
// ----------------------------------------------

export default Offer;


// Modules import 

import React, { useEffect, useState} from 'react';
import { Carousel } from 'antd';

// internal files and components 
import '../../../CSS/carousel.scss'
import { disableBodyScroll , clearAllBodyScrollLocks } from 'body-scroll-lock';
// Begin ** 

const ThumbnailContainer = (props)=>{
    const [test,setTest]= useState(false);
    const [PostType , setPostType] = useState("");
    const [img,setImg] = useState("");
    const handleClick = (event)=>{
        window.scrollTo(0, 0);
        const img = event.target.src ;
        if (img !== undefined) {
            setImg(img);
        }
        setTest(!test);
    }
    useEffect(()=>{
        const post = props.post ;
        if (post.TransactionType === "Petsit") {
            const string = ( post.PostType === "Offer" || post.PostType === "Offre" ) ? "Offre de garde d'animaux " : "Demande de garde d'animaux"
            setPostType(string)
        }
        if (post.TransactionType === "Adobt" || post.TransactionType === "Adoption") {
            const string = ( post.PostType === "Offer" || post.PostType === "Offre" ) ? "Offre d'adoption " : "Demande d'adoption"
            setPostType(string)
        }
        if (post.TransactionType === "Sell") {
            setPostType( "Offre de vente");
        }
        if (post.TransactionType === "Buy") {
            setPostType( "Demande d'achat");
        }
    },[]);
    return(
        <div>
                        {clearAllBodyScrollLocks()}
                       {test && (
                        <div className="ImagePreview">
                            <svg viewBox="0 0 24 24" height="20px" width="20px" className="Close" onClick={handleClick}>
                                <g>
                                    <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z">
                                    </path>
                                </g>
                            </svg>
                            <div className="imageContainer">
                            
                            {props.post.imageData !== undefined && (
                                <img src={img} alt="puppies" width="100%" key={img} className="img" />
                            )}
                            </div>
                            {disableBodyScroll()}
                        </div> )}
                    <div className="ThumbnailContainer">
                    <h1 className="Post_type">{PostType}</h1> 
                     
                         {props.post.imageData !== undefined && ( props.post.PostType === "Offer" || props.post.PostType === "Offre" ) &&(
                            <Carousel  effect="scrollx" >
                                {
                                    props.post.imageData.map((img)=>(  
                                        <img
                                        src={img}
                                        className="img"
                                        onClick={handleClick}
                                    />   
                                    ))
                                }
                            </Carousel>
                             
                        )}
                    
                    </div>
                    
                </div>
    )
}
export default ThumbnailContainer ;

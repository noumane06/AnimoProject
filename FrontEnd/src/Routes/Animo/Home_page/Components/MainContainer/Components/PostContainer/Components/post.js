// Modules import 

import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';  
import  {Link} from 'react-router-dom'; 
import { observer, inject } from 'mobx-react'; 
import moment from 'moment';

// internal files and componenets 
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ProgressiveImage from '../../ProgressiveImage/Progressive';

const Post = inject(
    'postsStore'
)(
    observer(({ postsStore , post }) => {

        
        const [PostType, setPostType] = useState("");
        const [isFull , setFulltext] = useState(post.Describtion.length < 150);
        let value ="";
        if (post.Describtion.length > 150) {
            value = "...en voir plus" ;
        }
        useEffect(()=>{
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
        var date = Date.now();
        if (post.publishDate !== undefined) {
            date = new Date(post.publishDate);  
        }
        
        const stringDate = moment(date).format("HH:mm");
        const imgname = post.ImageName[0];
        let test = null;
        let token = null;
        if ( post.PostType === "Offer" || post.PostType === "Offre" ) {
           test = post.imageData[0].split("/"); 
           token = test[7].split("&");
        }
                     return (
                 <div  className="LinkContainer">
                    <div className="Post" > 
                         
                            <div className="Profile">
                                <span className="dot">
                                     <img src={post.Usrimg} alt="profile"  className="prof" />
                                </span>
                                 <div className="name">{post.firstname} {post.lastname}</div>
                                 <div className="post_time">
                                     <i className="fas fa-clock" style={{ marginRight: '3px' }}></i>
                                     {stringDate}</div>
                            </div>
                        
                        
                        <hr style={{border : '0.5px solid rgb(221 221 221 / 35%)' }}/>
                        {( post.PostType === "Offer" || post.PostType === "Offre" ) && (
                            <div className="Thumbnail_container">
                                    <ProgressiveImage className="Thumbnail_img" alt="puppies" width="100%" 
                                     overlaySrc={`https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2Fthumbs%2F${imgname}_50x50?alt=media&${token[1]}`}
                                     src={post.imageData[0]}
                                     />
                                   
                            </div>
                        )}
                            
                            <h2>{post.Title.charAt(0).toUpperCase() + post.Title.slice(1)}</h2>
                            <div className="infos">
                                 <div className="description">
                                    {!isFull ? post.Describtion.substr(0, 150) : post.Describtion}
                                    {!isFull ? (<span className="more" onClick={()=>setFulltext(true)}> <i>Voir plus</i></span>):""}
                                 </div>
                                 <br/>

                                <div className="Interaction_user">
                                    <div className="likes">
                                    <i
                                        className="fas fa-heart"
                                        style={{ margin: " 0 6px 0 0" }}
                                    ></i>
                                    200 J'aime
                                    </div>
                                    {post._id === undefined &&(
                                        <span className="button">Voir l'annonce</span>
                                    )}
                                    {post._id !== undefined &&(
                                        <Link className="button" to={`/home/${post._id}`}>Voir l'annonce</Link>
                                    )}
                                </div>
                                <hr style={{border : '0.5px solid rgb(221 221 221 / 35%)' }}/>
                            </div>
                            
                            <div className="price_infos">
                                {post.TransactionType === "Petsit" &&(
                                    <div className="status_type petsit">{PostType}</div>
                                )}
                                {(post.TransactionType === "Adobt" || post.TransactionType === "Adoption") &&(
                                    <div className="status_type adoption">{PostType}</div>
                                )}
                                {post.TransactionType === "Sell" &&(
                                    <div className="status_type buysell">{PostType}</div>
                                )}
                                {post.TransactionType === "Buy" &&(
                                    <div className="status_type buysell">{PostType}</div>
                                )}
                                {( post.PostType === "Offer" || post.PostType === "Offre" ) && post.TransactionType == "Sell" && (
                                <div className="price">
                                    {post.Price} Dh 
                                </div>  
                                )}

                                {( post.PostType === "Offer" || post.PostType === "Offre" ) && post.TransactionType == "Petsit" && (
                                <div className="price">
                                    {post.Duration}
                                </div>  
                                )}
                            
                            </div>
                        
                    </div>
                 </div> 
                
         );
}))
 
export default Post;    
// Modules import 

import React from 'react';
import {useState } from 'react';
import Likebutton from './LikeButtons';
import axios from 'axios';
// internal files and components 

// Begin ** 
const Description = ({post , userId}) => {

            const [checkbox,setCheck] = useState(post!==undefined ? post.likes.includes(userId) : false);
            var likes = post!==undefined ? post.likes : [""] ;
            const handleLike = async ()=>{
                
                if (!checkbox) {
                   await likes.push(userId);
                }else
                {
                   await likes.splice(likes.indexOf(userId),1);
                }
                setCheck(!checkbox);
                const Url = '/posts/likes?postid='+post._id;
                axios.post(Url,{"likes":likes,"NotificationType":'Like'},{withCredentials : true})
                .then(res=>{})
                .catch(err => alert(err));
            }

            //console.log(post);
            return (    
             
                <div className="FooterContainer">
                    <div className="Interaction_buttons">
                        <div className="Save">
                            <Likebutton checkbox={checkbox} handleLike={handleLike} /><label htmlFor="checkbox" className={checkbox ? "active" : ""} style={{paddingBottom : "2px"}}>{post.likes.length - 1}</label>
                        </div>
                        <div className="Share">
                            <svg className="bookmark_Icon" viewBox="0 0 512 512" width="15px" height="15px">
                                <g>
                                    <path d="m 507.523 148.91 l -138.668 -144 c -4.52344 -4.71484 -11.457 -6.18359 -17.4922 -3.75391 c -6.05859 2.45313 -10.0273 8.32031 -10.0273 14.8477 v 69.3359 h -5.33203 c -114.688 0 -208 93.3125 -208 208 v 32 c 0 7.42188 5.22656 13.6094 12.457 15.293 c 1.17187 0.277344 2.34766 0.429688 3.51953 0.429688 c 6.05859 0 11.8398 -3.54297 14.6133 -9.08984 c 29.9961 -60.0117 90.3047 -97.3008 157.398 -97.3008 h 25.3438 v 69.332 c 0 6.52734 3.96875 12.3945 10.0273 14.8477 c 5.99219 2.41406 12.9688 0.960938 17.4922 -3.75391 l 138.668 -144 c 5.97266 -6.1875 5.97266 -16 0 -22.1875 Z m 0 0" fill="#2196f3">
                                    </path>
                                    <path d="m 448.004 512.004 h -384 c -35.2852 0 -64 -28.7148 -64 -64 v -298.664 c 0 -35.2852 28.7148 -64 64 -64 h 64 c 11.7969 0 21.332 9.55469 21.332 21.332 s -9.53516 21.332 -21.332 21.332 h -64 c -11.7773 0 -21.3359 9.57813 -21.3359 21.3359 v 298.664 c 0 11.7539 9.55859 21.3359 21.3359 21.3359 h 384 c 11.7734 0 21.332 -9.58203 21.332 -21.3359 v -170.664 c 0 -11.7773 9.53516 -21.3359 21.332 -21.3359 s 21.3359 9.55859 21.3359 21.3359 v 170.664 c 0 35.2852 -28.7148 64 -64 64 Z m 0 0" fill="#607d8b">
                                    </path>
                                </g>
                            </svg>
                            <label className="shareText">Partager</label>
                            </div>
                    </div>
                    <div className="right">
                        {( post.PostType === "Offer" || post.PostType === "Offre" ) && post.TransactionType === "Sell" && (
                          <div className="Price_tag">
                            {post.Price} Dh 
                          </div>  
                        )}

                        {( post.PostType === "Offer" || post.PostType === "Offre" ) && post.TransactionType === "Petsit" && (
                          <div className="Petsit_Tag">
                            {post.Duration}
                          </div>  
                        )}
                        
                    </div>
                    
                </div>
                
            );
        }

export default Description;

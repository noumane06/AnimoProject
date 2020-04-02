// Modules import 

import React from 'react';
import {inject , observer} from 'mobx-react'; 

// internal files and components 

// Begin ** 
const HeadContainer  = inject(
    'postsStore'
)(
    observer(
        ({postsStore})=>{
            var post = postsStore.posts[0] ;
            return(
                <div className="HeadContainer">
                    <div className="Profile">
                                <span className="dot">
                                    <img src={post.usrImg} alt="profile"  className="prof" />
                                </span>
                                <div className="usrInfo">
                                    <div className="name">{post.usrPost}</div>
                                    <div className="post_time">17 min ago.</div>
                                </div>
                                
                    </div>
                    <div className="PhoneNumber">
                        <svg  viewBox="0 0 164.58 169.3" width="20px" height="20px" className="phone_ico">
                            <g>
                                <g>
                                    <path d="M142.4,22.18A75.24,75.24,0,0,0,88.85,0a6,6,0,0,0,0,12,63.73,63.73,0,0,1,63.73,63.72,6,6,0,0,0,12,0A75.24,75.24,0,0,0,142.4,22.18Z" style={{'fill':'#fff'}}/>
                                    <path d="M117.72,75.73a6,6,0,0,0,12,0A40.93,40.93,0,0,0,88.85,34.86a6,6,0,0,0,0,12,28.91,28.91,0,0,1,28.87,28.87Z" style={{'fill':'#fff'}}/>
                                    <path d="M104.44,106.32c-9.14-.48-13.8,6.32-16,9.59a6,6,0,1,0,9.9,6.78c2.64-3.86,3.84-4.47,5.47-4.39,5.19.61,25.64,15.6,27.69,20.28a6.24,6.24,0,0,1-.06,4.38c-2.15,6.37-5.7,10.85-10.28,12.95-4.35,2-9.68,1.81-15.42-.52a169.63,169.63,0,0,1-55.63-36.22l0,0A169.51,169.51,0,0,1,13.91,63.6c-2.34-5.74-2.52-11.08-.52-15.42C15.48,43.6,20,40,26.33,37.9a6.1,6.1,0,0,1,4.37-.06c4.7,2,19.69,22.5,20.3,27.64.08,1.68-.53,2.88-4.39,5.51a6,6,0,1,0,6.77,9.91C56.65,78.66,63.45,74,63,64.84c-.52-9.58-19.17-35-28.08-38.25a18.17,18.17,0,0,0-12.39-.07c-9.59,3.23-16.52,9-20,16.66-3.41,7.43-3.3,16.06.31,24.95a181.63,181.63,0,0,0,38.8,59.53l.12.12a181.39,181.39,0,0,0,59.46,38.72,35.67,35.67,0,0,0,13.4,2.8,27.53,27.53,0,0,0,11.55-2.48c7.66-3.51,13.42-10.44,16.65-20a18.09,18.09,0,0,0-.06-12.36c-3.28-8.94-28.67-27.58-38.27-28.1Z" style={{'fill':'#fff'}}/>
                                </g>
                            </g>
                        </svg>
                        <span className="phone_text">Show phone number</span>
                    </div> 
                </div>
            );
        }
    )
); 

export default HeadContainer ;

// Modules import 

import React from 'react';


// internal files and components 

// Begin ** 
const HeadContainer  = ({post , likes})=>
        {
            
            var date = "";
            var h ="";
            var m ="";
            if (post !== undefined) {
                date = new Date(post.publishDate);
                h = date.getHours();
                m = date.getMinutes()
            }
            
            
            return (
              <>
              {post !==undefined&&(
                <div className="HeadContainer">
                <div className="Profile">
                  <span className="dot">
                    <img src={post.Usrimg} alt="profile" className="prof" />
                  </span>
                  <div className="usrInfo">
                    <div className="name">
                      {post.firstname} {post.lastname} · <span style={{fontWeight : 'normal',fontSize:'14px', color:'#707070'}}>{h}:{m < 10 ? "0" : ""}{m}</span>
                    </div>

                    <div className="post_time">
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ margin: " 0 6px 0 0" }}
                      ></i>
                      {post.City} | {post.Sector}
                    </div>
                    
                  </div>
                </div>
                <div className="PhoneNumber">
                  <svg
                    viewBox="0 0 513.64 513.64"
                    width="20px"
                    height="20px"
                    className="phone_ico"
                  >
                    <g>
                      <g>
                        <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" style={{'fill':'#457b9d'}} />
                      </g>
                    </g>
                  </svg>
                  <span className="phone_text">0632126386</span>
                </div>
              </div>
              )}
              </>
            );
}

export default HeadContainer ;

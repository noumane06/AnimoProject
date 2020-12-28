// Modules import 

import React , {useEffect , useState} from 'react';
import axios from 'axios';
import moment from "moment";
// internal files and components 

// Begin ** 
const HeadContainer  = ({post})=>
        {
          const [Loading  , setLoad] = useState(false);
          const [usrInfo, setUserInfo] = useState({});
          const [imgLoading, setImgLoading] = useState(true);
          useEffect(()=>{
            var Url = "/users/userid="+post.UsrId;
            axios.get(Url, { withCredentials: true })
              .then((res) => {
                console.log(res);
                setLoad(false);
                setUserInfo(res.data.result);
              })
              .catch((err) => console.log(err));
            
          },[])
          const handleLoading = () => {
            setImgLoading(false);
          };
          const date = new Date(post.publishDate);
          const stringDate = moment(date).format("HH:mm");
            return (
              <>
              {post !==undefined && !Loading &&(
                <div className="HeadContainer">
                <div className="Profile">
                  <span className={imgLoading ? "dot circle" : "dot"}>
                    <img
                      src={usrInfo.img}
                      alt="profile"
                      className={imgLoading ? "prof hide" : "prof"}
                      onLoad={handleLoading}
                    />
                  </span>
                  <div className="usrInfo">
                    <div >
                      <span className="name">{usrInfo.firstname} {usrInfo.lastname}</span> · <span style={{fontWeight : 'normal',fontSize:'14px', color:'#707070'}}>{stringDate}</span>
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
                  <span className="phone_text"><a href={`tel:${usrInfo.phone}`}>0{usrInfo.phone}</a></span>
                </div>
              </div>
              )}
              </>
            );
}

export default HeadContainer ;

import React , {useEffect , useState} from 'react';
import axios from "axios";

const Prof = ()=>{
        
            const [usrInfo , setUserInfo] = useState({});
            const [imgLoading , setImgLoading] = useState(true);
            
            useEffect(()=>{
                const Url = "/users/Myprofile";
                axios.get(Url,{withCredentials : true}).then(res=>{
                    setUserInfo(res.data.result);
                }).catch(err=>console.log(err));
            },[])
            const handleLoading = ()=>{
                setImgLoading(false)
            }
             return ( 
            
                <div className="Navlink">
                <div className="icon_container">
                    <img 
                        src={usrInfo.img}
                        className="prof_icon"
                        width="25"
                        style={imgLoading ?{display : "none"} : {}}
                        alt="profile"
                        height="25px" viewBox="0 0 20 24" 
                        onLoad={handleLoading}
                        />
                    <div className="prof_icon" style={imgLoading ?{width : 25 , height : 25 , backgroundColor : "grey"} : {display : "none"}}></div>
                </div>

                <div className="legend">
                    <span>Profile</span>
                </div>
            </div>
         );
       
}

export default Prof;    
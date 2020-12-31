import React , {useEffect , useState} from 'react';
import {ReactComponent as HeartIcon} from './svgs/heart.svg';
import {ReactComponent as ShareIcon} from './svgs/share.svg'; 
import axios from 'axios';
import moment from 'moment';
import Lottie from "react-lottie";
import animationData from "../../../Home_page/Components/MainContainer/animation.json";

const NotificationCard = ({data}) => {

    const [usrInfo , setusrInfo] = useState();
    const [postInfo , setpostInfo] = useState();
    const [postImgLoading , setpostImgLoad] = useState(true);
    const [usrImgLoading , setusrImgLoad] = useState(true);
    const [loading , setLoading] = useState(true);
    moment.locale('fr');


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid",
        },
    };

    useEffect(()=>{
      axios.get(`/users/userId=${data.usrId}`,{withCredentials : true})
      .then((res)=>{
        console.log(res.data.result);
        setusrInfo(res.data.result);
          axios.get(`/posts/productId=${data.postId}`,{withCredentials : true})
          .then(res => {
              setpostInfo(res.data);
              console.log(res.data);
              setLoading(false);
          }).catch(err => console.log(err));
        ;
      })
      .catch(err =>{console.log(err)})
    },[]);
    
    const handleUsrImgLoad = ()=>{
      setusrImgLoad(false)
    }
    const handlePostImgLoad = ()=>{
      setpostImgLoad(false);
    }
    return (
      <div className="NotificationCard">
      {loading && (
                    <div className="Loader_Container">
                    <Lottie options={defaultOptions} height={60} width={60} />
                    </div>
      )}

      {!loading &&(
            <>
            {data.Type === "Like" &&(
              <div className="LikeStatus status">
              <HeartIcon className="icon" />
                {moment(data.date).fromNow()}
              </div>
            )}
            {data.Type === "Share" &&(
              <div className="ShareStatus status">
              <ShareIcon className="icon" />
              il y a 2 heures
              </div>
            )}
          
            <div className="title">
                    <img
                    src={usrInfo.img}
                    width="30px"
                    height="30px"
                    className="ThumbImg"
                    style={usrImgLoading ?{display : "none"} : {}}
                    onLoad={handleUsrImgLoad}
                    style={{borderRadius : '50%',marginRight : '10px'}}
                    />  
                <strong className="Name">{usrInfo.firstname} {usrInfo.lastname}</strong> a aime votre annonce
            </div>
            <div className="body" onClick={()=> window.location.assign(`/home/${data.postId}`)}>
              {postInfo.imageData.length !== 0 && (
                  <div className="imgs">
                    <img
                    src={postInfo.imageData[0]}
                    width="78px"
                    height="70px"
                    style={postImgLoading ?{display : "none"} : {}}
                    onLoad={handlePostImgLoad}
                    className="ThumbImg"
                    />
                  </div>
              )}
              <div className="PostInfos">
                <span>{postInfo.Title}</span>
                <p>{postInfo.Describtion}</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
}
 
export default NotificationCard;
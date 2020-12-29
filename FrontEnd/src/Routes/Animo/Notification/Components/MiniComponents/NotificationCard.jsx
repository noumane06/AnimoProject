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
        setLoading(false);
      })
      .catch(err =>{console.log(err)})
    },[]);
    moment.locale('fr');
    const imgStatus = true ;

    const handleLoading = ()=>{
      setusrImgLoad(false)
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
                    onLoad={handleLoading}
                    style={{borderRadius : '50%',marginRight : '10px'}}
                    />
                <strong className="Name">{usrInfo.firstname} {usrInfo.lastname}</strong> a aime votre annonce
            </div>
            <div className="body">
              {imgStatus && (
                  <div className="imgs">
                    <img
                    src="https://pbs.twimg.com/media/EqTXJUmXYAE_2iP?format=jpg&name=small"
                    width="78px"
                    height="70px"
                    className="ThumbImg"
                    />
                  </div>
              )}
              <div className="PostInfos">
                <span>Title</span>
                <p>
                    Dum apud Persas, ut supra narravimus, perfidia regis motus agitat insperatos,
                    et in eois tractibus bella rediviva consurgunt...
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    );
}
 
export default NotificationCard;
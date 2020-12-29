// Dependencies *********************
import React , {useEffect,useState} from 'react';

// internal files and components
import './scss/notification.scss';
import Header from '../Components/Header/Header';
import axios from 'axios';
import MightLike from './Components/MightLike';
import NotificationsContainer from './Components/NotificationsContainer';
import postsStore from '../../../Stores/ModelStore';
import { Provider } from 'mobx-react';
import Lottie from "react-lottie";
import animationData from "../Home_page/Components/MainContainer/animation.json";

const Notification = ()=> {
    const [Notifications , setNotif] = useState();
    const [empty , setEmpty] = useState(true);
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
        axios.get('/users/Notifications',{withCredentials : true})
        .then((res)=>{
            console.log(res.data.result);
            setNotif(res.data.result.Notifications);
            if (res.data.result.Notifications.length !== 0 ) {
                setEmpty(false);
            }
            setLoading(false);
        })
        .catch(err => console.log(err));
    },[])

    const str="Notifications";
     return ( 
        <div  className="Content" >
            <Provider postsStore={postsStore}>
                <Header Title={str}/>
                <title>Notifications | animo</title>
                {loading && (
                    <div className="Loader_Container">
                    <Lottie options={defaultOptions} height={60} width={60} />
                    </div>
                )}
                {!loading &&(
                    <div className="NotifRouteContainer" style={empty ? {justifyContent : 'center'} : null}>
                        {empty &&(
                            <div className="NoNotif">
                            <img src={require('./images/BoxImage.png')} width="200px" /><br/><br/>
                            <span>Nothing to see here — yet</span>
                            <p>From likes to Shares and a whole lot more, this is where all the action happens.</p>
                            </div>
                        )}  
                        {!empty && (
                            <>
                                <NotificationsContainer Notifications={Notifications} />
                                <MightLike />
                            </>
                        )}
                    </div>
                )}
                
            </Provider>
                
        </div>
         
    );
 
}
 
export default Notification;    
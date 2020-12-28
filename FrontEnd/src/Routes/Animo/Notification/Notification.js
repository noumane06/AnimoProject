// Dependencies *********************
import React from 'react';

// internal files and components
import './scss/notification.scss';
import Header from '../Components/Header/Header';
import postsStore from '../../../Stores/ModelStore';
import { Provider } from 'mobx-react';
import MightLike from './Components/MightLike';
import NotificationsContainer from './Components/NotificationsContainer';
class Notification extends React.Component {
    
    render() 
        {
            const str="Notifications"
             return ( 
                <div  className="Content" >
                    <Provider postsStore={postsStore}>
                        <Header Title={str}/>
                        <title>Notifications | animo</title>
                        <div className="NotifRouteContainer">
                            <NotificationsContainer/>
                            <MightLike />
                        </div>
                    </Provider>
                </div>
                 
         );
        }
 
}
 
export default Notification;    
import NotificationCard from "./MiniComponents/NotificationCard"
import React , {useEffect , useState} from 'react';

const NotificationsContainer = ({Notifications}) => {

    return ( 
        <div className="NotifContainer">
            {Notifications.map(Notification => (
                <NotificationCard data={Notification} key={Notification.date} />
            ))}
             
        </div>
     );
}
 
export default NotificationsContainer;
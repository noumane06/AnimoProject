import NotificationCard from "./MiniComponents/NotificationCard"
import React from 'react';

const NotificationsContainer = () => {

    return ( 
        <div className="NotifContainer">
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
        </div>
     );
}
 
export default NotificationsContainer;
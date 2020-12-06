// Dependencies *********************
import React from 'react';

// internal files and components
import '../Css/notification.scss';
import Header from '../../Components/Header/Header';
import postsStore from '../../../../Stores/ModelStore';
import { Provider } from 'mobx-react';
class Notification extends React.Component {
    
    render() 
        {
            const str="Notifications"
             return ( 
                 <Provider postsStore={postsStore}>

                    <Header route={str}/>
                     <title>Notifications | animo</title>
                     <h2>You have 3 new notifications </h2>
                </Provider>

         );
        }
 
}
 
export default Notification;    
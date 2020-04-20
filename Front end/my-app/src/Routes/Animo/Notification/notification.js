// Dependencies *********************
import React from 'react';
//import jwt from 'jsonwebtoken';
//import Header from '../Components/Header/Header';

// internal files and components
import './Css/notification.scss';
import Header from '../Components/Header/Header';
import postsStore from '../../../Stores/ModelStore';
import { Provider } from 'mobx-react';
class Notification extends React.Component {
    
    render() 
        {
             return ( 
                 <Provider postsStore={postsStore}>

                    <Header />
                     <hr style={{ border: '0.5px solid #dddddd' }} />
                     <title>Notification | animo</title>
                     <h2>You have 3 new notifications </h2>
                </Provider>

         );
        }
 
}
 
export default Notification;    
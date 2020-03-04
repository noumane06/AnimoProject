
// Modules import 

import React from 'react';
import {observer , inject } from 'mobx-react';

// Internal files and compenents 
import './CSS/posts.scss';
import divider from './Components/Divider';
//************************************* */


@inject('postsStore')
@observer
class MainContainer extends React.Component {

    render() { 
        const {postsStore} = this.props;
        let rows = divider(postsStore);
        return (
        <div>
            {rows}
        </div>
        );
        }
}
 
export default MainContainer;    
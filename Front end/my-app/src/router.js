// modules imports
import React from 'react';
import 'mobx-react-lite/batchingForReactDom'
// Internal files and components imports

import AnimoContainer from './Routes/Animo/animo';
import WelcomeRouter from './Routes/Welcome_Page/Welcome_router';
import jwt from 'jsonwebtoken';

// *****************************

class Main_router extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id : 2 
        };
    }
    UNSAFE_componentWillMount() {
        const token = window.localStorage.getItem("Tokens");
        var decoded = jwt.verify(token, 'secret', function (err) {
            if(!err){
                this.setState({ id: 1 });
            }
        }.bind(this));
    }

  render() { 
    return (
        <div>
        {
            this.state.id === 1 ? <AnimoContainer/> : <WelcomeRouter/>
        }
        </div>
      )
  }
}

export default Main_router ;
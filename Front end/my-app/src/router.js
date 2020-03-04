// modules imports
import React from 'react';

// Internal files and components imports

import AnimoContainer from './Routes/Animo/animo';
import WelcomeRouter from './Routes/Welcome_Page/Welcome_router';

// *****************************

class Main_router extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id : 2 
        };
    }

  render() { 
    return (
        <div>
        {
            this.state.id === 2 ? <AnimoContainer/> : <WelcomeRouter/>
        }
        </div>
      )
  }
}

export default Main_router ;
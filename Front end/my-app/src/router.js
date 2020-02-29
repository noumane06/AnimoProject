// modules imports
import React from 'react';

// Internal files and components imports

import Animo_Container from './Routes/Animo/animo';
import Welcome_router from './Routes/Welcome_Page/Welcome_router';

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
            this.state.id == 2 ? <Animo_Container/> : <Welcome_router/>
        }
        </div>
      )
  }
}

export default Main_router ;
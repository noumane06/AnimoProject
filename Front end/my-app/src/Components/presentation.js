import React from 'react';


class Presentation extends React.Component {

    render() { 
        return ( 
        <div className="presentation">
            <img className="Right_illustr" src={require('../res/Background-illust/illus.svg')}/>
            <div className="Left_text">
                <span>Welcome to animo</span>
                <p>Animo is a plateform for adopting , selling , buying and petsetting pets from all around the country  </p>
            </div>
            <div className="ovale"/> 
        </div>
         );
    }
}
 
export default Presentation;
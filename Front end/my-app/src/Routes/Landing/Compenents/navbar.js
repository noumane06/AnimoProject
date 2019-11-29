import React from 'react';

class Navbar extends React.Component {
    render() { 
        return (
        <div className="navbar">
            <img src={require('../../../res/Logo/animo iluustration icon.svg')} width="10%"  alt="animo's logo orange version" className="Animo_logo_orange"/>
            <div className="Get_started_button">
                <a id='getstarted' href='/account/signin'>
                    GET STARTED
                </a>
            </div>
        </div>  
        );
    }
}
 
export default Navbar;
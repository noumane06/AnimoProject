import React from 'react';

class Explore extends React.Component {

    render() { 
             return ( 
                <div className="Navlink">
                <div className="icon_container">
                    <svg className="icon"
                        style = {{fill : 'currentColor'}}
                        width="20px"
                        height="24px" viewBox="0 0 20 24" space="preserve">
                        <path id="svg" d="M 21 7.337 h -3.93 l 0.372 -4.272 c 0.036 -0.412 -0.27 -0.775 -0.682 -0.812 c -0.417 -0.03 -0.776 0.27 -0.812 0.683 l -0.383 4.4 h -6.32 l 0.37 -4.27 c 0.037 -0.413 -0.27 -0.776 -0.68 -0.813 c -0.42 -0.03 -0.777 0.27 -0.813 0.683 l -0.382 4.4 H 3.782 c -0.414 0 -0.75 0.337 -0.75 0.75 s 0.336 0.75 0.75 0.75 H 7.61 l -0.55 6.327 H 3 c -0.414 0 -0.75 0.336 -0.75 0.75 s 0.336 0.75 0.75 0.75 h 3.93 l -0.372 4.272 c -0.036 0.412 0.27 0.775 0.682 0.812 l 0.066 0.003 c 0.385 0 0.712 -0.295 0.746 -0.686 l 0.383 -4.4 h 6.32 l -0.37 4.27 c -0.036 0.413 0.27 0.776 0.682 0.813 l 0.066 0.003 c 0.385 0 0.712 -0.295 0.746 -0.686 l 0.382 -4.4 h 3.957 c 0.413 0 0.75 -0.337 0.75 -0.75 s -0.337 -0.75 -0.75 -0.75 H 16.39 l 0.55 -6.327 H 21 c 0.414 0 0.75 -0.336 0.75 -0.75 s -0.336 -0.75 -0.75 -0.75 Z m -6.115 7.826 h -6.32 l 0.55 -6.326 h 6.32 l -0.55 6.326 Z"/>
                    </svg>
                </div>

                <div className="legend">
                    <span>Explore</span>
                </div>
            </div>
         );
        }
       
}

export default Explore;    
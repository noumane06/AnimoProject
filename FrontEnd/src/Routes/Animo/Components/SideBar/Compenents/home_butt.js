import React from 'react';

class Home extends React.Component {

    render() { 
             return ( 
            
                <div className="Navlink">
                            <div className="icon_container">
                                <svg 
                                    className="icon"
                                    style = {{fill : 'currentColor'}}
                                    width="24px"
                                    height="22.35px" viewBox="0 0 24 22.35" >
                                    <path d="M23.6,10.1l-3.64-3.64v-4.2c0-0.76-0.62-1.38-1.38-1.38c-0.76,0-1.37,0.62-1.37,1.38v1.45L14.5,1c-1.34-1.34-3.67-1.34-5,0
                                            L0.4,10.1c-0.54,0.54-0.54,1.41,0,1.95c0.54,0.54,1.41,0.54,1.95,0l9.09-9.09c0.3-0.29,0.82-0.29,1.11,0l9.1,9.1
                                            c0.27,0.27,0.62,0.4,0.97,0.4c0.35,0,0.7-0.13,0.97-0.4C24.13,11.51,24.13,10.64,23.6,10.1z M12.48,5.56
                                            c-0.26-0.26-0.69-0.26-0.96,0l-8,8c-0.13,0.13-0.2,0.3-0.2,0.48v5.83c0,1.37,1.11,2.48,2.48,2.48h3.96v-6.13h4.47v6.13h3.96
                                            c1.37,0,2.48-1.11,2.48-2.48v-5.83c0-0.18-0.07-0.35-0.2-0.48L12.48,5.56z"/>
                                </svg>
                            </div>
                            <div className="legend">
                                <span>Acceuil</span>
                            </div>
                </div>
         );
        }
       
}

export default Home;    
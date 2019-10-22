import React from 'react';
import Slider from 'react-animated-slider';
import '../CSS/Landing_Page/slider.css'; 

class Presentation extends React.Component {

    render() { 
        const content = [
            {
                title: 'Welcome to animo ! ',
                description: 'Animo is plateform for adopting , selling and buying pets . Its totally free .',
                image : require('../res/Background-illust/Group 406.svg')
               
            },
            {
                title: 'How does it work ?',
                description: 'Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis',
                image : require('../res/Background-illust/illustration_1.svg')
            },
            {
                title: 'Should i pay ?',
                description: 'Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis',
                image : require('../res/Background-illust/test.svg')            
            }
        ];
        return ( 
        <Slider className="slider-wrapper" >
			{content.map((item, index) => (
                    <div className="presentation inner ">
                        <img className="Right_illustr" src={item.image}/>
                         <div className="Left_text">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                         </div> 
                    </div>
			))}
		</Slider>
        
         );
    }
}
 
export default Presentation;
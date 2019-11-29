import React from 'react';
import Slider from 'react-animated-slider';
import '../CSS/slider.css'; 

class Presentation extends React.Component {

    render() { 
        const content = [
            {  
                id : 1 ,
                title: 'Welcome to animo ! ',
                description: 'Animo is plateform for adopting , selling and buying pets . Its totally free .',
                image : require('../../../res/Background-illust/Group 1.svg'),
                classname : "Right_illustr"
               
            },
            { 
                id : 2 ,
                title: 'How does it work ?',
                description: 'Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, ',
                image : require('../../../res/Background-illust/Group 15.svg'),
                classname : "Left_illust" 
            },
            { 
                id : 3 ,
                title: 'Should i pay ?',
                description: 'Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, ',
                image : require('../../../res/Background-illust/Group 10.svg'),
                classname : "ilus_3"          
            }
        ];
        // Right_illustr
        function returner(item) {
            if(item.id !== 2)
            { 
                return(
                <div className="presentation inner " key={item.id}>
                <img className={item.classname} src={item.image} alt=""/> 
                 <div className="Left_text">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                 </div> 
                </div>
                );
            }else
            {
                return(
                    <div className="presentation inner " key={item.id}>
                    <img className={item.classname} src={item.image} alt=""/>
                     <div className="Right_text">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                     </div> 
                    </div>
                )
            }

        }
        return ( 
        <Slider className="slider-wrapper" >
			{content.map((item, index) => (
                returner(item)
			))}
		</Slider>
        
         );
    }
}
 
export default Presentation;

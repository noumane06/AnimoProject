import React from 'react';
class Stars extends React.Component {

    render() 
        {   
            const stars = [] ;

             for (var i = 0; i < 5 ; i++){

                    if (i === this.props.size) {
                        for (let j = 0; j < 5-i ; j++) {
                            stars.push(<i className="fa fa-star-o"></i>); 
                        }
                        break ;
                    }
                    stars.push(<i className="fa fa-star"></i>);
             };
             return stars;
        }
       
}
 
export default Stars;
import React from 'react';

class Post extends React.Component {

    render() { 
             return ( 
                 
               
                <div class="Post"> 
                 <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"></link>
                <img src={ require('../../../res/puppies-cover.jpg')} width='100%'/>
                    <div class="container">
                        <span className="offerType">Selling offer</span>
                        <h3 className="offerTitle">Pitbull to sell </h3>
                        <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum 
                        otiorum oppido gnarus </p>
                        <span className="descr">click to see more</span>
                        <div className="priceTag">155$</div> 
                        <div className="interstButt">s'interesser</div>
                    </div>
                </div>
         );
        }
       
}
 
export default Post;    
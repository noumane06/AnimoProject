// Modules import 

import React, { useState} from 'react';
import { Carousel } from 'antd';

// internal files and components 
import '../../../CSS/carousel.scss'
import { disableBodyScroll , clearAllBodyScrollLocks } from 'body-scroll-lock';
// Begin ** 

class ThumbnailContainer extends React.Component {

    constructor(props)
    { 
        super(props)
        this.state = 
        {
            test : false,
            img : ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (event) {
        window.scrollTo(0, 0);
        const img = event.target.src ;
        if (img !== undefined) {
            this.setState({ img: img });
        }
        this.setState({test : !this.state.test});
    }

    render() {
        return(
                <div>
                        {clearAllBodyScrollLocks()}
                       {this.state.test && (
                        <div className="ImagePreview">
                            <svg viewBox="0 0 24 24" height="20px" width="20px" className="Close" onClick={this.handleClick}>
                                <g>
                                    <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z">
                                    </path>
                                </g>
                            </svg>
                            <div className="imageContainer">
                            
                            {this.props.post.imageData !== undefined && (
                                <img src={this.state.img} alt="puppies" width="100%" key={this.state.img} className="img" />
                            )}
                            </div>
                            {disableBodyScroll()}
                        </div> )}
                    <div className="ThumbnailContainer">
                    <h2 className="Post_type">{this.props.post.PostType}</h2> 
                     <Carousel  effect="scrollx" >
                        {this.props.post.imageData !== undefined && (this.props.post.imageData.map(img => (
                                   <img src={img} alt="puppies" width="100%" key={img} className="img" onClick={this.handleClick}/> 
                                )))} 
                    </Carousel>
                    </div>
                    
                </div>
                
            );
    }     
}

export default ThumbnailContainer ;

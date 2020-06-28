// Modules import 

import React, { useState} from 'react';
import { Carousel } from 'antd';

// internal files and components 
import '../../../CSS/carousel.scss'
import { disableBodyScroll , clearAllBodyScrollLocks } from 'body-scroll-lock';
import ProgressiveImage from '../../../../../../ProgressiveImage/Progressive';
// Begin ** 

class ThumbnailContainer extends React.Component {

    constructor(props)
    { 
        super(props)
        this.state = 
        {
            test : false,
            img : "",
            highResImageLoaded : false 
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
        let test = this.props.post.imageData[0].split("/");
        let token = test[7].split("&");
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
                        {!this.state.highResImageLoaded &&(
                            this.props.post.ImageName.map(imgname => (
                                    <img
                                        className="img prog_img"
                                        src={`https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2Fthumbs%2F${imgname}_50x50?alt=media&${token[1]}`}
                                    />     
                                
                            )))
                        }
                         {this.props.post.imageData !== undefined && (this.props.post.imageData.map((img)=>(
                            <img
                                onLoad={() => {
                                    this.setState({ highResImageLoaded: true });
                                }}
                                src={img}
                                className={!this.state.highResImageLoaded ? "none" : "img"}
                                onClick={this.handleClick}
                            />
                            
                        )))}
                    </Carousel>
                    </div>
                    
                </div>
                
            );
    }     
}

export default ThumbnailContainer ;

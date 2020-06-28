import React, { Component } from "react";
import "./progressive.scss"
const omit = (obj, omitKey) =>
    Object.keys(obj).reduce((result, key) => {
        if (key !== omitKey) {
            result[key] = obj[key];
        }
        return result;
    }, {});



export default class ProgressiveMulti extends Component {
    constructor(props) {
        super(props);
        this.state = {
             length : this.props.post.imageData.length ,
             counter : 0 
             };
    }

    render() {
        
        let test = this.props.post.imageData[0].split("/");
        let token = test[7].split("&");
        let filteredProps = omit(this.props, "overlaySrc");

        return (
            <span className={this.state.className}>

            {/* Map Through the image data until they get all loaded */}
                {this.props.post.imageData.map(img =>(
                    <div>
                            <img
                        {...filteredProps}
                        onLoad={() => {
                            this.setState((state) => ({
                                counter: state.counter + 1
                            }));
                        }}
                            ref={img => {
                                this.highResImage = img;
                            }}
                        src={img}
                        className={this.state.counter !== this.state.length ? "none" : "img"}
                    />
                    </div>
                
                ))}
            {/* Progresive image being loaded  */}
            {this.state.counter !== this.state.length && (
                    this.props.post.ImageName.map(imgname =>(
                        <div>
                          <img
                        {...filteredProps}
                        className={`img prog_img`}
                        src={`https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2Fthumbs%2F${imgname}_50x50?alt=media&${token[1]}`}
                        />   
                        </div>
                       
                    ))
            )}
            </span>
        );
    }
}
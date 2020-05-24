import React, { Component } from "react";
import "./progressive.scss"
const omit = (obj, omitKey) =>
    Object.keys(obj).reduce((result, key) => {
        if (key !== omitKey) {
            result[key] = obj[key];
        }
        return result;
    }, {});



export default class ProgressiveImage extends Component {
    constructor(props) {
        super(props);
        this.state = { highResImageLoaded: false };
    }
    
    render() {
        const { overlaySrc } = this.props;
        const { highResImageLoaded } = this.state;
        let filteredProps = omit(this.props, "overlaySrc");
        return (
            <span>
                <img
                    {...filteredProps}
                    onLoad={() => {
                        this.setState({ highResImageLoaded: true });
                    }}
                    ref={img => {
                        this.highResImage = img;
                    }}
                    src={this.props.src}
                    className={!this.state.highResImageLoaded ? "none" : this.props.className }
                />
                {!this.state.highResImageLoaded &&(
                   <img
                    {...filteredProps}
                    className={`${this.props.className} prog_img`}
                    {...highResImageLoaded && { style: { opacity: "0" } }}
                    src={overlaySrc}
                    /> 
                )} 
                 
                
                
            </span>
        );
    }
}
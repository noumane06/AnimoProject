// dependecies 
import React from 'react';
import { disableBodyScroll  } from 'body-scroll-lock';
import jwt from 'jsonwebtoken'
// FIles import 
import Presentation from '../Components/presentation';
import Navbar from '../Components/navbar';
import '../CSS/Landing_Page/main.css'

class Landing_page extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            error : null 
        };
    }
    UNSAFE_componentWillMount()
    {
        const token = window.localStorage.getItem("Tokens");
        var decoded = jwt.verify(token,'secret',function (err) {
            this.setState({error : err});
        }.bind(this));
    }
    render() { 
        if (this.state.error == null) {
            window.location.replace("/home");
        }else
        {
            return (  
            <div className="Container">
            <title>Welcome | Animo</title>
            <img id="bg" src={require('../res/Background-illust/Web 1920 – 3.png') } alt="background illustration"/>
                <Navbar />
                <Presentation />
                {disableBodyScroll()}
            </div>
        );
        }
        
    }
}
 
export default Landing_page ;
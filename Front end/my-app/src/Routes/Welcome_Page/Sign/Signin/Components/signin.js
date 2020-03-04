import React from 'react';
import {NavLink  } from 'react-router-dom';
import axios from 'axios';
//import jwt from 'jsonwebtoken';

import '../../CSS/account_mobile.css';

class signin extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email : "",
            password : "",
            isvalid : true, 
            isLoading : false,
            ref : false ,
            mssg : "",
            error : null 
        };
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlechange(e)
    {
        this.setState({
            [e.target.id] : e.target.value ,
            isvalid : true 
        });
    }
    handlesubmit(e)
    {
       this.setState({isLoading : true});
       axios.post("/users/signin/",this.state)
        .then(response =>{
            if(response.status === 200)
            {
                const authToken = response.data.token ; 
                window.localStorage.setItem("Tokens", authToken);
                window.location.replace("/home");
            }else
            {
                
                this.setState({
                    isvalid : false ,
                    isLoading : false
                });
               
            }
        })
        .catch(err =>{
            console.log("entred");
                this.setState({
                    isvalid : false,
                    isLoading : false 
                });
            console.log(err); 

        })
        e.preventDefault();
    }
    /*UNSAFE_componentWillMount()
    {
        const token = window.localStorage.getItem("Tokens");
        var decoded = jwt.verify(token,'secret',function (err) {
            this.setState({error : err});
        }.bind(this));
    }*/
    componentDidMount()
    {   
        var url = new URL(window.location.href);
        var ref = url.searchParams.get("ref");
        console.log(ref);
        if (ref === "sign_first") {
            this.setState({
                ref: true,
                mssg : "Please sign in first !"});
        }
        setTimeout(function(){
            this.setState({
                ref: false,
                mssg : ""});
       }.bind(this),5000);      
    }
    render() { 
        if (this.state.error == null) {
            window.location.replace("/home");
        }else
        {
           return ( 
            <div className="AccountContainer">
             <title>Sign in | Animo</title>

                <h1>Sign in</h1>
                <div className={this.state.ref ? "sign_alert":"hide_sign"}>{this.state.mssg}</div>
                {/* Third party sign  */}
                <div className="third_paties_Container">
                    <i className="fa fa-facebook-square fa-lg inf"></i>
                    <button className='fb_submit' type="submit">Sign in with facebook</button>
                </div>
                <div className="third_paties_Container">
                    <i className="fa fa-google fa-lg ing"></i>
                    <button className='gl_submit' type="submit">Sign in with google</button>
                </div>

                {/* ************************ */}

                <p className="span"><span >Or use your email</span></p> 
                

                <form onSubmit={this.handlesubmit} method="post"> 
                    <label>Email address : </label>
                    <div className="inputs">
                         <i className="fa fa-user icon"></i>
                        <input className={this.state.isvalid ? 'field' : 'field invalid' } type="email" id="email" onChange={this.handlechange} required/><br/>
                    </div>
                    <div className={this.state.isvalid ? 'val' : 'inv_msg' } >
                        <i className="fa fa-close"></i>
                        <p>Wrong email</p>
                    </div>
                    <label>Password : </label>
                    <div className="inputs">
                         <i className="fa fa-lock icon"></i>
                         <input className={this.state.isvalid ? 'field' : 'field invalid' } type="password" id="password" onChange={this.handlechange} required/><br/>
                    </div>
                    <div className={this.state.isvalid ? 'val' : 'inv_msg' } >
                    <i className="fa fa-close"></i>
                        <p>Wrong password</p>
                    </div>
                
                    <div className="submitContainer">
                        <input className={this.state.isLoading ? "loading" : "Submitbutton"} type="submit" value={this.state.isLoading ? "Loading..." : "Sign in"}></input><br/>  
                        <span className="descr">Don't have an account </span><br/>
                        <NavLink to="/account/signup">Sign up now</NavLink>
                    </div>

                </form>
            </div>
         ); 
        } 
    }
}
 
export default signin;
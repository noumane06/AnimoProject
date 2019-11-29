import React from 'react';
import {NavLink } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import '../../CSS/account_mobile.css';

class signup extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {

            email : "" , 
            password : "" ,
            firstname : "" , 
            lastname : "" , 
            username : "",
            phone : null , 
            isvalid : true ,
            isLoading : false,
            error : null 
        };
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    UNSAFE_componentWillMount()
    {
        const token = window.localStorage.getItem("Tokens");
        var decoded = jwt.verify(token,'secret',function (err) {
            this.setState({error : err});
        }.bind(this));
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
       axios.post("/users/signup/",this.state)
        .then(response =>{
            if(response.status === 200)
            {
                const authToken = response.data.token ; 
                window.localStorage.setItem("Tokens", authToken);
                window.location.replace("/profile_conf");
            }else
            {
                console.log("entred");
                this.setState({
                    isvalid : false ,
                    isLoading : false
                });
               console.log(response);
            }
        })
        .catch(err =>{
            console.log("entred");
                this.setState({
                    isvalid : false ,
                    isLoading : false
                });
            console.log(err); 

        })
        e.preventDefault();
    }
    render() { 
        if (this.state.error == null) {
            window.location.replace("/home");
        }else
        {
        return ( 
            <div className="AccountContainer">
             <title>Sign up | Animo</title>
                <h1>Sign up</h1>
                <div className="third_paties_Container">
                    <i className="fa fa-facebook-square iconf fa-lg"></i>
                    <button className='fb_submit' type="submit">Sign up with facebook</button>
                </div>
                <div className="third_paties_Container">
                    <i className="fa fa-google icong fa-lg"></i>
                    <button className='gl_submit' type="submit">Sign up with google</button>
                </div><br/>
               
                <p className="span">Or use your email</p>
                

                <form onSubmit={this.handlesubmit} method="post" > 
                    <label>First name : </label>
                    <div className="inputs">
                         <i className="fa fa-user icon"></i>
                        <input className='field ' onChange={this.handlechange} required type="text" id="firstname"/><br/>
                    </div>
                    <div className={this.state.isvalid ? 'val' : 'inv_msg' } >
                        <i className="fa fa-close"></i>
                        <p>invalid first name</p>
                    </div>
                    <label>Last name : </label> 
                    <div className="inputs">
                         <i className="fa fa-user icon"></i>
                         <input className='field ' onChange={this.handlechange} required type="text" id="lastname"/><br/>
                    </div>
                    <div className={this.state.isvalid ? 'val' : 'inv_msg' } >
                        <i className="fa fa-close"></i>
                        <p>invalid last name</p>
                    </div>
                    <label>username : </label> 
                    <div className="inputs">
                         <i className="fa fa-user icon"></i>
                         <input className='field ' onChange={this.handlechange} required type="text" id="username"/><br/>
                    </div>
                    <div className={this.state.isvalid ? 'val' : 'inv_msg' } >
                        <i className="fa fa-close"></i>
                        <p>invalid username</p>
                    </div>
                    <label>Email : </label>
                    <div className="inputs">
                         <i className="fa fa-envelope icon"></i>
                         <input className='field ' onChange={this.handlechange} required type="text" id="email"/><br/>
                    </div>
                    <div className={this.state.isvalid ? 'val' : 'inv_msg' } >
                        <i className="fa fa-close"></i>
                        <p>invalid email</p>
                    </div>
                    <label>Phone number : </label>
                    <div className="inputs">
                         <i className="fa fa-phone icon"></i>
                         <input className='field ' onChange={this.handlechange} required type="tel" id="phone"/><br/>
                    </div>
                    <div className={this.state.isvalid ? 'val' : 'inv_msg' } >
                        <i className="fa fa-close"></i>
                        <p>invalid phone number</p>
                    </div>
                    <label>Password : </label>
                    <div className="inputs">
                         <i className="fa fa-lock icon"></i>
                         <input className='field ' onChange={this.handlechange} required type="password" id="password"/><br/>
                    </div>
                    <div className={this.state.isvalid ? 'val' : 'inv_msg' } >
                        <i className="fa fa-close"></i>
                        <p>invalid password</p>
                    </div>
                
                <div className="submitContainer">
                <input className={this.state.isLoading ? "loading" : "Submitbutton"} type="submit" value={this.state.isLoading ? "Loading..." : "Sign up"}></input><br/>  
                    <span className="descr">Already have an account ?</span><br/>
                    <NavLink to="/account/signin">Sign in now</NavLink>
                </div>

                </form>
            </div>
         );
        }
    }
}
 
export default signup;
import React from 'react';
import {NavLink  } from 'react-router-dom';
import axios from 'axios';
class signin extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email : "",
            password : ""
        };
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlechange(e)
    {
        this.setState({
            [e.target.id] : e.target.value 
        });
    }
    handlesubmit(e)
    {
        axios.post("/users/signin/",this.state)
        .then(response =>{
            if(response.status === 200)
            {
                const authToken = response.data.token ; 
                window.localStorage.setItem("Tokens", authToken);
                window.location.replace("/home");
            }else
            {
                console.log(response.statusText);
            }
        })
        e.preventDefault();
    }
    render() { 
        return ( 
            <div className="AccountContainer">
             <title>Sign in | Animo</title>

                <h1>Sign in</h1>

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

                <p><span className="span">Or use your email</span></p> 
                

                <form onSubmit={this.handlesubmit} method="post"> 
                    <label>Email address : </label>
                    <div className="inputs">
                         <i className="fa fa-user icon"></i>
                        <input className='field up' type="email" id="email" onChange={this.handlechange}/><br/>
                    </div>
                    <div className="alert">
                        <p style={{visibility: 'hidden'}}>placeholder</p>
                    </div>
                    <label>Password : </label>
                    <div className="inputs">
                         <i className="fa fa-lock icon"></i>
                         <input className='field up' type="password" id="password" onChange={this.handlechange}/><br/>
                    </div><br/>
                
                    <div className="submitContainer">
                        <button className='Submitbutton' type="submit">Sign in</button><br/>  
                        <span className="descr">Don't have an account </span><br/>
                        <NavLink to="/account/signup">Sign up now</NavLink>
                    </div>

                </form>
            </div>
         );
    }
}
 
export default signin;
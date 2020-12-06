import React from 'react';
import {NavLink  } from 'react-router-dom';
import axios from 'axios';

import '../../CSS/account_mobile.scss';

class signin extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email : "",
            password : "",
            isvalid : true, 
            isLoading : false,
            returnTo : "" ,
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
                if (this.state.returnTo !== "") {
                    window.location.assign(this.state.returnTo);
                }else
                {
                    window.location.replace("/home");
                }
            }else
            {
                
                this.setState({
                    isvalid : false ,
                    isLoading : false
                });
               
            }
        })
        .catch(err =>{
                
                this.setState({
                    isvalid : false,
                    isLoading : false 
                });
            console.log(err); 

        })
        e.preventDefault();
    }
    componentDidMount()
    {
        const params = window.location.search.split("=")[1];
        if (params !== undefined && params !== "") {
            this.setState({
                returnTo : params 
            });
        }
    }
    
    render() { 
           return ( 
               <>
               <img src={
                                     require('../../../../../res/Logo/animo iluustration icon.svg')}
                                     alt="animo's logo orange version"
                                     className="Animo_logo_orange_2" 
                                     onClick={()=>{window.location.replace("/")}}
                                />
            <div className="AccountContainer">
             <title>Sign in | Animo</title>

                <h1>Sign in</h1>
                {/* Third party sign  */}
                <div className="third_paties_Container">
                    <i className="fab fa-facebook-f fa-lg inf"></i>
                    <button className='fb_submit' type="submit">Sign in with facebook</button>
                </div>
                <div className="third_paties_Container">
                    <i className="fab fa-google fa-lg ing"></i>
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
                </>
         ); 
    }
}
 
export default signin;
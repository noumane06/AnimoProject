import React from 'react';
import {NavLink } from 'react-router-dom';

class signin extends React.Component {
    render() { 
        return ( 
            <div className="AccountContainer">
                <h1>Sign in</h1>
                <div className="third_paties_Container">
                    <i class="fa fa-facebook-square fa-lg inf"></i>
                    <button className='fb_submit' type="submit">Sign in with facebook</button>
                </div>
                <div className="third_paties_Container">
                    <i class="fa fa-google fa-lg ing"></i>
                    <button className='gl_submit' type="submit">Sign in with google</button>
                </div>
               
                <p><span className="span">Or use your email</span></p> <br/><br/>
                

                <form> 
                    <label>Email address : </label>
                    <div className="inputs">
                         <i class="fa fa-user icon"></i>
                        <input className='field up' type="email" id="email"/><br/>
                    </div>
                    <label>Password : </label>
                    <div className="inputs">
                         <i class="fa fa-lock icon"></i>
                         <input className='field up' type="password" id="password"/><br/>
                    </div><br/>
                
                    <div className="submitContainer">
                        <button className='Submitbutton' type="submit">Login</button><br/>  
                        <span className="descr">Don't have an account </span><br/>
                        <NavLink to="/account/signup">Sign up now</NavLink>
                    </div>

                </form>
            </div>
         );
    }
}
 
export default signin;
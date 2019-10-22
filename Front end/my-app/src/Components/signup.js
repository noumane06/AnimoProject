import React from 'react';
import {NavLink } from 'react-router-dom';

import '../CSS/account/account_mobile.css';

class signup extends React.Component {

    render() { 
        return ( 
            <div className="AccountContainer">
             <title>Animo | Sign up</title>
                <h1>Sign up</h1>
                <div className="third_paties_Container">
                    <i class="fa fa-facebook-square iconf fa-lg"></i>
                    <button className='fb_submit' type="submit">Sign up with facebook</button>
                </div>
                <div className="third_paties_Container">
                    <i class="fa fa-google icong fa-lg"></i>
                    <button className='gl_submit' type="submit">Sign up with google</button>
                </div><br/>
               
                <p className="span">Or use your email</p>
                

                <form> 
                    <label>First name : </label>
                    <div className="inputs">
                         <i class="fa fa-user icon"></i>
                        <input className='field ' type="text" id="first_name"/><br/>
                    </div><br/>
                    <label>Last name : </label> 
                    <div className="inputs">
                         <i class="fa fa-user icon"></i>
                         <input className='field ' type="text" id="last_name"/><br/>
                    </div><br/>
                    <label>Email : </label>
                    <div className="inputs">
                         <i class="fa fa-envelope icon"></i>
                         <input className='field ' type="text" id="email"/><br/>
                    </div><br/>
                    <label>Phone number : </label>
                    <div className="inputs">
                         <i class="fa fa-phone icon"></i>
                         <input className='field ' type="tel" id="phone_number"/><br/>
                    </div><br/>
                    <label>Password : </label>
                    <div className="inputs">
                         <i class="fa fa-lock icon"></i>
                         <input className='field ' type="password" id="password"/><br/>
                    </div><br/>
                
                <div className="submitContainer">
                    <button className='Submitbutton' type="submit">Sign up</button><br/>  
                    <span className="descr">Don't have an account </span><br/>
                    <NavLink to="/account/signin">Sign in now</NavLink>
                </div>

                </form>
            </div>
         );
    }
}
 
export default signup;
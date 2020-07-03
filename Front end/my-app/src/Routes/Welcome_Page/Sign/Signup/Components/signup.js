// Files and css
import animationData from './mailAnim.json';
import animationphoneData from './phoneAnim.json';
import verifiedAnimation from './verified.json';
import '../../CSS/account_mobile.scss';
// Modules
import React from 'react';
import {NavLink } from 'react-router-dom';
import Lottie from 'react-lottie' ;
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {CSSTransition} from 'react-transition-group';
import firebase from '../../../../Animo/Create_offer/firebase-config'
require('firebase/auth')


class signup extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
          numberVerified: false,
          submitState: false,
          captchaState: false,
          codeverif: "",
          email: "",
          password: "",
          firstname: "",
          lastname: "",
          username: "",
          phone: null,
          isvalid: true,
          isLoading: false,
          error: null,
          current: 0,
          emailState: false,
          passwordState: false,
          firstnameState: false,
          lastnameState: false,
          usernameState: false
        };
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlePhoneClick = ()=>{
       
        this.setState({ captchaState: true });
        firebase.auth().languageCode = 'en';
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
            'size': 'normal',
            'callback': function (response) {
                console.log(response);
                
            },
            'expired-callback': function () {
                console.log("expired");
            }
        });
        var phoneNumber = this.state.phone;
        var appVerifier = window.recaptchaVerifier;
        let currentComponent = this;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                currentComponent.setState({ submitState: true });
            }).catch(function (error) {
                // Error; SMS not sent
                console.error(error);
            });
        
    }
    

    handleVerif = () =>{
        var code = this.state.codeverif ;
        let comp = this ;
        window.confirmationResult.confirm(code).then((result)=>{
            comp.setState({numberVerified : true});
        }).catch((e)=>{
            console.log(e);
        })
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
        var state = e.target.id + "State";
        this.setState({
            [e.target.id] : e.target.value ,
            isvalid : true ,
            [state] : true 
        });
      
    }
    // ------------------------------------------------------

    next()
    {
        if (this.state.emailState && this.state.passwordState && this.state.firstnameState && this.state.lastnameState 
            &&this.state.usernameState) {
            var current = this.state.current;
            if (this.state.current !== 2) {
            current = this.state.current + 1;
            }

            this.setState({ current });
        }
       
    }
    back()
    {
      var current = this.state.current;
        current = this.state.current - 1;
      this.setState({ current });
    }
    nextWithTimeOut = ()=>{
        setTimeout(() => {
          var current = this.state.current + 1;
          this.setState({ current: current });
        }, 5000);
        
    }

    // -------------------------------------------------------------

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
        if (this.state.error === null) {
            window.location.replace("/home");
        }else
        {
            const defaultOptions = {
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid",
                },
            };
            const defaultphoneOptions = {
                loop: true,
                autoplay: true,
                animationData: animationphoneData,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid",
                },
            };
            const verifOptions = {
                loop: false,
                autoplay: true,
                animationData: verifiedAnimation,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid",
                },
            };

        return (
          <div className="AccountContainer">
            {/* {this.state.current === 0 && ( */}
            <CSSTransition in={this.state.current === 0} unmountOnExit timeout={500} classNames="menu-primary">
              <div className="menu">
                <title>Sign up | Animo</title>
                <h1>Sign up</h1>
                <div className="third_paties_Container">
                  <i className="fab fa-facebook-f iconf fa-lg"></i>
                  <button className="fb_submit" type="submit">
                    Sign up with facebook
                  </button>
                </div>
                <div className="third_paties_Container">
                  <i className="fab fa-google icong fa-lg"></i>
                  <button className="gl_submit" type="submit">
                    Sign up with google
                  </button>
                </div>
                <br />

                <p className="span">Or use your email</p>

                <form onSubmit={this.handlesubmit} method="post">
                  <label>First name : </label>
                  <div className="inputs">
                    <i className="fa fa-user icon"></i>
                    <input
                      className="field "
                      onChange={this.handlechange}
                      required
                      type="text"
                      id="firstname"
                    />
                    <br />
                  </div>
                  <div className={this.state.isvalid ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>invalid first name</p>
                  </div>
                  <label>Last name : </label>
                  <div className="inputs">
                    <i className="fa fa-user icon"></i>
                    <input
                      className="field "
                      onChange={this.handlechange}
                      required
                      type="text"
                      id="lastname"
                    />
                    <br />
                  </div>
                  <div className={this.state.isvalid ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>invalid last name</p>
                  </div>
                  <label>username : </label>
                  <div className="inputs">
                    <i className="fa fa-id-card icon"></i>
                    <input
                      className="field "
                      onChange={this.handlechange}
                      required
                      type="text"
                      id="username"
                    />
                    <br />
                  </div>
                  <div className={this.state.isvalid ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>invalid username</p>
                  </div>
                  <label>Email : </label>
                  <div className="inputs">
                    <i className="fa fa-envelope icon"></i>
                    <input
                      className="field "
                      onChange={this.handlechange}
                      required
                      type="text"
                      id="email"
                    />
                    <br />
                  </div>
                  <div className={this.state.isvalid ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>invalid email</p>
                  </div>

                  <label>Password : </label>
                  <div className="inputs">
                    <i className="fa fa-lock icon"></i>
                    <input
                      className="field "
                      onChange={this.handlechange}
                      required
                      type="password"
                      id="password"
                    />
                    <br />
                  </div>
                  <div className={this.state.isvalid ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>invalid password</p>
                  </div>

                  <div className="submitContainer">
                    <button
                      className="Submitbutton"
                      style={{ textAlign: "center" }}
                      value="Sign up"
                      onClick={() => this.next()}
                    >
                      Sign up
                    </button>
                    <br />
                    <span className="descr">Already have an account ?</span>
                    <br />
                    <NavLink to="/account/signin">Sign in now</NavLink>
                  </div>
                </form>
              </div>
            </CSSTransition>
            {/* )} */}
            {/* {this.state.current === 1 && ( */}
              <CSSTransition in={this.state.current === 1} unmountOnExit timeout={500} classNames="menu-secondary">
              <div className="menu">
                
                <title>Verify phone number | Animo</title>
                <Lottie
                  options={defaultphoneOptions}
                  height={300}
                  width={300}
                />

                {/* Enter the phone number segment */}
                {!this.state.captchaState && (
                  <div>
                    <h2 style={{ textAlign: "justify" }}>
                      Verify your phone number
                  </h2>
                    <p style={{ fontFamily : "glacial indifference" }}>
                      For your security, animo wants to make sure it’s really you. animo will send a text message with a 6-digit verification code. Standard rates apply
                    </p>
                  </div>
                  
                )}
                {!this.state.captchaState && (
                  <div>
                    <label style={{ color:  "#FF7E6A"}}>Phone number : </label>
                    <div className="inputs">
                    
                      <i className="fa fa-mobile icon"></i>
                      <input
                        className="field "
                        onChange={this.handlechange}
                        required
                        type="tel"
                        id="phone"
                      />
                      <br />
                    </div>
                      <div className="submitContainer ButtonsContainer">
                        <button
                          className="leftBut"
                          onClick={() => this.back()}>
                          Back
                        </button>
                        <div className="nextBut">
                          <button
                            className="Submitbutton"
                            style={{ float: "right" }}
                            onClick={this.handlePhoneClick}
                            disabled={!this.state.isvalid}
                          >
                            Next
                          </button>
                          <br />
                        </div>
                      </div>

                      
                  
                    
                  </div>
                )}
                
                {/* ---------------------------------------------------------------------- */}

                {/*  Captcha verification segment*/}
                

                {this.state.captchaState && !this.state.submitState && (
                  <h2>Verify the captcha first</h2>
                )}
                <div
                  id="recaptcha"
                  className={this.state.submitState ? "val" : "normale"}
                ></div>

                {/* -------------------------------------------------------  */}

                {/* Enter verification code segment */}
                {this.state.submitState && !this.state.numberVerified && (
                  <h2>
                    Please type the verification code sent to {this.state.phone}
                  </h2>
                )}
                {this.state.submitState && !this.state.numberVerified && (
                  <div className="inputs">
                    <i className="fa fa-phone icon"></i>
                    <input
                      className="field "
                      onChange={this.handlechange}
                      required
                      type="tel"
                      id="codeverif"
                      placeholder="Provide the code we sent you"
                    />
                    <br />
                  </div>
                )}

                {this.state.submitState && !this.state.numberVerified && (
                  <div className="submitContainer">
                    <button
                      className="Submitbutton"
                      style={{ textAlign: "center" }}
                      onClick={this.handleVerif}
                      disabled={!this.state.isvalid}
                    >
                      Verify
                    </button>
                    <br />
                  </div>
                )}

                {/* ------------------------------------------------------------------- */}
                {this.state.numberVerified && (
                  <div className="verifContainer">
                    <Lottie
                      options={verifOptions}
                      height={50}
                      width={50}
                      className="card1"
                    />
                    <h3 className="card2">Number verified </h3>
                    {this.nextWithTimeOut()}
                  </div>
                )}
              </div>
              </CSSTransition>

            {/* )} */}
            {this.state.current === 2 && (
              <div>
                <title>Verify Email address | Animo</title>
                <Lottie options={defaultOptions} height={300} width={300} />
                <h2>We've sent a code verification to your email address </h2>
                <div className="inputs">
                  <i className="fa fa-envelope icon"></i>
                  <input className="field " required type="tel" id="phone" />
                  <br />
                </div>
                <div className="submitContainer">
                  <input
                    className="Submitbutton"
                    type="button"
                    style={{ textAlign: "center" }}
                    value="Verify"
                    onClick={() => this.next()}
                  ></input>
                  <br />
                </div>
              </div>
            )}
          </div>
        );
        }
    }
}
 
export default signup;
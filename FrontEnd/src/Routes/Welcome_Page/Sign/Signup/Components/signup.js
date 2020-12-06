// Files and css
import animationData from '../animations/mailAnim.json';
import animationphoneData from '../animations/phoneAnim.json';
import verifiedAnimation from '../animations/verified.json';
import Captcha from './captcha';
import '../../CSS/account_mobile.scss';
// Modules
import React from 'react';
import {NavLink } from 'react-router-dom';
import Lottie from 'react-lottie' ;
import axios from 'axios';
import {CSSTransition} from 'react-transition-group';
import firebase from '../../../../Animo/Create_offer/firebase-config'
require('firebase/auth')


class signup extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
          swtich: false,
          submitState: true,
          captchaState: false,
          codeverif: "",
          email: "",
          password: "",
          firstname: "",
          lastname: "",
          username: "",
          phone: "",
          gender : "",
          isvalid: true,
          isLoading: false,
          error: null,
          current: 0,
          emailState: true,
          passwordState: true,
          firstnameState: true,
          lastnameState: true,
          usernameState: true,
          phoneState : true ,
          genderState : true 
        };
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.lastSubmit = this.lastSubmit.bind(this);
        this.handler = this.handler.bind(this)
        
    }
    handlePhoneClick = ()=>{
       if (this.state.phoneState && this.state.captchaState) {
         this.setState({ phoneState : false , isLoading : true})
         var phoneNumber = this.state.phone;
         var appVerifier = window.recaptchaVerifier;
         let currentComponent = this;
         firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
           .then(function (confirmationResult) {
             currentComponent.setState({ swtich: true , phoneState : true , isLoading : false });
             // SMS sent. Prompt user to type the code from the message, then sign the
             // user in with confirmationResult.confirm(code).
             currentComponent.next();
             window.confirmationResult = confirmationResult;
             //currentComponent.setState({ submitState: true });
           }).catch(function (error) {
             // Error; SMS not sent
             currentComponent.setState({ isvalid: false, isLoading: false , captchaState : false});
             console.error(error);
           });
       }
        
    }
    handler(bool) {
    this.setState({
      captchaState: bool
    })
    }
    

    handleVerif = () =>{
      
        this.setState({isLoading : true});
        var code = this.state.codeverif ;
        let comp = this ;
        window.confirmationResult.confirm(code).then((result)=>{
            comp.setState({isLoading : false});
            var current = this.state.current + 1;
            comp.setState({ current });
        }).catch((e)=>{
            console.log(e);
            comp.setState({submitState : false , codeverif : ''});
        })
        
    }

    UNSAFE_componentWillMount()
    {
      axios
      .get("/users/checkCoockie", { withCredentials: true })
      .then((res) => {
      })
      .catch((err) => {console.log(err); this.setState({error : err});});
    }
    handlechange(e)
    {
        this.setState({submitState : false});
        var state = e.target.id + "State";
        var value = false ; 
        if (e.target.id === "codeverif" && e.target.value ===6) {
          value = true ;
        }
        this.setState({
            [e.target.id] : e.target.value ,
            isvalid : true ,
            [state] : true , 
            isLoading : value ,
            submitState : true
        });
    }
    // ------------------------------------------------------
    
    next()
    {
        
            var current = this.state.current;
            if (this.state.current !== 2) {
            current = this.state.current + 1;
            }

            this.setState({ current });
          this.setState({ isvalid: true, isLoading: false})
        
       
    }
    handlePhone(e)
    {
      var value = false  ;
      if(e.target.value.length >= 13 )
      {
        value = true ;
      }
      this.setState({
        phone: e.target.value,
        isvalid: true,
        phoneState: value
      });
    }
    back()
    {
      var current = this.state.current;
      current = this.state.current - 1;
      this.setState({ current });
    }
    /*nextWithTimeOut = ()=>{
        setTimeout(() => {
          var current = this.state.current + 1;
          this.setState({ current: current });
        }, 5000);
        
    }*/

    // -------------------------------------------------------------

    handlesubmit(e)
    {
      e.preventDefault();
      this.setState({isLoading : true});
      axios.post("/users/signup/verifMail", this.state)
        .then(response => {
          if (response.status === 200) {
            
          } else {
            
            this.setState({
              isvalid: false,
              isLoading: false
            });
            
          }
        })
        .catch(err => {
          
          this.setState({
            isvalid: false,
            isLoading: false
          });
        })
      if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this.state.email) === false ) {
        this.setState({ emailState: false, isLoading: false })
      }else{
        if (this.state.isvalid) {
          this.next();
          console.log(this.state);
        }
      }
    }
    lastSubmit()
    {
      this.setState({ isLoading: true });
      axios.post("/users/signup/", this.state)
        .then(response => {
          if (response.status === 200) {
            window.location.replace("/home");
          } else {
            
            this.setState({
              isvalid: false,
              isLoading: false
            });
            console.log(response);
          }
        })
        .catch(err => {
          
          this.setState({
            isvalid: false,
            isLoading: false
          });
          console.log(err);

        })
    }
    render() { 
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
          <>
            <img src={
                 require('../../../../../res/Logo/animo iluustration icon.svg')}
                 alt="animo's logo orange version"
                 className="Animo_logo_orange_2" 
                 onClick={()=>{window.location.replace("/")}}
            />
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
                      placeholder="Ex : mohammed"
                      onChange={this.handlechange}
                      required
                      type="text"
                      value={this.state.firstname}
                      id="firstname"
                    />
                    <br />
                  </div>
                  
                  <label>Last name : </label>
                  <div className="inputs">
                    <i className="fa fa-user icon"></i>
                    <input
                      placeholder="Ex : bencharqroun"
                      className="field "
                      onChange={this.handlechange}
                      value={this.state.lastname}
                      required
                      type="text"
                      id="lastname"
                    />
                    <br />
                  </div>
                  
                  <label>username : </label>
                  <div className="inputs">
                    <i className="fa fa-id-card icon"></i>
                    <input
                      placeholder="Ex : mohammed006"
                      className="field "
                      onChange={this.handlechange}
                      value={this.state.username}
                      required
                      type="text"
                      id="username"
                    />
                    <br />
                  </div>
                  
                  <label>Email : </label>
                  <div className="inputs">
                    <i className="fa fa-envelope icon"></i>
                    <input
                      className="field "
                      onChange={this.handlechange}
                      placeholder="Enter a valid email , you'll be ask to verify it later"
                      value={this.state.email}
                      required
                      type="email"
                      id="email"
                    />
                    <br />
                  </div>
                  <div className={this.state.isvalid ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>email already exist</p>
                  </div>
                  <div className={this.state.emailState ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>You have entered an invalid email address!</p>
                  </div>
                  <label>Password : </label>
                  <div className="inputs">
                    <i className="fa fa-lock icon"></i>
                    <input
                      className="field "
                      onChange={this.handlechange}
                      value={this.state.password}
                      required
                      type="password"
                      id="password"
                    />
                    <br />
                  </div>
                  <div className="gender">
                      <label>Gender : </label>
                      <div className="radio one">
                        <input type="radio" id="gender" name="gender" value="male" onChange={this.handlechange} checked={this.state.gender === "male"}/>
                        <label style={{fontWeight : "normal"}}>Male</label>
                      </div>
                      <div className="radio two">
                      <input type="radio" id="gender" value="female" onChange={this.handlechange} checked={this.state.gender === "female"}/>
                      <label style={{ fontWeight: "normal" }}>Female</label>
                      </div>
                  </div>
                      
                  <div className="submitContainer">
                    <button
                      type="submit"
                      className={this.state.isLoading  ? "loading" : "Submitbutton"}
                      disabled={this.state.isLoading}
                      style={{ textAlign: "center" }}
                    >
                      {this.state.isLoading ? "Loading..." : "Sign Up"}
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
            <CSSTransition in={this.state.current === 1} unmountOnExit timeout={500} classNames={!this.state.swtich ? "menu-third" : "menu-secondary"}>
              <div className="menu">
                
                <title>Verify phone number | Animo</title>
                <Lottie
                  options={defaultphoneOptions}
                  height={300}
                  width={300}
                />

                {/* Enter the phone number segment */}
                    
                    <h2 style={{ textAlign: "justify" }}>
                      Verify your phone number
                    </h2>
                    <p style={{ fontFamily : "glacial indifference" }}>
                      For your security, animo wants to make sure it’s really you. animo will send a text message with a 6-digit verification code. Standard rates apply
                    </p>
                    <label style={{ color:  "#FF7E6A"}}>Phone number : </label>
                    <div className="inputs">
                      <i className="fa fa-mobile icon"></i>
                      <input
                        className={this.state.isvalid ? "field" : "field err"}
                        onChange={this.handlePhone}
                        value={this.state.phone}
                        type="tel"
                        id="phone"
                      />
                      <br />
                    <div className={this.state.isvalid ? "val" : "inv_msg"}>
                      <i className="fa fa-close"></i>
                      <p>Invalid phone number</p>
                    </div>
                    </div>
                    <Captcha handler={this.handler}/>
                    <div className="submitContainer ButtonsContainer">
                        <button
                          className="leftBut"
                          onClick={() => this.back()}>
                          Back
                        </button>
                        <div className="nextBut">
                          <button
                            className={!this.state.captchaState || !this.state.phoneState ? "loading" : "Submitbutton"}
                            style={{ float: "right" }}
                            onClick={this.handlePhoneClick}
                          >
                            {this.state.isLoading ? "loading" : "Next"}
                          </button>
                          <br />
                        </div>
                    </div>
                  </div>
                </CSSTransition>
                {/* ---------------------------------------------------------------------- */}
                {/* Enter verification code segment */}
            <CSSTransition in={this.state.current === 2} unmountOnExit timeout={500} classNames={this.state.isLoading ? "menu-third" : "menu-secondary"}>
                  <div className="menu">
                    <h2>
                      Please type the verification code sent to {this.state.phone}
                    </h2>
                    <div className="inputs">
                      <i className="fa fa-phone icon"></i>
                      <input
                        className={this.state.submitState ? "field" : "field err"}
                        onChange={this.handlechange}
                        required
                        type="tel"
                        id="codeverif"
                        placeholder="Provide the code we sent you"
                        maxLength='6'
                      />
                      <br />
                      <div className={this.state.submitState ? "val" : "inv_msg"}>
                      <i className="fa fa-exclamation-triangle icon"></i>
                        <p>Invalid code</p>
                      </div>
                    </div>
                    <div className="submitContainer">
                      <button
                        
                        style={{ textAlign: "center" }}
                        onClick={this.handleVerif}
                        className={this.state.isLoading || this.state.codeverif.length < 6? "loading" : "Submitbutton"}
                        >
                        {this.state.isLoading   ? "loading" : "Verify"}
                        
                      </button>
                      <br />
                    </div>
                  </div>
                </CSSTransition>
                {/* ---------------------------------------------------------------------- */}
               
            <CSSTransition in={this.state.current === 3} unmountOnExit timeout={500} classNames="menu-secondary">
              <div className="menu">
                <title>Number verified !</title>
                <Lottie
                  options={verifOptions}
                  height={300}
                  width={300}
                />
                <h1>Thank you for your registration </h1>
                <p style={{ fontFamily: "glacial indifference" , textAlign : "center" }}>
                Your number have been verified , you can use it to sign in and for password recovery . <br/>
                You can now enter animo , Enjoy !
                </p>
                <div className="submitContainer">
                  <button
                    type="submit"
                    className={this.state.isLoading ? "loading" : "Submitbutton"}
                    style={{ textAlign: "center" }}
                    onClick={this.lastSubmit}
                  >
                    {this.state.isLoading ? "loading" : "Proceed"}
                  </button>
                  <br />
                </div>
              </div>
            </CSSTransition>
          </div>
          </>
          
        );
    }
}
 
export default signup;
// Files and css
import animationData from '../animations/mailAnim.json';
import animationphoneData from '../animations/phoneAnim.json';
import verifiedAnimation from '../animations/verified.json';
import '../../CSS/account_mobile.scss';
// Modules
import React from 'react';
import axios from 'axios';
import {CSSTransition} from 'react-transition-group';
import firebase from '../../../../Animo/Create_offer/firebase-config';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
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
          isValid: true,
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
             currentComponent.setState({ isValid: false, isLoading: false , captchaState : false});
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
      .catch((err) => {console.log(err); 
       // this.setState({error : err});
      });
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
            isValid : true ,
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
          this.setState({ isValid: true, isLoading: false})
        
       
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
        isValid: true,
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
          console.log(response);
          if (response.status === 200) {
            
          } else {
            
            this.setState({
              isValid: false,
              isLoading: false
            });
            
          }
        })
        .catch(err => {
          this.setState({ emailState: false, isLoading: false,isValid: false },console.log(this.state));

        })
        
        if (this.state.isValid) {
          //this.next();
          
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
              isValid: false,
              isLoading: false
            });
            console.log(response);
          }
        })
        .catch(err => {
          
          this.setState({
            isValid: false,
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
            <img
              src={require("../../../../../res/Logo/animo iluustration icon.svg")}
              alt="animo's logo orange version"
              className="Animo_logo_orange_2"
              onClick={() => {
                window.location.replace("/");
              }}
            />
            <div className="AccountContainer">
              {/* {this.state.current === 0 && ( */}
              <CSSTransition in={this.state.current === 0} unmountOnExit timeout={500} classNames="menu-primary">
                <Screen1
                  handlechange={this.handlechange}
                  handlesubmit={this.handlesubmit}
                  state={this.state}
                />
              </CSSTransition>
              {/* )} */}
              {/* {this.state.current === 1 && ( */}
              <CSSTransition in={this.state.current === 1} unmountOnExit timeout={500}
                classNames={
                  !this.state.swtich ? "menu-third" : "menu-secondary"
                }
              >
                <Screen2
                  state={this.state}
                  handlePhone={this.handlePhone}
                  handlePhoneClick={this.handlePhoneClick}
                  handler={this.handler}
                  defaultphoneOptions={defaultphoneOptions}
                  back={this.back}
                />
              </CSSTransition>
              {/* ---------------------------------------------------------------------- */}
              {/* Enter verification code segment */}
              <CSSTransition in={this.state.current === 2} unmountOnExit timeout={500}
                classNames={
                  this.state.isLoading ? "menu-third" : "menu-secondary"
                }
              >
                <Screen3 state={this.state} handleVerif={this.handleVerif} handlechange={this.handlechange} />
              </CSSTransition>
              {/* ---------------------------------------------------------------------- */}

              <CSSTransition in={this.state.current === 3} unmountOnExit timeout={500} classNames="menu-secondary">
                <Screen4 state={this.state} verifOptions={verifOptions} lastSubmit={this.lastSubmit} />
              </CSSTransition>
            </div>
          </>
        );
    }
}
 
export default signup;
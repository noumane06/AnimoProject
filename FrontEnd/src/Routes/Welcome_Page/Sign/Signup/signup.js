// Files and css
import animationData from './animations/mailAnim.json';
import animationphoneData from './animations/phoneAnim.json';
import verifiedAnimation from './animations/verified.json';
import { useFormik } from 'formik';

import '../CSS/account_mobile.scss';
// Modules
import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {CSSTransition} from 'react-transition-group';
import firebase from '../../../Animo/Create_offer/firebase-config';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';
import Screen4 from './Components/Screen4';
import { validate , validate2 , validate3 } from './Components/methods';
require('firebase/auth')


const Signup = ()=>{

  const [switchScreen , setSwitch] = useState(false);
  const [data,setData]= useState({values : {}});
  const [Loading , setLoading] = useState(false);
  const [screen,setScreen] = useState(0);
  useEffect(()=>{
    console.log(data)
  },[data])
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      gender : 'male',
    },
    validate ,
    onSubmit: values => {
      setLoading(true);
      axios
        .post("/users/signup/verifMail", { email: values.email })
        .then((response) => {
          setData({
            values,
          });
          setLoading(false);
          setScreen(screen + 1);
          setSwitch(true);
        })
        .catch((err) => {
          formik.setFieldError("email", "L'e-mail existe déjà");
          setLoading(false);
        });
    },
  });
  const formik2 = useFormik({
    initialValues: {
      phone : '', 
      captchaState : false
    },
    validate (){
      return validate2(formik2.values);
    } ,
    onSubmit: values => {
      setLoading(true);
      if (!values.captchaState) {
        formik2.setFieldError("captchaState", "Veuillez vérifier le formulaire captcha!");
        setLoading(false);
      } else {
        setData({values : {...data.values , phone : values.phone }});
        var phoneNumber = values.phone.replace("0","+212");
        var appVerifier = window.recaptchaVerifier;
        console.log(phoneNumber);
        //firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        //.then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          //window.confirmationResult = confirmationResult;
          setLoading(false);
          setSwitch(false);
          setScreen(screen + 1);
          
        /*}).catch(function (error) {
          // Error; SMS not sent
          formik2.setFieldError("phone", "Numero invalid");
          setLoading(false);
          console.log(error);
        });*/
       }
    },
  });

  const formik3 = useFormik({
    initialValues: {
      codeverif : ''
    },validate(){
      return validate3(formik3.values);
    },
    onSubmit: values => {
      setLoading(true);
     // window.confirmationResult.confirm(values.codeverif).then((result)=>{
        //console.log(result);
        setLoading(false);
        setScreen(screen+1);
     /* }).catch((e)=>{
        console.log(e);
        setLoading(false);
        formik3.setFieldError("codeverif", "Code incorrect");
      })*/
    },
  });
  
  const handler = (bool) => {
    formik2.setFieldValue("captchaState",bool);
  }
  const back = () =>
  {
    setSwitch(true);
    setScreen(screen-1);
  }
  return (
    <>
      <img
        src={require("../../../../res/Logo/animo iluustration icon.svg")}
        alt="animo's logo orange version"
        className="Animo_logo_orange_2"
        onClick={() => {
          window.location.replace("/");
        }}
      />

      <title>S'inscrire | Animo</title>
      <div className="AccountContainer">
        <h1>Inscrivez-vous à Animo</h1>
        <CSSTransition
          in={screen === 0}
          unmountOnExit
          timeout={500}
          classNames="menu-primary"
        >
          <Screen1 formik={formik} Loading={Loading} />
        </CSSTransition>
        <CSSTransition
          in={screen === 1}
          unmountOnExit
          timeout={500}
          classNames={switchScreen ? "menu-third" : "menu-secondary"}
        >
          <Screen2
            formik={formik2}
            handler={handler}
            back={back}
            Loading={Loading}
          />
        </CSSTransition>
        {/* Enter verification code segment */}
        <CSSTransition
          in={screen === 2}
          unmountOnExit
          timeout={500}
          classNames={Loading ? "menu-third" : "menu-secondary"}
        >
          <Screen3 data={data} formik={formik3} back={back} Loading={Loading} />
        </CSSTransition>
        <CSSTransition
          in={screen === 3}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
        >
          <Screen4 Loading={Loading} />
        </CSSTransition>
        {/* ---------------------------------------------------------------------- */}
      </div>
    </>
  );
}
 
export default Signup;
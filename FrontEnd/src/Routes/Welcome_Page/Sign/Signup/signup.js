// Files and Components

import '../CSS/account_mobile.scss';
import firebase from '../../../Animo/Create_offer/firebase-config';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';
import Screen4 from './Components/Screen4';
import { validate , validate2 , validate3 } from './Components/methods';

// Modules
import React , {useState } from 'react';
import axios from 'axios';
import {CSSTransition} from 'react-transition-group';
import { useFormik } from 'formik';
import moment from 'moment';

require('firebase/auth')


const Signup = ()=>{

  const [switchScreen1 , setSwitch1] = useState(false);
  const [switchScreen2 , setSwitch2] = useState(false);
  const [data,setData]= useState({values : {}});
  const [Loading , setLoading] = useState(false);
  const [screen,setScreen] = useState(0);
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      gender: "male",
      date: null,
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      if (!values.date) {
        formik.setFieldError("date", "Champ requis");
        setLoading(false);
      } else {
        const Difference = moment(Date.now()).diff(values.date, "years");
        if (Difference < 13 && Difference >= 0) {
          formik.setFieldError("date", "doit être âgé au moins 13 ans");
          setLoading(false);
        } else if (Difference < 0) {
          formik.setFieldError("date", "Date invalide");
          setLoading(false);
        } else {
          axios
            .post("/users/signup/verifMail", { email: values.email })
            .then((response) => {
              setData({
                values,
              });
              setLoading(false);
              setScreen(screen + 1);
              setSwitch1(true);
            })
            .catch((err) => {
              formik.setFieldError("email", "L'e-mail existe déjà");
              setLoading(false);
            });
        }
      }
    },
  });
  const formik2 = useFormik({
    initialValues: {
      phone : '', 
      captchaState : true
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
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          setLoading(false);
          setScreen(screen + 1);
          setSwitch2(true);
          
        }).catch(function (error) {
          // Error; SMS not sent
          formik2.setFieldError("phone", "Numero invalid");
          setLoading(false);
          console.log(error);
        });
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
     window.confirmationResult.confirm(values.codeverif).then((result)=>{
        console.log(result);
        setLoading(false);
        setScreen(screen+1);
     }).catch((e)=>{
        console.log(e);
        setLoading(false);
        formik3.setFieldError("codeverif", "Code incorrect");
      })
    },
  });
  
  const handler = (bool) => {
    formik2.setFieldValue("captchaState",bool);
  }
  const back = () =>
  {
    if (screen === 2) {
      setSwitch2(false);
    }
    if (screen === 1) {
      setSwitch1(false);
    }
    setScreen(screen-1);
    
  }
  const Register =  ()=>{
      setLoading(true);
      axios.post('/users/signup/',data.values)
      .then(res=>{
        window.location.assign('/home');
      })
      .catch(err => alert("an error occurred",err));
  }
  return (
    <>
      <img
        src={require("../../../../res/Logo/animo iluustration icon.svg")}
        alt="animo's logo orange version"
        className="Animo_logo_orange_2"
      />

      <title>S'inscrire | Animo</title>
      <div className="AccountContainer">
        {screen !== 3 &&(<h1>Inscrivez-vous à Animo</h1>)}
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
          classNames={!switchScreen1 ? "menu-third" : "menu-primary" }
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
          classNames={!switchScreen2 ? "menu-third" : "menu-primary"}
        >
          <Screen3 data={data} formik={formik3} back={back} Loading={Loading} />
        </CSSTransition>
        <CSSTransition
          in={screen === 3}
          unmountOnExit
          timeout={500}
          classNames="menu-third"
        >
          <Screen4 Loading={Loading} Register={Register}/>
        </CSSTransition>
        {/* ---------------------------------------------------------------------- */}
      </div>
    </>
  );
}
 
export default Signup;
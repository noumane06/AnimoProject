import React , {useState} from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import '../../CSS/account_mobile.scss';
import { validate  } from './methods';
import Lottie from 'react-lottie';
import animationData from '../animations/animation.json';

const Signin = ()=> {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };
    const [Loading , setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validate,
        onSubmit: (values) => {
          setLoading(true);
          axios.post("/users/signin/",values)
          .then(response =>{
              if(response.status === 200)
              {
                window.location.assign("/home");
              }else
              {
                setLoading(false);
                formik.setFieldError("email", "Email invalid");
                formik.setFieldError("password", "Mot de passe incorrect");
              }
          })
          .catch(err =>{
            setLoading(false);
            formik.setFieldError("email", "Email invalid");
            formik.setFieldError("password", "Mot de passe incorrect");
  
          })
        },
      });

           return (
             <>
               <img
                 src={require("../../../../../res/Logo/animo iluustration icon.svg")}
                 alt="animo's logo orange version"
                 className="Animo_logo_orange_2"
               />
               <div className="AccountContainer">
                 <title>Connectez-vous  | Animo</title>
                 <h1>Connectez-vous</h1>
                 <div className="menu">
                   {/* Third party sign  */}
                   <div className="third_paties_Container">
                     <i className="fab fa-facebook-f iconf fa-lg"></i>
                     <button className="fb_submit" type="submit">
                       Connectez-vous avec Facebook
                     </button>
                   </div>
                   <div className="third_paties_Container">
                     <i className="fab fa-google icong fa-lg"></i>
                     <button className="gl_submit" type="submit">
                       Connectez-vous avec google
                     </button>
                   </div>
                   <br/>
                   {/* ************************ */}
                   <hr class="divider"></hr>

                   <form onSubmit={formik.handleSubmit} method="post">
                     <div className="inputs">
                       <input
                         placeholder="Votre email"
                         className={
                           formik.touched.email && formik.errors.email
                             ? "field invalid"
                             : "field"
                         }
                         id="email"
                         name="email"
                         type="email"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.email}
                       />
                       <br />
                     </div>
                     {formik.touched.email && formik.errors.email ? (
                       <div className="inv_msg">{formik.errors.email}</div>
                     ) : null}
                     <div className="inputs">
                       <input
                         className={
                           formik.touched.password && formik.errors.password
                             ? "field invalid"
                             : "field"
                         }
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.password}
                         type="password"
                         id="password"
                         placeholder="Mot de passe"
                       />
                     </div>
                     {formik.touched.password && formik.errors.password ? (
                       <div className="inv_msg">{formik.errors.password}</div>
                     ) : null}

                     <div className="submitContainer">
                       {Loading && (
                         <button className="loading" type="submit" disabled>
                           <Lottie
                             options={defaultOptions}
                             height={40}
                             width={40}
                           />
                         </button>
                       )}
                       {!Loading && (
                         <button
                           type="submit"
                           className="Submitbutton"
                           style={{ textAlign: "center" }}
                         >
                           Se connecter
                         </button>
                       )}

                       <br />
                       <span className="descr">
                         Vous n'avez pas de compte?{" "}
                       </span>
                       <br />
                       <a href="/account/signup">Inscrivez-vous maintenant</a>
                     </div>
                   </form>
                 </div>
               </div>
             </>
           ); 
}
 
export default Signin;
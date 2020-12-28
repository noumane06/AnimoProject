import React from 'react' ;
import Lottie from 'react-lottie';
import animationData from '../animations/animation.json';
import { DatePicker } from 'antd';

const Screen1 = ({formik , Loading })=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };

    const HandleDateChange = (value, dateString)=>{
        formik.setFieldValue('date',value);
    }
    return(
      <div className="menu">
      
      <div className="third_paties_Container">
        <i className="fab fa-facebook-f iconf fa-lg"></i>
        <button className="fb_submit" type="submit">
        Inscrivez-vous avec Facebook
        </button>
      </div>
      <div className="third_paties_Container">
        <i className="fab fa-google icong fa-lg"></i>
        <button className="gl_submit" type="submit">
        Inscrivez-vous avec google
        </button>
      </div>
      <br />

      <hr class="divider"></hr>

      <form onSubmit={formik.handleSubmit} method="post">
        
        <div className="doubleContainer">
          <div className="Nom">
            <input
              placeholder="Votre nom"
              className={formik.touched.firstname && formik.errors.firstname ? 'field invalid' : 'field' }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              value={formik.values.firstname}
              id="firstname"
            />
            {formik.touched.firstname && formik.errors.firstname ? <div className="inv_msg">{formik.errors.firstname}</div> : null}
          </div>
          <div className="Prenom">
            <input
              placeholder="Votre prenom"
              className={formik.touched.lastname && formik.errors.lastname ? 'field invalid' : 'field' }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
              type="text"
              id="lastname"
            />
            {formik.touched.lastname && formik.errors.lastname ? <div className="inv_msg">{formik.errors.lastname}</div> : null}
          </div>
        </div>
        <div className="inputs">
          <input
            placeholder="Votre email"
            className={formik.touched.email &&  formik.errors.email ? 'field invalid' : 'field' }
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <br />
        </div>
        {formik.touched.email && formik.errors.email ? <div className="inv_msg">{formik.errors.email}</div> : null}
        <div className="inputs">
          <input
            className={formik.touched.password &&  formik.errors.password ? 'field invalid' : 'field' }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="password"
            id="password"
            placeholder="Mot de passe"
          />
        </div>
        {formik.touched.password && formik.errors.password ? <div className="inv_msg">{formik.errors.password}</div> : null}
        <div className="inputs">
          <label style={{fontWeight : 'bolder'}}>Date de naissance : </label><br/><br/>
          <DatePicker 
            onChange={HandleDateChange}
            value={formik.values.date}
            style={!formik.errors.date ? {borderRadius : "10px" , width:"50%"} : {borderRadius : "10px",borderColor:'#D8000C', width:"50%",borderWidth :"2px"}}
            name="date"
            id="date"
            placeholder="Sélectionnez une date"
          />
        </div>
        {formik.errors.date ? <div className="inv_msg">{formik.errors.date}</div> : null}
        <div className="gender">
            <label style={{fontWeight : 'bolder'}}>Sexe : </label>
            <div className="radio one">
              <input type="radio" id="gender" name="gender" value="male" onChange={formik.handleChange} checked={formik.values.gender === "male"}/>
              <label style={{fontWeight : "normal"}}>Homme</label>
            </div>
            <div className="radio two">
            <input type="radio" id="gender" value="female" onChange={formik.handleChange} checked={formik.values.gender === "female"}/>
            <label style={{ fontWeight: "normal" }}>Femme</label>
            </div>
        </div>
        <div className="submitContainer">
          {Loading &&(
            <button className="loading" type="submit" disabled>
              <Lottie options={defaultOptions} height={40} width={40} />
            </button>
          )}
          {!Loading &&(
            <button
              type="submit"
              className="Submitbutton"
              style={{ textAlign: "center" }}
            >
              S'inscrire
            </button>
          )}
          
          <br />
          <span className="descr">Vous avez déjà un compte ?</span>
          <br />
          <a href="/account/signin">Connectez-vous maintenant</a>
        </div>
      </form>
    </div>
    )
}
export default Screen1;
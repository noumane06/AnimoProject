import React from 'react';
import Captcha from './captcha';
import Lottie from 'react-lottie' ;
import animationphoneData from '../animations/phoneAnim.json';
import animationData from '../animations/animation.json';
const Screen2 = ({formik,handler,back,Loading}) => {

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

    return (
      <div className="menu">
        <title>Vérifier le numéro de téléphone | Animo</title>
        <Lottie options={defaultphoneOptions} height={300} width={300} />

        {/* Enter the phone number segment */}

        <h2 style={{ textAlign: "justify" }}>Vérifiez votre numéro de téléphone</h2>
        <p style={{ fontFamily: "glacial indifference" }}>
        Pour votre sécurité, animo veut s’assurer qu’il s’agit bien de vous.
        animo enverra un message texte avec un code de vérification à 6 chiffres.
        Les tarifs standards s'appliquent
        </p>
        <form onSubmit={formik.handleSubmit} method="post">
          <label style={{ color: "#FF7E6A",fontWeight:"bolder" }}>Numéro de téléphone : </label>
          <div className="inputs">
            <br/>
            <input
              className={formik.touched.phone &&  formik.errors.phone ? 'field invalid' : 'field' }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              name="phone"
              type="text"
              id="phone"
            />
            <br />
            {formik.errors.phone ? <div className="inv_msg">{formik.errors.phone}</div> : null}
          </div>
          <Captcha handler={handler} />
          {formik.errors.captchaState ? <div className="inv_msg" style={{textAlign : 'center'}}>{formik.errors.captchaState}</div> : null}
          <div className="submitContainer ButtonsContainer">
            <button className="leftBut" onClick={() => back()}>
              Precedent
            </button>
            <div style={{width : '20%'}}>
              {Loading &&(
                <button className="nextBut nextLoad" type="submit" style={{ float: "right" }} disabled>
                  <Lottie options={defaultOptions} height={40} width={40} />
                </button>
              )}
              {!Loading &&(
                <button
                className="nextBut"
                type="submit"
              >
                Suivant
              </button>
              )}
              
              <br />
            </div>
          </div>
        </form>
      </div>
    );
}
 
export default Screen2;
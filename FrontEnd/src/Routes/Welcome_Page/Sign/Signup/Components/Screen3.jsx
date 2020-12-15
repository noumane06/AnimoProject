
import React from 'react';
import animationData from '../animations/animation.json';
import Lottie from 'react-lottie' ;

const Screen3 = ({formik,data,back,Loading}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid",
    },
  };
    return (
      <div className="menu" style={{marginTop : '45px'}}>
        
        <h2 style={{textAlign:'left',color:'#195e83'}}>Code envoyé</h2>
        <p>
          Veuillez saisir le code de vérification envoyé à {data.values.phone}
        </p>
        <form onSubmit={formik.handleSubmit} method="post">
          <div className="inputs">
            <input
              className={
                formik.touched.codeverif && formik.errors.codeverif
                  ? "field invalid"
                  : "field"
              }
              onChange={formik.handleChange}
              value={formik.values.codeverif}
              name="codeverif"
              type="text"
              id="codeverif"
              placeholder="Code de verification"
              maxLength="6"
            />
            <br />
            {formik.touched.codeverif && formik.errors.codeverif ? (
              <div className="inv_msg">{formik.errors.codeverif}</div>
            ) : null}
          </div>
          <div className="submitContainer ButtonsContainer">
            <button className="leftBut" onClick={() => back()}>
              Precedent
            </button>
            <div style={{ width: "20%" }}>
              {Loading && (
                <button
                  className="nextBut nextLoad"
                  type="submit"
                  style={{ float: "right" }}
                  disabled
                >
                  <Lottie options={defaultOptions} height={40} width={40} />
                </button>
              )}
              {!Loading && (
                <button className="nextBut" type="submit">
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
 
export default Screen3;
import React from 'react';
import Captcha from './captcha';
import Lottie from 'react-lottie' ;
const Screen2 = ({defaultphoneOptions,state,handlePhone,handlePhoneClick,handler,back}) => {
    return (
      <div className="menu">
        <title>Verify phone number | Animo</title>
        <Lottie options={defaultphoneOptions} height={300} width={300} />

        {/* Enter the phone number segment */}

        <h2 style={{ textAlign: "justify" }}>Verify your phone number</h2>
        <p style={{ fontFamily: "glacial indifference" }}>
          For your security, animo wants to make sure it’s really you. animo
          will send a text message with a 6-digit verification code. Standard
          rates apply
        </p>
        <label style={{ color: "#FF7E6A" }}>Phone number : </label>
        <div className="inputs">
          <i className="fa fa-mobile icon"></i>
          <input
            className={state.isValid ? "field" : "field err"}
            onChange={handlePhone}
            value={state.phone}
            type="tel"
            id="phone"
          />
          <br />
          <div className={state.isValid ? "val" : "inv_msg"}>
            <i className="fa fa-close"></i>
            <p>Invalid phone number</p>
          </div>
        </div>
        <Captcha handler={handler} />
        <div className="submitContainer ButtonsContainer">
          <button className="leftBut" onClick={() => back()}>
            Back
          </button>
          <div className="nextBut">
            <button
              className={
                !state.captchaState || !state.phoneState
                  ? "loading"
                  : "Submitbutton"
              }
              style={{ float: "right" }}
              onClick={handlePhoneClick}
            >
              {state.isLoading ? "loading" : "Next"}
            </button>
            <br />
          </div>
        </div>
      </div>
    );
}
 
export default Screen2;
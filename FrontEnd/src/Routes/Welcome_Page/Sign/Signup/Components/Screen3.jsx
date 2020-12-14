import React from 'react';
const Screen3 = ({state,handleVerif,handlechange}) => {
    return (
                <div className="menu">
                  <h2>
                    Please type the verification code sent to {state.phone}
                  </h2>
                  <div className="inputs">
                    <i className="fa fa-phone icon"></i>
                    <input
                      className={state.submitState ? "field" : "field err"}
                      onChange={handlechange}
                      required
                      type="tel"
                      id="codeverif"
                      placeholder="Provide the code we sent you"
                      maxLength="6"
                    />
                    <br />
                    <div className={state.submitState ? "val" : "inv_msg"}>
                      <i className="fa fa-exclamation-triangle icon"></i>
                      <p>Invalid code</p>
                    </div>
                  </div>
                  <div className="submitContainer">
                    <button
                      style={{ textAlign: "center" }}
                      onClick={handleVerif}
                      className={
                        state.isLoading || state.codeverif.length < 6
                          ? "loading"
                          : "Submitbutton"
                      }
                    >
                      {state.isLoading ? "loading" : "Verify"}
                    </button>
                    <br />
                  </div>
                </div>
      );
}
 
export default Screen3;
import React from 'react';
import Lottie from 'react-lottie' ;

const Screen4 = ({state,verifOptions,lastSubmit}) => {
    return ( 
        <div className="menu">
          <title>Number verified !</title>
          <Lottie options={verifOptions} height={300} width={300} />
          <h1>Thank you for your registration </h1>
          <p
            style={{
              fontFamily: "glacial indifference",
              textAlign: "center",
            }}
          >
            Your number have been verified , you can use it to sign in
            and for password recovery . <br />
            You can now enter animo , Enjoy !
          </p>
          <div className="submitContainer">
            <button
              type="submit"
              className={
                state.isLoading ? "loading" : "Submitbutton"
              }
              style={{ textAlign: "center" }}
              onClick={lastSubmit}
            >
              {state.isLoading ? "loading" : "Proceed"}
            </button>
            <br />
          </div>
        </div>
     );
}
 
export default Screen4;
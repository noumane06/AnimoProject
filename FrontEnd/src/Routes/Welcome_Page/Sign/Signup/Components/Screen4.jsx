import React from 'react';
import Lottie from 'react-lottie' ;
import animationData from '../animations/animation.json';
import verifiedAnimation from '../animations/verified.json';

const Screen4 = ({Loading}) => {
      const verifOptions = {
          loop: false,
          autoplay: true,
          animationData: verifiedAnimation,
          rendererSettings: {
              preserveAspectRatio: "xMidYMid",
          },
      };
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
      };
    return ( 
        <div className="menu">
          <title>Numéro vérifié!</title>
          <Lottie options={verifOptions} height={300} width={300} />
          <h1>Merci pour votre inscription </h1>
          <p
            style={{
              fontFamily: "glacial indifference",
              textAlign: "center",
            }}
          >
           Votre numéro a été vérifié, vous pouvez l'utiliser pour vous connecter
            et pour la récupération du mot de passe . <br />
            Vous pouvez maintenant entrer animo, profitez-en!
          </p>
          <div className="submitContainer">
              {Loading && (
                <button
                  className="loading"
                  type="submit"
                  disabled
                >
                  <Lottie options={defaultOptions} height={40} width={40} />
                </button>
              )}
              {!Loading && (
                <button className="Submitbutton" type="submit">
                Procéder
                </button>
              )}
              <br />
          </div>
        </div>
     );
}
 
export default Screen4;
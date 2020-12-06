import React from 'react';
import './scss/splash.scss';
const Splash = (props)=>{
    return (
      <div className={props.propsclass} style={{ opacity: props.opacity }}>
        <title>Chargement - Animo</title>
        <svg className="logo-center-xy" viewBox="0 0 631.96 631.96">
          <path
            d="M1180,648.68C1180,821.89,1037.89,964,863.32,964,690.11,964,548,821.89,548,648.68,548,474.11,690.11,332,863.32,332,1037.89,332,1180,474.11,1180,648.68Zm-158.33,0A157.67,157.67,0,0,0,863.32,490.35c-86.6,0-157,70.37-157,158.33,0,86.6,70.37,157,157,157C951.28,805.65,1021.65,735.28,1021.65,648.68Z"
            transform="translate(-548.02 -332.02)"
            style={{ fill: "#ff4123" }}
          />
          <circle cx="95.16" cy="95.16" r="95.16" style={{ fill: "#ff4123" }} />
          <circle cx="536.8" cy="95.16" r="95.16" style={{ fill: "#ff4123" }} />
        </svg>
      </div>
    );
}
export default Splash ;
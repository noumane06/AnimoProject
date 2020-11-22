import React from 'react';
import firebase from '../../../../Animo/Create_offer/firebase-config'
require('firebase/auth')
class Captcha extends React.Component {
    constructor(props) {
        
        super(props);
        this.LoadCaptcha = this.LoadCaptcha.bind(this);
    }
    componentDidMount() {
        if (document.readyState === 'complete') {
            this.LoadCaptcha();
        } else {
            window.onload = this.loadRecaptcha;
        }
    }
    LoadCaptcha = () => {
        
        firebase.auth().languageCode = 'en';
        let comp = this ;
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
            'size': 'normal',
            'callback': function (response) {
                comp.props.handler(true);
                console.log(response);
            },
            'expired-callback': function () {
                comp.props.handler(false);
                console.log("expired");
                
            }
        });
        window.recaptchaVerifier.render().then(function (WidgetID) {
            window.recaptchaWidgetId = WidgetID ;
        })
    }
    render() { 
        return ( 
            <div className="text-center">
                <div
                    id="recaptcha"
                ></div>
            </div>
         );
    }
}
 
export default Captcha;
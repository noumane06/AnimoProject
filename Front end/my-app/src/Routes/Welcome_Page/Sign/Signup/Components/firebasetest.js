import React from 'react'
import firebase from '../../../../Animo/Create_offer/firebase-config'
require('firebase/auth')
class App extends React.Component {
    handleClick = () => {
        firebase.auth().languageCode = 'fr';
        var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha',{
            'size' : 'normal',
            'callback': function (response) {
                console.log(response);
            },
            'expired-callback': function () {
                console.log("expired");
            }
        });
        var number = '+212632126386';
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
            var code = prompt('Enter the otp', '');


            if (code === null) return;


            e.confirm(code).then(function (result) {
                console.log(result.user);

                document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";

            }).catch(function (error) {
                console.error(error);

            });

        })
            .catch(function (error) {
                console.error(error);

            });
    }
    render() {
        return (
            <div>
                <label></label>

                <div id="recaptcha"></div>

                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default App ;
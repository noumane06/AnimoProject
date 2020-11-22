import firebase from "firebase/app";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDRsykbHnmyzkwgrG_Wle1c8q09tU8qPkk",
  authDomain: "image-upload-test-7d968.firebaseapp.com",
  databaseURL: "https://image-upload-test-7d968.firebaseio.com",
  projectId: "image-upload-test-7d968",
  storageBucket: "image-upload-test-7d968.appspot.com",
  messagingSenderId: "1014331131186",
  appId: "1:1014331131186:web:02e1c6b89fe05b729bc32b",
  measurementId: "G-Y47FCGE0W5",
};

firebase.initializeApp(config);
var storage = firebase.storage();
export { storage, firebase as default };

import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApH2haxq-GLop7WhAzJoGX1t2kFrYB0Fk",
    authDomain: "auth-app-3334f.firebaseapp.com",
    projectId: "auth-app-3334f",
    storageBucket: "auth-app-3334f.appspot.com",
    messagingSenderId: "408148833389",
    appId: "1:408148833389:web:3150eb582e05e79c0c3b64"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;
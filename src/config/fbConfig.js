import firebase from "firebase/app"; // for core functionality
import "firebase/firestore"; // for database functionality
import "firebase/auth"; // authentication purposes

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAaNWhSZgGlpW0wwIRDlLJt5guYtCAQC1E",
    authDomain: "admec-feedback.firebaseapp.com",
    projectId: "admec-feedback",
    storageBucket: "admec-feedback.appspot.com",
    messagingSenderId: "751360407580",
    appId: "1:751360407580:web:a94e53879944527872c7d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export default firebase;
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0l7DPQ-iinCO81ca7O7XGdLlmsnl3Gqw",
  authDomain: "funny-chat-app-3fff2.firebaseapp.com",
  projectId: "funny-chat-app-3fff2",
  storageBucket: "funny-chat-app-3fff2.appspot.com",
  messagingSenderId: "383844563376",
  appId: "1:383844563376:web:89ff3974c802b0cbd43e75",
  measurementId: "G-TTVRG9B54C",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics(app);

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator("http://localhost:9099");
if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", "8080");
}

export { auth, db };
export default firebase;

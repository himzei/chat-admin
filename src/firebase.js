import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL4myhF-QiPkqPA7uk7h_hZPN2obY0kiU",
  authDomain: "chat-admin-40063.firebaseapp.com",
  projectId: "chat-admin-40063",
  storageBucket: "chat-admin-40063.appspot.com",
  messagingSenderId: "1081168922777",
  appId: "1:1081168922777:web:e7d9e03e4e8efcafd99008",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;

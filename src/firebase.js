import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2riEyXK0N580qZYo37dwrvB73TJI--yc",
  databaseURL:
    "https://boilerplate-4f552-default-rtdb.asia-southeast1.firebasedatabase.app/",
  authDomain: "boilerplate-4f552.firebaseapp.com",
  projectId: "boilerplate-4f552",
  storageBucket: "boilerplate-4f552.appspot.com",
  messagingSenderId: "270321609589",
  appId: "1:270321609589:web:5e4857038a4039f138013c",
  measurementId: "G-T2CFZKQNMZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;

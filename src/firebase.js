import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL:
    "https://jongman-b37f2-default-rtdb.asia-southeast1.firebasedatabase.app/",
  apiKey: "AIzaSyBG6MO6DeRI1yBE4Jb56j9bkuhM1mHw0ns",
  authDomain: "jongman-b37f2.firebaseapp.com",
  projectId: "jongman-b37f2",
  storageBucket: "jongman-b37f2.appspot.com",
  messagingSenderId: "1070697805409",
  appId: "1:1070697805409:web:e037c3fe3219e6a8e79c20",
  measurementId: "G-Q86SHQRNVM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;

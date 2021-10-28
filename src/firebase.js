import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByHhAPPVJMp3UjuShWgIi_3AjyLSEsmSc",
  authDomain: "wod-beyond.firebaseapp.com",
  projectId: "wod-beyond",
  storageBucket: "wod-beyond.appspot.com",
  messagingSenderId: "1054653216896",
  appId: "1:1054653216896:web:dab63c4ac60101e0f70e65"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzUINEdrNBpCPMz72TGndLFdjIdIFsfv8",
  authDomain: "tinder-clone-92a71.firebaseapp.com",
  projectId: "tinder-clone-92a71",
  storageBucket: "tinder-clone-92a71.appspot.com",
  messagingSenderId: "825965147253",
  appId: "1:825965147253:web:9666e3e26cf1d061da743c",
  measurementId: "G-CVGR812JSQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

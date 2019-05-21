import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_KEY}`,
  authDomain: "av-club-e11cb.firebaseapp.com",
  databaseURL: "https://av-club-e11cb.firebaseio.com",
  projectId: "av-club-e11cb",
  storageBucket: "av-club-e11cb.appspot.com",
  messagingSenderId: "542402447548",
  appId: "1:542402447548:web:dfd88bec86bf65f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;

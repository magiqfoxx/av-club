import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC2Sx0YIw_hzA0ye5ccWpCv6OziOHS1hvs",
  authDomain: "av-club-e11cb.firebaseapp.com",
  databaseURL: "https://av-club-e11cb.firebaseio.com",
  projectId: "av-club-e11cb",
  storageBucket: "av-club-e11cb.appspot.com",
  messagingSenderId: "542402447548"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;

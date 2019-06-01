import app from "firebase/app";
import "firebase/auth"

const config = {
  apiKey: "AIzaSyB_c0huMtJkW91J6_Fqc8Dqb6dJ_Doc_wQ",
  authDomain: "simple-todo-a116b.firebaseapp.com",
  databaseURL: "https://simple-todo-a116b.firebaseio.com",
  projectId: "simple-todo-a116b",
  storageBucket: "simple-todo-a116b.appspot.com",
  messagingSenderId: "985421622945",
  appId: "1:985421622945:web:c1ea7896b4d832c0"
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password)
}

export default Firebase

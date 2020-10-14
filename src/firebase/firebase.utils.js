import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAK01R4SV8hjVI36PwDcaRzRXuPVDriAFE",
  authDomain: "crwn-db-a817a.firebaseapp.com",
  databaseURL: "https://crwn-db-a817a.firebaseio.com",
  projectId: "crwn-db-a817a",
  storageBucket: "crwn-db-a817a.appspot.com",
  messagingSenderId: "1061162882157",
  appId: "1:1061162882157:web:cb00f1e04f3453bf061b64"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
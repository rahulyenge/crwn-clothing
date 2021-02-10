import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDT60fJPxwCGxX7vuUcS1mZ4uG3ZSfPn94",
    authDomain: "crwn-db-a1481.firebaseapp.com",
    projectId: "crwn-db-a1481",
    storageBucket: "crwn-db-a1481.appspot.com",
    messagingSenderId: "1046885948512",
    appId: "1:1046885948512:web:4d90f7b321e99ae20e3705",
    measurementId: "G-BMCZCV30RQ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
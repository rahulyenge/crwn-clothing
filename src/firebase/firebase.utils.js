import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDT60fJPxwCGxX7vuUcS1mZ4uG3ZSfPn94",
  authDomain: "crwn-db-a1481.firebaseapp.com",
  databaseURL: "https://crwn-db-a1481-default-rtdb.firebaseio.com",
  projectId: "crwn-db-a1481",
  storageBucket: "crwn-db-a1481.appspot.com",
  messagingSenderId: "1046885948512",
  appId: "1:1046885948512:web:4d90f7b321e99ae20e3705",
  measurementId: "G-BMCZCV30RQ"
};

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date(); 

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData  
        })
      } catch(error){
        console.log('error creating user', error.message);

      }
    }
    return userRef;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  // firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
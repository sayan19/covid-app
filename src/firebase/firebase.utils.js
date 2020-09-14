import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config ={
    apiKey: "AIzaSyD7S4LVJq0NLhoaeGaSdxLEOQJzdJX1ciA",
    authDomain: "covid-app-db.firebaseapp.com",
    databaseURL: "https://covid-app-db.firebaseio.com",
    projectId: "covid-app-db",
    storageBucket: "covid-app-db.appspot.com",
    messagingSenderId: "756616287960",
    appId: "1:756616287960:web:8961e35fa81d475a3b69ad",
    measurementId: "G-D5GFERH870"
  };
  
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
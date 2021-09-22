import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCthhotW_M2NTaAOeoTAnaOA4wO4I3TF7o',
  authDomain: 'estore-8c17b.firebaseapp.com',
  projectId: 'estore-8c17b',
  storageBucket: 'estore-8c17b.appspot.com',
  messagingSenderId: '261200121807',
  appId: '1:261200121807:web:78e742354da499bd558cba',
  measurementId: 'G-G6PG3RBENX',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const collectionRef = firestore.collection('user');

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();
  console.log({ collectionSnapshot });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

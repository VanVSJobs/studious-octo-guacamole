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

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

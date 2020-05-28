import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBtxDvuJP7PVjQUluz9d3qapo5LVyvbaZQ',
  authDomain: 'crowndb-9e767.firebaseapp.com',
  databaseURL: 'https://crowndb-9e767.firebaseio.com',
  projectId: 'crowndb-9e767',
  storageBucket: 'crowndb-9e767.appspot.com',
  messagingSenderId: '470838927267',
  appId: '1:470838927267:web:cd0bad5f6bd9bd8e274416',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

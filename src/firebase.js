import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAzKEjh3iluYFSOLi_EzZmbA7s5eOGuib4",
  authDomain: "slack-4857f.firebaseapp.com",
  projectId: "slack-4857f",
  storageBucket: "slack-4857f.appspot.com",
  messagingSenderId: "301137218698",
  appId: "1:301137218698:web:5e2ba355faa2593af07173"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
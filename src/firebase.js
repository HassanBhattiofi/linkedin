import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByNuGx1yDiBWO9P9nPK-v2k3Z_GoCsZnI",
  authDomain: "linkedin-clone-832c9.firebaseapp.com",
  projectId: "linkedin-clone-832c9",
  storageBucket: "linkedin-clone-832c9.appspot.com",
  messagingSenderId: "785436695642",
  appId: "1:785436695642:web:4c8d200df8e4f737754c63",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "API_KEY",
  authDomain: "joblisting-b53d5.firebaseapp.com",
  databaseURL: "https://joblisting-b53d5.firebaseio.com",
  projectId: "joblisting-b53d5",
  storageBucket: "joblisting-b53d5.appspot.com",
  messagingSenderId: "155126942062",
  appId: "1:155126942062:web:27de69953319727accd97f",
  measurementId: "G-YBJL7961GS"
});

const db = firebaseApp.firestore();

export default db;

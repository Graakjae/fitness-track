import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// firebaseConfig object copied from project in Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAmn1wKQSk1sDqo4cnswYMa_x_yT7tER6Q",
  authDomain: "fitness-tracker-fb825.firebaseapp.com",
  projectId: "fitness-tracker-fb825",
  storageBucket: "fitness-tracker-fb825.appspot.com",
  messagingSenderId: "857680709317",
  appId: "1:857680709317:web:c4a39b61758be690b592ac",
  measurementId: "G-TK1DZG4307"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const usersRef = collection(db, "users"); // reference to users collection i firestore
export const postsRef = collection(db, "posts"); // reference to posts collection i firestore

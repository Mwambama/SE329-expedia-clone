// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBlKHCdVfQvMRKQf2B5UqaLfDkwm6T1apo",
//   authDomain: "challo-ghume-fa22c.firebaseapp.com",
//   projectId: "challo-ghume-fa22c",
//   storageBucket: "challo-ghume-fa22c.appspot.com",
//   messagingSenderId: "411994731743",
//   appId: "1:411994731743:web:a02cec85eb6aa66ddbe56a",
//   measurementId: "G-5KYMV9KZ2D"
// };


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLxqFp76MNZinCACG7b1DA5S4LZuKgZpM",
  authDomain: "se329-expedia-clone.firebaseapp.com",
  projectId: "se329-expedia-clone",
  storageBucket: "se329-expedia-clone.firebasestorage.app",
  messagingSenderId: "780598082840",
  appId: "1:780598082840:web:e04c2525b45a9da032326d",
  measurementId: "G-RKEMZ6GXZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Use emulators || added this line
connectAuthEmulator(auth, "http://localhost:9099");

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app
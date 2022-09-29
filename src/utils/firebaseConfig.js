// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmqC12WANjGOkPT0sWV-w1pTl7eT_HhDo",
  authDomain: "tienda-react-81f82.firebaseapp.com",
  projectId: "tienda-react-81f82",
  storageBucket: "tienda-react-81f82.appspot.com",
  messagingSenderId: "802231546017",
  appId: "1:802231546017:web:877a0aeef12e0a6494c0e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
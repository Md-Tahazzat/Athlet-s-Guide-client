// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIpU9OUhUz-idFyvXSgcX35snps_a74-M",
  authDomain: "summer-camp-57797.firebaseapp.com",
  projectId: "summer-camp-57797",
  storageBucket: "summer-camp-57797.appspot.com",
  messagingSenderId: "1037212306757",
  appId: "1:1037212306757:web:288e3353177c1e85f6022c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

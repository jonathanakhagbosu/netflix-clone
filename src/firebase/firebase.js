import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrGq2qCr0mzAcKQONblQmewzYB7BwLNlo",
  authDomain: "netflix-clone-63e7e.firebaseapp.com",
  projectId: "netflix-clone-63e7e",
  storageBucket: "netflix-clone-63e7e.appspot.com",
  messagingSenderId: "370233166293",
  appId: "1:370233166293:web:06c350fe9dbb7077fd955c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };

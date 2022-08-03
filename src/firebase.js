// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjbq64VDX56Lwm38EBoD62NlihJ40Ry5E",
  authDomain: "jet-shop-react.firebaseapp.com",
  databaseURL: "https://jet-shop-react-default-rtdb.firebaseio.com",
  projectId: "jet-shop-react",
  storageBucket: "jet-shop-react.appspot.com",
  messagingSenderId: "924962138645",
  appId: "1:924962138645:web:d10c1737180a7256b57c1c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

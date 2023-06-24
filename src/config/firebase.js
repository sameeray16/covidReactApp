// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKhiDlkD0wuePq-TbUMSDx3zzgiG30iQw",
  authDomain: "covidreactapp.firebaseapp.com",
  projectId: "covidreactapp",
  storageBucket: "covidreactapp.appspot.com",
  messagingSenderId: "224365033952",
  appId: "1:224365033952:web:47d0335d39967082be1385",
  measurementId: "G-KGNR7NH2TE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const googleProvider = new GoogleAuthProvider()
export const auth = getAuth(app);

export const db = getFirestore(app)
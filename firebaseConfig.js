import { initializeApp } from "firebase-admin/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa4nLecVs-m8rDcSM6eR-m85i6wKuSXso",
  authDomain: "qlbh-110da.firebaseapp.com",
  projectId: "qlbh-110da",
  storageBucket: "qlbh-110da.appspot.com",
  messagingSenderId: "937845733924",
  appId: "1:937845733924:web:b6ea1f0db91892d9f8f6b1",
  measurementId: "G-MGZ48TYV15"
};

// Initialize Firebase
export const auth =  initializeApp(firebaseConfig);
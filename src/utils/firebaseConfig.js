// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmx5lnE5BAAWw06irdlvw-h4QHAhkZO-Q",
  authDomain: "fir-frontend-2db7e.firebaseapp.com",
  projectId: "fir-frontend-2db7e",
  storageBucket: "fir-frontend-2db7e.appspot.com",
  messagingSenderId: "347384022570",
  appId: "1:347384022570:web:5c1903b3c264e60fafe553",
  measurementId: "G-77KJJV1EN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  app,
  auth,
  analytics
}
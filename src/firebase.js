import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACCzg8ZMJFvO2hPrqz_Mh6dP36MsUZJdM",
    authDomain: "react-foodordering-website.firebaseapp.com",
    projectId: "react-foodordering-website",
    storageBucket: "react-foodordering-website.appspot.com",
    messagingSenderId: "403519453365",
    appId: "1:403519453365:web:3f2c69c7bc830a444966fc",
    measurementId: "G-T4EZM1SS28"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app); 
export default app 
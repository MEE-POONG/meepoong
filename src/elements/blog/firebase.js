// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVsKiM9hiA26BketrtI9zR9bzB8oqa7OA",
  authDomain: "meepoong-af0cc.firebaseapp.com",
  databaseURL: "https://meepoong-af0cc-default-rtdb.firebaseio.com",
  projectId: "meepoong-af0cc",
  storageBucket: "meepoong-af0cc.appspot.com",
  messagingSenderId: "468704156286",
  appId: "1:468704156286:web:05d556417839650c75962f",
  measurementId: "G-74L5VLF3JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyApUtSE6b1jNW7jAFNsHOsTFb0Hq2_ubDY",
  authDomain: "myproject-725e2.firebaseapp.com",
  databaseURL: "https://myproject-725e2-default-rtdb.firebaseio.com",
  projectId: "myproject-725e2",
  storageBucket: "myproject-725e2.appspot.com",
  messagingSenderId: "696747524640",
  appId: "1:696747524640:web:ccb49604c7628a5784f245",
  measurementId: "G-7DBDLT5D7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
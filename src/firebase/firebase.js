import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCoiHLFiTmz-81cwHqtxsh0pm9NYrShMIg",
  authDomain: "habitat-9c924.firebaseapp.com",
  projectId: "habitat-9c924",
  storageBucket: "habitat-9c924.firebasestorage.app",
  messagingSenderId: "589394755402",
  appId: "1:589394755402:web:4a48a60f378f8638f94bb3",
  measurementId: "G-JZ966HM5P7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth };

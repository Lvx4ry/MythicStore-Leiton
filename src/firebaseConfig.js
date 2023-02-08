import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTNnxFmphBdr0Q1HRgfc4INa57h6jQ4DY",
  authDomain: "mythic-store-75c22.firebaseapp.com",
  projectId: "mythic-store-75c22",
  storageBucket: "mythic-store-75c22.appspot.com",
  messagingSenderId: "3163138571",
  appId: "1:3163138571:web:52faa8fa686a079e89750e",
  measurementId: "G-44WD6ETWW6",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productsCollection = collection(db, "products");
export const soldCollection = collection(db, "sold");

const analytics = getAnalytics(app);

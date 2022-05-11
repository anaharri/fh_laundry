import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7hAMg94F8Ae5mHCVQZAU_FjDvT3ZPaYI",
  authDomain: "fh-laundry.firebaseapp.com",
  projectId: "fh-laundry",
  storageBucket: "fh-laundry.appspot.com",
  messagingSenderId: "259387675973",
  appId: "1:259387675973:web:aa337d20503b8d243cda2c",
  measurementId: "G-5M1DKSZD1L",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);



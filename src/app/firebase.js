
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCeD6832GZipI7kaXHKERSnwZ-Ywcnrxdo",
    authDomain: "rinesi-react.firebaseapp.com",
    projectId: "rinesi-react",
    storageBucket: "rinesi-react.appspot.com",
    messagingSenderId: "522946597491",
    appId: "1:522946597491:web:d04b62cff8d50ff27f9006"
  
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();


  
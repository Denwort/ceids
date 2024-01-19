import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAXiWLjSHT_etICnhVnoFRqE_XkfscK1ns",
    authDomain: "ceids-pruebita01.firebaseapp.com",
    projectId: "ceids-pruebita01",
    storageBucket: "ceids-pruebita01.appspot.com",
    messagingSenderId: "876772248218",
    appId: "1:876772248218:web:bdabc22db0a01910812d23"
  };  
  

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAYSd1lcocpuSPvmt3euUaVfVI7hjm4OpY",
    authDomain: "sha256-md5-tpseguridad.firebaseapp.com",
    projectId: "sha256-md5-tpseguridad",
    storageBucket: "sha256-md5-tpseguridad.appspot.com",
    messagingSenderId: "249153154102",
    appId: "1:249153154102:web:1943dd2207c9421ba2fc97"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
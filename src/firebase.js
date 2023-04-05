//->> import firebase v - 9 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCqHXmNP0CDjfns2BK6XHe5uTyMhTLHkyc",
    authDomain: "clone-eadd3.firebaseapp.com",
    projectId: "clone-eadd3",
    storageBucket: "clone-eadd3.appspot.com",
    messagingSenderId: "199731770296",
    appId: "1:199731770296:web:7f2095e743b220d9aa154d",
    measurementId: "G-EV997Q5254"
};  

const firebaseApp = firebase.initializeApp(firebaseConfig) //->> initalize the app withe the 'firebaseConfig☝️'. connents firebase with my app

const db = firebaseApp.firestore(); //->> initalize the database with the 'firestore'
const auth = firebase.auth(); //->> initalize the auth with the 'firebse-auth function'
//☝️ Gives variable which will be used throuh out the app

export  { db, auth }; //->> allows usage of (auth and db) outside the file


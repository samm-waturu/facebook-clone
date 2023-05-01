import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCJeSCar00-OhIotYPz9L6l9_PZ9aFrXdE",
    authDomain: "clone-build-5.firebaseapp.com",
    projectId: "clone-build-5",
    storageBucket: "clone-build-5.appspot.com",
    messagingSenderId: "963512601226",
    appId: "1:963512601226:web:6f75c2afbf5e4d4c6afb73"
};

const init = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const initDb = init.firestore();

const initStore = getStorage()

export {initDb, initStore}
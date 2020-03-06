import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config={
    apiKey: "AIzaSyB3QQ5W8N_AQjN_r183Ehl6_dzx6-BJrzg",
    authDomain: "reac-ecom-project.firebaseapp.com",
    databaseURL: "https://reac-ecom-project.firebaseio.com",
    projectId: "reac-ecom-project",
    storageBucket: "reac-ecom-project.appspot.com",
    messagingSenderId: "309543841840",
    appId: "1:309543841840:web:dfd2f44ef6f28a7a17bdf5",
    measurementId: "G-BKVZ6077RJ"
};

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase;
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

export const creatUserProfileDociment= async(userAuth,additionalData)=>{

    if (!userAuth) return ;

    const userRef= firestore.doc(`users/${userAuth.uid}`);

    const snapShop= await userRef.get();

    if (!snapShop.exists){

        const {displayName, email}=userAuth;
        const createdAt= new Date();

        try {
            await  userRef.set(

                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )
        }catch (e) {

            console.log('error creating user', e.message);
        }
    }

    return  userRef;


}

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase;
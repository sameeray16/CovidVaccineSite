import { auth } from "./Firebase";
import { 
    sendPasswordResetEmail, 
    signInWithPopup } from "firebase/auth";

import{
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"

// email and password 
// sign up
export const doCreateUserWithEmailAndPassword = async (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}
// login
export const doSignInWithEmailAndPassword = async (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
}

// google sign in
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth,provider);
    return result
}

// sign out
export const doSignOut = () => {
    return signOut(auth);
}

// password reset
export const doPasswordRest = (email) => {
    return sendPasswordResetEmail(auth,email)
}








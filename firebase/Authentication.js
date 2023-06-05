import firebaseApp from "./Config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider()

const auth = getAuth(firebaseApp)

export const signUp = async(email,password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        return {
            result: user
        }
    }catch(e){
        errorMessage = e.message
        errorCode = e.code
        return{
            error: errorMessage
        }
    }
}

export const signIn = async(email,password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        return{
            result: user
        }

    }catch(e){
        const errorCode = e.code
        const errorMessage = e.message

        if (errorCode === 'auth/user-not-found') {
            console.error('Email not registered:', email);
        }else if (errorCode === 'auth/wrong-password') {
            console.error('Incorrect password for email:', email);
        }else {
            console.error('Error logging in:', errorMessage);
        }
        // return {
        //     error: errorMessage
        // }
    }
}

export const signInGoogle = async () => {
    try{
        const result = await signInWithPopup(auth,provider)
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        return {user,token}
    }catch(e){
        console.log(e)
        return {e}
    }
}

// check whether user is logged in or not...
export const isLoggedIn = () => {
    let user = auth.currentUser
    let name = auth.currentUser
    if(user){
        return true,name.displayName
    }else{
        return false
    }
}
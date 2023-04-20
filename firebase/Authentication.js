import firebaseApp from "./Config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";

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
        return {
            error: errorMessage
        }
    }
}

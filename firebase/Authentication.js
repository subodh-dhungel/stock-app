import firebaseApp from "./Config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp)

export const signUp = async() => {
    let error = null
    let result = null

    try{
        result = await createUserWithEmailAndPassword(auth, email, password)
    }catch(e){
        error = e
    }

    return {result, error}
}

export const signIn = async() => {
    let result = null
    let error = null

    try{
        result = await signInWithEmailAndPassword(auth, email, password)
    }catch(e){
        error = e
    }
}

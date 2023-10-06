import firebaseApp from "./Config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup ,setPersistence, browserSessionPersistence, onAuthStateChanged, signOut} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider()

const auth = getAuth(firebaseApp)

//email and password signup
export const signUp = async(email,password) => {
    try{
        await setPersistence(auth, browserSessionPersistence);
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

//email and password signin

export const signIn = async(email,password) => {
    try{
        await setPersistence(auth, browserSessionPersistence);
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

//sign in with google

export const signInGoogle = async () => {
    try{
        await setPersistence(auth, browserSessionPersistence)
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

export const logout = async () => {
    const auth = getAuth(firebaseApp);
    try {
        await signOut(auth);
        console.log("User signed out");
    } catch (e) {
        console.error('Error signing out:', e);
    }
};

export const isLoggedIn = () => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve({ loggedIn: true, name: user.displayName });
            } else {
                resolve({ loggedIn: false });
            }
        });
    });
};

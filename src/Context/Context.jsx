import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const Context = ({children}) => {

    let [user, setUser] = useState(null)
 
    let createAccount = (email, password) => {
        return createUserWithEmailAndPassword (auth, email,password)
    }

    let userUpdate = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {displayName : displayName, photoURL: photoURL})
    } 

    let loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    let googleLogIn = () => {
        return signInWithPopup(auth, provider)
    }

    let userLogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           console.log("onAuthStateChanged", currentUser)
           setUser(currentUser)
       })
       return () => {
        unSubscribe()
       }
    },[])

    const authInfo = 
    {createAccount,
     userUpdate, 
     loginUser, 
     user, 
     userLogOut,
     googleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

Context.propTypes={
    children:PropTypes.node.isRequired
}
export default Context;
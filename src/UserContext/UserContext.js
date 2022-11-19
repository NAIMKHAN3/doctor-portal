import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firbase/Firebase.config';


export const AuthContex = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const createUser = (email, password) => {
        setIsLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setIsLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserName = (name) => {
        setIsLoading(false)
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const signInGoogle = () => {
        setIsLoading(false)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setIsLoading(false)
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setIsLoading(false)
            setUser(user)
        })
    }, [])
    return (
        <div>
            <AuthContex.Provider value={{ isLoading, user, createUser, signIn, signInGoogle, logOut, updateUserName }}>
                {children}
            </AuthContex.Provider>

        </div>
    );
};

export default UserContext;
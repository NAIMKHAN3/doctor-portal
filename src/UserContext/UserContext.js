import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firbase/Firebase.config';


export const AuthContex = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    return (
        <div>
            <AuthContex.Provider value={{ user, createUser, signIn, signInGoogle, logOut }}>
                {children}
            </AuthContex.Provider>

        </div>
    );
};

export default UserContext;
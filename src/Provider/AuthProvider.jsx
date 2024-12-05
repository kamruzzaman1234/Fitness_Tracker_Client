import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
        
    }

    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    const allInformation = {user, loading, createUser, logIn, logOut,updateUserProfile}

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user is', currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    return(
        <AuthContext.Provider value={allInformation}>
                {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
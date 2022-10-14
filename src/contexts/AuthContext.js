import React, { useContext, useEffect, useState } from 'react';  
import { auth } from '../firebase'; 
import * as firestore from 'firebase/firestore'; 
import 'firebase/database';

export function useAuth(){ 
    return useContext(AuthContext)
}; 

const AuthContext = React.createContext(); 
export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(); 
    const [loading, setLoading] = useState(true); 

    function signup (email,password, name){
        return auth.createUserWithEmailAndPassword(email, password)
            .then(userCred => {
                userCred.user.updateProfile({
                    displayName: name.firstName + " " + name.lastName, 

                })
            }).catch (err => console.log(err))
    }; 

    function signin (email,password){
        return auth.signInWithEmailAndPassword(email, password)
    }; 

    function logout (){
        return auth.signOut()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)  
        setLoading(false)
        }); 

        return unsubscribe; 
    }, [])
    const value = { 
        currentUser, 
        signin, 
        signup, 
        logout
    }; 
console.log(currentUser)
  return (
   <AuthContext.Provider value = {value}>
    {!loading && children}
   </AuthContext.Provider>
  ); 
}; 



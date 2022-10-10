import React, { useContext, useEffect, useState } from 'react';  
import { auth } from '../firebase'; 

export function useAuth(){ 
    return useContext(AuthContext)
}; 

const AuthContext = React.createContext(); 
export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(); 

    function signup (email,password){
        return auth.createUserWithEmailAndPassword(email, password)
    }; 

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){

            } else {
                setCurrentUser(user)
            }
            
        }); 

        return unsubscribe; 
    }, [])
    const value = { 
        currentUser, 
        signup 
    }; 

  return (
   <AuthContext.Provider value = {value}>
    {children}
   </AuthContext.Provider>
  ); 
}; 



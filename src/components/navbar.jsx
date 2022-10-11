import React from 'react'
import {Link} from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext'; 


export default function Navbar({signedIn}) {
    console.log(signedIn)
    const { currentUser } = useAuth(); 
    const div = (currentUser !== null ?   (
        <div className="nav">
             <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/referral">Referral</Link>
            <Link to="/settings">Settings</Link>
          
           
      </div>
      ) 
      :  (
        <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      
        </div>
      ))
    return (
        div
    )
}

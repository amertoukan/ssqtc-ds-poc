import React from 'react'
import {Link} from 'react-router-dom'; 

export default function Navbar({signedIn}) {
    console.log(signedIn)
    const div = (signedIn ?   (
        <div className="nav">
             <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/referral">Referral</Link>
          
           
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

import React from 'react'
import {Link} from 'react-router-dom'; 

export default function Navbar(signedIn) {
    return signedIn ?  (
    <div className="nav">
         <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/referral">Referral</Link>
        <Link to="/signin">Signin</Link>
       
  </div>
  ) : (
    <div className='nav'>
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
    </div>
  )
}

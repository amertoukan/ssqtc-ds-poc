import React from 'react'
import Navbar from '../components/navbar';
import Signup_Form from '../components/signup'
export default function Signup() {
  return (
    <div>
        <Navbar signedIn={false}/>
        <Signup_Form/></div>
  )
}

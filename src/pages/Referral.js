import React from 'react'
import Navbar from '../components/navbar';
import backgroundLogo from '../pics/SSQTC.jpeg'
export default function Home() {
  return (
    <div>
        <Navbar signedIn={false}/>
        <img src={backgroundLogo} className="img"/></div>
  )
}

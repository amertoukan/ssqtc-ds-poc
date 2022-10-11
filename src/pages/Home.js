import React from 'react'
import Navbar from '../components/navbar';
import backgroundLogo from '../pics/SSQTC.jpeg'
export default function Home() {
  return (
    <div>
        <Navbar signedIn={false}/>
        <img src={"https://d4.alternativeto.net/oMJVT_C2tHWv0k0rhV4HSYHLxqQNkOnQG2WlIR2-iYA/rs:fit:1200:1200:0/g:ce:0:0/YWJzOi8vZGlzdC9zL3JlZmVycmFsLXNhYXNxdWF0Y2hfMTkzMzgwX2Z1bGwucG5n.jpg"} className="img"/></div>
  )
}

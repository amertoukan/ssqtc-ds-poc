import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar';
import * as squatch from '@saasquatch/squatch-js' 
import { useAuth } from '../contexts/AuthContext'
import {auth} from '../firebase'; 

export default function Referral() {
  
  const {SSQT_user, setSSQT_User} = useState()
  const {content, setContent} = useState()
  const {fname, setFName} = useState("")
  const {lname, setLName} = useState("")
  const {currentUser} = useAuth(); 

  let initObj = {
    //The object for the user you want to upsert
    user:{
        id: 'abc_123', 
        accountId: 'abc_123', 
        email: 'dave@example.com', 
        firstName: "Dave", 
        lastName: "Doe", 
        locale: 'en_US', 
        referredByCodes: ["AMERTOUKAN226"],
    },
        engagementMedium: 'EMBED', 
        widgetType: 'p/demo-referral-program/w/referrerWidget', 
        };
  useEffect(() => {
//The object containing the init paramters for squatch.js



//When squatch js is ready to use 

squatch.ready(() => {
//place squatch.js functionality here

//configue squatch.js for the tenant you are using 
squatch.init({
    tenantAlias: "test_aqguqd9d73adj"
})
console.log()



squatch.widgets().upsertUser(initObj).then(function(res) {
  setSSQT_User = res.user
}).catch(err => console.log(err))

  },[])
});

function split(){
  const [first, last] = currentUser?.displayName?.split(" ")
  setFName(first)
  setLName(last)
}
 

  return (
    <div>
        <Navbar/>

        <div className="squatchembed"></div>
    
    </div>
  )
}
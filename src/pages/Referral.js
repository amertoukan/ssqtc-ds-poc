import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar';
import * as squatch from '@saasquatch/squatch-js' 
import { useAuth } from '../contexts/AuthContext'
import {auth} from '../firebase'; 

export default function Referral() {
  
  const {SSQT_user, setSSQT_User} = useState()
  const {content, setContent} = useState()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const {currentUser} = useAuth(); 

  function split(){
    const [first, last] = currentUser?.displayName?.split(" ")
    setFirstName(first)
    setLastName(last)
    console.log(currentUser.uid)
  }

  let initObj = {
    //The object for the user you want to upsert
    user:{
        id: currentUser.uid, 
        accountId: currentUser.uid, 
        email: currentUser.email, 
        firstName: firstName, 
        lastName: lastName, 
        locale: 'en_US', 
        referredByCodes: ["AMERTOUKAN226"],
    },
        engagementMedium: 'EMBED', 
        widgetType: 'p/demo-referral-program/w/referrerWidget', 
        };
  useEffect(() => {
//The object containing the init paramters for squatch.js

 
split();


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


  return (
    <div>
        <Navbar/>

        <div className="squatchembed"></div>
    
    </div>
  )
}
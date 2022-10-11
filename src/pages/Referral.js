import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar';
import * as squatch from '@saasquatch/squatch-js' 

export default function Referral() {
  
  const {user, setUser} = useState()
  const {content, setContent} = useState()
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
  user = res.user
  console.log(user)
}).catch(err => console.log(err))

  },[])
});
  



  // function __widget__(){
  //   widgets().upsertUser(initObj).then(function(res){
  //     console.log(res)
  //     setUser(res.user)
  //     setContent(res.widget && res.widget.content)
  //   }).catch(err => {
  //     alert(err)
  //       console.log(err)
  //   })
  
  // }
 

  return (
    <div>
        <Navbar/>

        <div className="squatchembed"></div>
    
    </div>
  )
}

// Referral.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//      next();
// });

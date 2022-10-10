import { React, useState } from 'react'
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




export default function __Form() {

const {email, setEmail} = useState(); 
const {password, setPassword} = useState(); 

 const signin = () => {
    alert("hello")
 }
  return (

    <Form className="form">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onKeyUp={e => setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onKeyUp={(e) => setPassword(e.target.value)} />
      </Form.Group>
<div className="space-between">
<Button variant="primary" onClick={signin}>
       Sign In
      </Button>
    
</div>
      
    </Form>
  )
}

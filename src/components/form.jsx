import { React, useState } from 'react'
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

export default function __Form() {

const {email, setEmail} = useState(); 
const {password, setPassword} = useState(); 
const signin = (e) => { 
    localStorage.setItem('email', email)
    localStorage.setItem("password", password)
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
      <Button variant='secondary' type="submit">
        <Link to="/signup"/>
        Sign Up
      </Button>
</div>
      
    </Form>
  )
}

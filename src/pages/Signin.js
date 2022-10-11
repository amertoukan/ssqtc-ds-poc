import React, { useRef, useState } from 'react'

import Navbar from '../components/navbar';
import {Form, Button, Card, Alert} from 'react-bootstrap'
import __Form from '../components/form';
import { useAuth } from '../contexts/AuthContext'
import {auth} from '../firebase'; 
import { Link, useNavigate} from 'react-router-dom';

export default function Signin() {
const emailRef = useRef()
const passwordRef = useRef()

const { signin, currentUser } = useAuth(); 
const [err, setErr] = useState("")
const [loading, setLoading] = useState(false)
const history = useNavigate(); 

async function handleSubmit (e) { 
    e.preventDefault(); 
     

    try{
        setErr('')
        setLoading(true)
        await signin(emailRef.current.value, passwordRef.current.value)
        history("/referral");
    } catch {
        setErr('Failed to sign in.')
    }
    setLoading(false)
}



  return (
    <div>
        <Navbar/>
        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">Sign In</h2>
                {err && <Alert variant="danger">{err}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>


<Button className="w-100 secondary mt-4" type="submit" disabled={loading}>Sign In</Button>

                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign Up</Link> 
        </div>


    </div>
  )
}

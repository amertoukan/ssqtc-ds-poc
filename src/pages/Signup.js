import React, { useRef, useState } from 'react'

import Navbar from '../components/navbar';
import { Form, Button, Card, Alert } from 'react-bootstrap'
import __Form from '../components/form';
import { useAuth } from '../contexts/AuthContext'
import { addUser } from '../contexts/SquatchContext'; 
import { Link, useNavigate, useSearchParams } from 'react-router-dom';


export default function Signin() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const lnameRef = useRef();
    const fnameRef = useRef();

    const { signup, currentUser } = useAuth();
    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("code")) 


    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setErr("Passwords do not match.")
        }
        try {
            let email = emailRef.current.value
            let password = passwordRef.current.value
            let name = {firstName: fnameRef.current.value, lastName: lnameRef.current.value}
            setErr('')
            setLoading(true)
            await signup(email, password, name)
//currentUser.uid, email, first, last, referredbyCodes
            addUser(currentUser.uid, currentUser.uid, email, name.firstName, name.lastName, ["AMERTOUKAN242"])
            //add SSQT tracking script 
        //Grab RS code 
        //Pass it through as variable to referred by Codes Arr
            history("/home")
        } catch (err) {
            console.log(err)
            setErr('Failed to create an account.')
        }
        setLoading(false)
    }



    return (
        <div>
            <Navbar />
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {err && <Alert variant="danger">{err}</Alert>}
                    <Form onSubmit={handleSubmit}>
                    <Form.Group id="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" ref={fnameRef} required />
                        </Form.Group>

                        <Form.Group id="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" ref={lnameRef} required />
                        </Form.Group>

                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>

                        <Button className="w-100 secondary mt-4" type="submit" disabled={loading}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/signin">Log In</Link>
            </div>


        </div>
    )
}

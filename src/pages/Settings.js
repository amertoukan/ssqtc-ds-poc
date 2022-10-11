import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Alert } from 'react-bootstrap'; 
import {auth} from '../firebase'; 
import {useAuth} from '../contexts/AuthContext';

export default function Settings() {
    const [error, setError] = useState("")
    const {logout} = useAuth(); 
    const history = useNavigate(); 

    async function handleLogout(){ 
        setError("")
        try{ 
            await logout()
            history('/signin')
        }
        catch (err){
            console.log(err)
            setError('Failed to Logout')
        }
    }
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}

                <strong>Email: </strong> {auth.currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
            </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}> Log Out </Button>
        </div>
    </>
  )
}

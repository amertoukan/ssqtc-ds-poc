import React from 'react';
import './App.css';
import {Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import __Navbar from "./components/router";

function App() {
  
  return (
    <AuthProvider>


    <Container>
        <__Navbar/>
    </Container>

    </AuthProvider>

  );
}

export default App;

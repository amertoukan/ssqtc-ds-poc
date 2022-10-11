import React from 'react';
import './App.css';
import {Container } from 'react-bootstrap'
import __Navbar from "./components/router";
import {init} from '@saasquatch/squatch-js'

function App() {

  return (
    <Container>
        <__Navbar/>
    </Container>

  );
}

export default App;

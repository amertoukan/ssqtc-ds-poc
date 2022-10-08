
import React, { useState } from "react";
import { BrowserRouter as Router, 
        Routes, 
        Route, 
        Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Store from '../pages/Purchase';
import Referral from '../pages/Referral';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

export default function __Navbar(){
    
return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/referral" element={<Referral/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </Router>
)}
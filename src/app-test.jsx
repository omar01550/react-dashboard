import { Link, Switch, BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Children, useEffect, useState } from 'react';
import './app-style.css'


// components


const Home = () => {
    return (
        <div>Home</div>
    )
};




const AddNew = () => {
    return (
        <div>
            AddNew
            gollash
            <Link to="student"> got to student </Link>
        </div>
    )
}


const Contact = () => {
    return (
        <div>Contact</div>
    )
}






const About = ({ children }) => {
    return (
        <div className="about">
            {children}
        </div>
    )
}






const App = () => {
    const [user, setUser] = useState({});


    return (
        <BrowserRouter>
            <div className="app" style={{
                color: 'white',
                background: "#333",
                width: "100%",
                height: "100vh"
            }}>

                <Routes>
                    <Route path="/" element={<div>home</div>} />

                    <Route path="/about" element={<div>about</div>}>
                        <Route path="expironce" element={<h1>experince</h1>} />
                        <Route path="posts" element={<h1>posts</h1>} />

                    </Route>

                </Routes>

            </div>
        </BrowserRouter>
    )
}





export default App
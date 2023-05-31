import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./pages/home/home.jsx";
import './app.css'







const app = () => {


    return (
        <div className="App">
            <div className="app-container">
                <Sidebar />
                <Home />
            </div>

        </div >
    )
}

export default app;







// 01208475109
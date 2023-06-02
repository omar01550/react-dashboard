import React, { useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./pages/home/home.jsx";
import './app.css'
import { BrowserRouter, Routes, useSearchParams, Route } from "react-router-dom";
import Courses from "./components/courses/courses.jsx";
import { useFormik, Field } from 'formik';

import AddNew from "./pages/addNew/addNew.jsx";
import { logPlugin } from "@babel/preset-env/lib/debug.js";
import NewCourseForm from './components/newCoursForm/newCourse.jsx';



const app = () => {

    const [sideBarVisibilty, setSideBarVisibility] = useState(true);



    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-container">
                    <Sidebar sideBarVisibilty={sideBarVisibilty} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add-new" element={<AddNew />} />


                    </Routes>




                </div>



            </div >

        </BrowserRouter >


    )
}

export default app;







// 01208475109
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./pages/home/home.jsx";
import './app.css'







const app = () => {


    const initCourses = [

        { course: 'Math', students: 130 },
        { course: 'Science', students: 245 },
        { course: 'English', students: 240 },
        { course: 'History', students: 145 },
        { course: 'Art', students: 104 },

    ];


    const initTeachers = [{
        name: "adel",
        age: 35,
        id: 20,
        courses: ["arabic", "english"]

    },
    {
        name: "ahmed",
        age: 35,
        id: 20,
        courses: ["arabic", "english"]

    },
    {
        name: "ali",
        age: 35,
        id: 20,
        courses: ["arabic", "english"]

    },

    ];
    const initStudents = [];

    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState(initTeachers);
    const [courses, setCourses] = useState(initCourses);
    const [rooms, setRooms] = useState([]);
    const [sideBarVisibilty, setSideBarVisibility] = useState(true);




    return (
        <div className="App">
            <div className="app-container">
                <Sidebar sideBarVisibilty={sideBarVisibilty} />
                <Home teachers={teachers} courses={courses} />
            </div>

        </div >
    )
}

export default app;







// 01208475109
import React, { useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./pages/home/home.jsx";
import './app.css'
import { BrowserRouter, Routes, useSearchParams, Route } from "react-router-dom";
import { useFormik, Field } from 'formik';
import AddNew from "./pages/addNew/addNew.jsx";
import { logPlugin } from "@babel/preset-env/lib/debug.js";
// import NewCourseForm from './components/newCoursForm/newCourse.jsx';
import Students from "./components/students/students.jsx";
import Courses from "./components/courses/courses.jsx";
import Teachers from "./components/teachers/teachers.jsx";


// forms
import NewStudentForm from './components/newStudentForm/new.jsx';
import NewCourseForm from './components/newCoursForm/newCourse.jsx';
import AddTeacherForm from "./components/newTeacherForm/teacherForm.jsx";
import AddNewRoom from "./components/newRoomForm/roomForm.jsx";
// end forms 
import { useSelector, useDispatch } from 'react-redux';
import Alert from "./components/alert/alert.jsx";
import { alertReducer } from "./redux/reducers.js";



const app = () => {

    const [sideBarVisibilty, setSideBarVisibility] = useState(true);

    const courses = useSelector((state) => {
        return state.Courses;
    });


    const teachers = useSelector((state) => {
        return state.Teachers;
    })

    const students = useSelector((state) => {
        return state.Students;
    })

    const rooms = useSelector((state) => {
        return state.Rooms;
    })

    useEffect(() => {
        console.log(AlertState);
    })

    const AlertState = useSelector((state) => { return state.alertReducer })


    return (
        <BrowserRouter>
            <div className="App">
                <Alert
                    message={AlertState.message}
                    type={AlertState.type}
                    isVisible={AlertState.visible}



                />

                <div className="app-container">
                    <Sidebar sideBarVisibilty={sideBarVisibilty} />
                    <Routes>
                        <Route path="/" element={<Home />} >
                            <Route path="" element={< Students data={students} />} />
                            <Route path="courses" element={<Courses data={courses} />} />
                            <Route path="teachers" element={<Teachers data={teachers} />} />


                        </Route>
                        <Route path="/add-new" element={<AddNew />} >
                            <Route path="" element={<NewCourseForm />} />
                            <Route path="student" element={<NewStudentForm />} />
                            <Route path="teacher" element={<AddTeacherForm />} />
                            <Route path="room" element={<AddNewRoom />} />
                        </Route>



                    </Routes>




                </div>



            </div >

        </BrowserRouter >


    )
}

export default app;







// 01208475109
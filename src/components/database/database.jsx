import React from 'react'
import './database.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavLink, Routes, Route } from 'react-router-dom';
import Container from '../container/container.jsx';
import StudentCard from '../student/student.jsx';
import Teacher from '../teacherCard/teacher.jsx';
import Teachers from '../teachers/teachers.jsx';
import Courses from '../courses/courses.jsx';
import Students from '../students/students.jsx';
import { useSelector, useDispatch } from "react-redux/es/exports.js";

const Database = () => {

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

    return (
        <div className="data-base">
            <div className="section-nav">
                <h3>database</h3>
                <ul>
                    <li >

                        <NavLink to="">Students</NavLink>

                    </li>

                    <li>

                        <NavLink to="/courses">courses</NavLink>
                    </li>


                    <li>
                        <NavLink to="teachers">Teachers</NavLink>
                    </li>





                </ul>
            </div>






            <Outlet />

        </div>
    )
}

export default Database;
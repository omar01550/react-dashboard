import React, { useState } from 'react';
import './teacherForm.css';
import { useDispatch, useSelector } from 'react-redux';

const AddTeacherForm = () => {
    const [TeacherName, setTeacherName] = useState('');
    const [teacherEmail, setTeacherEmali] = useState('');
    const [teacherPassword, setTeacherPassword] = useState('');
    const [teacherCourse, setTeacherCourse] = useState('')
    // get all courses to select from them 
    const dispatch = useDispatch();
    const courses = useSelector((state) => {
        return state.Courses;
    });


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "add-teacher",
            payload: {
                name: TeacherName,
                email: teacherEmail,
                teacherPassword: teacherPassword,
                teacherCourse: teacherCourse
            }

        })


        // alert 
        dispatch({
            type: "show-alert",
            payload: {
                message: "teacher added", type: "success"
            }
        })

        setTimeout(() => {
            dispatch({
                type: "hidden-alert",
                payload: {
                    message: "teacher added", type: "success"
                }
            })
        }, 2000);


    }

    return (
        <form className="add-course-form" onSubmit={handleSubmit}>
            <h2>Add a New Teacher</h2>

            <div className="form-field">
                <label htmlFor="TeacherName">Teacher Name:</label>
                <input
                    type="text"
                    id="courseName"
                    value={TeacherName}
                    onChange={e => setTeacherName(e.target.value)}
                    placeholder='add teacher name'
                    required

                />
            </div>

            <div className="form-field">
                <label htmlFor="TeacherEmail">teacher Email:</label>
                <input
                    type="email"
                    id="TeacherEmail"
                    value={teacherEmail}
                    placeholder='teacher email'
                    onChange={e => setTeacherEmali(e.target.value)}

                    required
                    min="1"
                    max="10"
                />
            </div>


            <div className="form-field">
                <label htmlFor="teacher-password">Teacher Password:</label>
                <input
                    type="password"
                    id="teacher-password"
                    value={teacherPassword}
                    onChange={e => setTeacherPassword(e.target.value)}
                    required
                    min="1"
                    max="10"
                />
            </div>


            <div className="form-field">
                <label htmlFor="teacher-course">Teacher courses:</label>
                <select value={teacherCourse} name="teacher-course" id="teacher-course" onChange={(e) => {
                    setTeacherCourse(e.target.value)
                }}>
                    {
                        courses.map(course => <option value={course.courseName} >{course.courseName}</option>)
                    }
                </select>
            </div>

            <button type="submit" >Add Course</button>
        </form>
    );
};

export default AddTeacherForm;
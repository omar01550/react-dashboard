import React, { useState } from 'react';
import './newCourse.css';
import { useDispatch, useSelector } from 'react-redux';

const AddCourseForm = () => {
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState("");
    const [courseInstructor, setCourseInstructor] = useState("")
    const [courseLevel, setCourseLevel] = useState("");

    const dispatch = useDispatch();
    const teachers = useSelector((state) => {
        return state.Teachers;
    })

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: "add-course",
            payload: {
                courseName: courseName,
                courseDescription: courseDescription,
                courseInstructor: courseInstructor,
                courseLevel: courseLevel,
                courseId: Math.floor(Math.random() * 100000),
                "courseStudents": Math.floor(Math.random() * 10000)


            }
        })

        // alert
        dispatch({
            type: "show-alert",
            payload: {
                message: "course added", type: "success"
            }
        })

        setTimeout(() => {
            dispatch({
                type: "hidden-alert",
                payload: {
                    message: "course added", type: "success"
                }
            })
        }, 2000);


    };



    return (
        <form className="add-course-form" onSubmit={handleSubmit}>
            <h2>Add a new course</h2>


            <div className="form-field">
                <label htmlFor="coursetitle">course title:</label>

                <input type="text" value={courseName} onChange={(e) => { setCourseName(e.target.value) }} />




            </div>


            <div className="form-field">
                <label htmlFor="courinstructor">course Instructor:</label>

                {/* <input type="text" value={courseInstructor} onChange={(e) => { setCourseInstructor(e.target.value) }} /> */}
                <select name="course-instructor" id="course-instructor" value="" onChange={(e) => { setCourseInstructor(e.target.value) }}>
                    {
                        teachers.map(ele => {
                            return (
                                <option value={ele.name}>{ele.name}</option>
                            )
                        })
                    }
                </select>




            </div>




            <div className="form-field">
                <label htmlFor="courseSections">Course Description:</label>
                <textarea name="" id="" cols="10" rows="10" onChange={(e) => setCourseDescription(e.target.value)} value={courseDescription} style={{
                    padding: "10px"

                }}>




                </textarea>
            </div>


            <div className="form-field">
                <label htmlFor="courselecvel">Course Level:</label>
                <select name="course-level" id="courselevel" value={courseLevel} onChange={(e) => { setCourseLevel(e.target.value) }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>


            <button type="submit">Add Course</button>
        </form>
    );
};

export default AddCourseForm;
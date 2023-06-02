import React from 'react';
import './addNew.css';
import AddNweItem from '../../components/addNewItem/add.jsx';
import { Route, Routes } from 'react-router-dom';
import NewStudentForm from '../../components/newStudentForm/new.jsx';
import NewCourseForm from '../../components/newCoursForm/newCourse.jsx';

const AddNew = () => {
    return (
        <main className="add-new">
            <h1>ADD NEW</h1>
            <div className="cards">
                <AddNweItem title="new teacher" route="teacher" />
                <AddNweItem title="new student" route="student" />
                <AddNweItem title="new course" route="course" />
                <AddNweItem title="new room" route="room" />
            </div>

            <div className="add-new-forms">
                <NewCourseForm />
            </div>
        </main>
    );
};

export default AddNew;
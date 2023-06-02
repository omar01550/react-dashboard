import React, { useState } from 'react';
import './newCourse.css';

const AddCourseForm = () => {
    const [courseName, setCourseName] = useState('');
    const [courseSections, setCourseSections] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted:', { courseName, courseSections });
    };

    const handleAddCourse = () => {
        console.log('Course added:', { courseName, courseSections });
        setCourseName('');
        setCourseSections('');
    };

    return (
        <form className="add-course-form" onSubmit={handleSubmit}>
            <h2>Add a new course</h2>

            <div className="form-field">
                <label htmlFor="courseName">Course Name:</label>
                <input
                    type="text"
                    id="courseName"
                    value={courseName}
                    onChange={e => setCourseName(e.target.value)}
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="courseSections">Password:</label>
                <input
                    type="password"
                    id="courseSections"
                    value={courseSections}
                    onChange={e => setCourseSections(e.target.value)}
                    required
                    min="1"
                    max="10"
                />
            </div>


            <div className="form-field">
                <label htmlFor="courseSections">Course Sections:</label>
                <input
                    type="number"
                    id="courseSections"
                    value={courseSections}
                    onChange={e => setCourseSections(e.target.value)}
                    required
                    min="1"
                    max="10"
                />
            </div>

            <button type="submit" onClick={handleAddCourse}>Add Course</button>
        </form>
    );
};

export default AddCourseForm;
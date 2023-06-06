import React from 'react';
import './courseCard.css';

const CourseCard = ({ courseId, name, progress, imageUrl, courseDescription, courseInstructor, courseLevel }) => {
    return (
        <div className="course-card" id={courseId}>
            <div className="course-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="course-info">
                <h2>{name}</h2>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <p>{progress}% completed by all students</p>
                <button className="btn">Go to course</button>
            </div>
        </div>
    );
};

export default CourseCard;
import React from 'react';
import './courseCard.css';

const CourseCard = ({ title, progress, imageUrl }) => {
    return (
        <div className="course-card">
            <div className="course-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="course-info">
                <h2>{title}</h2>
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
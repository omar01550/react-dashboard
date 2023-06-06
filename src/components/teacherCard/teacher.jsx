import React from 'react';
import './teacher.css';

const TeacherCard = ({ name, email, teacherCourse, imageUrl }) => {
    return (
        <div className="teacher-card">
            <div className="teacher-info">
                <div className="teacher-avatar">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="teacher-details">
                    <h2>{name}</h2>
                    <p>Email : {email} </p>
                    <p>subject: {teacherCourse} </p>
                </div>
            </div>
            <div className="chat-icon">
                <i className='fa fa-message'></i>
            </div>
        </div>
    );
};

export default TeacherCard;
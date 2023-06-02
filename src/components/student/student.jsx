import React from 'react';
import './student.css';

const StudentCard = ({ name, semester, age, rate, image }) => {
    return (
        <div className="student-card">
            <div className="student-avatar">
                <img src={image} alt={name} />
            </div>
            <div className="student-details">
                <h2>{name}</h2>
                <p>Semester: {semester}</p>
                <p>Age: {age}</p>
                <div className="student-rating">
                    <span>{rate}</span>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <i
                                key={index}
                                className={`${index < Math.round(rate) ? 'fas' : 'far'
                                    } fa-star`}
                            ></i>
                        ))}
                    </div>
                </div>
                <div className="message-icon">
                    <i className='fa fa-message'></i>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
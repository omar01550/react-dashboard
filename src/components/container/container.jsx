import React from 'react';
import StudentCard from '../student/student.jsx';
import './container.css';



const Container = ({ data, Component }) => {
    return (
        <div className="container">
            {
                data.length != 0
                    ? data.map(ele =>
                        <Component image="https://avatars.githubusercontent.com/u/107444038?v=4" age="20" name="omar" />
                    ) : 'no data'
            }
        </div>
    )
}

export default Container
import React from 'react';
import './teachers.css';
import TeacherCard from '../teacherCard/teacher.jsx';

const Teachers = ({ data }) => {
    return (
        <div className='teachers'>
            {data.map(ele => <TeacherCard
                name={ele.name}
                email={ele.email}
                teacherCourse={ele.teacherCourse}
                imageUrl="https://yt3.ggpht.com/yti/AHyvSCDKsLpDInsCmfMd9hnaJ8Z5558IIa9pjPN_KgfhDg=s88-c-k-c0x00ffffff-no-rj-mo"
            />)}
        </div>
    )
}

export default Teachers
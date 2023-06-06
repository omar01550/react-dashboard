import React from 'react';
import './students.css';
import StudentCard from '../student/student.jsx';
import { useSelector } from 'react-redux';

const Students = () => {
    const studentsData = useSelector(state => { return state.Students })
    return (
        <div className='teach   ers' style={{
            paddingTop: "30px",
            paddingBottom: "30px"

        }}>

            {studentsData.map(ele => <StudentCard
                name={ele.studentName}
                email={ele.studentEmail}
                level={ele.level}
                image="https://yt3.ggpht.com/yti/AHyvSCDKsLpDInsCmfMd9hnaJ8Z5558IIa9pjPN_KgfhDg=s88-c-k-c0x00ffffff-no-rj-mo"
            />)}
        </div>


    )
}

export default Students;
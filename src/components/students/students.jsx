import React from 'react';
import './students.css';
import StudentCard from '../student/student.jsx';

const Students = ({ data }) => {
    return (
        <div className='teach   ers' style={{
            paddingTop: "30px",
            paddingBottom: "30px"

        }}>

            {data.map(ele => <StudentCard
                name="omar"
                smester="iqwi"
                image="https://yt3.ggpht.com/yti/AHyvSCDKsLpDInsCmfMd9hnaJ8Z5558IIa9pjPN_KgfhDg=s88-c-k-c0x00ffffff-no-rj-mo"
                age='20'
                rate="ooo"


            />)}
        </div>


    )
}

export default Students;
import React from 'react'
import Nav from '../../components/navbar/nav.jsx'
import CradCount from '../../components/cardCount/cardCount.jsx';
import Database from '../../components/database/database.jsx';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Pie, PieChart, Cell } from 'recharts';
import './home.css';
import Table from '../../components/table/table.jsx';
import Parent from '../../components/parent/parent.jsx';
import StudentCard from '../../components/student/student.jsx';
import { useSelector, useDispatch } from "react-redux/es/exports.js";




const Home = () => {
    const circleData = [
        { name: 'Activated', value: 75 },
        { name: 'Not Activated', value: 25 },
    ];
    const COLORS = ['rgb(136, 132, 216)', '#CCCCCC'];

    const courses = useSelector((state) => {
        return state.Courses;
    })


    const teachers = useSelector((state) => {
        return state.Teachers;
    })

    const students = useSelector((state) => {
        return state.Students;
    })

    const rooms = useSelector((state) => {
        return state.Rooms;
    })





    console.log(teachers)
    return (
        <div className='home' style={{

        }}>

            <Nav />

            <div className="cards">
                <CradCount icon="fa fa-chalkboard-teacher" color="color" title="teachers" count={teachers.length} />
                <CradCount icon="fa fa-users" color="color" title="students" count={students.length} />
                <CradCount icon="fa fa-book" color="color" title="courses" count={courses.length} />
                <CradCount icon="fa fa-hotel" color="color" title="rooms" count={rooms.length} />
            </div>

            <div className="carts">

                <div className="chart">
                    <BarChart width={350} height={300} data={courses}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="students" fill="#8884d8" />
                    </BarChart>


                </div>


                <div className="chart">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={circleData}
                            dataKey="value"
                            cx={200}
                            cy={200}
                            innerRadius={80}
                            outerRadius={120}
                            startAngle={90}
                            endAngle={-270}
                            fill="#8884d8"
                            paddingAngle={5}
                            isAnimationActive={true}
                            textAnchor='omar'
                        >
                            {circleData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>

                    {/*start table students*/}
                    {/*end table students*/}



                </div>
            </div>

            <Database />



        </div>
    )
}

export default Home